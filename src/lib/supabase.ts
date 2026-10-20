// The FunFit app's Supabase project. The anon key is the same public key the app ships
// with; it can only call what the database grants to anon (get_shared_plan,
// join_site_waitlist), so it is safe in client code.
export const SUPABASE_URL = "https://jqvbgtmiqsgpwmosogwi.supabase.co";
export const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxdmJndG1pcXNncHdtb3NvZ3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDgzNjEsImV4cCI6MjA3NjY4NDM2MX0.7Kd5uZGVA5W5mrR0Z6CW4XMCd1OtEV0YCXkitQHveoo";

/** POST to a Supabase RPC with the public anon key. */
export function rpc(name: string, body: unknown, init: RequestInit = {}) {
  return fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    ...init,
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
    },
    body: JSON.stringify(body),
  });
}
