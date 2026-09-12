import type { Metadata } from "next";
import { headers } from "next/headers";
import PlanClient from "./PlanClient";

const APP_ID = "6754610107";

/** Hosts this site answers on. funfit-support is the FunFit-branded name new
 *  links use; maxi-ai-support is the original and must keep working forever --
 *  links already shared, every installed build, and the privacy/terms URL
 *  submitted to Google Play all point at it. */
const KNOWN_HOSTS = [
  "www.funfit.ai",
  "funfit.ai",
  "funfit-support.vercel.app",
  "maxi-ai-support.vercel.app",
];
const FALLBACK_HOST = KNOWN_HOSTS[0];

/** Build the smart-banner argument from the host the visitor actually used, so
 *  the banner never sends them to a different domain than the one they opened.
 *  The header is attacker-controllable, so anything unrecognised falls back. */
async function currentOrigin(): Promise<string> {
  const host = (await headers()).get("host")?.toLowerCase() ?? "";
  const bare = host.split(":")[0];
  const trusted =
    KNOWN_HOSTS.includes(bare) || bare === "localhost" ? host : FALLBACK_HOST;
  return `https://${trusted}`;
}

/** Tokens are 12 url-safe base64 chars; refuse anything else rather than
 *  round-tripping arbitrary input into the page or the smart banner. */
function sanitize(raw: string): string | null {
  const t = decodeURIComponent(raw ?? "");
  return /^[A-Za-z0-9_-]{1,32}$/.test(t) ? t : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const safe = sanitize(token);
  const origin = await currentOrigin();

  return {
    title: "Shared plan · FunFit AI",
    description:
      "A training plan shared with you on FunFit AI. Open it in the app to start training.",
    referrer: "no-referrer",
    openGraph: {
      title: "A training plan on FunFit AI",
      description: "Someone shared their plan with you. Tap to add it to your app.",
      type: "website",
      siteName: "FunFit AI",
    },
    twitter: { card: "summary_large_image" },
    other: {
      // app-argument carries the token through the App Store smart banner's
      // OPEN button, so an existing install lands straight on the plan.
      "apple-itunes-app": safe
        ? `app-id=${APP_ID}, app-argument=${origin}/p/${safe}`
        : `app-id=${APP_ID}`,
      "theme-color": "#F05A1A",
    },
  };
}

export default async function SharedPlanPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return <PlanClient token={sanitize(token)} />;
}
