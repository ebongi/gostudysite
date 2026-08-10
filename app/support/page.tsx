import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Support & Contact — GO Study",
  description:
    "Get help with GO Study — course materials, AI tutor, and your account.",
};

// TODO: swap in the real support WhatsApp number and email before launch.
const WHATSAPP_URL = "https://wa.me/237000000000";
const SUPPORT_EMAIL = "support@gostudy.app";

const faqs = [
  {
    question: "How do I get help with the app fastest?",
    answer:
      "WhatsApp is the quickest way to reach us. For questions specific to University of Buea admin or registry matters, the UB Support Bot inside the app can usually answer instantly.",
  },
  {
    question: "How do I delete my account and data?",
    answer:
      "Go to Settings > Account > Delete Account. This removes your profile, saved materials, and marketplace listings. See our Privacy Policy for details.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Support &amp; Contact
          </h1>
          <p className="mt-4 text-lg text-muted">
            Stuck on something, or found a bug? Reach out — a real person
            reads every message.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-brand-green-tint text-brand-green">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="font-bold text-foreground">WhatsApp</p>
                <p className="text-sm text-subtle">Fastest way to reach us</p>
              </div>
            </a>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-brand-blue-tint text-brand-blue">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-bold text-foreground">Email</p>
                <p className="text-sm text-subtle">{SUPPORT_EMAIL}</p>
              </div>
            </a>
          </div>

          <h2 className="mt-16 text-xl font-bold text-foreground">
            Common questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
              >
                <p className="font-semibold text-foreground">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
