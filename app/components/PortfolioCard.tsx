import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export type Chip = {
  label: string;
  icon?: LucideIcon;
  variant: "real" | "placeholder";
  href?: string;
};

function ChipView({ chip }: { chip: Chip }) {
  const Icon = chip.icon;
  const className =
    chip.variant === "real"
      ? "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-alt px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-foreground uppercase"
      : "inline-flex items-center gap-1.5 rounded-full border border-dashed border-line px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-subtle uppercase";

  const content = (
    <>
      {Icon && <Icon size={12} />}
      {chip.label}
    </>
  );

  if (chip.variant === "real" && chip.href) {
    return (
      <Link href={chip.href} className={`${className} transition-colors hover:text-brand-blue`}>
        {content}
      </Link>
    );
  }

  return <span className={className}>{content}</span>;
}

export default function PortfolioCard({
  index,
  icon: Icon,
  iconClassName,
  eyebrow,
  title,
  description,
  chips,
}: {
  index: number;
  icon: LucideIcon;
  iconClassName: string;
  eyebrow: string;
  title: string;
  description: string;
  chips?: Chip[];
}) {
  return (
    <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
      <div className="flex items-start justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-xl ${iconClassName}`}
        >
          <Icon size={22} />
        </span>
        <span className="font-mono text-xs text-subtle">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-5 font-mono text-[11px] font-semibold tracking-widest text-subtle uppercase">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

      {chips && chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <ChipView key={chip.label} chip={chip} />
          ))}
        </div>
      )}
    </div>
  );
}
