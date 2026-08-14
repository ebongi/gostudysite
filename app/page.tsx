import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, MessageCircle } from "lucide-react";
import ThemeToggle from "./components/ThemeToggle";
import Countdown from "./components/Countdown";
import NotifyForm from "./components/NotifyForm";
import { accentClasses, features } from "./lib/features";

export const metadata: Metadata = {
  title: "Coming Soon — GO Study",
  description:
    "GO Study is on its way — course materials, an AI study tutor, and offline access for university students in Cameroon.",
};

const WHATSAPP_URL = "https://wa.me/237682397481";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cta text-cta-foreground">
            <GraduationCap size={20} />
          </span>
          GO <span className="text-brand-blue">Study</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1">
        {/* Intro */}
        <section className="mx-auto max-w-2xl px-5 pt-10 text-center sm:px-8 md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-tint bg-brand-blue-tint px-4 py-1.5 text-xs font-semibold text-brand-blue">
            Coming soon to the University of Buea
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Your entire university, in one app.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Course materials, an AI study tutor that works offline, and the
            tools to manage a full semester — built for students in
            Cameroon. We&rsquo;re putting the finishing touches on it now.
          </p>
        </section>

        {/* What's inside */}
        <section id="features" className="mt-14 bg-surface-alt py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              What&rsquo;s inside
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted">
              Everything below is being built and tested right now.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                const accent = accentClasses[feature.accent];
                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-line bg-surface p-7 shadow-sm"
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.tint} ${accent.text}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="mt-10 text-center text-sm text-muted">
              Want the full walkthrough?{" "}
              <Link
                href="/preview"
                className="font-semibold text-brand-blue hover:underline"
              >
                See the app preview
              </Link>
            </p>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Launching in
            </h2>

            <div className="mt-8">
              <Countdown />
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold text-foreground">
                Want to know the moment we launch?
              </p>
              <div className="mt-4">
                <NotifyForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} GO Study. Made for students in
            Cameroon.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted">
            <Link href="/privacy" className="hover:text-brand-blue">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-blue">
              Terms
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-brand-blue"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
