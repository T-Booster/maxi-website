"use client";

import { useState } from "react";

// App Store link that survives in-app browsers (Instagram, TikTok, FB).
//
// Real browsers follow the plain href straight to the store. In-app browsers
// block that navigation, so on click we cycle URL-scheme escapes instead:
// itms-appss/itms-apps jump directly to the App Store app, and googlechromes
// reopens /get in Chrome (whose top script redirects to the store). If every
// scheme is blocked, we coach the user to "Open in external browser" — that
// menu item reloads the page in Safari where the plain link works again.

export const STORE_URL =
  "https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107";

const SCHEMES = [
  "itms-appss://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
  "itms-apps://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
];

function isInApp(): boolean {
  return /Instagram|FBAN|FBAV|FB_IAB|musical_ly|Bytedance|TikTok/i.test(
    navigator.userAgent
  );
}

export default function StoreLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [coach, setCoach] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (!isInApp()) return; // real browser: follow the href to the store

    e.preventDefault();
    // Chrome reopens /get, whose top script redirects to the store.
    const schemes = [...SCHEMES, "googlechromes://" + location.host + "/get"];
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
      <a href={STORE_URL} onClick={handleClick} className={className}>
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
