import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — FunFit AI",
  description:
    "How FunFit AI collects, uses, stores and protects your data, and the rights you have over it.",
};

// Legal copy reproduced verbatim from funfit-support.vercel.app/privacy
// (INFLUOGEN LLC, last updated 12 September 2026). Do not reword it here —
// change the source policy first, then mirror it.

const h2 = "text-2xl font-black text-white mt-12 mb-4";
const h3 = "text-lg font-bold text-white mt-8 mb-3";
const p = "text-dark-muted leading-relaxed mb-4";
const ul = "list-disc pl-6 text-dark-muted leading-relaxed space-y-2 mb-4";
const strong = "text-white font-semibold";
const callout =
  "rounded-2xl bg-dark-surface border border-dark-border border-l-4 border-l-primary px-6 py-5 text-dark-muted leading-relaxed my-8";
const link = "text-primary hover:underline";
const table = "w-full text-sm text-left border-collapse my-6";
const th = "text-white font-semibold border-b border-dark-border py-2.5 pr-4";
const td = "text-dark-muted border-b border-dark-border py-2.5 pr-4 align-top";

export default function PrivacyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-dark-muted/60 text-sm mb-10">
            Last updated: 12 September 2026 · Effective: 12 September 2026
          </p>

          <p className={p}>
            FunFit AI is a health and fitness app operated by{" "}
            <strong className={strong}>INFLUOGEN LLC</strong>, a limited
            liability company registered in Florida, United States. This policy
            explains exactly what we collect, where it goes, how long we keep
            it, and what you can make us do about it. It covers the FunFit AI
            iOS and Android apps and this website.
          </p>

          <div className={callout}>
            <strong className={strong}>The short version.</strong> We collect
            health and fitness information you give us, including photos of
            food and of your body, and blood test results if you choose to
            upload them. Some of it is sent to OpenAI so our AI features can
            analyse it. We store it with Supabase. We do not sell your data and
            we do not use your health data for advertising. If you rate an AI
            answer we keep the rating, but we only keep the answer itself and
            your message with it if you switch on{" "}
            <strong className={strong}>Help improve our AI</strong> (Settings →
            AI Data Usage) — it is off unless you turn it on, and turning it
            off deletes what you shared. You can ask us to delete everything
            and we will.
          </div>

          <h2 className={h2}>1. Who we are</h2>
          <p className={p}>
            INFLUOGEN LLC, Miami, Florida, United States. For anything in this
            policy, contact{" "}
            <a href="mailto:support@funfit.ai" className={link}>
              support@funfit.ai
            </a>
            . We are the data controller for the information described here.
          </p>

          <h2 className={h2}>2. What we collect</h2>

          <h3 className={h3}>2.1 Account and profile</h3>
          <ul className={ul}>
            <li>
              Your email address, from Sign in with Apple, Google Sign-In, or
              email sign-in.
            </li>
            <li>
              Username, display name, profile photo or chosen avatar, and bio.
            </li>
            <li>Date of birth, which we use to derive your age.</li>
            <li>
              Sex, height, weight, body-fat estimate, activity level, goals,
              dietary restrictions, and your weekly workout target.
            </li>
          </ul>

          <h3 className={h3}>2.2 Health and fitness data</h3>
          <p className={p}>
            This is the most sensitive category we handle, and it is the reason
            this section exists in detail:
          </p>
          <ul className={ul}>
            <li>
              <strong className={strong}>Apple Health / Health Connect.</strong>{" "}
              With your permission we <em>read</em> steps, workouts, sleep, and
              body measurements. We never write data back to Apple Health, and
              we never use Health data for advertising or data mining.
            </li>
            <li>
              <strong className={strong}>Food logs.</strong> Photos of meals,
              text descriptions, barcodes and nutrition-label photos, and the
              resulting calories, macronutrients, sugar, sodium and fibre.
            </li>
            <li>
              <strong className={strong}>Body scan photos.</strong> If you use
              Body Scan, the photos you take of yourself from up to four
              angles, and the body-composition estimates derived from them.
            </li>
            <li>
              <strong className={strong}>Blood test results.</strong> If you
              upload a lab report, the biomarker values in it and the file
              itself.
            </li>
            <li>
              <strong className={strong}>
                Weight and body-composition history
              </strong>{" "}
              that you log over time.
            </li>
            <li>
              <strong className={strong}>Workouts.</strong> Type, duration,
              distance, splits, and manually entered steps.
            </li>
            <li>
              <strong className={strong}>Location.</strong> When you record an
              outdoor workout, GPS is used to trace your route. Route
              coordinates stay on your device and are not uploaded to our
              servers, unless you explicitly connect Strava and choose to
              export a workout there.
            </li>
            <li>
              <strong className={strong}>Voice.</strong> Voice notes you send
              in chat, and audio you record for voice logging.
            </li>
          </ul>

          <h3 className={h3}>2.3 Social and messaging</h3>
          <ul className={ul}>
            <li>
              Direct messages, group messages, photo albums and voice notes you
              send.
            </li>
            <li>
              Who you follow and who follows you, and your leaderboard entries.
            </li>
            <li>
              Posts you share to the community feed, including any workout
              photos attached to them.
            </li>
            <li>
              Messages you exchange with the AI coach and the AI nutrition
              chat.
            </li>
          </ul>

          <h3 className={h3}>2.4 Technical and commercial</h3>
          <ul className={ul}>
            <li>
              A device push-notification token, so we can send you
              notifications.
            </li>
            <li>
              Subscription status and purchase events. Payment is handled
              entirely by Apple or Google — we never see your card number.
            </li>
            <li>
              Basic product analytics: which screens you open and which
              features you use, together with your age and your stated goal.
            </li>
          </ul>

          <h3 className={h3}>2.5 Ratings of AI answers</h3>
          <ul className={ul}>
            <li>
              When you tap thumbs up or thumbs down on an AI answer, we store
              the rating, which feature it was for (for example the food
              scanner or the coach), and technical details: your app version,
              platform and language. If the app asks you for a reason, or
              records which AI model and version of our instructions produced
              the answer, we store that too.
            </li>
            <li>
              A rating on its own contains{" "}
              <strong className={strong}>
                no message text, no photo and nothing you wrote
              </strong>
              .
            </li>
            <li>
              Only if you switch on{" "}
              <strong className={strong}>Help improve our AI</strong> do we
              also keep, with each rating you give, the AI’s answer, the
              message or description that prompted it (for chats, also the few
              messages just before it), any comment you write, and details of
              the result or profile the AI used for that answer (for example
              the foods and amounts a food scan found). Photos are not
              included. See section 4.1.
            </li>
          </ul>

          <h2 className={h2}>3. Why we use it</h2>
          <ul className={ul}>
            <li>
              To run the features you asked for: logging food, generating
              plans, scoring your day, tracking workouts, and answering you in
              chat.
            </li>
            <li>
              To personalise targets — calories, macros, hydration and training
              volume — from your profile.
            </li>
            <li>
              To operate social features: leaderboards, communities, following
              and messaging.
            </li>
            <li>
              To keep the service safe and working, including preventing abuse
              and diagnosing faults.
            </li>
            <li>
              To find and fix mistakes in our AI features, using the ratings
              you give and — only if you opt in — the content you share with
              them.
            </li>
            <li>
              To manage your subscription and comply with our legal and tax
              obligations.
            </li>
          </ul>
          <p className={p}>
            If you are in the UK, EU or EEA, our lawful bases are:{" "}
            <strong className={strong}>contract</strong> for the core service;{" "}
            <strong className={strong}>explicit consent</strong> for health
            data, for AI processing of your photos and lab results, and for
            keeping the content you choose to share when you rate an AI answer;{" "}
            <strong className={strong}>legitimate interests</strong> for
            security, product improvement and the ratings themselves; and{" "}
            <strong className={strong}>legal obligation</strong> for records we
            must keep. You can withdraw consent at any time; see section 8.
          </p>

          <h2 className={h2}>4. AI processing, and what goes to OpenAI</h2>
          <p className={p}>
            Several FunFit AI features are powered by large language models
            operated by <strong className={strong}>OpenAI</strong>. When you
            use them, the relevant content leaves your device and is sent to
            OpenAI for analysis. Specifically:
          </p>
          <table className={table}>
            <thead>
              <tr>
                <th className={th}>Feature</th>
                <th className={th}>What is sent to OpenAI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Food scan</td>
                <td className={td}>
                  The meal photo or your text description
                </td>
              </tr>
              <tr>
                <td className={td}>Body Scan</td>
                <td className={td}>Your body photos, plus age, sex and weight</td>
              </tr>
              <tr>
                <td className={td}>Blood panel import</td>
                <td className={td}>
                  The lab report image or text, plus age, sex, height, weight
                </td>
              </tr>
              <tr>
                <td className={td}>Health report (PDF)</td>
                <td className={td}>
                  Sleep, steps, blood markers and hormone readings
                </td>
              </tr>
              <tr>
                <td className={td}>AI coach and nutrition chat</td>
                <td className={td}>
                  Your messages, plus a summary of your profile
                </td>
              </tr>
              <tr>
                <td className={td}>Voice logging and voice notes</td>
                <td className={td}>The audio recording, for transcription</td>
              </tr>
              <tr>
                <td className={td}>Meal and workout plan generation</td>
                <td className={td}>
                  Your profile, goals and training preferences
                </td>
              </tr>
            </tbody>
          </table>
          <p className={p}>
            We send this data to OpenAI as our processor, to return a result to
            you. Under our agreement with OpenAI, your content is not used to
            train their models. We do not control OpenAI’s own infrastructure
            retention; see their policies for detail. If you do not want your
            data processed this way, do not use the AI features — the rest of
            the app works without them.
          </p>
          <div className={callout}>
            <strong className={strong}>AI output is not medical advice.</strong>{" "}
            FunFit AI is not a medical device and does not diagnose, treat or
            prevent any condition. Nutrition estimates, body-composition
            estimates and any commentary on lab values are informational only
            and can be wrong. Always talk to a qualified healthcare
            professional before acting on them, and never ignore medical advice
            because of something this app told you.
          </div>

          <h3 className={h3}>4.1 Helping improve FunFit AI (optional)</h3>
          <p className={p}>
            Our AI features make mistakes, and the quickest way for us to find
            them is for you to tell us. Where the app offers it — today, coach
            and nutrition chat replies and food scan results in the iOS and
            Android apps — you can rate an AI answer with a thumbs up or thumbs
            down (see section 2.5). Separately, you can choose to share the
            content behind your ratings:
          </p>
          <ul className={ul}>
            <li>
              <strong className={strong}>Off unless you turn it on.</strong>{" "}
              The <strong className={strong}>Help improve our AI</strong>{" "}
              switch (Settings → AI Data Usage) starts off. You do not need it
              for any feature, and turning it on or off does not change what
              the app does for you.
            </li>
            <li>
              <strong className={strong}>What it shares.</strong> Only content
              attached to a rating you actively give: the AI’s answer, your
              message or description (for chats, also the few messages just
              before it), your comment, and details of the result or profile
              the AI used. Photos are not included. Nothing is shared for
              answers you do not rate, and we never include data read from
              Apple Health or Health Connect.
            </li>
            <li>
              <strong className={strong}>Who sees it.</strong> Only the people
              at FunFit AI who work on our AI features. It is never shown to
              other users, never sold, never used for advertising, and not
              given to anyone except Supabase, which stores it for us.
            </li>
            <li>
              <strong className={strong}>How we use it.</strong> To understand
              what went wrong, improve the instructions our AI features follow,
              and check that our fixes work. We do not use it to train or
              fine-tune an AI model, and we do not send it to OpenAI for
              training. If we ever want to use it in a new way, we will ask you
              again first.
            </li>
            <li>
              <strong className={strong}>How long we keep it.</strong> Up to 12
              months from when you shared it, then we delete the content. The
              rating itself, without any content, stays while your account
              exists.
            </li>
            <li>
              <strong className={strong}>Changing your mind.</strong> Turn the
              switch off at any time. We then delete the content you shared
              under it, usually immediately and always within 30 days. Deleting
              your account deletes all of it.
            </li>
          </ul>

          <h2 className={h2}>5. Who else we share data with</h2>
          <p className={p}>
            We do not sell your personal information, and we have not sold or
            shared it for cross-context behavioural advertising in the past
            twelve months. We use the following service providers, each for a
            specific purpose:
          </p>
          <table className={table}>
            <thead>
              <tr>
                <th className={th}>Provider</th>
                <th className={th}>Purpose</th>
                <th className={th}>Receives health data?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Supabase</td>
                <td className={td}>
                  Database, authentication, file storage, server functions
                </td>
                <td className={td}>Yes</td>
              </tr>
              <tr>
                <td className={td}>OpenAI</td>
                <td className={td}>AI analysis and chat (see section 4)</td>
                <td className={td}>Yes</td>
              </tr>
              <tr>
                <td className={td}>Apple (APNs) / Google (FCM)</td>
                <td className={td}>Push notification delivery</td>
                <td className={td}>Only what a notification preview shows</td>
              </tr>
              <tr>
                <td className={td}>Superwall</td>
                <td className={td}>
                  Subscription paywall and entitlement state
                </td>
                <td className={td}>No — age band and goal only</td>
              </tr>
              <tr>
                <td className={td}>Mixpanel</td>
                <td className={td}>Product analytics</td>
                <td className={td}>No — usage events, age and goal</td>
              </tr>
              <tr>
                <td className={td}>
                  Nutritionix, USDA FoodData Central, Open Food Facts
                </td>
                <td className={td}>Nutrition database lookups</td>
                <td className={td}>Food names and quantities only</td>
              </tr>
              <tr>
                <td className={td}>ElevenLabs</td>
                <td className={td}>Text-to-speech playback</td>
                <td className={td}>Only the text being spoken</td>
              </tr>
              <tr>
                <td className={td}>Strava, WHOOP</td>
                <td className={td}>Only if you connect them yourself</td>
                <td className={td}>Yes, for what you choose to sync</td>
              </tr>
              <tr>
                <td className={td}>Vercel</td>
                <td className={td}>Hosting for this website</td>
                <td className={td}>No</td>
              </tr>
            </tbody>
          </table>
          <p className={p}>
            We may also disclose data if the law requires it, to protect
            someone’s safety, or as part of a merger or acquisition — in which
            case we will tell you before your data becomes subject to a
            different policy.
          </p>

          <h2 className={h2}>6. What other people can see</h2>
          <p className={p}>
            Some things are public inside the app by design. Your username,
            display name, avatar, level, streak and leaderboard position are
            visible to other FunFit AI users. Posts you share to a community,
            and any photo attached to them, are visible to that community.
            Messages you send in a group are visible to that group’s members.
            Direct messages are visible only to you and the person you are
            messaging.
          </p>
          <p className={p}>
            Your body scan photos, your food photos, your lab results, your
            weight history and anything you share to help improve our AI are{" "}
            <strong className={strong}>private</strong> and are never shown to
            other users.
          </p>

          <h2 className={h2}>7. How long we keep it</h2>
          <ul className={ul}>
            <li>
              <strong className={strong}>While your account exists:</strong>{" "}
              your profile, logs, photos and message history stay available so
              the app can show you your own history.
            </li>
            <li>
              <strong className={strong}>
                After you delete your account:
              </strong>{" "}
              we remove your profile, logs, photos, scans, lab results and
              message content within 30 days.
            </li>
            <li>
              <strong className={strong}>
                Messages you sent to other people
              </strong>{" "}
              are replaced with a “deleted” placeholder rather than removed
              outright, so other participants’ conversations stay readable.
            </li>
            <li>
              <strong className={strong}>
                Content you shared with AI ratings
              </strong>{" "}
              is kept for up to 12 months, or until you switch{" "}
              <strong className={strong}>Help improve our AI</strong> off,
              whichever comes first. Ratings without content stay while your
              account exists.
            </li>
            <li>
              <strong className={strong}>Purchase and tax records</strong> are
              kept for as long as the law requires, typically seven years.
              These contain no health data.
            </li>
            <li>
              <strong className={strong}>Backups</strong> roll off on their
              own schedule, within 90 days.
            </li>
          </ul>

          <h2 className={h2}>8. Your rights</h2>
          <p className={p}>
            Wherever you live, you can ask us to give you a copy of your data,
            correct it, delete it, or stop a particular use of it. Email{" "}
            <a href="mailto:support@funfit.ai" className={link}>
              support@funfit.ai
            </a>{" "}
            and we will respond within 30 days. We will not charge you or
            degrade your service for asking. You can also switch{" "}
            <strong className={strong}>Help improve our AI</strong> off in
            Settings → AI Data Usage at any time, which withdraws that consent
            and deletes what you shared under it.
          </p>

          <h3 className={h3}>If you are in the UK, EU or EEA (GDPR)</h3>
          <p className={p}>
            You have the rights of access, rectification, erasure, restriction,
            portability and objection, and the right to withdraw consent at any
            time without affecting processing already carried out. You also
            have the right to complain to your national data protection
            authority.
          </p>

          <h3 className={h3}>If you are in California (CCPA/CPRA)</h3>
          <p className={p}>
            You have the right to know what we collect and why, to delete it,
            to correct it, and to limit the use of sensitive personal
            information. Health data and precise location are sensitive
            personal information under California law; we use them only to
            deliver the features you asked for, never to infer characteristics
            about you for advertising. We do not sell or share personal
            information, so there is nothing to opt out of — but you can still
            exercise every other right by emailing us.
          </p>

          <h3 className={h3}>If you are in Washington or Nevada</h3>
          <p className={p}>
            Consumer health data laws in these states give you the right to
            withdraw consent to the collection and sharing of your health data,
            and to have it deleted. Email us and we will action it within 30
            days.
          </p>

          <h2 className={h2}>9. Security</h2>
          <p className={p}>
            Data is encrypted in transit. Your body scan photos, lab results,
            direct messages, voice notes and anything you share with AI ratings
            are held in private storage that other users cannot read. Access to
            production systems is limited to the people who need it. No system
            is perfectly secure, and we will tell you and the relevant
            regulator without undue delay if a breach affects your data.
          </p>

          <h2 className={h2}>10. Children</h2>
          <p className={p}>
            FunFit AI is not intended for anyone under 13, and we do not
            knowingly collect data from them. In the EU and UK, if you are
            under the age at which you can consent for yourself (13 to 16
            depending on the country), a parent or guardian must agree on your
            behalf. If you believe a child has given us data, email us and we
            will delete it.
          </p>

          <h2 className={h2}>11. Where your data goes</h2>
          <p className={p}>
            We are based in the United States, and our providers process data
            in the United States and elsewhere. Where we move personal data out
            of the UK, EU or EEA, we rely on the European Commission’s Standard
            Contractual Clauses with each provider.
          </p>

          <h2 className={h2}>12. Changes</h2>
          <p className={p}>
            If we change this policy in a way that materially affects you, we
            will tell you in the app before the change takes effect and update
            the date at the top of this page.
          </p>

          <h2 className={h2}>13. Contact</h2>
          <p className={p}>
            INFLUOGEN LLC, Miami, Florida, United States —{" "}
            <a href="mailto:support@funfit.ai" className={link}>
              support@funfit.ai
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
