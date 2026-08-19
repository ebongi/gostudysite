import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export type Chip = {
  label: string;
  icon?: LucideIcon;
  variant: "real" | "placeholder";
  href?: string;
};

export type ChipGroup = {
  label: string;
  icon: LucideIcon;
  chips: string[];
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
    const linkClassName = `${className} transition-colors hover:text-brand-blue`;

    if (chip.href.startsWith("/")) {
      return (
        <Link href={chip.href} className={linkClassName}>
          {content}
        </Link>
      );
    }

    if (chip.href.startsWith("mailto:")) {
      return (
        <a href={chip.href} className={linkClassName}>
          {content}
        </a>
      );
    }

    return (
      <a
        href={chip.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {content}
      </a>
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
  chipGroups,
}: {
  index: number;
  icon: LucideIcon;
  iconClassName: string;
  eyebrow: string;
  title: string;
  description: string;
  chips?: Chip[];
  chipGroups?: ChipGroup[];
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

      {chipGroups && chipGroups.length > 0 && (
        <div className="mt-5 space-y-4">
          {chipGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.label}>
                <p className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-widest text-subtle uppercase">
                  <GroupIcon size={12} />
                  {group.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.chips.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-line bg-surface-alt px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-foreground uppercase"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
