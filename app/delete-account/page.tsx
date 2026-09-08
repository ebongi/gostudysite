import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldAlert, Trash2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Delete My Account — GO Study",
  description:
    "How to delete your GO Study account and all of its data, with or without the app installed.",
};

const WHATSAPP_URL = "https://wa.me/237682397481";
const WHATSAPP_NUMBER = "+237 682 397 481";
const SUPPORT_EMAIL = "sumeebong7@gmail.com";
const DELETION_DAYS = 7;

const deletedItems = [
  "Your account and login credentials",
  "Your profile, avatar and study statistics",
  "Chat messages and direct messages you sent",
  "Saved course materials and offline library entries",
  "Marketplace listings, active and completed",
  "Tasks, exam schedule, study plans and quiz history",
];

const retainedItems = [
  "Payment and transaction records, kept for accounting and tax obligations",
  "Transcript request records held by the university as official academic documents",
  "Minimal abuse records where an account was closed for a safety breach",
];

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-tint bg-brand-blue-tint px-4 py-1.5 text-xs font-semibold text-brand-blue">
            Data &amp; privacy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Delete my account
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            You can delete your GO Study account and its data at any time,
            with or without the app installed. Pick whichever route applies
            to you.
          </p>
        </section>

        {/* Routes */}
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="mx-auto grid max-w-4xl gap-6 px-5 sm:grid-cols-2 sm:px-8">
            <div className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue-tint text-brand-blue">
                <Trash2 size={20} />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-widest text-brand-blue uppercase">
                Route A — In the app
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                Immediate and permanent
              </h2>
              <ol className="mt-5 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-brand-blue">01</span>
                  <span>
                    Open GO Study and go to{" "}
                    <strong className="font-semibold text-foreground">
                      Settings
                    </strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-brand-blue">02</span>
                  <span>
                    Tap{" "}
                    <strong className="font-semibold text-foreground">
                      Delete Account
                    </strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-brand-blue">03</span>
                  <span>
                    Confirm. Your account and all associated data are
                    deleted immediately and permanently.
                  </span>
                </li>
              </ol>
              <p className="mt-5 text-xs leading-relaxed text-subtle">
                There&rsquo;s no recovery window and no undo. Export anything
                you want to keep first.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-tint text-brand-green">
                <Mail size={20} />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-widest text-brand-green uppercase">
                Route B — By email
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                No app installed?
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Email us from — or naming — the address your account is
                registered to, with the subject{" "}
                <strong className="font-semibold text-foreground">
                  &ldquo;Delete my account&rdquo;
                </strong>
                . We verify ownership, then delete your account and all
                associated data within {DELETION_DAYS} business days and
                confirm by reply.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20account`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover"
              >
                <Mail size={16} />
                Email a deletion request
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
                <MessageCircle size={14} className="flex-shrink-0" />
                Or message{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue hover:underline"
                >
                  {WHATSAPP_NUMBER}
                </a>{" "}
                on WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* What gets deleted / retained */}
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-4xl gap-8 px-5 sm:grid-cols-2 sm:px-8">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                What gets deleted
              </h2>
              <ul className="mt-5 space-y-3">
                {deletedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">
                What we must keep
              </h2>
              <ul className="mt-5 space-y-3">
                {retainedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-subtle" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-subtle">
                These records are stripped of everything not required by
                law and are never used to contact you or rebuild your
                profile.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-4xl items-start gap-3 rounded-2xl border border-line bg-surface-alt px-5 py-4 sm:px-8">
            <ShieldAlert
              size={16}
              className="mt-0.5 flex-shrink-0 text-subtle"
            />
            <p className="text-xs leading-relaxed text-subtle">
              Draft placeholder — retention periods and legal basis should
              be confirmed against the final Privacy Policy before
              publishing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
