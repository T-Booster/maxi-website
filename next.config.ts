import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // iOS fetches this exact path to verify the app's associated domain.
      // It must answer as application/json with no redirect.
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/aasa",
      },
      // Android App Links verification: same no-redirect, JSON-only rule.
      {
        source: "/.well-known/assetlinks.json",
        destination: "/api/assetlinks",
      },
    ];
  },
};

export default nextConfig;
