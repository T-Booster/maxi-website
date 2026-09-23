import { NextResponse } from "next/server";

// Clean server-side store redirect for the Instagram bio:
// bio -> funfit.ai/go -> App Store or Google Play, by device.
// Kept as a 302 (temporary) so the destination can change later.

const APP_STORE_URL =
  "https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.influogen.tboost.ai";

// Android first: Android user agents also contain "Linux", and Chrome on
// Android contains "Safari", so order matters. Everything that is not
// Android falls through to the App Store, which keeps desktop and any
// unrecognised device on the iOS listing as before.
function storeFor(userAgent: string): string {
  return /Android/i.test(userAgent) ? PLAY_STORE_URL : APP_STORE_URL;
}

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "";
  // Vary so a cached Android redirect is never replayed to an iPhone.
  return NextResponse.redirect(storeFor(userAgent), {
    status: 302,
    headers: { Vary: "User-Agent", "Cache-Control": "no-store" },
  });
}
