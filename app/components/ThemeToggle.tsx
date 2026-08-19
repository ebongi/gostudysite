"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  tone = "default",
}: {
  /** "inverted" for use on a dark/gradient background (e.g. the navy hero header). */
  tone?: "default" | "inverted";
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Theme is only known after hydration (it depends on localStorage/system
  // preference), so this deliberately triggers a second render.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="block h-10 w-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";
  const toneClasses =
    tone === "inverted"
      ? "text-white hover:bg-white/10"
      : "text-muted hover:bg-surface-alt hover:text-foreground";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-full transition-colors ${toneClasses}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
