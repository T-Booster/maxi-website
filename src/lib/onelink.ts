// AppsFlyer OneLink tracking links (template Xaz2 on funfit.onelink.me).
//
// Every install that arrives through one of these links is credited in
// AppsFlyer to its media source (pid) and campaign (c). OneLink picks the
// store itself: iPhone -> App Store, Android -> Google Play, where the Play
// install referrer carries pid and c into the app.
//
// The short links below were made in the AppsFlyer dashboard; creator links
// use the long form so a new creator needs no dashboard work.

export const ONELINK_BASE = "https://funfit.onelink.me/Xaz2";

export const ONELINKS = {
  ig: `${ONELINK_BASE}/ig`, // pid instagram_bio, c bio
  tt: `${ONELINK_BASE}/tt`, // pid tiktok_bio, c bio
  web: `${ONELINK_BASE}/web`, // pid website, c site
} as const;

export type OneLinkSource = keyof typeof ONELINKS;

// In-app browsers name their app in the user agent.
export const INSTAGRAM_UA = /Instagram/i;
export const TIKTOK_UA = /musical_ly|Bytedance|TikTok/i;

// A creator handle becomes the campaign under media source "creators", the
// same shape as the creator links made in the dashboard. Anything that is not
// a plain handle is ignored rather than passed through to AppsFlyer.
export const CREATOR_HANDLE = /^[a-z0-9._-]{1,40}$/i;

export function creatorLink(handle: string): string {
  return `${ONELINK_BASE}?af_xp=custom&pid=creators&c=${encodeURIComponent(
    handle.toLowerCase()
  )}`;
}

export function sourceFromUserAgent(userAgent: string): OneLinkSource {
  if (INSTAGRAM_UA.test(userAgent)) return "ig";
  if (TIKTOK_UA.test(userAgent)) return "tt";
  return "web";
}

// ?c=<handle> wins, then an explicit ?s=ig|tt|web, then the in-app browser
// the visitor is in; everything else counts as the website.
export function oneLinkFor({
  s,
  c,
  userAgent,
}: {
  s: string | null;
  c: string | null;
  userAgent: string;
}): string {
  if (c && CREATOR_HANDLE.test(c)) return creatorLink(c);
  if (s && Object.hasOwn(ONELINKS, s)) return ONELINKS[s as OneLinkSource];
  return ONELINKS[sourceFromUserAgent(userAgent)];
}
