import type { CSSProperties } from "react";

// Decorative crosshair ticks at the four corners of a bordered box — a
// recurring blueprint-style accent used throughout the design.
export default function CornerMarks({ color }: { color: string }) {
  const tickStyle: CSSProperties = {
    position: "absolute",
    width: 9,
    height: 9,
    pointerEvents: "none",
    backgroundImage: `linear-gradient(${color},${color}),linear-gradient(${color},${color})`,
    backgroundSize: "9px 1px,1px 9px",
    backgroundPosition: "center,center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <span style={{ ...tickStyle, top: -5, left: -5 }} />
      <span style={{ ...tickStyle, top: -5, right: -5 }} />
      <span style={{ ...tickStyle, bottom: -5, left: -5 }} />
      <span style={{ ...tickStyle, bottom: -5, right: -5 }} />
    </>
  );
}
