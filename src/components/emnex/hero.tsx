"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
    <section id="top" className="relative overflow-hidden bg-stone-warm">
      {/* ------------------------------------- intro + founder portrait */}
      <div className="container-x relative pb-14 pt-[120px] md:pb-16 md:pt-[150px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Text — centered stack on mobile, editorial left column on desktop */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <motion.p
              {...fade(0.05)}
              className="kicker rule-dot text-clay"
            >
              EMNEX AI — AI-Assisted Website Design Studio
            </motion.p>

            <motion.h1
              {...fade(0.15, 28)}
              className="mx-auto mt-7 max-w-[900px] font-serif text-[clamp(2.5rem,5.7vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.012em] text-ink lg:mx-0"
            >
              What if your business website didn&apos;t come with{" "}
              <em className="font-light italic text-ember">
                monthly hosting fees?
              </em>
            </motion.h1>

            <motion.p
              {...fade(0.26)}
              className="mx-auto mt-7 max-w-[620px] font-sans text-[16.5px] leading-relaxed text-clay md:text-[17.5px] lg:mx-0"
            >
              I build professional AI-assisted websites that help your business
              get online without recurring hosting fees on eligible projects.
              You only pay for your domain, which can cost less than $11 per
              year, depending on the domain extension and provider.
            </motion.p>

            <motion.div
              {...fade(0.36)}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <ButtonPrimary href="#contact" className="w-full sm:w-auto">
                Let&apos;s Build Your Website
              </ButtonPrimary>
              <ButtonSecondary href="#portfolio" className="w-full sm:w-auto">
                Explore Our Work
              </ButtonSecondary>
            </motion.div>
          </div>

          {/* Founder portrait — right column, blended into the stone field.
              Purely visual: no link, no cursor interaction, no box. */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1, delay: 0.5, ease },
                })}
            className="lg:col-span-5"
          >
            <div className="pointer-events-none relative h-[400px] w-full select-none sm:h-[460px] lg:h-[560px]">
              <Image
                src="/founder-hero.jpg"
                alt="Portrait of the founder of EMNEX AI"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                draggable={false}
              />
              {/* whisper-warm veil — harmonizes the photograph with the stone surface */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-stone-warm/[0.07]"
              />
              {/* left fade — keeps black typography dominant, no hard edge */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[24%] bg-gradient-to-r from-stone-warm via-stone-warm/40 to-transparent lg:w-[42%]"
              />
              {/* right / top / bottom feathering — the photo emerges from the page */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-stone-warm/90 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-stone-warm/85 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-warm/90 to-transparent"
              />
            </div>
          </motion.div>
        </div>
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
                interactive={false}
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
                interactive={false}
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
                interactive={false}
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
      <div className="marquee border-y border-line py-[18px]">
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
