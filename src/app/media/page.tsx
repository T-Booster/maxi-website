import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight, Check, Download, Mail, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import CopyButton from "./CopyButton";
import {
  APP_LINK,
  APP_LINK_LABEL,
  CONTACT_EMAIL,
  GRADIENT_CSS,
  KIT_ZIP_NAME,
  KIT_ZIP_PATH,
  PERMISSION,
  about,
  brandRules,
  colors,
  contentRules,
  facts,
  logos,
  nameRules,
  screens,
  type KitImage,
} from "@/lib/mediaKit";
import { buildKitZip, formatSize, kitFileSize } from "@/lib/mediaKitZip";

// The brand and media kit for creators, press and partners. All content comes from
// src/lib/mediaKit.ts; the same data builds the ZIP, so change things there.

const description =
  "The FunFit app icon, our colors and type, and screens from the app, with the few rules for using them. For creators, press and partners.";

export const metadata: Metadata = {
  title: "Brand and media kit — FunFit",
  description,
  alternates: { canonical: "/media" },
  openGraph: {
    title: "FunFit brand and media kit",
    description,
    type: "website",
    siteName: "FunFit",
    url: "/media",
    locale: "en_US",
    images: [{ url: logos[0].file, width: 1024, height: 1024, alt: "The FunFit app icon" }],
  },
  // A square icon suits the small card; the root layout's large card would crop it.
  twitter: { card: "summary", title: "FunFit brand and media kit", description },
};

// What the page shows is a 7 KB preview; the full files are only fetched when downloaded.
const ICON = "/media/preview/app-icon.webp";

const sections = [
  { id: "logo", label: "Logo" },
  { id: "rules", label: "Rules" },
  { id: "colors", label: "Colors" },
  { id: "type", label: "Type" },
  { id: "name", label: "Name" },
  { id: "about", label: "About" },
  { id: "screens", label: "Screens" },
  { id: "contact", label: "Contact" },
];

const weights = [
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "Semibold", value: 600 },
  { name: "Bold", value: 700 },
  { name: "Extrabold", value: 800 },
  { name: "Black", value: 900 },
];

const card = "rounded-2xl bg-dark-surface border border-dark-border";
const stage = "bg-[#0c0c13]"; // the darker well a logo sits in

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-10 md:mb-12">
          <div className="text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{title}</h2>
          <p className="text-dark-muted text-lg leading-relaxed">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function DownloadLink({ image }: { image: KitImage }) {
  return (
    <div>
      <a
        href={image.file}
        download={image.name}
        className="inline-flex items-center gap-2 py-2 -my-2 text-primary-light font-semibold hover:text-white transition-colors"
      >
        <Download size={16} aria-hidden="true" />
        Download PNG
        <span className="sr-only">: {image.title}</span>
      </a>
      <div className="text-xs text-dark-muted mt-1">
        {image.width} × {image.height} · {formatSize(kitFileSize(image.file))}
      </div>
    </div>
  );
}

function Badge({ ok }: { ok: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider ${
        ok ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"
      }`}
    >
      {ok ? <Check size={12} aria-hidden="true" /> : <X size={12} aria-hidden="true" />}
      {ok ? "DO" : "DON'T"}
    </span>
  );
}

// A logo rule with a live demo. The demos are decorative: the title and body say it all.
function LogoRule({
  ok,
  title,
  body,
  well = stage,
  children,
}: {
  ok: boolean;
  title: string;
  body: string;
  well?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${card} overflow-hidden`}>
      <div
        aria-hidden="true"
        className={`relative h-44 flex items-center justify-center overflow-hidden ${well}`}
      >
        {children}
      </div>
      <div className="p-5 border-t border-dark-border">
        <Badge ok={ok} />
        <div className="text-white font-bold mt-3 mb-1.5">{title}</div>
        <p className="text-dark-muted text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function Icon({ size, style }: { size: number; style?: CSSProperties }) {
  return <img src={ICON} alt="" width={size} height={size} style={style} className="block" />;
}

