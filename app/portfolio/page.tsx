import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Atom,
  Code2,
  Contact,
  FileCode2,
  GraduationCap,
  Layers,
  Link2,
  Mail,
  MessageCircle,
  Smartphone,
  Sparkles,
  User,
  Wind,
} from "lucide-react";
import FloatingThemeToggle from "../components/FloatingThemeToggle";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioCard, { type Chip } from "../components/PortfolioCard";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio — GO Study",
  description: "The developer behind GO Study — apps, stack, and how to get in touch.",
};

const cards: {
  icon: typeof Smartphone;
  iconClassName: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: Chip[];
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
    eyebrow: "Use · 5 tools",
    title: "Tech Stack",
    description: "The stack behind everything on this site.",
    chips: [
      { label: "Next.js", icon: Code2, variant: "real" },
      { label: "React", icon: Atom, variant: "real" },
      { label: "TypeScript", icon: FileCode2, variant: "real" },
      { label: "Tailwind CSS", icon: Wind, variant: "real" },
      { label: "Framer Motion", icon: Sparkles, variant: "real" },
    ],
    direction: "right",
  },
  {
    icon: User,
    iconClassName:
      "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    eyebrow: "Read · about me",
    title: "About",
    description:
      "[Add a short bio — what you build, what you care about, where you're based.]",
    chips: [],
    direction: "left",
  },
  {
    icon: MessageCircle,
    iconClassName: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
    eyebrow: "Follow · connect",
    title: "Connect",
    description: "Find me around the web.",
    chips: [
      { label: "GitHub", icon: Link2, variant: "placeholder" },
      { label: "LinkedIn", icon: Contact, variant: "placeholder" },
      { label: "Email", icon: Mail, variant: "placeholder" },
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

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
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
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal direction="up" delay={0.1} className="mt-16 text-center">
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">
            Built with GO Study · [Your Name]
          </p>
        </Reveal>
      </main>
    </div>
  );
}
