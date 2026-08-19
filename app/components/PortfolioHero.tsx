"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function PortfolioHero() {
  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <motion.p
        variants={item}
        className="font-mono text-xs tracking-widest text-muted uppercase"
      >
        {"// [Your Name]"}
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
      >
        Build, Learn &amp; Ship Software
      </motion.h1>
      <motion.p variants={item} className="mt-4 max-w-xl text-lg text-muted">
        A developer&rsquo;s playbook.
      </motion.p>
      <motion.div
        variants={item}
        className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide text-subtle uppercase"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-cta text-[10px] font-bold text-cta-foreground">
          YN
        </span>
        <span>[Your Name]</span>
        <span className="text-line">•</span>
        <span>1 App</span>
        <span className="text-line">•</span>
        <span>5 Tools</span>
        <span className="text-line">•</span>
        <a href="#about" className="transition-colors hover:text-foreground">
          About
        </a>
      </motion.div>
    </motion.div>
  );
}
