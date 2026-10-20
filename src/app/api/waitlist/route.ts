import { NextRequest, NextResponse } from "next/server";
import { rpc } from "@/lib/supabase";

// The "Stay in the loop" box. Saves the email to the funfit.ai list in Supabase
// (table site_waitlist, site = 'funfit'; supabase_site_waitlist_funfit.sql). The database
// function validates, de-duplicates and throttles; nothing is emailed from here.
// Read the list in the Supabase SQL editor (the REPORT query at the bottom of that file).

const MESSAGES: Record<string, string> = {
  bad_email: "Please enter a valid email address.",
  busy: "Lots of signups right now. Please try again in a few minutes.",
};

export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim().slice(0, 254) : "";
  } catch {
    // fall through to the validation message
  }
  if (!email.includes("@")) {
    return NextResponse.json({ error: MESSAGES.bad_email }, { status: 400 });
  }

  try {
    const res = await rpc("join_site_waitlist", { p_site: "funfit", p_email: email }, { cache: "no-store" });
    const data = res.ok ? await res.json() : null;
    if (data?.success === true) {
      return NextResponse.json({ message: "Subscribed" }, { status: 200 });
    }
    const code = typeof data?.error === "string" ? data.error : "";
    if (!res.ok) console.error("waitlist: Supabase answered", res.status);
    return NextResponse.json(
      { error: MESSAGES[code] ?? "Something went wrong. Please try again." },
      { status: code === "bad_email" ? 400 : 503 }
    );
  } catch (error) {
    console.error("waitlist:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 503 });
  }
}
