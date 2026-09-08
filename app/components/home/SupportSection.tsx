"use client";

import { useState } from "react";
import Link from "next/link";
import CornerMarks from "../CornerMarks";
import Reveal from "../Reveal";
import { faqs, supportEmail, whatsappNumber, whatsappUrl, type Faq } from "../../lib/content";

function FaqItem({
  faq,
  open,
  onToggle,
  showDeleteLink,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
  showDeleteLink: boolean;
}) {
  return (
    <div className="border-b border-accent-light/18">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-0.5 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-accent"
      >
        <span>{faq.q}</span>
        <span className="flex-shrink-0 font-mono text-base text-accent">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="m-0 max-w-[52ch] px-0.5 pb-[22px] text-[15px] leading-relaxed text-muted">
          {faq.a}
          {showDeleteLink && (
            <>
              {" "}
              <Link href="/delete-account" className="font-semibold text-accent hover:underline">
                Delete My Account page
              </Link>
              .
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default function SupportSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const toggle = (i: number) => setOpenFaq((cur) => (cur === i ? -1 : i));

  return (
    <section id="support" className="border-b border-accent-light/18 px-6 py-[84px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-3 font-mono text-[11px] tracking-[0.20em] text-accent-light">
          SUPPORT
        </div>
        <h2 className="mb-12 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.02em] text-heading">
          Stuck? Talk to a human
        </h2>

        <Reveal className="grid items-start gap-11 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div className="flex min-w-0 flex-col gap-4">
            <a
              href={`mailto:${supportEmail}`}
              className="relative block px-6 py-6 transition-all duration-200 hover:-translate-y-[3px] hover:bg-accent/7"
              style={{ border: "1px solid rgba(125,211,252,0.26)" }}
            >
              <CornerMarks color="#38BDF8" />
              <div className="mb-2.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
                EMAIL
              </div>
              <div className="text-lg font-semibold break-all text-heading">
                {supportEmail}
              </div>
              <div className="mt-2 text-sm text-muted-2">
                Bugs, billing, account questions. We reply within 2 working
                days.
              </div>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block px-6 py-6 transition-all duration-200 hover:-translate-y-[3px] hover:bg-accent/7"
              style={{ border: "1px solid rgba(125,211,252,0.26)" }}
            >
              <CornerMarks color="#38BDF8" />
              <div className="mb-2.5 font-mono text-[10px] tracking-[0.16em] text-accent-light">
                WHATSAPP
              </div>
              <div className="text-lg font-semibold text-heading">
                {whatsappNumber}
              </div>
              <div className="mt-2 text-sm text-muted-2">
                Fastest for transcript requests and payment confirmations.
              </div>
            </a>
          </div>

          <div className="min-w-0">
            <div className="mb-[18px] font-mono text-[10px] tracking-[0.16em] text-accent-light">
              FREQUENT QUESTIONS
            </div>
            <div className="border-t border-accent-light/18">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  open={openFaq === i}
                  onToggle={() => toggle(i)}
                  showDeleteLink={i === 0}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
