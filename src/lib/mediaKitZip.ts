import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import {
  APP_LINK,
  CONTACT_EMAIL,
  PERMISSION,
  about,
  brandRules,
  colors,
  contentRules,
  logoRules,
  logos,
  nameRules,
  screens,
} from "./mediaKit";

// Builds the media kit ZIP from the files in /public/media. Server only: it runs at
// build time, from the static /media/funfit-media-kit.zip route and from the /media
// page (for the size on the button).
//
// The archive is written by hand in "stored" mode (no compression). Everything in it
// but the README is a PNG, which is compressed already, so deflate would save nothing
// and this needs no dependency.

const ROOT = "funfit-media-kit";

function readme(): string {
  const lines = [
    "FunFit media kit",
    "================",
    "",
    "The latest version of this kit and its rules: https://www.funfit.ai/media",
    "",
    "What's inside",
    "-------------",
    ...logos.map((l) => `logo/${l.name}  (${l.width} x ${l.height})  ${l.title}`),
    ...screens.map((s) => `screens/${s.name}  (${s.width} x ${s.height})  ${s.title}`),
    "",
    "Using the icon",
    "--------------",
    ...logoRules.map((r) => `- ${r}`),
    ...brandRules.map((r) => `- ${r}`),
    "",
    "Using the screens and talking about FunFit",
    "------------------------------------------",
    ...contentRules.map((r) => `- ${r.title}. ${r.body}`),
    "",
    "Our name",
    "--------",
    `Write ${nameRules.write}: one word, with a capital F twice.`,
    `Not: ${nameRules.not.join(", ")}.`,
    "",
    "Colors",
    "------",
    ...colors.map((c) => `${c.name.padEnd(13)} ${c.hex}  RGB ${c.rgb}`),
    "",
    "About FunFit",
    "------------",
    "Short:",
    about.short,
    "",
    "Long:",
    about.long,
    "",
    "Link to the app",
    "---------------",
    `${APP_LINK}  (opens the App Store or Google Play, whichever fits the phone)`,
    "",
    "Contact",
    "-------",
    CONTACT_EMAIL,
    "",
    "Permission",
    "----------",
    PERMISSION,
    "",
  ];
  return lines.join("\r\n");
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// A fixed timestamp (2026-11-01 12:00) keeps the archive byte-identical between builds.
const DOS_TIME = (12 << 11) | (0 << 5) | 0;
const DOS_DATE = ((2026 - 1980) << 9) | (11 << 5) | 1;

const VERSION = 10; // 1.0: all a stored file needs
const FLAGS = 0x0800; // names are UTF-8

function zip(entries: { name: string; data: Uint8Array }[]): Uint8Array<ArrayBuffer> {
  const encoder = new TextEncoder();
  const prepared = entries.map((e) => ({
    nameBytes: encoder.encode(e.name),
    data: e.data,
    crc: crc32(e.data),
  }));

  const localSize = prepared.reduce((n, e) => n + 30 + e.nameBytes.length + e.data.length, 0);
  const centralSize = prepared.reduce((n, e) => n + 46 + e.nameBytes.length, 0);
  const out = new Uint8Array(localSize + centralSize + 22);
  const view = new DataView(out.buffer);

  let offset = 0;
  const offsets: number[] = [];
  for (const e of prepared) {
    offsets.push(offset);
    view.setUint32(offset, 0x04034b50, true); // local file header
    view.setUint16(offset + 4, VERSION, true); // version needed
    view.setUint16(offset + 6, FLAGS, true);
    view.setUint16(offset + 8, 0, true); // method: stored
    view.setUint16(offset + 10, DOS_TIME, true);
    view.setUint16(offset + 12, DOS_DATE, true);
    view.setUint32(offset + 14, e.crc, true);
    view.setUint32(offset + 18, e.data.length, true);
    view.setUint32(offset + 22, e.data.length, true);
    view.setUint16(offset + 26, e.nameBytes.length, true);
    view.setUint16(offset + 28, 0, true); // extra length
    out.set(e.nameBytes, offset + 30);
    out.set(e.data, offset + 30 + e.nameBytes.length);
    offset += 30 + e.nameBytes.length + e.data.length;
  }

  const centralStart = offset;
  prepared.forEach((e, i) => {
    view.setUint32(offset, 0x02014b50, true); // central directory header
    view.setUint16(offset + 4, VERSION, true); // version made by
    view.setUint16(offset + 6, VERSION, true); // version needed
    view.setUint16(offset + 8, FLAGS, true);
    view.setUint16(offset + 10, 0, true); // method: stored
    view.setUint16(offset + 12, DOS_TIME, true);
    view.setUint16(offset + 14, DOS_DATE, true);
    view.setUint32(offset + 16, e.crc, true);
    view.setUint32(offset + 20, e.data.length, true);
    view.setUint32(offset + 24, e.data.length, true);
    view.setUint16(offset + 28, e.nameBytes.length, true);
    // extra, comment, disk number, internal attrs, external attrs: all zero
    view.setUint32(offset + 42, offsets[i], true);
    out.set(e.nameBytes, offset + 46);
    offset += 46 + e.nameBytes.length;
  });

  view.setUint32(offset, 0x06054b50, true); // end of central directory
  view.setUint16(offset + 8, prepared.length, true);
  view.setUint16(offset + 10, prepared.length, true);
  view.setUint32(offset + 12, offset - centralStart, true);
  view.setUint32(offset + 16, centralStart, true);
  return out;
}

// Every kit file lives under /public/media. Resolving from that folder, rather than from
// /public, keeps Next's file tracing to the kit instead of the whole public directory.
const MEDIA_DIR = path.join(process.cwd(), "public", "media");

function kitPath(urlPath: string): string {
  return path.join(MEDIA_DIR, urlPath.replace(/^\/media\//, ""));
}

let cached: Uint8Array<ArrayBuffer> | undefined;

export function buildKitZip(): Uint8Array<ArrayBuffer> {
  cached ??= zip([
    { name: `${ROOT}/README.txt`, data: new TextEncoder().encode(readme()) },
    ...logos.map((l) => ({ name: `${ROOT}/logo/${l.name}`, data: readFileSync(kitPath(l.file)) })),
    ...screens.map((s) => ({ name: `${ROOT}/screens/${s.name}`, data: readFileSync(kitPath(s.file)) })),
  ]);
  return cached;
}

/** Size of a kit file, for the label beside its download. */
export function kitFileSize(urlPath: string): number {
  return statSync(kitPath(urlPath)).size;
}

export function formatSize(bytes: number): string {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}
