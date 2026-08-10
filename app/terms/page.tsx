import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — GO Study",
  description: "The terms that apply when you use GO Study.",
};

// Draft placeholder — have this reviewed by counsel before publishing.
const SUPPORT_EMAIL = "support@gostudy.app";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-subtle">
            Last updated: 10 August 2026
          </p>

          <div className="mt-10 space-y-10 text-muted">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Using GO Study
              </h2>
              <p className="mt-3 leading-relaxed">
                GO Study is a study tool for university students. Use it to
                access course materials, get AI tutoring help, manage tasks,
                and trade materials with other students in good faith. Don&rsquo;t
                use the app to cheat during proctored exams or assessments,
                upload material you don&rsquo;t have the right to share, or
                harass other users.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Student Marketplace
              </h2>
              <p className="mt-3 leading-relaxed">
                The Marketplace connects buyers and sellers directly. GO
                Study isn&rsquo;t a party to these transactions and doesn&rsquo;t
                guarantee the condition, price, or delivery of items listed.
                Trade in good faith and meet safely.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Your content
              </h2>
              <p className="mt-3 leading-relaxed">
                You keep ownership of materials you upload. By uploading, you
                give other students permission to view and download that
                material within the app for study purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Account termination
              </h2>
              <p className="mt-3 leading-relaxed">
                You can delete your account at any time from Settings &gt;
                Account &gt; Delete Account. We may suspend accounts that
                violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Questions
              </h2>
              <p className="mt-3 leading-relaxed">
                Reach us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-brand-blue"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                for anything related to these terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
