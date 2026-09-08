import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CornerMarks from "../components/CornerMarks";
import {
  deletedOnAccountDeletion,
  deletionDays,
  retainedOnAccountDeletion,
  supportEmail,
  whatsappNumber,
  whatsappUrl,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Delete My Account — GoStudy",
  description:
    "How to delete your GoStudy account and all of its data, with or without the app installed.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 pt-[72px] pb-[84px]">
        <div className="mx-auto max-w-[840px]">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.16em] text-accent-light hover:text-accent"
          >
            ← BACK TO HOME
          </Link>
          <h1 className="mt-[26px] mb-2.5 text-[clamp(32px,4.4vw,48px)] font-extrabold tracking-[-0.025em] text-heading">
            Delete My Account
          </h1>
          <p className="mb-[52px] max-w-[62ch] text-[17px] leading-relaxed text-muted">
            You can delete your GoStudy account and its data at any time,
            with or without the app installed. Pick whichever route applies
            to you.
          </p>

          <div className="mb-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
            <div
              className="relative px-8 pt-8 pb-[34px]"
              style={{ border: "1px solid rgba(125,211,252,0.26)" }}
            >
              <CornerMarks color="#38BDF8" />
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
                ROUTE A — IN THE APP
              </div>
              <h2 className="mb-[18px] text-xl font-bold text-heading">
                Immediate and permanent
              </h2>
              <ol className="m-0 mb-5 flex list-none flex-col gap-3 p-0">
                <li className="flex gap-3 text-[15px] leading-snug text-[#C7D6E9]">
                  <span className="flex-shrink-0 pt-[3px] font-mono text-[11px] text-accent">
                    01
                  </span>
                  <span>
                    Open GoStudy and go to <strong>Settings</strong>
                  </span>
                </li>
                <li className="flex gap-3 text-[15px] leading-snug text-[#C7D6E9]">
                  <span className="flex-shrink-0 pt-[3px] font-mono text-[11px] text-accent">
                    02
                  </span>
                  <span>
                    Tap <strong>Delete Account</strong>
                  </span>
                </li>
                <li className="flex gap-3 text-[15px] leading-snug text-[#C7D6E9]">
                  <span className="flex-shrink-0 pt-[3px] font-mono text-[11px] text-accent">
                    03
                  </span>
                  <span>
                    Confirm. Your account and all associated data are
                    deleted immediately and permanently.
                  </span>
                </li>
              </ol>
              <p className="m-0 text-sm leading-relaxed text-muted-2">
                There is no recovery window and no undo. Export anything you
                want to keep first.
              </p>
            </div>

            <div
              className="relative px-8 pt-8 pb-[34px]"
              style={{ border: "1px solid rgba(125,211,252,0.26)" }}
            >
              <CornerMarks color="#38BDF8" />
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
                ROUTE B — BY EMAIL
              </div>
              <h2 className="mb-[18px] text-xl font-bold text-heading">
                No app installed?
              </h2>
              <p className="mb-[18px] text-[15px] leading-relaxed text-[#C7D6E9]">
                Email us from — or naming — the address your account is
                registered to, with the subject{" "}
                <strong>&ldquo;Delete my account&rdquo;</strong>. We verify
                ownership, then delete your account and all associated data
                within {deletionDays} business days and confirm by reply.
              </p>
              <a
                href={`mailto:${supportEmail}?subject=Delete%20my%20account`}
                className="inline-block border border-blue bg-blue px-5 py-[13px] text-[15px] font-semibold text-white transition-colors hover:border-blue-dark hover:bg-blue-dark"
              >
                Email a deletion request
              </a>
              <p className="mt-[18px] mb-0 text-[13.5px] leading-relaxed text-muted-2">
                Or message{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  {whatsappNumber}
                </a>{" "}
                on WhatsApp.
              </p>
            </div>
          </div>

          <div className="mb-11 grid gap-px bg-accent-light/16 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            <div className="bg-navy px-[26px] py-[30px]">
              <h2 className="mb-[18px] text-[19px] font-bold text-heading">
                What gets deleted
              </h2>
              <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
                {deletedOnAccountDeletion.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14.5px] leading-snug text-[#C7D6E9]"
                  >
                    <span className="mt-1.5 h-[5px] w-[5px] flex-shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy px-[26px] py-[30px]">
              <h2 className="mb-[18px] text-[19px] font-bold text-heading">
                What we must keep
              </h2>
              <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
                {retainedOnAccountDeletion.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14.5px] leading-snug text-[#C7D6E9]"
                  >
                    <span className="mt-1.5 h-[5px] w-[5px] flex-shrink-0 bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[18px] mb-0 text-[13.5px] leading-relaxed text-muted-2">
                These records are stripped of everything not required by law
                and are never used to contact you or rebuild your profile.
              </p>
            </div>
          </div>

          <p className="m-0 font-mono text-[10.5px] tracking-[0.10em] text-muted-3">
            RETENTION PERIODS AND LEGAL BASIS SHOULD BE CONFIRMED AGAINST THE
            FINAL PRIVACY POLICY BEFORE PUBLISHING.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
