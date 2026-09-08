import Reveal from "../Reveal";
import { strip } from "../../lib/content";

export default function FeatureStripSection() {
  return (
    <section className="border-b border-accent-light/18">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal
          stagger
          className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))]"
        >
          {strip.map((item) => (
            <div
              key={item.n}
              className="border-r border-b border-accent-light/14 px-5 pt-[26px] pb-7"
            >
              <div className="mb-3 font-mono text-[10px] tracking-[0.16em] text-accent">
                {item.n}
              </div>
              <div className="text-[15px] leading-tight font-semibold text-ink">
                {item.title}
              </div>
              <div className="mt-1.5 text-[13px] leading-relaxed text-muted-2">
                {item.sub}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
