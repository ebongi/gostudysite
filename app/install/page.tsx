import type { Metadata } from "next";
import { Download, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "How to Install — GO Study",
  description:
    "Download the GO Study APK for your Android phone and install it step by step.",
};

const APK_DOWNLOAD_URL =
  "https://github.com/ebongi/Ub-Hub/releases/latest/download/GoStudy.apk";

const steps = [
  {
    title: "Download the APK",
    text: "Tap the download button above to get the latest version of GO Study.",
  },
  {
    title: "Open the downloaded file",
    text: "Find it in your notification shade or your Downloads app, then tap it to open.",
  },
  {
    title: "Allow installs from this source",
    text: "Android will likely block the first install. Tap Settings in the warning, turn on \"Allow from this source,\" then go back and try again.",
  },
  {
    title: "Install and open",
    text: "Tap Install, wait for it to finish, then open GO Study and sign in with your student account.",
  },
];

export default function InstallPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-tint bg-brand-blue-tint px-4 py-1.5 text-xs font-semibold text-brand-blue">
            Direct download
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            How to install GO Study
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Prefer to install directly instead of through an app store?
            Download the APK below, then follow the steps to install it.
          </p>
        </section>

        {/* Download */}
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="mx-auto max-w-md px-5 sm:px-8">
            <div className="flex flex-col items-center rounded-3xl border-2 border-brand-blue bg-surface p-8 text-center shadow-sm">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue-tint text-brand-blue">
                <Download size={26} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-foreground">
                GO Study APK
              </h2>
              <p className="mt-1 text-sm text-muted">
                Works on every Android phone.
              </p>
              <a
                href={APK_DOWNLOAD_URL}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-5 py-3.5 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover"
              >
                <Download size={16} />
                Download APK
              </a>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Installing the APK
              </h2>
              <p className="mt-3 text-muted">
                Four quick steps, the same on any Android phone.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand-blue-tint text-sm font-bold text-brand-blue">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-surface-alt p-5">
              <ShieldCheck
                size={18}
                className="mt-0.5 flex-shrink-0 text-brand-green"
              />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  Safe to install.
                </span>{" "}
                These APKs are hosted directly by GO Study — the &ldquo;install
                from unknown sources&rdquo; warning just means the file
                didn&rsquo;t come from an app store, not that it&rsquo;s
                unsafe. Still stuck? See{" "}
                <a href="/support" className="font-semibold text-brand-blue">
                  Support &amp; Contact
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
