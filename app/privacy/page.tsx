import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — GO Study",
  description: "How GO Study collects, uses, and protects your data.",
};

// Draft placeholder — have this reviewed by counsel before publishing.
const SUPPORT_EMAIL = "support@gostudy.app";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-subtle">
            Last updated: 10 August 2026
          </p>

          <div className="mt-10 space-y-10 text-muted">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                What we collect
              </h2>
              <p className="mt-3 leading-relaxed">
                To run your account we collect basic profile details (name,
                email or phone number, university and department), the
                materials and marketplace listings you upload, and usage
                information such as which features you use. If you use the
                AI Study Tutor, your questions are sent to our AI provider to
                generate a response.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                What stays on your device
              </h2>
              <p className="mt-3 leading-relaxed">
                Offline AI Chat runs entirely on your phone. Those
                conversations are not sent to our servers. Materials you save
                to your Offline Library are stored locally on your device for
                access without a connection.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                How we use your data
              </h2>
              <p className="mt-3 leading-relaxed">
                We use your data to operate core features — showing relevant
                course materials, generating study plans, tracking your
                performance, and connecting marketplace buyers and sellers.
                We don&rsquo;t sell your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Your account, your choice
              </h2>
              <p className="mt-3 leading-relaxed">
                You can delete your account and all associated data at any
                time from Settings &gt; Account &gt; Delete Account in the
                app. This removes your profile, saved materials, and
                marketplace listings from our systems.
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
                for anything related to your data or this policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
