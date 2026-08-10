"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/support", label: "Support" },
];

// TODO: replace with the real Google Play listing once GO Study is published.
const PLAY_STORE_URL = "#";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cta text-cta-foreground">
            <GraduationCap size={20} />
          </span>
          GO <span className="text-brand-blue">Study</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={PLAY_STORE_URL}
            className="hidden rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover md:inline-block"
          >
            Get the app
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-surface-alt md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-1 border-t border-line bg-surface px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-alt"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PLAY_STORE_URL}
            className="mt-2 block rounded-full bg-cta px-5 py-3 text-center text-sm font-semibold text-cta-foreground"
          >
            Get the app
          </a>
        </div>
      )}
    </header>
  );
}
