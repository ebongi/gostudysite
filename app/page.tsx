import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bot, Download, LifeBuoy, MessageCircle, WifiOff, Zap } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import NotifyForm from "./components/NotifyForm";
import ContactForm from "./components/ContactForm";
import HeroSlideshow from "./components/HeroSlideshow";
import SectionDivider from "./components/SectionDivider";
import { accentClasses, features, type Accent } from "./lib/features";
import { stats } from "./lib/stats";

export const metadata: Metadata = {
  title: "Coming Soon — GO Study",
  description:
    "GO Study is on its way — course materials, an AI study tutor, and offline access for university students in Cameroon.",
};

const WHATSAPP_URL = "https://wa.me/237682397481";
// TODO: replace with the real Google Play listing once GO Study is published.
const PLAY_STORE_URL = "#";

const whyItems: {
  icon: typeof WifiOff;
  accent: Accent;
  title: string;
  text: string;
}[] = [
  {
    icon: WifiOff,
    accent: "green",
    title: "Offline library, tasks & downloads",
    text: "Materials you've saved stay accessible with no connection at all.",
  },
  {
    icon: Bot,
    accent: "red",
    title: "On-device AI chat, unlimited and free",
    text: "A second AI mode runs on your phone — no data used, no message limits.",
  },
  {
    icon: Zap,
    accent: "yellow",
    title: "Built for low-data phones & slow networks",
    text: "Every screen is designed to stay fast and light on data.",
  },
];

const galleryItems = [
  {
    src: "/appscreenshot.png",
    alt: "GO Study home screen showing departments and the AI assistant tab",
  },
  {
    src: "/Screenshot_20260810_193445.png",
    alt: "GO Study AI Assistant chat giving a step-by-step answer",
  },
  {
    src: "/Screenshot_20260810_193527.png",
    alt: "GO Study departments screen for browsing course materials",
  },
  {
    src: "/Screenshot_20260810_193504.png",
    alt: "GO Study messages screen for chatting with classmates",
  },
];

