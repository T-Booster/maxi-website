// Android Digital Asset Links. Served through a route handler (and a rewrite in
// next.config.ts) for the same reason as the AASA: Android's autoVerify fetches
// /.well-known/assetlinks.json at install/update time and needs a 200
// application/json with NO redirect. Only www.funfit.ai verifies (the apex 308s
// to www, and the verifier does not follow redirects).
export const dynamic = "force-static";

// Play App Signing keys: Play Console > Protected with Play > App signing.
// Play re-signs every install, so verification needs these, not the upload
// key. Both: the current (upgraded) key and the previous one, which Play can
// still serve to older Android versions.
const PLAY_APP_SIGNING_SHA256: string[] = [
  "E7:AD:AB:7D:C1:AA:6B:E5:C0:EE:6A:7D:B1:C0:B6:5F:17:36:95:99:C6:7E:18:71:17:3C:2F:36:7E:44:02:5E",
  "32:8B:1E:4F:02:AE:E6:86:BD:08:F6:04:C1:1C:E6:EC:6B:D8:5B:FE:E7:38:1C:38:34:7F:A7:73:C6:D7:BE:DC",
];
// Upload key (from the release AAB's META-INF/UPLOAD.RSA, CN=Influogen).
const UPLOAD_KEY_SHA256 =
  "C7:11:E0:94:EB:95:57:8C:3B:49:34:70:90:8E:3C:26:87:7F:3E:DD:C8:AB:24:E3:6A:A2:AA:65:CE:F4:97:F8";

const ASSET_LINKS = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.influogen.tboost.ai",
      sha256_cert_fingerprints: [...PLAY_APP_SIGNING_SHA256, UPLOAD_KEY_SHA256],
    },
  },
];

export function GET() {
  return new Response(JSON.stringify(ASSET_LINKS), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=3600",
    },
  });
}
