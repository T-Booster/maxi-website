"use client";

import { useEffect, useState } from "react";

// Store link that survives in-app browsers (Instagram, TikTok, FB).
//
// Real browsers follow the plain href straight to the store. In-app browsers
// block that navigation, so on click we cycle URL-scheme escapes instead:
// itms-appss/itms-apps jump directly to the App Store app, and googlechromes
// reopens /get in Chrome (whose top script redirects to the store). If every
// scheme is blocked, we coach the user to "Open in external browser" — that
// menu item reloads the page in Safari where the plain link works again.
//
// `store` picks the destination: "apple" and "play" are explicit buttons,
// "auto" (default) sends Android devices to Google Play and everyone else to
// the App Store. On the Play side, market:// opens the Play app directly and
// the web listing is the fallback — Instagram's Android browser does load it.

export const STORE_URL =
  "https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107";
export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.influogen.tboost.ai";

const APPLE_SCHEMES = [
  "itms-appss://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
  "itms-apps://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
];

const MARKET_SCHEME = "market://details?id=com.influogen.tboost.ai";

function isInApp(): boolean {
  return /Instagram|FBAN|FBAV|FB_IAB|musical_ly|Bytedance|TikTok/i.test(
    navigator.userAgent
  );
}

export default function StoreLink({
  className,
  children,
  onClick,
  store = "auto",
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  store?: "apple" | "play" | "auto";
}) {
  const [coach, setCoach] = useState(false);
  const [android, setAndroid] = useState(false);

  useEffect(() => {
    if (store === "auto") setAndroid(/Android/i.test(navigator.userAgent));
  }, [store]);

  const play = store === "play" || (store === "auto" && android);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (!isInApp()) return; // real browser: follow the href to the store

    e.preventDefault();
    if (play) {
      // Try the Play app, then fall back to the web listing.
      window.location.href = MARKET_SCHEME;
      setTimeout(() => {
        if (!document.hidden) window.location.href = PLAY_URL;
      }, 450);
      return;
    }
    // Chrome reopens /get, whose top script redirects to the store.
    const schemes = [
      ...APPLE_SCHEMES,
      "googlechromes://" + location.host + "/get",
    ];
    let i = 0;
    function attempt() {
      if (document.hidden) return; // one worked
      if (i >= schemes.length) {
        // all blocked: coach the external-browser escape
        setCoach(true);
        return;
      }
      window.location.href = schemes[i++];
      setTimeout(attempt, 450);
    }
    attempt();
  }

  return (
    <>
      <a
        href={play ? PLAY_URL : STORE_URL}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      {coach && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-md px-5 py-4 rounded-2xl bg-[#12121a] border border-[#1e1e2e] text-primary-light text-sm leading-relaxed text-center shadow-2xl">
          Instagram blocks App Store links. Tap <strong>&#183;&#183;&#183;</strong>{" "}
          (top right) &#8594; <strong>&#8220;Open in external browser&#8221;</strong>
        </div>
      )}
    </>
  );
}
