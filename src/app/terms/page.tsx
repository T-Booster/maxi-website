import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — FunFit AI",
  description:
    "The agreement between you and INFLUOGEN LLC covering your use of the FunFit AI apps and this website.",
};

// Legal copy reproduced verbatim from funfit-support.vercel.app/terms
// (INFLUOGEN LLC, last updated 12 September 2026). Do not reword it here —
// change the source terms first, then mirror it.

const h2 = "text-2xl font-black text-white mt-12 mb-4";
const p = "text-dark-muted leading-relaxed mb-4";
const ul = "list-disc pl-6 text-dark-muted leading-relaxed space-y-2 mb-4";
const strong = "text-white font-semibold";
const callout =
  "rounded-2xl bg-dark-surface border border-dark-border border-l-4 border-l-primary px-6 py-5 text-dark-muted leading-relaxed my-8";
const link = "text-primary hover:underline";

export default function TermsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-dark-muted/60 text-sm mb-10">
            Last updated: 12 September 2026 · Effective: 12 September 2026
          </p>

          <p className={p}>
            These terms are the agreement between you and{" "}
            <strong className={strong}>INFLUOGEN LLC</strong> (“we”, “us”), a
            Florida limited liability company, covering your use of the FunFit
            AI apps and this website. By creating an account or using FunFit
            AI, you agree to them. If you do not agree, do not use the app.
          </p>

          <div className={callout}>
            <strong className={strong}>
              FunFit AI is not a doctor and is not a medical device.
            </strong>{" "}
            It does not diagnose, treat, cure or prevent any disease. Nutrition
            estimates, body-composition scores, hormone-related scores and any
            commentary on blood test results are for general information only,
            are frequently approximate, and can be wrong. Talk to a qualified
            healthcare professional before changing your diet, training,
            supplements or medication — and never delay or disregard their
            advice because of something you read in this app. If you think you
            have a medical emergency, call your local emergency number.
          </div>

          <h2 className={h2}>1. Who can use FunFit AI</h2>
          <p className={p}>
            You must be at least 13 years old. If you are under the age of
            digital consent where you live (13 to 16 in the EU and UK), a
            parent or guardian must agree to these terms for you. You must not
            use FunFit AI if we have previously banned you.
          </p>
          <p className={p}>
            FunFit AI is built for generally healthy adults. It is not designed
            for people who are pregnant, who have an eating disorder or a
            history of one, or who have a medical condition affected by diet or
            exercise. If any of those apply to you, please speak to your doctor
            before using it.
          </p>

          <h2 className={h2}>2. Your account</h2>
          <ul className={ul}>
            <li>
              Give us accurate information and keep it current — your targets
              are calculated from it.
            </li>
            <li>
              You are responsible for what happens under your account. Keep
              access to your email secure.
            </li>
            <li>
              One account per person. Do not share it, sell it, or transfer it.
            </li>
            <li>
              You can delete your account at any time. See our{" "}
              <a href="/privacy" className={link}>
                Privacy Policy
              </a>{" "}
              for what happens to your data.
            </li>
          </ul>

          <h2 className={h2}>3. Subscriptions and payment</h2>
          <ul className={ul}>
            <li>
              FunFit AI requires a paid subscription. Prices and billing
              periods are shown in the app before you buy.
            </li>
            <li>
              Payment is taken by Apple or Google, not by us. We never see your
              card details.
            </li>
            <li>
              Subscriptions renew automatically until you cancel. Cancel at
              least 24 hours before the period ends, through your Apple or
              Google account settings — we cannot cancel it for you.
            </li>
            <li>
              Refunds are handled by Apple or Google under their own policies.
              We can ask on your behalf but cannot grant them.
            </li>
            <li>
              If we change the price, we will tell you before it applies to
              you.
            </li>
          </ul>

          <h2 className={h2}>4. Community rules</h2>
          <p className={p}>
            FunFit AI includes messaging, groups and public communities. When
            you post or send anything, you agree not to:
          </p>
          <ul className={ul}>
            <li>Harass, threaten, bully or body-shame anyone.</li>
            <li>
              Post sexual content, content involving minors, or content that is
              violent or hateful.
            </li>
            <li>
              Give dangerous advice — extreme calorie restriction, unsafe
              training loads, or anything promoting disordered eating.
            </li>
            <li>Sell things, spam, or impersonate anyone.</li>
            <li>
              Post someone else’s private information, or content you do not
              have the right to post.
            </li>
            <li>
              Try to break, scrape, reverse-engineer or overload the service.
            </li>
          </ul>
          <p className={p}>
            You can report content and block other users from inside the app.
            We review reports and may remove content, mute, suspend or
            permanently ban accounts. We do not pre-screen everything people
            post, and we are not responsible for what other users say — but we
            act on reports.
          </p>

          <h2 className={h2}>5. Your content</h2>
          <p className={p}>
            Everything you upload stays yours. You give us a licence to host,
            store, reproduce and display it purely so we can run the service
            for you — for example, storing your food photos so your diary
            works, or showing your community post to that community. This
            licence ends when you delete the content or your account, except
            for copies in backups that have not yet rolled off, and for
            messages other people have already received.
          </p>
          <p className={p}>
            If you switch on{" "}
            <strong className={strong}>Help improve our AI</strong> in Settings
            → AI Data Usage, you also let us use the content you choose to
            attach to a rating of an AI answer — the answer and your message —
            to review and improve our AI features, as described in section 4.1
            of our{" "}
            <a href="/privacy" className={link}>
              Privacy Policy
            </a>
            . It is off unless you turn it on. Switching it off ends this
            permission and deletes what you shared under it.
          </p>
          <p className={p}>
            You confirm you have the right to upload what you upload, and that
            it does not break anyone else’s rights.
          </p>

          <h2 className={h2}>6. AI features</h2>
          <p className={p}>
            Food scanning, body scanning, plan generation, lab-report reading
            and the AI coach are powered by third-party AI models. They produce
            estimates, not measurements. Portion sizes, calories,
            macronutrients and body-fat figures are approximations and will
            sometimes be materially wrong. Check anything that matters, and
            correct it in the app — every estimate is editable for that reason.
          </p>
          <p className={p}>
            Using these features means your content is sent to our AI provider,
            as described in the{" "}
            <a href="/privacy" className={link}>
              Privacy Policy
            </a>
            . If you would rather it were not, do not use them.
          </p>

          <h2 className={h2}>7. What we do not promise</h2>
          <p className={p}>
            FunFit AI is provided “as is”. To the fullest extent the law
            allows, we disclaim all warranties, express or implied, including
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the app will be
            uninterrupted or error-free, that its estimates will be accurate,
            or that using it will produce any particular health, fitness or
            body-composition result.
          </p>

          <h2 className={h2}>8. Limitation of liability</h2>
          <p className={p}>
            To the fullest extent the law allows, INFLUOGEN LLC is not liable
            for indirect, incidental, special, consequential or punitive
            damages, or for lost profits, data or goodwill, arising from your
            use of FunFit AI. Our total liability for any claim is limited to
            the greater of the amount you paid us in the twelve months before
            the claim, or one hundred US dollars.
          </p>
          <p className={p}>
            Nothing here limits liability that cannot be limited by law —
            including for death or personal injury caused by negligence, or for
            fraud. Some jurisdictions do not allow these exclusions, so parts
            of this section may not apply to you.
          </p>

          <h2 className={h2}>9. Indemnity</h2>
          <p className={p}>
            You agree to cover our reasonable costs if a third party brings a
            claim against us because of content you posted or because you broke
            these terms.
          </p>

          <h2 className={h2}>10. Suspension and termination</h2>
          <p className={p}>
            You can stop using FunFit AI and delete your account whenever you
            like. We may suspend or terminate your account if you break these
            terms, if we are required to by law, or if we discontinue the
            service. If we discontinue it, we will give you reasonable notice
            and a way to export your data.
          </p>

          <h2 className={h2}>11. Governing law and disputes</h2>
          <p className={p}>
            These terms are governed by the laws of the State of Florida,
            United States, without regard to its conflict-of-laws rules.
          </p>
          <p className={p}>
            <strong className={strong}>
              Please read this part carefully — it affects how disputes are
              resolved.
            </strong>{" "}
            If we cannot settle a dispute informally within 60 days of you
            emailing us about it, you and we agree to resolve it by binding
            individual arbitration rather than in court, and each of us waives
            the right to a jury trial and to participate in a class action.
            You may opt out of this arbitration agreement by emailing us within
            30 days of first accepting these terms, and opting out will not
            affect your use of the app. Either of us may still bring an
            individual claim in small-claims court. Nothing here prevents you
            from bringing a complaint to a regulator, and if you are a consumer
            in the EU or UK, you keep the right to bring proceedings in your
            own country’s courts.
          </p>

          <h2 className={h2}>12. Changes</h2>
          <p className={p}>
            We may update these terms. If a change materially affects your
            rights we will tell you in the app before it takes effect.
            Continuing to use FunFit AI after that means you accept the new
            terms.
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