const fanStyles = [
  "rotate-[-8deg] translate-y-4 z-0",
  "rotate-[-3deg] translate-y-0 z-10",
  "rotate-[3deg] translate-y-0 z-10",
  "rotate-[8deg] translate-y-4 z-0",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden">
          <HeroSlideshow />
          <div className="pointer-events-none relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-up text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  Coming soon to the University of Buea
                </span>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Your entire university, in one app.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85 lg:mx-0">
                  Course materials, an AI study tutor that works offline, and
                  the tools to manage a full semester — built for students
                  in Cameroon. We&rsquo;re putting the finishing touches on
                  it now.
                </p>

                <div className="pointer-events-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover"
                  >
                    Get notified
                  </a>
                  <a
                    href="#screenshots"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    See the app
                  </a>
                </div>
              </div>

              <div className="relative mx-auto flex max-w-md items-center justify-center py-4 lg:py-0">
                <div className="hidden w-[170px] flex-shrink-0 -mr-12 translate-y-6 rotate-[-8deg] sm:block md:w-[190px]">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-surface-alt shadow-xl ring-1 ring-black/10">
                    <Image
                      src="/Screenshot_20260810_193445.png"
                      alt="GO Study AI Assistant chat giving a step-by-step answer"
                      fill
                      sizes="190px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="animate-float relative z-10 w-[210px] rotate-[5deg] md:w-[230px]">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-surface-alt shadow-2xl ring-1 ring-black/10">
                    <Image
                      src="/appscreenshot.png"
                      alt="GO Study home screen showing departments and the AI assistant tab"
                      fill
                      priority
                      sizes="230px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              About GO Study
            </h2>
            <SectionDivider />
            <p className="mx-auto mt-6 max-w-2xl text-muted">
              GO Study is a study app for university students in Cameroon,
              built around how a real semester actually works — course
              materials, an AI tutor, and offline access, starting at the
              University of Buea.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {whyItems.map((item) => {
                const Icon = item.icon;
                const accent = accentClasses[item.accent];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-line bg-surface p-6 text-center shadow-sm"
                  >
                    <span
                      className={`mx-auto grid h-11 w-11 place-items-center rounded-xl ${accent.tint} ${accent.text}`}
                    >
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <span className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-brand-blue-tint bg-brand-blue-tint px-4 py-1.5 text-xs font-semibold text-brand-blue">
              Built at the University of Buea — bilingual, English &amp;
              French
            </span>

            <div className="mt-14 grid grid-cols-2 divide-x divide-y divide-line rounded-3xl border border-line sm:grid-cols-4 sm:divide-y-0">
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

        {/* Features */}
        <section id="features" className="bg-navy-gradient py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Everything for the semester
            </h2>
            <SectionDivider tone="inverted" />
            <p className="mx-auto mt-6 max-w-xl text-white/80">
              All ten core features, in one app.
            </p>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {features.slice(0, 5).map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-3 text-left"
                    >
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="font-semibold text-white">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-sm text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mx-auto hidden w-[220px] lg:block">
                <div className="animate-float relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl">
                  <Image
                    src="/appscreenshot.png"
                    alt="GO Study home screen showing departments and the AI assistant tab"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {features.slice(5, 10).map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-3 text-left"
                    >
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="font-semibold text-white">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-sm text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section id="screenshots" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              A closer look at the app
            </h2>
            <SectionDivider />
            <p className="mx-auto mt-6 max-w-xl text-muted">
              Real screens from GO Study — course materials, the AI tutor,
              and offline access, all in one place.
            </p>

            <div className="mt-16 flex items-end justify-center -space-x-10 pb-4">
              {galleryItems.map((item, i) => (
                <div
                  key={item.src}
                  className={`relative w-[130px] flex-shrink-0 transition-transform duration-300 hover:z-20 hover:-translate-y-3 hover:rotate-0 sm:w-[160px] ${fanStyles[i]}`}
                >
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-4 border-surface bg-surface-alt shadow-xl ring-1 ring-line">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why GO Study */}
        <section id="why" className="bg-surface-alt py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Why we&rsquo;re building this
            </h2>
            <SectionDivider />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Mobile data isn&rsquo;t always available in Cameroon, and it
              isn&rsquo;t always affordable — so the tools students actually
              rely on shouldn&rsquo;t stop working the moment the connection
              does. GO Study started as a way to fix that for students at
              the University of Buea: real course materials, an AI tutor,
              and an offline mode that keeps working with zero data.
            </p>
          </div>
        </section>

        {/* Download + Countdown */}
        <section id="download" className="bg-navy-gradient py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Download available soon
            </h2>
            <SectionDivider tone="inverted" />
            <p className="mx-auto mt-6 max-w-md text-white/80">
              GO Study is in final testing. Here&rsquo;s how you&rsquo;ll get
              it.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Download size={18} />
                Get it on Google Play
              </a>
              <Link
                href="/install"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Download size={18} />
                Download the APK directly
              </Link>
            </div>

            <div className="mt-16 border-t border-white/15 pt-12">
              <p className="text-sm font-semibold tracking-widest text-white/60 uppercase">
                Launching in
              </p>
              <div className="mt-6 rounded-3xl bg-white/10 p-4 backdrop-blur-sm sm:p-6">
                <Countdown />
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold text-white">
                  Want to know the moment we launch?
                </p>
                <div className="mt-4">
                  <NotifyForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Get in touch
              </h2>
              <SectionDivider />
              <p className="mx-auto mt-6 max-w-xl text-muted">
                Questions, feedback, or want to help test? Reach out — we
                read everything.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-8">
                <ContactForm />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface-alt p-6">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-green-tint text-brand-green">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Fastest way to reach us directly.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface-alt p-6">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-blue-tint text-brand-blue">
                    <LifeBuoy size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Support &amp; FAQs
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Common questions about accounts, installs, and more.
                    </p>
                    <Link
                      href="/support"
                      className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:underline"
                    >
                      Visit the Support page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
