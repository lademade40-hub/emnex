"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "./ui";

const TICKER_ITEMS = [
  "Selected Work — 01",
  "wandermark.travel",
  "velmoraestates.com",
  "marlowehart.com",
];

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="flex items-center gap-2.5 px-7">
            <span className="h-[6px] w-[6px] rounded-full bg-ember/80" />
            <span className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/70">
              {item}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const fade = (delay: number, y = 24) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      {/* ==========================================================
          LAYER 1 — full-bleed photographic background.
          The uploaded founder portrait covers the entire hero,
          edge to edge, top to bottom. Purely visual: never a link,
          never a card, no visible boundary. */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* ambient extension — the portrait's own studio backdrop, softly
            blurred, fills the wide banner so the full square portrait
            needs no aggressive crop and no empty frame shows */}
        <Image
          src="/founder-hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="scale-[1.14] object-cover blur-[64px]"
          draggable={false}
        />
        {/* the FULL portrait — complete original framing, head to suit,
            undistorted, centered; side edges feather into the wash */}
        <div className="absolute inset-y-0 left-1/2 aspect-square -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <Image
            src="/founder-hero.jpg"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vh"
            className="object-cover"
            draggable={false}
          />
        </div>
        {/* readability overlay — uniform darkening, portrait stays clearly visible */}
        <div className="absolute inset-0 bg-black/[0.5] md:bg-black/[0.42]" />
        {/* very subtle deepening around the centered type block only */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      {/* ==========================================================
          LAYER 2 — existing hero content, centered over the photo.
          Same copy, same type scale, no box, no panel. */}
      <div className="container-x relative z-10 flex min-h-[90vh] flex-col items-center justify-center pb-16 pt-[124px] text-center md:pb-20 md:pt-[150px]">
        <motion.p {...fade(0.05)} className="kicker rule-dot text-ivory/80">
          EMNEX AI — AI-Assisted Website Design Studio
        </motion.p>

        <motion.h1
          {...fade(0.15, 28)}
          className="mt-7 max-w-[900px] font-serif text-[clamp(2.5rem,5.7vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.012em] text-ivory"
        >
          What if your business website didn&apos;t come with{" "}
          <em className="font-light italic text-ember">
            monthly hosting fees?
          </em>
        </motion.h1>

        <motion.p
          {...fade(0.26)}
          className="mt-7 max-w-[620px] font-sans text-[16.5px] leading-relaxed text-ivory/80 md:text-[17.5px]"
        >
          I build professional AI-assisted websites that help your business
          get online without recurring hosting fees on eligible projects.
          You only pay for your domain, which can cost less than $11 per
          year, depending on the domain extension and provider.
        </motion.p>

        <motion.div
          {...fade(0.36)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonPrimary href="#contact" className="w-full sm:w-auto">
            Let&apos;s Build Your Website
          </ButtonPrimary>
          <ButtonSecondary
            href="#portfolio"
            tone="dark"
            className="w-full sm:w-auto"
          >
            Explore Our Work
          </ButtonSecondary>
        </motion.div>
      </div>

      {/* ============================================== ticker — light strip over the photograph */}
      <div className="marquee relative z-10 border-y border-ivory/20 py-[18px]">
        <div className="marquee-track">
          <TickerRow />
          <TickerRow />
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </section>
  );
}
