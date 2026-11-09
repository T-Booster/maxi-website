import { KIT_ZIP_NAME } from "@/lib/mediaKit";
import { buildKitZip } from "@/lib/mediaKitZip";

// The media kit as one download. Built once at build time from /public/media, so it
// always matches the files the /media page offers one by one.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildKitZip(), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${KIT_ZIP_NAME}"`,
    },
  });
}
