export default function SectionDivider({
  tone = "default",
}: {
  tone?: "default" | "inverted";
}) {
  return (
    <div
      aria-hidden="true"
      className={`section-divider mt-3 ${
        tone === "inverted" ? "text-white" : "text-foreground"
      }`}
    >
      <span className="h-1.5 w-1.5 rotate-45 bg-cta" />
      <span className="h-1.5 w-1.5 rotate-45 bg-cta opacity-60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-cta opacity-30" />
    </div>
  );
}
