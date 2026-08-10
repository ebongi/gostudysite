import Image from "next/image";
import {
  BookOpen,
  Bot,
  ClipboardList,
  Download,
  Library,
  MessageCircle,
  MessageCircleQuestion,
  Newspaper,
  ShieldCheck,
  ShoppingBag,
  Timer,
  TrendingUp,
  WifiOff,
  Zap,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// TODO: replace with the real Google Play listing once GO Study is published.
const PLAY_STORE_URL = "#";
// TODO: swap in the real support WhatsApp number before launch.
const WHATSAPP_URL = "https://wa.me/237000000000";

type Accent = "blue" | "red" | "yellow" | "green";

const accentClasses: Record<Accent, { tint: string; text: string }> = {
  blue: { tint: "bg-brand-blue-tint", text: "text-brand-blue" },
  red: { tint: "bg-brand-red-tint", text: "text-brand-red" },
  yellow: { tint: "bg-brand-yellow-tint", text: "text-brand-yellow" },
  green: { tint: "bg-brand-green-tint", text: "text-brand-green" },
};

const features: {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: Accent;
}[] = [
  {
    icon: BookOpen,
    title: "Course Materials & Past Papers",
    description:
      "Browse notes and past exam questions by faculty and department, and download the ones you need for revision.",
    accent: "blue",
  },
  {
    icon: Bot,
    title: "AI Study Tutor",
    description:
      "Ask a question and get step-by-step help, not just an answer. Renders math with LaTeX and reads code properly.",
    accent: "red",
  },
  {
    icon: WifiOff,
    title: "Offline AI Chat",
    description:
      "A second AI mode that runs fully on your phone — no internet needed, no usage limits, no data cost.",
    accent: "green",
  },
  {
    icon: ClipboardList,
    title: "AI Study Plans & Quizzes",
    description:
      "Get a study schedule built around your courses, or turn any PDF into a practice quiz in a few taps.",
    accent: "yellow",
  },
  {
    icon: MessageCircleQuestion,
    title: "UB Support Bot",
    description:
      "Ask about registry deadlines, fees, or admin procedures and get a straight answer without the queue.",
    accent: "blue",
  },
  {
    icon: Timer,
    title: "Tasks, Exams & Focus Timer",
    description:
      "Keep a task list, track your exam schedule, and run focus sessions built around the academic calendar.",
    accent: "red",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracker",
    description:
      "Log your grades and see how your average is moving across the semester.",
    accent: "green",
  },
  {
    icon: Library,
    title: "Offline Library",
    description:
      "Save the materials you're using right now so they're there when your connection isn't.",
    accent: "yellow",
  },
  {
    icon: ShoppingBag,
    title: "Student Marketplace",
    description:
      "Buy and sell textbooks and course materials directly with other students on campus.",
    accent: "blue",
  },
  {
    icon: Newspaper,
    title: "News Feed",
    description:
      "University announcements and campus news, in one feed instead of scattered across WhatsApp groups.",
    accent: "red",
  },
];

const galleryItems: {
  label: string;
  image: string;
  alt: string;
}[] = [
  {
    label: "Home",
    image: "/appscreenshot.png",
    alt: "GO Study home screen showing departments and the AI assistant tab",
  },
  {
    label: "AI Study Tutor",
    image: "/Screenshot_20260810_193445.png",
    alt: "GO Study AI Assistant chat giving a step-by-step answer",
  },
  {
    label: "Course Materials",
    image: "/Screenshot_20260810_193527.png",
    alt: "GO Study departments screen for browsing course materials",
  },
  {
    label: "Messages",
    image: "/Screenshot_20260810_193504.png",
    alt: "GO Study messages screen for chatting with classmates",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="animate-fade-up space-y-7">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue-tint bg-brand-blue-tint px-4 py-1.5 text-xs font-semibold text-brand-blue">
                Currently live at the University of Buea
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Your entire university,
                <br className="hidden sm:block" /> in one app.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Course materials and past papers by department, an AI tutor
                for step-by-step help, and offline access — so a bad network
                day doesn&rsquo;t cost you a study session.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={PLAY_STORE_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover"
                >
                  <Download size={18} />
                  Download on Google Play
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-alt"
                >
                  <MessageCircle size={18} />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[320px]">
              <div className="animate-float relative aspect-[9/19] w-full overflow-hidden rounded-[2.75rem] border-8 border-surface bg-surface-alt shadow-2xl ring-1 ring-line">
                <Image
                  src="/appscreenshot.png"
                  alt="GO Study home screen showing departments and the AI assistant tab"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute -left-6 top-10 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:flex">
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

              <div className="absolute -right-4 bottom-14 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-red-tint text-brand-red">
                  <Bot size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    AI Tutor
                  </p>
                  <p className="text-[11px] text-subtle">
                    Step-by-step help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core features */}
        <section id="features" className="bg-surface-alt py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Everything for the semester, in your pocket
              </h2>
              <p className="mt-4 text-lg text-muted">
                Built around what students actually need day to day —
                materials, help when you&rsquo;re stuck, and a way to keep
                track of it all.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Why offline-first */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                  Built for real connectivity
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Made for how students in Cameroon actually get online
                </h2>
                <p className="text-lg leading-relaxed text-muted">
                  Mobile data isn&rsquo;t always available, and it isn&rsquo;t
                  always affordable. That&rsquo;s why GO Study&rsquo;s core
                  features — your course library, task manager, and offline
                  AI chat — work with zero connection. When you do have data
                  and want the full AI tutor, it&rsquo;s there too.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {[
                  {
                    icon: WifiOff,
                    accent: "green" as Accent,
                    title: "Offline library, tasks & downloads",
                    text: "Materials you've saved stay accessible with no connection at all.",
                  },
                  {
                    icon: Bot,
                    accent: "red" as Accent,
                    title: "On-device AI chat, unlimited and free",
                    text: "A second AI mode runs on your phone — no data used, no message limits.",
                  },
                  {
                    icon: Zap,
                    accent: "yellow" as Accent,
                    title: "Built for low-data phones & slow networks",
                    text: "Every screen is designed to stay fast and light on data.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const accent = accentClasses[item.accent];
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm"
                    >
                      <span
                        className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl ${accent.tint} ${accent.text}`}
                      >
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-muted">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual strip */}
        <section className="bg-brand-blue-tint py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:text-left sm:px-8">
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-surface text-brand-blue shadow-sm">
              <MessageCircle size={22} />
            </span>
            <div>
              <p className="font-bold text-foreground">
                Available in English and French
              </p>
              <p className="text-sm text-muted">
                Built for Cameroon&rsquo;s bilingual student population —
                switch the app language anytime in Settings.
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-surface-alt py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                A closer look at the app
              </h2>
              <p className="mt-4 text-lg text-muted">
                A few real screens from GO Study — more are on the way.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {galleryItems.map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-4 border-surface bg-surface-alt shadow-sm ring-1 ring-line">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-cta px-8 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-cta-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cta-foreground/85">
              Download GO Study and find your first past paper in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-foreground px-7 py-3.5 text-sm font-semibold text-cta shadow-sm transition-transform hover:scale-105"
              >
                <Download size={18} />
                Download on Google Play
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cta-foreground/20 px-7 py-3.5 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-foreground/10"
              >
                <MessageCircle size={18} />
                Chat with us on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-cta-foreground/75">
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} /> Delete your data anytime
              </span>
              <span className="flex items-center gap-2">
                <WifiOff size={14} /> Works offline
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
