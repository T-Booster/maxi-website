// /get — App Store escape hatch for in-app browsers (Instagram, TikTok, FB).
//
// Instagram rejects direct App Store links in bios and its in-app browser
// blocks both the redirect and (mostly) the itms-appss:// tap escape. The
// bio should point at THIS page instead:
//
//   real browser  -> top script fires location.replace() straight to the store
//   in-app browser-> button cycles store URL schemes; if all are blocked,
//                    coach the user to "Open in external browser", which
//                    reloads this page in Safari and the top script takes over.
//
// Served as raw HTML (no React/JS bundle) so the redirect runs the instant
// the document parses. The googlechromes:// scheme rebuilds this page's own
// URL from location.host, so it works on any domain / preview deploy.

export const dynamic = "force-static";

const STORE_URL =
  "https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.influogen.tboost.ai";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#09090f">
<meta name="apple-itunes-app" content="app-id=6754610107">
<title>Download FunFit</title>
<link rel="icon" href="/funfitlogo.png">
<script>
  var ANDROID = /Android/i.test(navigator.userAgent);
  var STORE = ANDROID ? "${PLAY_URL}" : "${STORE_URL}";
  var SCHEMES = ANDROID
    ? [
        // Open the Play app directly, then fall back to the web listing.
        "market://details?id=com.influogen.tboost.ai",
        "${PLAY_URL}"
      ]
    : [
        "itms-appss://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
        "itms-apps://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107",
        // Reopen this same page in Chrome; its top script then redirects to the store.
        "googlechromes://" + location.host + location.pathname
      ];
  var inApp = /Instagram|FBAN|FBAV|FB_IAB|musical_ly|Bytedance|TikTok/i.test(navigator.userAgent);
  if (!inApp) location.replace(STORE);   // real browser, straight to the store
</script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #09090f;
    color: #fff;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    text-align: center;
    padding: 24px;
  }
  .wrap { max-width: 360px; width: 100%; }
  .logo { width: 72px; height: 72px; border-radius: 18px; margin-bottom: 20px; }
  h1 { font-size: 24px; font-weight: 800; margin-bottom: 8px; }
  p.sub { color: #8a8a9a; font-size: 15px; line-height: 1.5; margin-bottom: 28px; }
  #go {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 16px 32px;
    background: #e8601c;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    font-family: inherit;
    border: 0;
    border-radius: 999px;
    cursor: pointer;
  }
  #go:active { background: #c94e14; }
  #coach {
    display: none;
    margin-top: 20px;
    padding: 16px;
    background: #12121a;
    border: 1px solid #1e1e2e;
    border-radius: 16px;
    color: #f0854a;
    font-size: 14px;
    line-height: 1.6;
  }
</style>
</head>
<body>
<div class="wrap">
  <img class="logo" src="/funfitlogo.png" alt="FunFit">
  <h1>FunFit</h1>
  <p class="sub">AI coaches that train you, not just track you.</p>
  <button id="go">
    <svg id="applemark" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
    <svg id="playmark" style="display:none" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
    <span id="golabel">Download on the App Store</span>
  </button>
  <div id="coach">
    Instagram blocks App Store links. Tap <strong>&#183;&#183;&#183;</strong> (top right) &#8594; <strong>&#8220;Open in external browser&#8221;</strong>
  </div>
</div>
<script>
  if (ANDROID) {
    document.getElementById("golabel").textContent = "Get it on Google Play";
    document.getElementById("applemark").style.display = "none";
    document.getElementById("playmark").style.display = "";
  }
  var i = 0;
  function attempt() {
    if (document.hidden) return;                    // one worked
    if (i >= SCHEMES.length) {                      // all failed, coach the escape
      document.getElementById("coach").style.display = "block";
      return;
    }
    location.href = SCHEMES[i++];
    setTimeout(attempt, 450);
  }
  document.getElementById("go").onclick = function () {
    inApp ? attempt() : (location.href = STORE);
  };
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
