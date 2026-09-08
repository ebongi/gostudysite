import CornerMarks from "../CornerMarks";
import Reveal from "../Reveal";
import { why, type WhyItem } from "../../lib/content";

function WhyCard({ item }: { item: WhyItem }) {
  return (
    <div
      className="relative px-6 pt-7 pb-[30px] transition-[transform,border-color,box-shadow] duration-[260ms] hover:-translate-y-[3px] hover:shadow-[0_10px_24px_-14px_rgba(15,23,42,0.18)]"
      style={{ border: "1px solid rgba(15,23,42,0.16)" }}
    >
      <CornerMarks color="#1E88E5" />
      <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-blue-dark">
        {item.n}
      </div>
      <h3 className="mb-2.5 text-lg leading-tight font-bold text-navy">
        {item.title}
      </h3>
      <p className="m-0 text-[14.5px] leading-relaxed text-surface-muted">
        {item.body}
      </p>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="border-b border-accent-light/18 bg-surface px-6 py-[84px] text-navy">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-3 font-mono text-[11px] tracking-[0.20em] text-blue-dark">
          WHY GOSTUDY
        </div>
        <h2 className="mb-12 max-w-[22ch] text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.02em] text-navy">
          Made for how UB actually works
        </h2>
        <Reveal
          stagger
          className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]"
        >
          {why.map((item) => (
            <WhyCard key={item.n} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
