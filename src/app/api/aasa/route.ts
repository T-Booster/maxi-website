// Apple App Site Association. Served through a route handler (and a rewrite in
// next.config.ts) rather than from public/, because iOS REQUIRES this file to
// come back as application/json with no redirect, and static hosting of a
// dot-directory with no file extension is not guaranteed to do that.
export const dynamic = "force-static";

const AASA = {
  applinks: {
    details: [
      {
        appIDs: ["25WN83K4YX.com.influogen.tboost.ai"],
        components: [
          { "/": "/p/*", comment: "Shared plan - opens in the app" },
          // App Review reads the legal pages in Safari; never hand them to the app.
          { "/": "/terms", exclude: true, comment: "Keep legal pages in Safari" },
          { "/": "/privacy", exclude: true, comment: "Keep legal pages in Safari" },
        ],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(AASA), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=3600",
    },
  });
}
