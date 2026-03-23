import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Audience ID for the FunFit AI newsletter — set this in .env.local after creating it in Resend dashboard
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

    // 1. Add contact to Resend Audience
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
      from: "FunFit AI <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to FunFit AI! 🧬",
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
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
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
  <title>Welcome to FunFit AI</title>
</head>
<body style="margin:0;padding:0;background-color:#09090f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:rgba(59,130,246,0.15);border-radius:12px;padding:10px 14px;">
                    <span style="color:#3b82f6;font-weight:900;font-size:20px;">F</span>
                  </td>
                  <td style="padding-left:10px;">
                    <span style="color:#ffffff;font-weight:700;font-size:22px;letter-spacing:-0.5px;">FunFit </span>
                    <span style="color:#3b82f6;font-weight:700;font-size:22px;">AI</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color:#12121a;border:1px solid #1e1e2e;border-radius:16px;padding:40px 32px;">

              <!-- Welcome Badge -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <span style="display:inline-block;background-color:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);border-radius:50px;padding:8px 20px;color:#3b82f6;font-size:13px;font-weight:600;">
                      &#10003; You're Subscribed!
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Heading -->
              <h1 style="color:#ffffff;font-size:28px;font-weight:800;text-align:center;margin:0 0 16px;line-height:1.2;">
                Hey ${name}, welcome to the FunFit AI community!
              </h1>

              <p style="color:#8a8a9a;font-size:15px;line-height:1.7;text-align:center;margin:0 0 32px;">
                You'll receive the latest feature updates, health articles, and optimization tips straight to your inbox. Here's a preview of what's coming.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #1e1e2e;margin:0 0 32px;">

              <!-- What you'll get -->
              <h2 style="color:#ffffff;font-size:18px;font-weight:700;margin:0 0 20px;">
                What you'll receive:
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#3b82f6;font-size:18px;padding-right:12px;vertical-align:top;">&#9889;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Feature Updates</strong>
                          <p style="color:#8a8a9a;font-size:13px;margin:4px 0 0;line-height:1.5;">Be the first to know about new features, improvements, and app updates.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#3b82f6;font-size:18px;padding-right:12px;vertical-align:top;">&#127942;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Health Articles</strong>
                          <p style="color:#8a8a9a;font-size:13px;margin:4px 0 0;line-height:1.5;">Science-backed nutrition, hormone optimization, and wellness deep-dives.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#3b82f6;font-size:18px;padding-right:12px;vertical-align:top;">&#129504;</td>
                        <td>
                          <strong style="color:#ffffff;font-size:14px;">Optimization Tips</strong>
                          <p style="color:#8a8a9a;font-size:13px;margin:4px 0 0;line-height:1.5;">Actionable tips to get the most out of FunFit AI and your health journey.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #1e1e2e;margin:32px 0;">

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://apps.apple.com/lb/app/funfit-ai-health-tracker/id6754610107" style="display:inline-block;background-color:#3b82f6;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:50px;">
                      Download FunFit AI
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0;text-align:center;">
              <p style="color:#555555;font-size:12px;margin:0 0 8px;">
                You're receiving this because you subscribed to FunFit AI updates.
              </p>
              <p style="color:#444444;font-size:12px;margin:0;">
                &copy; ${new Date().getFullYear()} FunFit AI. All rights reserved.
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