export default function MediaPage() {
  const kitSize = formatSize(buildKitZip().length);

  return (
    <main className="bg-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-grid-dark">
        <div className="absolute inset-0 bg-radial-glow-dark pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
                <span className="text-sm text-primary font-medium">
                  For creators, press and partners
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white mb-6">
                Brand and <span className="text-gradient">media kit</span>
              </h1>
              <p className="text-lg md:text-xl text-dark-muted max-w-xl leading-relaxed mb-9">
                Our app icon, our colors and screens from the app, ready for your video, post
                or article. Download what helps, then check the few rules below.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <a
                  href={KIT_ZIP_PATH}
                  download={KIT_ZIP_NAME}
                  className="inline-flex items-center justify-center gap-3 px-5 sm:px-7 py-4 bg-white text-[#09090f] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm sm:whitespace-nowrap"
                >
                  <Download size={18} aria-hidden="true" />
                  Download the kit (ZIP, {kitSize})
                </a>
                <a
                  href="#screens"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-4 border border-dark-border text-white font-semibold rounded-full hover:bg-white/5 transition-colors text-sm sm:whitespace-nowrap"
                >
                  See the app screens
                </a>
              </div>
              <p className="text-sm text-dark-muted mt-5 max-w-md leading-relaxed">
                The app icon in two sizes, {screens.length} app screens as PNG files and a README
                that repeats the rules on this page.
              </p>
            </div>

            {/* The kit at a glance */}
            <div className={`${card} p-7 md:p-8`} aria-hidden="true">
              <div className="flex items-center gap-4 pb-6 border-b border-dark-border">
                <img src={ICON} alt="" width={72} height={72} className="w-[72px] h-[72px]" />
                <div className="text-4xl font-black tracking-tight text-white">FunFit</div>
              </div>
              <div className="flex gap-2 sm:gap-3 py-6">
                {colors.map((c) => (
                  <span
                    key={c.hex}
                    className={`w-7 h-7 sm:w-9 sm:h-9 shrink-0 rounded-full ${c.outlined ? "border border-white/20" : ""}`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/[0.04] p-5">
                  <div className="text-4xl font-black text-white leading-none mb-2">Aa</div>
                  <div className="text-sm text-dark-muted">Inter</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-5">
                  <div className="text-4xl font-black text-white leading-none mb-2">
                    {screens.length}
                  </div>
                  <div className="text-sm text-dark-muted">app screens</div>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="On this page" className="flex flex-wrap gap-2.5 mt-14">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2.5 rounded-full border border-dark-border text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Logo */}
      <Section
        id="logo"
        eyebrow="Logo"
        title="Our logo is the app icon"
        intro="A white F on an orange tile. There is one version, so there is nothing to choose: pick the size you need."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {logos.map((logo, i) => (
            <div key={logo.file} className={`${card} p-6 flex flex-col`}>
              <div className={`h-44 rounded-xl ${stage} flex items-center justify-center mb-6`}>
                <img
                  src={ICON}
                  alt="The FunFit app icon: a white F on an orange tile"
                  width={i === 0 ? 112 : 72}
                  height={i === 0 ? 112 : 72}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{logo.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed mb-6 flex-1">{logo.note}</p>
              <DownloadLink image={logo} />
            </div>
          ))}

          <div className={`${card} p-6 flex flex-col`}>
            <div className={`h-44 rounded-xl ${stage} flex items-center justify-center gap-3 mb-6`}>
              <img src={ICON} alt="" width={48} height={48} loading="lazy" />
              <span className="text-3xl font-bold tracking-tight text-white">FunFit</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Icon with the name</h3>
            <p className="text-dark-muted text-sm leading-relaxed">
              There is no wordmark file. When you need the name too, type FunFit in a bold
              sans-serif beside the icon, the way our website does.
            </p>
          </div>
        </div>
      </Section>

      {/* Rules */}
      <Section
        id="rules"
        eyebrow="Rules"
        title="Using the icon"
        intro="Treat the icon as finished artwork. Change its size and nothing else."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <LogoRule
            ok
            title="Use it as it is"
            body="The whole icon, with its rounded corners and its own orange."
          >
            <Icon size={84} />
          </LogoRule>
          <LogoRule
            ok
            title="Give it room"
            body="Keep clear space on every side, at least a quarter of the icon's width."
          >
            <div className="p-4 rounded-2xl border border-dashed border-white/30">
              <Icon size={64} />
            </div>
          </LogoRule>
          <LogoRule ok title="Keep it readable" body="Show it at 32 px or larger.">
            <div className="flex items-end gap-5">
              <Icon size={64} />
              <div className="flex flex-col items-center gap-2">
                <Icon size={32} />
                <span className="text-[11px] text-dark-muted">32 px</span>
              </div>
            </div>
          </LogoRule>
          <LogoRule
            ok
            well=""
            title="Light or dark, both work"
            body="The icon carries its own tile, so it sits on any plain background."
          >
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white flex items-center justify-center">
              <Icon size={60} />
            </div>
            <div className={`absolute inset-y-0 right-0 w-1/2 ${stage} flex items-center justify-center`}>
              <Icon size={60} />
            </div>
          </LogoRule>

          <LogoRule
            ok={false}
            title="Don't recolor it"
            body="The tile is orange and the F is white, always."
          >
            <Icon size={84} style={{ filter: "hue-rotate(205deg) saturate(1.3)" }} />
          </LogoRule>
          <LogoRule
            ok={false}
            title="Don't stretch or tilt it"
            body="Resize it evenly and keep it level."
          >
            <Icon size={72} style={{ transform: "rotate(-14deg) scaleX(1.5)" }} />
          </LogoRule>
          <LogoRule
            ok={false}
            title="Don't add effects"
            body="No glows, shadows, outlines or filters."
          >
            <Icon
              size={84}
              style={{
                filter: "drop-shadow(0 0 16px #38bdf8) drop-shadow(7px 9px 0 rgba(255,255,255,0.45))",
              }}
            />
          </LogoRule>
          <LogoRule
            ok={false}
            title="Don't crop or redraw it"
            body="Show the whole icon, and use our file instead of rebuilding it."
          >
            <div className="flex items-center gap-6">
              <div className="w-11 h-[84px] overflow-hidden">
                <img src={ICON} alt="" width={84} height={84} className="block max-w-none" />
              </div>
              <div className="w-[84px] h-[84px] rounded-[22%] bg-primary flex items-center justify-center text-white text-5xl font-serif italic font-bold">
                F
              </div>
            </div>
          </LogoRule>
        </div>

        <div className={`${card} p-6 md:p-8 mt-5`}>
          <h3 className="text-xl font-bold text-white mb-4">Our name and icon</h3>
          <ul className="space-y-3">
            {brandRules.map((rule) => (
              <li key={rule} className="flex gap-3 text-white/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Colors */}
      <Section
        id="colors"
        eyebrow="Colors"
        title="Orange, on dark"
        intro="The colors of our website: three oranges, two darks and white. The copy buttons give the exact codes."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colors.map((c) => (
            <div key={c.hex} className={`${card} p-5`}>
              <div
                className={`h-24 rounded-xl mb-5 ${c.outlined ? "border border-white/15" : ""}`}
                style={{ background: c.hex }}
              />
              <h3 className="text-lg font-bold text-white mb-1">{c.name}</h3>
              <p className="text-dark-muted text-sm leading-relaxed mb-4">{c.note}</p>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5">
                <dt className="text-dark-muted">HEX</dt>
                <dd className="text-white font-medium">{c.hex}</dd>
                <dt className="text-dark-muted">RGB</dt>
                <dd className="text-white font-medium">{c.rgb}</dd>
              </dl>
              <CopyButton text={c.hex} label="Copy HEX" what={`for ${c.name}, ${c.hex}`} />
            </div>
          ))}
        </div>

        <div className={`${card} p-5 mt-5 flex flex-col md:flex-row md:items-center gap-5`}>
          <div className="h-16 md:w-72 rounded-xl flex-shrink-0" style={{ background: GRADIENT_CSS }} />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">Our gradient</h3>
            <p className="text-dark-muted text-sm leading-relaxed">
              Deep orange to orange to light orange, at 135 degrees. We use it on headline words.
            </p>
          </div>
          <div className="flex-shrink-0">
            <CopyButton text={GRADIENT_CSS} label="Copy CSS" what="for our gradient" />
          </div>
        </div>
      </Section>

      {/* Type */}
      <Section
        id="type"
        eyebrow="Type"
        title="One typeface: Inter"
        intro="Our website is set in Inter, and headlines use its heaviest weight, Black."
      >
        <div className={`${card} p-6 md:p-10`}>
          <div className="text-5xl md:text-7xl font-black tracking-tight leading-[0.98] text-white mb-8">
            Get fit. <span className="text-gradient">Level up.</span>
          </div>
          <p aria-hidden="true" className="text-white/70 text-lg break-words mb-2">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </p>
          <p aria-hidden="true" className="text-white/70 text-lg mb-8">0 1 2 3 4 5 6 7 8 9</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {weights.map((w) => (
              <div key={w.value} className="rounded-xl bg-white/[0.04] p-3 sm:p-4">
                <div aria-hidden="true" className="text-3xl text-white leading-none mb-2" style={{ fontWeight: w.value }}>
                  Aa
                </div>
                <div className="text-xs text-dark-muted">
                  {w.name} {w.value}
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://fonts.google.com/specimen/Inter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-2 -my-2 text-primary-light font-semibold hover:text-white transition-colors"
          >
            Get Inter on Google Fonts
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className="text-dark-muted text-sm mt-2">
            Inter is free and open source, under the SIL Open Font License.
          </p>
        </div>
      </Section>

      {/* Name */}
      <Section
        id="name"
        eyebrow="Name"
        title="How to write our name"
        intro="FunFit is one word, with a capital F twice."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className={`${card} p-6 md:p-8`}>
            <Badge ok />
            <div className="text-5xl md:text-6xl font-black tracking-tight text-white mt-6">
              {nameRules.write}
            </div>
          </div>
          <div className={`${card} p-6 md:p-8`}>
            <Badge ok={false} />
            <ul className="mt-6 space-y-2.5">
              {nameRules.not.map((wrong) => (
                <li key={wrong} className="text-2xl font-bold text-white/45 line-through decoration-red-400/70">
                  {wrong}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-8 space-y-3 max-w-2xl">
          <li className="flex gap-3 text-white/80">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>The app used to be called FunFit AI. It is just FunFit now.</span>
          </li>
          <li className="flex gap-3 text-white/80">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Our website is funfit.ai, in lower case.</span>
          </li>
          <li className="flex gap-3 text-white/80">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>The company behind FunFit is INFLUOGEN LLC.</span>
          </li>
        </ul>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Describe us in your words, or ours"
        intro="Two descriptions you can paste as they are. Please don't add numbers or claims that aren't on our website."
      >
        <div className="grid lg:grid-cols-2 gap-5">
          <div className={`${card} p-6 md:p-8 flex flex-col`}>
            <div className="text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">Short</div>
            <p className="text-white/85 text-lg leading-relaxed mb-6 flex-1">{about.short}</p>
            <div>
              <CopyButton text={about.short} label="Copy text" what="of the short description" />
            </div>
          </div>
          <div className={`${card} p-6 md:p-8 flex flex-col`}>
            <div className="text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">Long</div>
            <p className="text-white/85 leading-relaxed mb-6 flex-1">{about.long}</p>
            <div>
              <CopyButton text={about.long} label="Copy text" what="of the long description" />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mt-12 mb-2">Fast facts</h3>
        <dl className="divide-y divide-dark-border border-y border-dark-border">
          {facts.map((f) => (
            <div key={f.label} className="py-4 grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-6">
              <dt className="text-xs font-black tracking-[0.18em] uppercase text-dark-muted sm:pt-1">
                {f.label}
              </dt>
              <dd className="text-white/85">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Screens */}
      <Section
        id="screens"
        eyebrow="Screens"
        title="Screens from the app"
        intro="Screens from the FunFit app, as PNG files."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {screens.map((s) => (
            <div key={s.file} className="flex flex-col">
              <Phone
                src={s.preview}
                alt={`FunFit app screen: ${s.title}. ${s.note}`}
                className="w-full max-w-[230px] mx-auto"
              />
              <h3 className="text-white font-bold mt-5 mb-1">{s.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed mb-4 flex-1">{s.note}</p>
              <DownloadLink image={s} />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mt-16 mb-6">Showing and describing FunFit</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {contentRules.map((rule) => (
            <div key={rule.title} className={`${card} p-6`}>
              <Badge ok={rule.ok} />
              <div className="text-white font-bold mt-3 mb-1.5">{rule.title}</div>
              <p className="text-dark-muted text-sm leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Making something about FunFit?"
        intro="We are happy to help, and to send anything this page is missing."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className={`${card} p-6 md:p-8`}>
            <div className="text-xs font-black tracking-[0.18em] uppercase text-dark-muted mb-3">
              Link to the app
            </div>
            <a
              href={APP_LINK}
              className="text-2xl md:text-3xl font-black text-white hover:text-primary-light transition-colors"
            >
              {APP_LINK_LABEL}
            </a>
            <p className="text-dark-muted text-sm leading-relaxed mt-3 mb-5">
              It opens the App Store on iPhone and Google Play on Android. Working with us as a
              creator? Ask us for a link of your own.
            </p>
            <CopyButton text={APP_LINK} label="Copy link" what="to the app" />
          </div>
          <div className={`${card} p-6 md:p-8`}>
            <div className="text-xs font-black tracking-[0.18em] uppercase text-dark-muted mb-3">
              Email us
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl lg:text-3xl font-black text-white hover:text-primary-light transition-colors [overflow-wrap:anywhere]"
            >
              <Mail size={22} className="flex-shrink-0" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <p className="text-dark-muted text-sm leading-relaxed mt-3">
              For interviews, partnerships, other file formats, or a screen you can&apos;t find here.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <h3 className="text-xs font-black tracking-[0.18em] uppercase text-dark-muted mb-3">
            Permission
          </h3>
          <p className="text-dark-muted leading-relaxed">{PERMISSION}</p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
