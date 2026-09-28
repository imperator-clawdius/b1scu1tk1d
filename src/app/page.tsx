"use client";

import { motion } from "motion/react";
import {
  biscuits,
  CATEGORY_LABEL,
  CATEGORY_COLOR,
  type Biscuit,
} from "@/lib/biscuits";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d} ${y}`;
}

function BiscuitCard({ biscuit, index }: { biscuit: Biscuit; index: number }) {
  return (
    <motion.a
      href={biscuit.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="card-hud group relative flex flex-col gap-3 rounded-xl border border-line bg-panel/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-elevated/80"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[11px] tracking-[0.22em] ${CATEGORY_COLOR[biscuit.category]}`}
        >
          {CATEGORY_LABEL[biscuit.category]}
        </span>
        <span className="font-mono text-[11px] text-mute">
          {formatDate(biscuit.date)}
        </span>
      </div>

      <h3 className="text-xl font-semibold leading-tight tracking-tight text-cream transition-colors duration-300 group-hover:text-amber">
        {biscuit.title}
      </h3>

      <p className="text-sm leading-relaxed text-mute">{biscuit.blurb}</p>

      <div className="mt-auto border-t border-line pt-3">
        <p className="font-mono text-[11px] leading-relaxed tracking-wide text-amber/90">
          <span className="text-mute">WHY IT&apos;S COOL → </span>
          {biscuit.whyCool}
        </p>
      </div>
    </motion.a>
  );
}

export default function Home() {
  const total = biscuits.length;
  const lastDrop = formatDate(biscuits[0].date);

  return (
    <div className="relative">
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="amber-glow absolute inset-0 -z-10" />

        {/* scan sweep */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan-sweep bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="neon-cyan font-mono text-xs tracking-[0.5em] text-cyan"
        >
          [ SYSTEM ONLINE ]
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="neon-amber mt-8 text-6xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl"
        >
          <span className="text-amber">B1SCU1TK1D</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-mono text-sm text-mute sm:text-base"
        >
          <span className="text-amber">&gt;</span> Cool Biscuits from the Internet
          <span className="animate-blink text-amber">_</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 font-mono text-[10px] tracking-[0.4em] text-mute"
        >
          <span className="animate-float inline-block">▼ SCROLL</span>
        </motion.div>
      </section>

      {/* ---------- HUD BAR ---------- */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 rounded-lg border border-line bg-panel/40 px-6 py-4 font-mono text-xs text-mute backdrop-blur-sm">
          <span>
            <span className="text-amber">▮</span> {total} BISCUITS ARCHIVED
          </span>
          <span>
            <span className="text-cyan">▮</span> LAST DROP: {lastDrop}
          </span>
          <span className="ml-auto hidden md:block tracking-[0.15em]">
            A LIVE ARCHIVE OF COOL INTERNET FINDS
          </span>
        </div>
      </section>

      {/* ---------- FEED ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs tracking-[0.3em] text-mute"
        >
          {"// THE FEED"}
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {biscuits.map((b, i) => (
            <BiscuitCard key={b.slug} biscuit={b} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-line py-12 text-center font-mono text-xs text-mute">
        <p className="tracking-[0.2em]">B1SCU1TK1D — AN ARCHIVE OF COOL BISCUITS</p>
        <p className="mt-3 text-amber/70">
          send biscuits → w1d0wm4k3r4g3nt@b1scu1tk1d.com
        </p>
      </footer>
    </div>
  );
}
