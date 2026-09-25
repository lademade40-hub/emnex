"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary, BrowserFrame } from "./ui";
import { PROJECTS } from "./data";

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
            <span className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-clay">
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
  const [wandermark, velmora, marlowe] = PROJECTS;

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
    <section id="top" className="relative overflow-hidden bg-ivory">
      {/* ------------------------------------------------ intro */}
      <div className="container-x pb-14 pt-[120px] text-center md:pb-16 md:pt-[150px]">
        <motion.p
          {...fade(0.05)}
          className="kicker rule-dot justify-center text-clay"
        >
          EMNEX AI — AI-Assisted Website Design Studio
        </motion.p>

        <motion.h1
          {...fade(0.15, 28)}
          className="mx-auto mt-7 max-w-[900px] font-serif text-[clamp(2.5rem,5.7vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.012em] text-ink"
        >
          What if your business website didn&apos;t come with{" "}
          <em className="font-light italic text-ember">
            monthly hosting fees?
          </em>
        </motion.h1>

        <motion.p
          {...fade(0.26)}
          className="mx-auto mt-7 max-w-[620px] font-sans text-[16.5px] leading-relaxed text-clay md:text-[17.5px]"
        >
          I build professional AI-assisted websites that help your business get
          online without recurring hosting fees on eligible projects. You only
          pay for your domain, which can cost less than $11 per year, depending
          on the domain extension and provider.
        </motion.p>

        <motion.div
          {...fade(0.36)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonPrimary href="#contact" className="w-full sm:w-auto">
            Let&apos;s Build Your Website
          </ButtonPrimary>
          <ButtonSecondary href="#portfolio" className="w-full sm:w-auto">
            Explore Our Work
          </ButtonSecondary>
        </motion.div>
      </div>

      {/* --------------------------------- layered mockup composition */}
      <div className="container-x relative pb-12 md:pb-16">
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 44 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1.05, delay: 0.45, ease },
              })}
          className="relative"
        >
          <div className="relative flex justify-center">
            {/* Side mockup — left (Velmora Estates) — static visual, not a link */}
            <div className="absolute left-0 top-[64px] hidden w-[30%] lg:block">
              <BrowserFrame
                src={velmora.heroShot}
                alt={`${velmora.name} — live website preview`}
                domain={velmora.domain}
                sizes="30vw"
                className="shadow-[0_2px_6px_rgba(21,21,21,0.05),0_30px_60px_-30px_rgba(21,21,21,0.3)]"
              />
            </div>

            {/* Side mockup — right (Marlowe & Hart) — static visual, not a link */}
            <div className="absolute right-0 top-[92px] hidden w-[30%] lg:block">
              <BrowserFrame
                src={marlowe.heroShot}
                alt={`${marlowe.name} — live website preview`}
                domain={marlowe.domain}
                sizes="30vw"
                className="shadow-[0_2px_6px_rgba(21,21,21,0.05),0_30px_60px_-30px_rgba(21,21,21,0.3)]"
              />
            </div>

            {/* Central mockup — Wandermark — static visual, not a link */}
            <div className="relative z-10 w-full lg:w-[54%]">
              <BrowserFrame
                src={wandermark.heroShot}
                alt={`${wandermark.name} — live website preview`}
                domain={wandermark.domain}
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="shadow-[0_4px_10px_rgba(21,21,21,0.07),0_70px_130px_-40px_rgba(21,21,21,0.45)]"
              />
            </div>
          </div>

          {/* Caption */}
          <p className="mt-6 text-center font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-clay/80">
            Real client work — live websites, not mock-ups
          </p>
        </motion.div>
      </div>

      {/* ------------------------------------------------- ticker */}
      <div className="marquee border-y border-line bg-ivory py-[18px]">
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
