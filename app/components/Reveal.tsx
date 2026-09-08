"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades + slides its children up into place the first time they scroll into
// view. When `stagger` is true, direct children are revealed one after
// another via CSS :nth-child delays instead of all at once.
export default function Reveal({
  className = "",
  children,
  stagger = false,
  delayMs = 0,
}: {
  className?: string;
  children: ReactNode;
  stagger?: boolean;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (delayMs === 0) {
            setInView(true);
          } else {
            const timer = setTimeout(() => setInView(true), delayMs);
            return () => clearTimeout(timer);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const base = stagger ? "gs-stagger" : "gs-reveal";
  const state = inView ? `${base} ${base}--in` : base;

  return (
    <div ref={ref} className={`${className} ${state}`}>
      {children}
    </div>
  );
}
