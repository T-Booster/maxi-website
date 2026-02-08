import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Audience ID for the MAXI AI waitlist — set this in .env.local after creating it in Resend dashboard
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 1. Add contact to Resend Audience (your waitlist)
    if (AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email,
          firstName: name || "",
          unsubscribed: false,
          audienceId: AUDIENCE_ID,
        });
      } catch (contactError: unknown) {
        // If contact already exists, that's fine — continue to send welcome email
        const errorMessage = contactError instanceof Error ? contactError.message : "Unknown error";
        if (!errorMessage.includes("already exists")) {
          console.error("Failed to add contact:", contactError);
        }
      }
    }

    // 2. Send welcome email
    const { error } = await resend.emails.send({
      from: "MAXI AI <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to the MAXI AI Waitlist! 🧬",
      html: getWelcomeEmailHTML(name || "there"),
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json(
        { error: "Failed to send welcome email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function getWelcomeEmailHTML(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MAXI AI</title>
</head>
<body style="margin:0;padding:0;background-color:#000000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:rgba(34,197,94,0.2);border-radius:12px;padding:10px 14px;">
                    <span style="color:#22c55e;font-weight:900;font-size:20px;">M</span>
                  </td>
                  <td style="padding-left:10px;">
                    <span style="color:#ffffff;font-weight:700;font-size:22px;letter-spacing:-0.5px;">MAXI </span>
                    <span style="color:#22c55e;font-weight:700;font-size:22px;">AI</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color:#111111;border:1px solid #222222;border-radius:16px;padding:40px 32px;">

              <!-- Welcome Badge -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <span style="display:inline-block;background-color:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:50px;padding:8px 20px;color:#22c55e;font-size:13px;font-weight:600;">
                      &#10003; You're on the Waitlist!
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Heading -->
              <h1 style="color:#ffffff;font-size:28px;font-weight:800;text-align:center;margin:0 0 16px;line-height:1.2;">
                Hey ${name}, welcome to the future of health optimization!
              </h1>

              <p style="color:#888888;font-size:15px;line-height:1.7;text-align:center;margin:0 0 32px;">
                You've just joined the MAXI AI waitlist. We're building the most advanced AI-powered health app, and you'll be among the first to experience it.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #222222;margin:0 0 32px;">

              <!-- What you'll get -->
              <h2 style="color:#ffffff;font-size:18px;font-weight:700;margin:0 0 20px;">
                Here's what's coming your way:
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#22c55e;font-size:18px;padding-right:12px;vertical-align:top;">&#9889;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Weekly Health Tips</strong>
                          <p style="color:#888888;font-size:13px;margin:4px 0 0;line-height:1.5;">Science-backed nutrition and hormone optimization tips delivered every week.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#22c55e;font-size:18px;padding-right:12px;vertical-align:top;">&#127942;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Early Access</strong>
                          <p style="color:#888888;font-size:13px;margin:4px 0 0;line-height:1.5;">Be first in line when MAXI AI launches — plus an exclusive waitlist discount.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#22c55e;font-size:18px;padding-right:12px;vertical-align:top;">&#129504;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Behind the Scenes</strong>
                          <p style="color:#888888;font-size:13px;margin:4px 0 0;line-height:1.5;">Get sneak peeks of the app, feature previews, and updates on our progress.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #222222;margin:32px 0;">

              <!-- First Tip -->
              <div style="background-color:#1a1a1a;border:1px solid #222222;border-radius:12px;padding:24px;">
                <h3 style="color:#22c55e;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">
                  &#127793; Your First Free Tip
                </h3>
                <h3 style="color:#ffffff;font-size:16px;font-weight:700;margin:0 0 8px;">
                  The #1 Food for Hormone Optimization
                </h3>
                <p style="color:#888888;font-size:14px;line-height:1.6;margin:0;">
                  Whole eggs are nature's perfect hormone fuel. They contain cholesterol (the precursor to testosterone), complete protein, Vitamin D, zinc, and healthy fats — all in one affordable package. Aim for 2-4 whole eggs daily, ideally in the morning. Our AI food scanner rates eggs at 88-92 out of 100 for hormone impact!
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0;text-align:center;">
              <p style="color:#555555;font-size:12px;margin:0 0 8px;">
                You're receiving this because you joined the MAXI AI waitlist.
              </p>
              <p style="color:#444444;font-size:12px;margin:0;">
                &copy; ${new Date().getFullYear()} MAXI AI. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
