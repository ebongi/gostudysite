import type { Metadata } from "next";
import {
  BadgeCheck,
  CheckCircle2,
  Download,
  Info,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "How to Install — GO Study",
  description:
    "Download the right GO Study APK for your Android phone and install it step by step.",
};

// TODO: replace with the real hosted APK download URLs before launch.
const APK_ARM64_URL = "#";
const APK_ARMEABI_URL = "#";
const APK_X86_64_URL = "#";

type Accent = "blue" | "green" | "yellow";

const accentClasses: Record<Accent, { tint: string; text: string }> = {
  blue: { tint: "bg-brand-blue-tint", text: "text-brand-blue" },
  green: { tint: "bg-brand-green-tint", text: "text-brand-green" },
  yellow: { tint: "bg-brand-yellow-tint", text: "text-brand-yellow" },
};

const apkVariants: {
  id: string;
  size: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  accent: Accent;
  recommended: boolean;
  url: string;
}[] = [
  {
    id: "arm64-v8a",
    size: "180.4 MB",
    subtitle: "Recommended for most phones",
    description:
      "The right fit for almost every Android phone sold in the last several years — including popular models from Tecno, Infinix, itel, and Samsung. This build includes the on-device AI model, so Offline AI Chat works with zero internet and no data cost.",
    icon: Smartphone,
    accent: "blue",
    recommended: true,
    url: APK_ARM64_URL,
  },
  {
    id: "armeabi-v7a",
    size: "18.2 MB",
    subtitle: "For older or budget phones (32-bit)",
    description:
      "For older or entry-level Android phones running a 32-bit processor. The full app works, but this build doesn't include the on-device AI model — the AI Study Tutor needs an internet connection instead.",
    icon: Smartphone,
    accent: "green",
    recommended: false,
    url: APK_ARMEABI_URL,
  },
  {
    id: "x86_64",
    size: "28.6 MB",
    subtitle: "For emulators & Intel-based tablets",
    description:
      "Not for typical phones. Use this if you're running GO Study on an Android emulator (like BlueStacks) or an Intel-based tablet. Same as armeabi-v7a, the AI Study Tutor works online only.",
    icon: MonitorSmartphone,
    accent: "yellow",
    recommended: false,
    url: APK_X86_64_URL,
  },
];

const steps = [
  {
    title: "Download the APK that matches your phone",
    text: "Not sure which one? arm64-v8a is correct for almost every Android phone made in the last several years — see the guide above.",
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
            Download the APK that matches your phone below, then follow the
            steps to install it.
          </p>
        </section>

        {/* Which APK */}
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Which APK do I need?
              </h2>
              <p className="mt-3 text-muted">
                Android phones use different processor architectures. Pick
                the one that matches your phone — if you&rsquo;re not sure,
                start with arm64-v8a.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {apkVariants.map((variant) => {
                const Icon = variant.icon;
                const accent = accentClasses[variant.accent];
                return (
                  <div
                    key={variant.id}
                    className={`relative flex flex-col rounded-3xl border bg-surface p-7 shadow-sm ${
                      variant.recommended
                        ? "border-2 border-brand-blue"
                        : "border-line"
                    }`}
                  >
                    {variant.recommended && (
                      <span className="absolute -top-3 left-7 flex items-center gap-1 rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">
                        <BadgeCheck size={14} />
                        Recommended
                      </span>
                    )}
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.tint} ${accent.text}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-mono text-lg font-bold text-foreground">
                      {variant.id}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-muted">
                      {variant.subtitle}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {variant.description}
                    </p>
                    <a
                      href={variant.url}
                      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                        variant.recommended
                          ? "bg-cta text-cta-foreground hover:bg-cta-hover"
                          : "border border-line text-foreground hover:bg-surface-alt"
                      }`}
                    >
                      <Download size={16} />
                      Download ({variant.size})
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-line bg-surface p-5 text-left">
              <Info size={18} className="mt-0.5 flex-shrink-0 text-brand-blue" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  Still not sure?
                </span>{" "}
                Nearly every Android phone sold in the last few years —
                including the Tecno, Infinix, and itel models most common in
                Cameroon — uses arm64-v8a. Try that one first; if your phone
                says it&rsquo;s incompatible, use armeabi-v7a instead.
              </p>
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

        {/* Feature note */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
              <CheckCircle2
                size={18}
                className="mt-0.5 flex-shrink-0 text-brand-blue"
              />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  About Offline AI Chat:
                </span>{" "}
                only the arm64-v8a build includes the on-device AI model.
                On armeabi-v7a and x86_64, the AI Study Tutor still works
                but needs an internet connection.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
