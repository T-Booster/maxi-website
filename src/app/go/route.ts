import { NextResponse } from "next/server";
import { oneLinkFor } from "@/lib/onelink";

// Clean server-side store redirect for bios and posts:
// funfit.ai/go -> AppsFlyer OneLink -> App Store or Google Play, by device.
// Going through the OneLink is what credits the install to its source:
//   funfit.ai/go            -> Instagram / TikTok when opened in their app,
//                              otherwise "website"
//   funfit.ai/go?s=ig|tt|web -> that source explicitly
//   funfit.ai/go?c=<handle> -> creator link (media source "creators")
// Kept as a 302 (temporary) so the destination can change later.

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = oneLinkFor({
    s: searchParams.get("s"),
    c: searchParams.get("c"),
    userAgent: request.headers.get("user-agent") ?? "",
  });
  // Vary so a cached Instagram redirect is never replayed to another visitor.
  return NextResponse.redirect(target, {
    status: 302,
    headers: { Vary: "User-Agent", "Cache-Control": "no-store" },
  });
}
