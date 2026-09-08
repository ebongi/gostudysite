"use client";

import { useState } from "react";
import CornerMarks from "../CornerMarks";
import Reveal from "../Reveal";
import { shots } from "../../lib/content";
import PhoneFrame from "./PhoneFrame";

export default function ScreensSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = (newIndex: number) => {
    if (newIndex === index) return;
    const last = shots.length - 1;
    const wrappedForward = index === last && newIndex === 0;
    setDirection(newIndex > index || wrappedForward ? 1 : -1);
    setIndex(newIndex);
  };

  const prev = () => go((index - 1 + shots.length) % shots.length);
  const next = () => go((index + 1) % shots.length);

  const current = shots[index];

  return (
    <section className="border-b border-accent-light/18 px-6 py-[84px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-[18px]">
          <div>
            <div className="mb-3 font-mono text-[11px] tracking-[0.20em] text-accent-light">
              SCREENS
            </div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.02em] text-heading">
              A look inside the app
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screen"
              className="h-11 w-11 border border-accent-light/30 font-sans text-lg text-accent-light transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screen"
              className="h-11 w-11 border border-accent-light/30 font-sans text-lg text-accent-light transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid items-center gap-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <Reveal className="flex min-w-0 justify-center">
            <div
              className="relative w-full max-w-[320px] p-4"
              style={{ border: "1px solid rgba(125,211,252,0.30)" }}
            >
              <CornerMarks color="#38BDF8" />
              <PhoneFrame
                src={current.src}
                alt={current.title}
                imgKey={index}
                imgClassName={
                  direction === 1
                    ? "gs-phone-img--in-right"
                    : "gs-phone-img--in-left"
                }
              />
            </div>
          </Reveal>

          <Reveal className="min-w-0">
            <div className="mb-3.5 font-mono text-[11px] tracking-[0.18em] text-accent">
              FIG. {current.n}
            </div>
            <h3 className="m-0 text-[26px] font-bold tracking-[-0.015em] text-heading">
              {current.title}
            </h3>
            <p className="mt-3.5 max-w-[46ch] text-base leading-relaxed text-muted">
              {current.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {shots.map((shot, i) => (
                <button
                  key={shot.tab}
                  type="button"
                  onClick={() => go(i)}
                  className={`border px-3 py-2 font-mono text-[10px] tracking-[0.12em] transition-colors ${
                    i === index
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-accent-light/22 text-muted-2 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {shot.tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
