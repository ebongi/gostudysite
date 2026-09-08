import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LegalShell, LegalSectionBlock } from "../components/legal/LegalShell";
import { processors, supportEmail } from "../lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — GoStudy",
  description: "How GoStudy collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalShell
        title="Privacy Policy"
        lastUpdated="LAST UPDATED 8 SEPTEMBER 2026"
        intro="This is the canonical, permanent home of the GoStudy privacy policy — the URL declared in the Google Play listing."
        draftNote="This policy reflects how GoStudy actually works today. Have it reviewed by counsel before treating it as final."
      >
        <LegalSectionBlock n="01" title="Information we collect">
          <p>
            To run your account we collect basic profile details (name,
            email or phone number, university and department), the
            materials, marketplace listings and messages you post, and
            technical data such as device information and feature usage
            collected automatically.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="02" title="How we use your information">
          <p>
            We use your data to run core features — showing relevant course
            materials, generating study plans and quizzes, tracking your
            performance, processing subscription payments, and connecting
            Marketplace buyers and sellers. We don&rsquo;t sell your personal
            data.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="03" title="How your information is stored">
          <p>
            Account and content data lives in Supabase, encrypted in transit
            and at rest. Only the GoStudy team can reach it, and only when
            needed for support, safety, or to keep the service running.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="04" title="AI features and your prompts">
          <p>
            When you use the Study Assistant or the UB Support Bot, your
            questions — and any images you attach — are sent to Google
            Gemini to generate a response. Offline AI Chat runs entirely on
            your device: those conversations are never sent to our servers.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="05" title="Data retention">
          <p>
            We keep your data for as long as your account is active. If you
            delete your account, most data is removed immediately and
            permanently. A few categories — payment records, university
            transcript records, and abuse-safety records — are kept only as
            long as the law requires. See{" "}
            <Link href="/delete-account" className="font-semibold text-accent hover:underline">
              Delete My Account
            </Link>{" "}
            for the full breakdown.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="06" title="Your rights and choices">
          <p>
            Email us to access, correct, or export your data. You can delete
            your account and all of your data at any time — from the app, or
            through the web-based request on the{" "}
            <Link href="/delete-account" className="font-semibold text-accent hover:underline">
              Delete My Account
            </Link>{" "}
            page. Notification preferences live in the app&rsquo;s Settings.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="07" title="Children and student data">
          <p>
            GoStudy is built for university students and isn&rsquo;t intended
            for children under 13. We collect only what&rsquo;s needed to
            verify student status — university and department — and don&rsquo;t
            knowingly collect data from anyone below that age.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="08" title="Third-party services we use">
          <p className="mb-5">
            These are the only external processors GoStudy sends data to, and
            what each one receives.
          </p>
          <div className="flex flex-col gap-px bg-accent-light/16">
            {processors.map((p) => (
              <div
                key={p.name}
                className="grid gap-x-6 gap-y-2 bg-navy px-5 py-[18px] [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]"
              >
                <div className="text-base font-bold text-heading">{p.name}</div>
                <div className="text-sm leading-snug text-muted">{p.role}</div>
              </div>
            ))}
          </div>
        </LegalSectionBlock>

        <LegalSectionBlock n="09" title="Contact">
          <p>
            Questions about this policy, or a request to access or delete
            your data:{" "}
            <a href={`mailto:${supportEmail}`} className="font-semibold text-accent hover:underline">
              {supportEmail}
            </a>
            . To delete your account, see{" "}
            <Link href="/delete-account" className="font-semibold text-accent hover:underline">
              Delete My Account
            </Link>
            .
          </p>
        </LegalSectionBlock>
      </LegalShell>
      <Footer />
    </>
  );
}
