import Image from "next/image";
import Link from "next/link";
import CornerMarks from "../CornerMarks";
import Reveal from "../Reveal";
import { playStoreUrl } from "../../lib/content";
import PhoneFrame from "./PhoneFrame";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-accent-light/18 px-6 pt-[88px] pb-[72px]"
      style={{
        backgroundImage: [
          "radial-gradient(circle at 78% 18%, rgba(30,136,229,.30), transparent 46%)",
          "radial-gradient(circle at 12% 82%, rgba(56,189,248,.16), transparent 48%)",
          "linear-gradient(rgba(125,211,252,.055) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(125,211,252,.055) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "auto,auto,44px 44px,44px 44px",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          animation: "gs-glow 9s ease-in-out infinite",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(56,189,248,.20), transparent 42%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <div className="mb-[26px] flex items-end">
            <Image
              src="/logo-mark.png"
              alt="G"
              width={56}
              height={56}
              className="-mb-1.5 block h-14 w-auto"
            />
            <span className="ml-0.5 text-[44px] leading-none font-bold tracking-[-0.03em] text-heading">
              oStudy
            </span>
          </div>

          <div className="mb-[22px] flex items-center gap-2.5">
            <span className="gs-hero-rule h-px w-[22px] bg-accent" />
            <span className="font-mono text-[11px] tracking-[0.20em] text-accent-light">
              BUILT FOR UNIVERSITY OF BUEA STUDENTS
            </span>
          </div>

          <h1 className="m-0 text-[clamp(40px,5.6vw,68px)] leading-[1.02] font-extrabold tracking-[-0.028em] text-heading">
            Your Academic
            <br />
            Companion
          </h1>

          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted">
            AI study help, your course materials offline, campus chat, exam
            planning and official transcript requests — all in one Android
            app made by UB students, for UB students.
          </p>

          <div className="mt-[34px] flex flex-wrap items-center gap-3.5">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3.5 border border-blue bg-blue px-[26px] py-[15px] text-white transition-colors hover:border-blue-dark hover:bg-blue-dark"
            >
              <span className="font-mono text-[10px] tracking-[0.18em] opacity-85">
                ANDROID
              </span>
              <span className="h-[22px] w-px bg-white/35" />
              <span className="text-base font-semibold">
                Get it on Google Play
              </span>
              <CornerMarks color="rgba(255,255,255,.55)" />
            </a>
            <div className="font-mono text-[11px] leading-[1.7] tracking-[0.06em] text-muted-3">
              <div>FREE TO START</div>
              <div>MTN MOMO · ORANGE MONEY</div>
            </div>
          </div>

          <Link
            href="/install"
            className="mt-5 inline-block font-mono text-[11px] tracking-[0.12em] text-muted-2 hover:text-accent"
          >
            OR DOWNLOAD THE APK DIRECTLY →
          </Link>
        </Reveal>

        <Reveal className="flex min-w-0 justify-center">
          <div
            className="relative w-full max-w-[330px] p-4"
            style={{
              border: "1px solid rgba(125,211,252,0.30)",
              animation: "gs-float 7.5s ease-in-out infinite",
            }}
          >
            <CornerMarks color="#38BDF8" />
            <div className="absolute -top-[9px] left-4 bg-navy px-2 font-mono text-[10px] tracking-[0.16em] whitespace-nowrap text-accent-light">
              FIG. 01 — HOME
            </div>
            <PhoneFrame src="/shot-home.png" alt="GoStudy home screen" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
