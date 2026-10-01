import Image from "next/image";

export function MagikDownload() {
  return (
    <section id="magik-terminal" aria-labelledby="magik-title" className="mx-auto max-w-6xl scroll-mt-8 px-6 pt-16 pb-8">
      <div className="overflow-hidden rounded-xl border border-amber/30 bg-panel/80 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4 font-mono text-[11px] tracking-[0.2em] sm:px-8">
          <span className="text-cyan">{"// BUILT HERE. YOURS TO KEEP."}</span>
          <span className="text-amber">01 / FREE DOWNLOAD</span>
        </div>
        <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.25em] text-mute">A VISUAL UPGRADE FOR CODEX CLI</p>
            <h2 id="magik-title" className="neon-amber text-4xl font-bold tracking-tight text-cream sm:text-5xl">Magik <span className="text-amber">Terminal</span></h2>
            <p className="mt-5 text-base leading-relaxed text-cream">Amber fire. Cyan signal. Your Codex, after dark.</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">Digital flames, cyberspace frames, and the B1SCU1TK1D palette. A free, open-source terminal theme you can make your own.</p>
            <p className="mt-5 rounded-md border border-line bg-ink px-4 py-3 font-mono text-sm text-cyan"><span className="text-amber">&gt; </span>codex --magik</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://github.com/imperator-clawdius/magik-terminal/releases/latest/download/magik-terminal.zip" className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber px-5 py-3 font-mono text-xs font-semibold text-ink transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">Download Magik Terminal ↓</a>
              <a href="https://github.com/imperator-clawdius/magik-terminal" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-cyan/40 px-5 py-3 font-mono text-xs text-cyan transition-colors hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">Source &amp; setup ↗</a>
            </div>
            <p className="mt-5 font-mono text-[11px] leading-relaxed text-mute">Windows Terminal + Codex CLI + Python 3.11+<br />MIT licensed · Still mode included · Kitty palette included</p>
            <p className="mt-3 text-xs leading-relaxed text-mute">Independent community theme. Codex access is separate. Animated effects require Windows Terminal.</p>
          </div>
          <div className="min-w-0">
            <Image src="/magik-terminal.svg" alt="Magik Terminal design preview: amber and turquoise pixel flames frame cream text on an ink-black terminal." width={1200} height={680} className="w-full rounded-lg border border-line" />
            <p className="mt-3 text-right font-mono text-[10px] tracking-[0.15em] text-mute">DESIGN PREVIEW / B1SCU1TK1D PALETTE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
