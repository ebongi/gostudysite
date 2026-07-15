"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Bot,
  BookOpen,
  Bell,
  CalendarDays,
  ChevronRight,
  Download,
  FileText,
  MessageSquare,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  WifiOff,
} from "lucide-react";

type FeatureCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type StepCard = {
  title: string;
  description: string;
};

const coreFeatures: FeatureCard[] = [
  {
    icon: Bot,
    title: "AI Study Assistant",
    description:
      "Get instant help with course questions, summaries, and study guidance without leaving the app.",
  },
  {
    icon: MessageSquare,
    title: "Student Messaging",
    description:
      "Chat with classmates, share updates, and keep group conversations organized by course or department.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description:
      "Store lecture notes, past questions, and study packs in one place for faster revision.",
  },
  {
    icon: Bell,
    title: "Announcements",
    description:
      "Show important departmental updates, deadlines, and notices where students will actually see them.",
  },
  {
    icon: CalendarDays,
    title: "Study Planning",
    description:
      "Track sessions, deadlines, and revision goals so students can stay on top of the semester.",
  },
  {
    icon: WifiOff,
    title: "Offline APK Access",
    description:
      "Let students install the app directly from the site and keep a lightweight entry point for the mobile version.",
  },
];

const steps: StepCard[] = [
  {
    title: "Download",
    description: "Use the APK link on the site to install the app on Android.",
  },
  {
    title: "Sign in",
    description: "Create a student account and connect to your department space.",
  },
  {
    title: "Study",
    description: "Use resources, chat, reminders, and AI help in one workflow.",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const shellStyles = darkMode
    ? "bg-[#08101c] text-white"
    : "bg-slate-50 text-slate-900";

  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";
  const panel = darkMode ? "bg-[#111b2d] border border-slate-800" : "bg-white border border-slate-200";
  const panelSoft = darkMode ? "bg-[#0f1728]" : "bg-slate-100";

  return (
    <div className={`${shellStyles} min-h-screen transition-colors duration-300`}>
      <nav
        className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? "bg-[#08101c]/90 border-b border-slate-800" : "bg-white/90 border-b border-slate-200"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              Go<span className="text-blue-500">Study</span>
            </div>
            <p className={`text-xs ${mutedText}`}>Student hub for the University of Buea</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#features"
              className={`hidden rounded-full px-4 py-2 text-sm font-medium transition md:inline-flex ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
            >
              Features
            </a>
            <a
              href="#download"
              className={`hidden rounded-full px-4 py-2 text-sm font-medium transition md:inline-flex ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
            >
              Download
            </a>
            <button
              onClick={() => setDarkMode((value) => !value)}
              className={`rounded-full border p-2 transition ${darkMode ? "border-slate-700 text-amber-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
              aria-label="Toggle theme"
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <header className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 md:px-16 md:py-20">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex flex-wrap gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${darkMode ? "bg-blue-500/10 text-blue-300" : "bg-blue-50 text-blue-700"}`}
              >
                <Sparkles size={16} />
                Built for students
              </span>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${darkMode ? "bg-emerald-500/10 text-emerald-300" : "bg-emerald-50 text-emerald-700"}`}
              >
                <ShieldCheck size={16} />
                APK download ready
              </span>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-700"}`}
              >
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                {darkMode ? "Dark theme" : "Light theme"}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              A single app for <span className="text-blue-500">notes, chat, updates, and study help</span>.
            </h1>

            <p className={`max-w-2xl text-lg md:text-xl ${mutedText}`}>
              GoStudy is designed as a practical student hub: access resources, coordinate with classmates, receive
              department notices, and keep your revision on track from one clean interface.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <Download size={18} />
                Download APK
              </a>
              <a
                href="https://github.com/ebongi/Ub-Hub.git"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 ${darkMode ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-100"}`}
              >
                View on GitHub
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                { value: "Resources", label: "Past questions and notes" },
                { value: "Chat", label: "Class and group messaging" },
                { value: "AI", label: "Study assistance on demand" },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl p-4 ${panel}`}>
                  <div className="text-xl font-bold">{item.value}</div>
                  <div className={`mt-1 text-sm ${mutedText}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
            <div
              className={`relative w-[310px] overflow-hidden rounded-[3rem] border p-3 shadow-2xl md:w-[360px] ${darkMode ? "border-slate-700 bg-[#050b14] shadow-[0_30px_80px_rgba(0,0,0,0.55)]" : "border-slate-200 bg-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.15)]"}`}
            >
              <div
                className={`absolute left-1/2 top-4 z-20 h-5 w-20 -translate-x-1/2 rounded-full ${darkMode ? "bg-[#08101c]" : "bg-white"}`}
              />
              <div className={`relative aspect-[9/18.5] overflow-hidden rounded-[2.2rem] ${panelSoft}`}>
                <Image
                  src="/appscreenshot.png"
                  alt="GoStudy app screenshot"
                  fill
                  priority
                  sizes="(max-width: 768px) 310px, 360px"
                  className="object-cover"
                />
              </div>
              <div className={`absolute -right-1 top-24 h-14 w-1 rounded-l-full ${darkMode ? "bg-slate-700" : "bg-slate-400"}`} />
              <div className={`absolute -left-1 top-36 h-10 w-1 rounded-r-full ${darkMode ? "bg-slate-700" : "bg-slate-400"}`} />
            </div>
          </div>
        </header>

        <section id="features" className={`py-20 ${darkMode ? "bg-[#0d1626]" : "bg-slate-100"}`}>
          <div className="mx-auto max-w-7xl px-6 md:px-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Features that fit the product
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Everything the app should do for students</h2>
              <p className={`mt-4 text-base md:text-lg ${mutedText}`}>
                The experience should feel like a student dashboard, not a generic marketing page. These are the
                features that make sense for an academic app.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className={`rounded-3xl p-6 transition hover:-translate-y-1 ${panel}`}
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className={`mt-3 leading-relaxed ${mutedText}`}>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className={`rounded-[2rem] p-8 md:p-10 ${panel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Suggested user flow
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Simple actions, clear outcome</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => (
                  <div key={step.title} className={`rounded-2xl p-5 ${panelSoft}`}>
                    <div className="mb-3 text-sm font-semibold text-blue-500">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${mutedText}`}>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-[2rem] p-8 md:p-10 ${darkMode ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white" : "bg-gradient-to-br from-blue-600 to-indigo-700 text-white"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Why this design works
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">It matches the actual product</h2>
              <ul className="mt-6 space-y-4 text-blue-50">
                <li className="flex gap-3">
                  <FileText className="mt-1 shrink-0" size={18} />
                  The app promotes resources, announcements, and revision tools instead of generic app-store copy.
                </li>
                <li className="flex gap-3">
                  <MessageSquare className="mt-1 shrink-0" size={18} />
                  Messaging and collaboration are surfaced as core actions, since they are central to student usage.
                </li>
                <li className="flex gap-3">
                  <WifiOff className="mt-1 shrink-0" size={18} />
                  The APK download is obvious and directly tied to the local file in `public/`.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-5xl px-6 pb-20 md:px-16">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-white shadow-2xl md:px-14 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                  Download section
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Install the app and start using it</h2>
                {/*<p className="mt-4 max-w-2xl text-base text-blue-100 md:text-lg">*/}
                {/*  The button below downloads the APK from `public/gostudy_v1.apk`. If you rename that file later,*/}
                {/*  update the path in this page as well.*/}
                {/*</p>*/}
              </div>

              <a
                href="https://drive.google.com/uc?export=download&id=1ES5nqVYssG--PGQ5YAQCI9fDcqjdGEkD"
                download="gostudy_v1.apk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-900 transition hover:scale-105"
              >
                <Download size={22} />
                Download Android APK
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t py-10 text-center text-sm ${darkMode ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-600"}`}>
        <p>&copy; {new Date().getFullYear()} Jovial Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
