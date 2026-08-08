import { NextResponse } from "next/server";

// Clean server-side App Store redirect for the Instagram bio:
// bio -> funfit.ai/go -> App Store. Kept as a 302 (temporary) so the
// destination can change later, e.g. per-device routing to Google Play.

const APP_STORE_URL =
  "https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107";

export function GET(request: Request) {
  // request is unused for now; it keeps the handler ready for
  // user-agent device detection (iOS -> App Store, Android -> Play).
  void request;
  return NextResponse.redirect(APP_STORE_URL, 302);
}
