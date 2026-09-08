import Reveal from "../Reveal";
import { features, type FeatureBlock } from "../../lib/content";

function FeatureCard({ feature }: { feature: FeatureBlock }) {
  return (
    <div className="group bg-navy px-[30px] pt-[34px] pb-9 transition-[transform,background] duration-[260ms] hover:-translate-y-[3px] hover:bg-accent/4">
      <div className="mb-4 font-mono text-[10px] tracking-[0.16em] text-accent">
        {feature.n}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-[-0.012em] text-heading">
        {feature.title}
      </h3>
      <p className="mb-[18px] text-[15px] leading-relaxed text-muted">
        {feature.body}
      </p>
      <ul className="m-0 flex list-none flex-col gap-[7px] p-0">
        {feature.items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13.5px] leading-snug text-muted-2"
          >
            <span className="mt-1.5 h-[5px] w-[5px] flex-shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="border-b border-accent-light/18 px-6 py-[84px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-3 font-mono text-[11px] tracking-[0.20em] text-accent-light">
          FEATURES
        </div>
        <h2 className="mb-4 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.02em] text-heading">
          Everything the semester needs
        </h2>
        <p className="mb-12 max-w-[56ch] text-[17px] leading-relaxed text-muted">
          Six systems, one app. No juggling six different tools and a
          WhatsApp group that lost your lecture notes.
        </p>
        <Reveal
          stagger
          className="grid gap-px bg-accent-light/16 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.n} feature={feature} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
