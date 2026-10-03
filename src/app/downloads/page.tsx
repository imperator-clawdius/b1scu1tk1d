"use client";

import { motion } from "motion/react";
import { MagikDownload } from "@/components/magik-download";
import {
  downloads,
  CATEGORY_LABEL,
  CATEGORY_COLOR,
  type Download,
} from "@/lib/downloads";

function DownloadCard({ d, index }: { d: Download; index: number }) {
  return (
    <motion.a
      href={d.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="card-hud group relative flex flex-col gap-3 rounded-xl border border-line bg-panel/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-elevated/80"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[11px] tracking-[0.22em] ${CATEGORY_COLOR[d.category]}`}
        >
          {CATEGORY_LABEL[d.category]}
        </span>
        <span className="font-mono text-[11px] text-cyan">DOWNLOAD ↗</span>
      </div>

      <h3 className="text-lg font-semibold leading-tight tracking-tight text-cream transition-colors duration-300 group-hover:text-cyan">
        {d.name}
      </h3>

      <p className="text-sm leading-relaxed text-prose">{d.tagline}</p>

      {d.source && (
        <a
          href={d.source}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-3 font-mono text-[11px] text-amber/90 underline-offset-4 hover:underline"
        >
          SOURCE / DOCS ↗
        </a>
      )}
    </motion.a>
  );
}

export default function DownloadsPage() {
  return (
    <div className="relative">
      {/* ---------- HEADER ---------- */}
      <section className="relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="amber-glow absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan-sweep bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="neon-cyan font-mono text-xs tracking-[0.5em] text-cyan"
        >
          {"[ // DOWNLOADS ]"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="neon-amber mt-6 text-5xl font-bold leading-none tracking-tighter text-cream sm:text-6xl"
        >
          Stuff worth <span className="text-amber">grabbing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 font-mono text-sm text-prose"
        >
          Free tools — built here and borrowed from the good corners of the internet.
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-mono text-xs tracking-[0.3em] text-amber underline-offset-4 hover:underline"
        >
          ← BACK HOME
        </motion.a>
      </section>

      {/* ---------- FEATURED: MAGIK TERMINAL ---------- */}
      <MagikDownload />

      {/* ---------- THE TOOLBOX ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs tracking-[0.3em] text-mute"
        >
          {"// THE TOOLBOX"}
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d, i) => (
            <DownloadCard key={d.slug} d={d} index={i} />
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
