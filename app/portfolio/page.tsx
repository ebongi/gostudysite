import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Cloud,
  Contact,
  Database,
  GraduationCap,
  Layers,
  Link2,
  Mail,
  MessageCircle,
  Server,
  Smartphone,
  Terminal,
  User,
} from "lucide-react";
import FloatingThemeToggle from "../components/FloatingThemeToggle";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioCard, {
  type Chip,
  type ChipGroup,
} from "../components/PortfolioCard";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio — Ebong Sume",
  description:
    "Ebong Sume — Software & AI Engineer building GO Study. Apps, stack, and how to get in touch.",
};

const GITHUB_URL = "https://github.com/ebongi";
const LINKEDIN_URL = "https://www.linkedin.com/in/ebong-sume-4b0816298/";
const EMAIL = "sumeebong7@gmail.com";

const techStackGroups: ChipGroup[] = [
  {
    label: "Mobile Development",
    icon: Smartphone,
    chips: ["Flutter", "Dart", "Java", "Kotlin"],
  },
  {
    label: "Backend & Cloud",
    icon: Cloud,
    chips: ["Supabase", "Firebase"],
  },
  {
    label: "Web & APIs",
    icon: Server,
    chips: ["Node.js", "Express", "Python"],
  },
  {
    label: "Databases",
    icon: Database,
    chips: ["SQLite", "PostgreSQL"],
  },
  {
    label: "Operating System",
    icon: Terminal,
    chips: ["Linux (Ubuntu)"],
  },
];

const cards: {
  icon: typeof Smartphone;
  iconClassName: string;
  eyebrow: string;
  title: string;
  description: string;
  chips?: Chip[];
  chipGroups?: ChipGroup[];
  direction: "left" | "right";
}[] = [
  {
    icon: Smartphone,
    iconClassName:
      "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
    eyebrow: "Build · 1 in progress",
    title: "Apps",
    description:
      "One app in the works, built end-to-end — from product to ship.",
    chips: [
      { label: "GO Study", icon: GraduationCap, variant: "real", href: "/" },
      { label: "+ Add project", variant: "placeholder" },
    ],
    direction: "left",
  },
  {
    icon: Layers,
    iconClassName:
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
    eyebrow: "Use · 12 tools",
    title: "Tech Stack",
    description: "The tools and languages I build with.",
    chipGroups: techStackGroups,
    direction: "right",
  },
  {
    icon: User,
    iconClassName:
      "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    eyebrow: "Role · Software & AI Engineer",
    title: "About",
    description:
      "Software & AI Engineer specializing in cross-platform mobile apps with Flutter & Dart. Passionate about combining clean, scalable client architecture with smart backend engines and intuitive UX.",
    direction: "left",
  },
  {
    icon: MessageCircle,
    iconClassName: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
    eyebrow: "Reach · 3 channels",
    title: "Connect",
    description: "Find me around the web.",
    chips: [
      { label: "GitHub", icon: Link2, variant: "real", href: GITHUB_URL },
      { label: "LinkedIn", icon: Contact, variant: "real", href: LINKEDIN_URL },
      { label: "Email", icon: Mail, variant: "real", href: `mailto:${EMAIL}` },
    ],
    direction: "right",
  },
];

export default function PortfolioPage() {
  return (
    <div className="dot-grid-bg relative min-h-full bg-background">
      <FloatingThemeToggle />

      <main className="mx-auto max-w-5xl px-6 pt-14 pb-20 sm:px-10 sm:pt-20">
        <Reveal direction="left" duration={0.5}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            GO Study
          </Link>
        </Reveal>

        <div className="mt-10">
          <PortfolioHero />
        </div>

        <RevealGroup className="mt-16 grid items-start gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <RevealItem key={card.title} direction={card.direction}>
              <PortfolioCard
                index={i + 1}
                icon={card.icon}
                iconClassName={card.iconClassName}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                chips={card.chips}
                chipGroups={card.chipGroups}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal direction="up" delay={0.1} className="mt-16 text-center">
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">
            Built with GO Study · Ebong Sume
          </p>
        </Reveal>
      </main>
    </div>
  );
}
