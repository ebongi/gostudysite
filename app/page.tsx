"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Bot,
  BookOpen,
  Bell,
  CalendarDays,
  ChevronRight,
  Download,
  MessageSquare,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  WifiOff,
  Globe,
  Layout,
  Layers,
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shellStyles = darkMode
    ? "bg-[#030014] text-slate-50"
    : "bg-[#f8fafc] text-slate-900";

  const mutedText = darkMode ? "text-slate-400" : "text-slate-500";
  const panel = darkMode
    ? "bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl"
    : "bg-white border border-slate-200 shadow-sm";
  const accentGradient = "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400";

  return (
    <div className={`${shellStyles} ${darkMode ? 'dark-theme' : 'light-theme'} min-h-screen transition-colors duration-700 selection:bg-blue-500/30 selection:text-white`}>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 transition-colors duration-1000 ${darkMode ? 'bg-blue-600' : 'bg-blue-200'}`} />
        <div className={`absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] rounded-full blur-[120px] opacity-15 transition-colors duration-1000 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-200'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] ${darkMode ? 'invert-0' : 'invert'}`}
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM6 48c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM54 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM6 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      </div>

      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? (darkMode ? "bg-black/60 border-b border-white/10 backdrop-blur-xl py-3" : "bg-white/80 border-b border-slate-200 backdrop-blur-xl py-3") : "bg-transparent py-6"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`p-2 rounded-xl ${accentGradient} shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500`}>
               <Layers className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none italic">
                GO<span className="text-blue-500">STUDY</span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedText}`}>Student Hub</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {["Features", "Download", "Docs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${mutedText} hover:text-blue-500`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className={`h-6 w-px ${darkMode ? 'bg-white/10' : 'bg-slate-200'} hidden md:block`} />
            <button
              onClick={() => setDarkMode((v) => !v)}
              className={`p-2 rounded-full transition-all duration-300 border ${darkMode ? "border-white/10 text-amber-400 hover:bg-white/5" : "border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="mx-auto max-w-7xl md:px-12">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
              <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className={`inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border ${darkMode ? 'border-blue-500/20 bg-blue-500/5 text-blue-400' : 'border-blue-200 bg-blue-50 text-blue-600'} text-[10px] font-black uppercase tracking-[0.2em]`}>
                  <Sparkles size={12} className="animate-pulse" />
                  Redefining Student Life
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                  Academic excellence, <br />
                  <span className={`text-transparent bg-clip-text ${accentGradient}`}>digitally mastered.</span>
                </h1>

                <p className={`max-w-xl text-lg md:text-xl leading-relaxed ${mutedText}`}>
                  GoStudy bridges the gap between students and their resources. A unified ecosystem for notes, messaging, and AI assistance.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#download"
                    className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20`}
                  >
                    <div className={`absolute inset-0 ${accentGradient}`} />
                    <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                      <Download size={18} />
                      Download APK
                    </span>
                  </a>
                    <a
                      href="https://github.com/ebongi/Ub-Hub.git"
                      target="_blank"
                      className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border transition-all duration-300 uppercase tracking-widest text-xs ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'}`}
                    >
                      <Globe size={18} />
                      GitHub
                    </a>
                </div>

                <div className="flex items-center gap-6 pt-6">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`w-10 h-10 rounded-full border-2 ${darkMode ? 'border-black bg-slate-800' : 'border-white bg-slate-200'} flex items-center justify-center text-[10px] font-bold`}>
                           {i}
                        </div>
                      ))}
                   </div>
                   <div className={`text-[11px] font-bold uppercase tracking-widest ${mutedText}`}>
                      Joined by <span className={darkMode ? 'text-white' : 'text-slate-900'}>5,000+</span> UB Students
                   </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end perspective-1000">
                <div className="absolute -inset-10 bg-blue-500/20 blur-[120px] rounded-full animate-pulse-slow" />
                <div
                  className={`relative w-[280px] md:w-[340px] aspect-[9/19] rounded-[3.5rem] p-3 border-[10px] transition-all duration-1000 hover:rotate-2 hover:scale-105 ${darkMode ? "border-slate-900 bg-slate-950 shadow-[0_50px_100px_rgba(0,0,0,0.8)]" : "border-slate-100 bg-white shadow-2xl"}`}
                >
                  <div className={`relative h-full w-full rounded-[2.5rem] overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                    <Image
                      src="/appscreenshot.png"
                      alt="GoStudy Mobile Interface"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Micro-Cards */}
                <div className={`absolute -left-8 top-1/4 p-4 rounded-2xl ${panel} shadow-2xl animate-float hidden xl:block`}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500"><Bot size={20} /></div>
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-wider">AI Analysis</div>
                         <div className={`text-[8px] font-bold ${mutedText}`}>Processing Lecture Notes...</div>
                      </div>
                   </div>
                </div>
                <div className={`absolute -right-4 bottom-1/4 p-4 rounded-2xl ${panel} shadow-2xl animate-float-delayed hidden xl:block`}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500"><ShieldCheck size={20} /></div>
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-wider">Verified</div>
                         <div className={`text-[8px] font-bold ${mutedText}`}>Official UB Department Sync</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="relative py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-12 relative">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em]">Precision Engineering</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">Features for the focused.</h2>
              <p className={`text-lg ${mutedText}`}>Everything you need to navigate the academic landscape of the University of Buea.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className={`group relative p-8 rounded-[2.5rem] ${panel} hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2`}
                  >
                    <div className={`absolute inset-0 rounded-[2.5rem] ${accentGradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                    <div className="mb-8 inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                      {feature.title}
                      <ChevronRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className={`leading-relaxed text-sm ${mutedText} group-hover:text-white/80 transition-colors`}>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* User Flow Section */}
        <section className="py-32 relative">
           <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className={`rounded-[3rem] overflow-hidden ${panel} border-white/[0.05]`}>
                 <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-16 space-y-8">
                       <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">Streamlined <br />Workflow</h2>
                       <div className="space-y-6">
                          {steps.map((step, i) => (
                             <div key={i} className="flex gap-6 group">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-300 ${darkMode ? 'bg-white/5 border border-white/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                   0{i+1}
                                </div>
                                <div>
                                   <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                   <p className={`text-sm ${mutedText}`}>{step.description}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className={`relative p-8 md:p-16 flex flex-col justify-center ${darkMode ? 'bg-gradient-to-br from-blue-600/20 to-indigo-600/20' : 'bg-slate-50'}`}>
                       <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
                       <div className="relative space-y-6">
                          <h3 className="text-2xl font-black uppercase italic tracking-wider">Why UB Hub?</h3>
                          <ul className="space-y-4">
                             {[
                               { icon: Globe, text: "Optimized for local network conditions" },
                               { icon: ShieldCheck, text: "Secure, department-verified resources" },
                               { icon: Layout, text: "Interface designed for high-stress revision" }
                             ].map((item, i) => (
                               <li key={i} className="flex items-center gap-4 text-sm font-bold">
                                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><item.icon size={16} /></div>
                                  {item.text}
                               </li>
                             ))}
                          </ul>
                          <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-black/40 border border-white/5' : 'bg-white shadow-xl'}`}>
                             <p className="italic text-sm leading-relaxed mb-4 opacity-80">
                            &quot;This app changed how we share past questions. No more hunting through WhatsApp groups.&quot;
                          </p>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-black uppercase">JD</div>
                                <div className="text-xs font-bold tracking-widest uppercase">Junior Dev • Level 400</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA / Download Section */}
        <section id="download" className="mx-auto max-w-5xl px-6 pb-32">
          <div className={`relative overflow-hidden rounded-[3rem] p-8 md:p-16 text-center ${darkMode ? 'bg-black border border-white/10' : 'bg-slate-900 text-white shadow-2xl'}`}>
            <div className={`absolute inset-0 ${accentGradient} opacity-10`} />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Step into the future.</h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-300'}`}>
                Join thousands of students optimizing their study workflow today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1ES5nqVYssG--PGQ5YAQCI9fDcqjdGEkD"
                  className="group flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                >
                  <Download size={20} />
                  Download v1.0 APK
                </a>
              </div>
              <div className="flex items-center justify-center gap-8 opacity-50">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><WifiOff size={14} /> Offline Ready</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={14} /> Safe & Verified</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`relative border-t py-12 ${darkMode ? "border-white/5 bg-black/40" : "border-slate-200 bg-slate-50"} backdrop-blur-md`}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
             <Layers size={18} />
             <span className="text-xs font-black uppercase tracking-[0.2em]">GoStudy Hub</span>
          </div>
          <p className={`text-xs font-bold uppercase tracking-widest ${mutedText}`}>
            &copy; {new Date().getFullYear()} Jovial Labs • Precision Student Tools
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className={`hover:text-blue-500 transition-colors ${mutedText}`}><Globe size={20} /></a>
             <a href="#" className={`hover:text-blue-500 transition-colors ${mutedText}`}><Globe size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
