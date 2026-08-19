"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#screenshots", label: "Screenshots" },
  { href: "/support", label: "Support" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

// TODO: replace with the real Google Play listing once GO Study is published.
const PLAY_STORE_URL = "#";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 ${
        isHome ? "bg-navy-gradient" : "border-b border-line bg-surface"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link
          href="/"
          className={`flex items-center gap-2 justify-self-start text-lg font-bold ${
            isHome ? "text-white" : "text-foreground"
          }`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cta text-cta-foreground">
            <GraduationCap size={20} />
          </span>
          GO{" "}
          <span className={isHome ? "text-white" : "text-brand-blue"}>
            Study
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-7 text-xs font-semibold tracking-wide uppercase md:flex ${
            isHome ? "text-white/85" : "text-muted"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isHome ? "hover:text-white" : "hover:text-brand-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <ThemeToggle tone={isHome ? "inverted" : "default"} />
          <a
            href={PLAY_STORE_URL}
            className={`hidden rounded-full px-5 py-2.5 text-xs font-bold tracking-wide uppercase shadow-sm transition-colors md:inline-block ${
              isHome
                ? "border border-white/50 text-white hover:bg-white/10"
                : "bg-cta text-cta-foreground hover:bg-cta-hover"
            }`}
          >
            Download
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
              isHome
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-surface-alt"
            }`}
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
            Download
          </a>
        </div>
      )}
    </header>
  );
}
