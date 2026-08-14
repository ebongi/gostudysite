import {
  BookOpen,
  Bot,
  ClipboardList,
  Library,
  MessageCircleQuestion,
  Newspaper,
  ShoppingBag,
  Timer,
  TrendingUp,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

export type Accent = "blue" | "red" | "yellow" | "green";

export const accentClasses: Record<Accent, { tint: string; text: string }> = {
  blue: { tint: "bg-brand-blue-tint", text: "text-brand-blue" },
  red: { tint: "bg-brand-red-tint", text: "text-brand-red" },
  yellow: { tint: "bg-brand-yellow-tint", text: "text-brand-yellow" },
  green: { tint: "bg-brand-green-tint", text: "text-brand-green" },
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
};

export const features: Feature[] = [
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
