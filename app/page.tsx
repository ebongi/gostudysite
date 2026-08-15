import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bot, WifiOff } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import NotifyForm from "./components/NotifyForm";
import HeroSlideshow from "./components/HeroSlideshow";
import { accentClasses, features } from "./lib/features";
import { stats } from "./lib/stats";

export const metadata: Metadata = {
  title: "Coming Soon — GO Study",
  description:
    "GO Study is on its way — course materials, an AI study tutor, and offline access for university students in Cameroon.",
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <HeroSlideshow />
          <div className="pointer-events-none relative z-10 mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 md:py-32">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Coming soon to the University of Buea
            </span>
            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Your entire university, in one app.
            </h1>
            <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Course materials, an AI study tutor that works offline, and the
              tools to manage a full semester — built for students in
              Cameroon. We&rsquo;re putting the finishing touches on it now.
            </p>

            <div className="animate-fade-up pointer-events-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#notify"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover"
              >
                Get notified
              </a>
              <Link
                href="/preview"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                See the app preview
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid grid-cols-2 divide-x divide-y divide-line rounded-3xl border border-line sm:grid-cols-4 sm:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 px-4 py-8 text-center"
                >
                  <span className="text-3xl font-extrabold text-foreground sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-muted sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App preview teaser */}
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                A closer look
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                The app taking shape
              </h2>
              <p className="mt-3 text-muted">
                Real screens from GO Study — course materials, the AI tutor,
                and offline access, all in one place.
              </p>
            </div>

            <div className="relative mx-auto mt-14 flex max-w-md items-center justify-center py-8">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-tint opacity-70 blur-3xl"
              />

              <div className="hidden w-[170px] flex-shrink-0 -mr-12 rotate-[-8deg] translate-y-6 sm:block md:w-[190px]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[6px] border-surface bg-surface-alt shadow-xl ring-1 ring-line">
                  <Image
                    src="/Screenshot_20260810_193445.png"
                    alt="GO Study AI Assistant chat giving a step-by-step answer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="animate-float relative z-10 w-[210px] rotate-[5deg] md:w-[230px]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[6px] border-surface bg-surface-alt shadow-2xl ring-1 ring-line">
                  <Image
                    src="/appscreenshot.png"
                    alt="GO Study home screen showing departments and the AI assistant tab"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-6 top-6 z-20 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green-tint text-brand-green">
                  <WifiOff size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Offline mode
                  </p>
                  <p className="text-[11px] text-subtle">No data needed</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-8 z-20 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-red-tint text-brand-red">
                  <Bot size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    AI Tutor
                  </p>
                  <p className="text-[11px] text-subtle">Step-by-step help</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center">
              <Link
                href="/preview"
                className="text-sm font-semibold text-brand-blue hover:underline"
              >
                See the full app preview
              </Link>
            </p>
          </div>
        </section>

        {/* What's inside */}
        <section id="features" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Core features
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                What&rsquo;s inside
              </h2>
              <p className="mt-3 text-muted">
                Everything below is being built and tested right now.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                const accent = accentClasses[feature.accent];
                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-line bg-surface p-7 shadow-sm transition-shadow hover:shadow-md"
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
          </div>
        </section>

        {/* Countdown */}
        <section id="notify" className="bg-surface-alt py-16 md:py-24">
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

      <Footer />
    </>
  );
}
