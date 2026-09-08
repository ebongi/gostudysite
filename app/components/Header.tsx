"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { playStoreUrl } from "../lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-navy/88 backdrop-blur-[10px] transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-accent-light/30 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]"
          : "border-accent-light/18"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center gap-6 px-6 py-3.5">
        <Link
          href="/"
          aria-label="GoStudy home"
          className="flex flex-shrink-0 items-end"
        >
          <Image
            src="/logo-mark.png"
            alt="G"
            width={30}
            height={30}
            className="-mb-[3px] block h-[30px] w-auto"
          />
          <span className="ml-px text-[23px] leading-none font-bold tracking-[-0.015em] text-heading">
            oStudy
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center justify-end gap-1.5">
          <Link
            href="/#features"
            className="rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent/8 hover:text-accent"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent/8 hover:text-accent"
          >
            Pricing
          </Link>
          <Link
            href="/#support"
            className="rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent/8 hover:text-accent"
          >
            Support
          </Link>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 whitespace-nowrap border border-blue bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-blue-dark hover:bg-blue-dark"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
