"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// TODO: set the real launch date once it's confirmed.
const LAUNCH_DATE = new Date("2026-09-13T00:00:00");

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

type UnitKey = (typeof UNITS)[number]["key"];

function msRemaining(): number {
  return Math.max(0, LAUNCH_DATE.getTime() - Date.now());
}

function breakdown(ms: number): Record<UnitKey, number> {
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1_000) % 60),
  };
}

function UnitCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface py-6 shadow-sm sm:py-10">
      <span className="text-4xl font-extrabold tabular-nums text-foreground sm:text-6xl">
        {value}
      </span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    // The countdown depends on the visitor's own clock, so it can only be
    // computed after mount. This deliberately triggers one extra render
    // once real time is known, instead of guessing at a server-rendered
    // value that would almost certainly mismatch on hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRemaining(msRemaining());

    const interval = setInterval(() => {
      const next = msRemaining();
      setRemaining(next);
      if (next <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (remaining === null) {
    return (
      <div className="grid grid-cols-4 gap-3 sm:gap-5">
        {UNITS.map((unit) => (
          <UnitCard key={unit.key} value="—" label={unit.label} />
        ))}
      </div>
    );
  }

  if (remaining <= 0) {
    return (
      <div className="rounded-3xl border border-brand-green-tint bg-brand-green-tint px-8 py-10 text-center">
        <p className="text-2xl font-extrabold text-brand-green sm:text-3xl">
          We&rsquo;re live!
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          GO Study has launched. Head to the homepage to see what&rsquo;s
          inside.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover"
        >
          Enter GO Study
        </Link>
      </div>
    );
  }

  const parts = breakdown(remaining);

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5">
      {UNITS.map((unit) => (
        <UnitCard
          key={unit.key}
          value={String(parts[unit.key]).padStart(2, "0")}
          label={unit.label}
        />
      ))}
    </div>
  );
}
