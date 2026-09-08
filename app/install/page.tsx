import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CornerMarks from "../components/CornerMarks";
import { apkDownloadUrl, playStoreUrl } from "../lib/content";

export const metadata: Metadata = {
  title: "Install the APK — GoStudy",
  description:
    "Download the GoStudy APK directly and install it step by step, as an alternative to Google Play.",
};

const steps = [
  {
    n: "01",
    title: "Download the APK",
    text: "Tap the download button above to get the latest version of GoStudy.",
  },
  {
    n: "02",
    title: "Open the downloaded file",
    text: "Find it in your notification shade or your Downloads app, then tap it to open.",
  },
  {
    n: "03",
    title: "Allow installs from this source",
    text: 'Android will likely block the first install. Tap Settings in the warning, turn on "Allow from this source," then go back and try again.',
  },
  {
    n: "04",
    title: "Install and open",
    text: "Tap Install, wait for it to finish, then open GoStudy and sign in with your student account.",
  },
];

export default function InstallPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 pt-[72px] pb-[84px]">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.16em] text-accent-light hover:text-accent"
          >
            ← BACK TO HOME
          </Link>
          <div className="mt-[26px] mb-2.5 font-mono text-[11px] tracking-[0.20em] text-accent-light">
            DIRECT DOWNLOAD
          </div>
          <h1 className="mb-4 text-[clamp(32px,4.4vw,48px)] font-extrabold tracking-[-0.025em] text-heading">
            Install the APK directly
          </h1>
          <p className="mb-[52px] max-w-[58ch] text-[17px] leading-relaxed text-muted">
            GoStudy is on{" "}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Google Play
            </a>{" "}
            now — that&rsquo;s the easiest way to get it and stay updated.
            Prefer to sideload instead? Download the APK below and follow the
            steps.
          </p>

          <div
            className="relative mb-14 flex flex-col items-center px-8 py-9 text-center"
            style={{ border: "1px solid #38BDF8" }}
          >
            <CornerMarks color="#38BDF8" />
            <h2 className="text-xl font-bold text-heading">GoStudy APK</h2>
            <p className="mt-1 text-sm text-muted-2">
              Works on every Android phone.
            </p>
            <a
              href={apkDownloadUrl}
              className="mt-6 inline-block border border-blue bg-blue px-7 py-[15px] text-sm font-semibold text-white transition-colors hover:border-blue-dark hover:bg-blue-dark"
            >
              Download APK
            </a>
          </div>

          <h2 className="mb-2 text-2xl font-bold tracking-[-0.015em] text-heading">
            Installing the APK
          </h2>
          <p className="mb-9 text-muted">
            Four quick steps, the same on any Android phone.
          </p>

          <div className="mb-9 flex flex-col gap-px bg-accent-light/16">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4 bg-navy px-6 py-5">
                <span className="flex-shrink-0 font-mono text-[11px] text-accent">
                  {step.n}
                </span>
                <div>
                  <p className="m-0 font-semibold text-heading">
                    {step.title}
                  </p>
                  <p className="mt-1 mb-0 text-sm leading-relaxed text-muted-2">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="m-0 text-sm leading-relaxed text-muted-2">
            <span className="font-semibold text-heading">
              Safe to install.
            </span>{" "}
            This APK is hosted directly by GoStudy — the &ldquo;install from
            unknown sources&rdquo; warning just means the file didn&rsquo;t
            come from an app store, not that it&rsquo;s unsafe. Still stuck?
            See{" "}
            <Link href="/#support" className="font-semibold text-accent hover:underline">
              Support
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
