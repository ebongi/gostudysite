import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LegalShell, LegalSectionBlock } from "../components/legal/LegalShell";
import { supportEmail } from "../lib/content";

export const metadata: Metadata = {
  title: "Terms of Service — GoStudy",
  description: "The terms that apply when you use GoStudy.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalShell
        title="Terms of Service"
        lastUpdated="LAST UPDATED 8 SEPTEMBER 2026"
        intro="The linkable version of the terms shown in the app. We keep the two in sync."
        draftNote="These terms reflect how GoStudy actually works today. Have them reviewed by counsel before treating them as final."
      >
        <LegalSectionBlock n="01" title="Acceptance of terms">
          <p>
            Creating a GoStudy account means you agree to these terms and to
            using the app in good faith. If you don&rsquo;t agree, don&rsquo;t
            create an account or use the app.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="02" title="Eligibility and your account">
          <p>
            You must be a university student, or otherwise eligible to use
            GoStudy, to register. You&rsquo;re responsible for keeping your
            login credentials secure and for activity on your account.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="03" title="Acceptable use">
          <p>
            Use GoStudy to access course materials, get AI tutoring help,
            manage tasks, chat with classmates, and trade materials in good
            faith. Don&rsquo;t use the app to cheat during proctored exams or
            assessments, upload material you don&rsquo;t have the right to
            share, harass other users, or abuse Chat, DMs, or the
            Marketplace.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="04" title="Content and intellectual property">
          <p>
            You keep ownership of materials you upload. By uploading, you
            grant other students a licence to view and download that
            material within the app for study purposes.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="05" title="Subscriptions and payments">
          <p>
            Monthly and yearly plans renew automatically unless cancelled,
            billed through Fapshi via MTN Mobile Money or Orange Money. See
            Pricing on the homepage for current rates — the app always shows
            the exact amount before you approve a charge.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="06" title="AI-generated content">
          <p>
            Answers from the Study Assistant, the UB Support Bot, and
            Offline AI Chat may be inaccurate or incomplete. They&rsquo;re a
            study aid, not a substitute for your course materials, lecturers,
            or official university guidance.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="07" title="Suspension and termination">
          <p>
            We may suspend or close an account that violates these terms,
            particularly for cheating, harassment, or abuse of the
            Marketplace. You can close your own account at any time — see{" "}
            <Link href="/delete-account" className="font-semibold text-accent hover:underline">
              Delete My Account
            </Link>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="08" title="Liability, changes and governing law">
          <p>
            GoStudy is provided &ldquo;as is&rdquo; without guaranteeing the
            accuracy of AI-generated content or the outcome of Marketplace
            transactions between users. We may update these terms from time
            to time; continuing to use the app after a change means you
            accept the new terms. These terms are governed by the laws of
            Cameroon.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock n="09" title="Contact">
          <p>
            Reach us at{" "}
            <a href={`mailto:${supportEmail}`} className="font-semibold text-accent hover:underline">
              {supportEmail}
            </a>{" "}
            for anything related to these terms.
          </p>
        </LegalSectionBlock>
      </LegalShell>
      <Footer />
    </>
  );
}
