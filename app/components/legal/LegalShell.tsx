import type { ReactNode } from "react";
import Link from "next/link";
import CornerMarks from "../CornerMarks";

export function LegalShell({
  title,
  lastUpdated,
  intro,
  draftNote,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  draftNote?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 px-6 pt-[72px] pb-[84px]">
      <div className="mx-auto max-w-[800px]">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.16em] text-accent-light hover:text-accent"
        >
          ← BACK TO HOME
        </Link>
        <h1 className="mt-[26px] mb-2.5 text-[clamp(32px,4.4vw,48px)] font-extrabold tracking-[-0.025em] text-heading">
          {title}
        </h1>
        <div className="mb-3 font-mono text-[11px] tracking-[0.12em] text-muted-3">
          GOSTUDY · UNIVERSITY OF BUEA · {lastUpdated}
        </div>
        <p className="mb-11 max-w-[60ch] text-[17px] leading-relaxed text-muted">
          {intro}
        </p>

        {draftNote && (
          <div
            className="relative mb-[52px] px-6 py-[22px]"
            style={{
              border: "1px solid rgba(56,189,248,0.34)",
              backgroundImage:
                "linear-gradient(rgba(56,189,248,.07),rgba(56,189,248,.02))",
            }}
          >
            <CornerMarks color="#38BDF8" />
            <div className="mb-2 font-mono text-[10px] tracking-[0.16em] text-accent">
              DRAFT — PENDING LEGAL REVIEW
            </div>
            <p className="m-0 text-[14.5px] leading-relaxed text-[#C7D6E9]">
              {draftNote}
            </p>
          </div>
        )}

        {children}
      </div>
    </main>
  );
}

export function LegalSectionBlock({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-11">
      <div className="mb-3.5 flex items-baseline gap-3.5">
        <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
          {n}
        </span>
        <h2 className="m-0 text-[23px] font-bold tracking-[-0.015em] text-heading">
          {title}
        </h2>
      </div>
      <div className="max-w-[62ch] text-[15px] leading-relaxed text-muted-2">
        {children}
      </div>
    </section>
  );
}
