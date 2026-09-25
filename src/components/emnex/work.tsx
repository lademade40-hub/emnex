"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  FILTERS,
  PROJECTS,
  waLink,
  type FilterKey,
  type Project,
} from "./data";
import { BrowserFrame, Kicker, Reveal, TextLink } from "./ui";

/* ---------------------------------------------------------------- */
/* Selected Work — two-column editorial grid, five featured builds.   */
/* Row 1: Wandermark | Velmora · Row 2: Marlowe & Hart | Sizzle Stack */
/* Row 3: Vanta Motorgroup | quiet editorial note.                    */
/* ---------------------------------------------------------------- */

const FEATURED = PROJECTS.filter((p) => p.featured);

export function SelectedWork() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visible = FEATURED.filter(
    (p) => filter === "all" || p.filter === filter
  );

  return (
    <section id="portfolio" className="bg-ivory">
      <div className="container-x pt-14 pb-16 md:pt-20 md:pb-24">
        {/* Heading */}
        <div className="max-w-[760px]">
          <Reveal>
            <Kicker>Selected Work</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
              Websites I&apos;ve Designed &amp; Built for Different Businesses.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[620px] font-sans text-[16px] leading-relaxed text-clay">
              A selection of websites created by EMNEX AI for businesses across
              travel, real estate, hospitality, creative services, and more.
            </p>
          </Reveal>
        </div>

        {/* Editorial filter — typography + underline, never pills */}
        <Reveal delay={0.18}>
          <div
            role="tablist"
            aria-label="Filter projects by industry"
            className="mt-10 flex gap-x-8 gap-y-3 overflow-x-auto border-y border-line py-5 md:flex-wrap md:overflow-visible"
          >
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.key)}
                  className={`relative shrink-0 whitespace-nowrap pb-1.5 font-sans text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active
                      ? "text-ink"
                      : "text-clay/80 hover:text-charcoal"
                  }`}
                >
                  {f.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-ember transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Two-column editorial grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {visible.length === 0 ? (
              <div className="border-b border-line py-20 text-center">
                <p className="font-serif text-[26px] italic text-charcoal">
                  No published work in this category yet.
                </p>
                <p className="mx-auto mt-3 max-w-[420px] font-sans text-[15px] leading-relaxed text-clay">
                  We&apos;re actively building for businesses like yours — ask
                  about your project and let&apos;s make yours the first.
                </p>
                <div className="mt-8 flex justify-center">
                  <TextLink href={waLink()} external>
                    Discuss Your Project
                  </TextLink>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-12 gap-y-14 pt-12 md:grid-cols-2 md:gap-y-20 lg:gap-x-20">
                {visible.map((p, i) => (
                  <Reveal key={p.id} delay={Math.min(i, 5) * 0.07} y={20} className="h-full">
                    <ProjectCard p={p} />
                  </Reveal>
                ))}
                {filter === "all" && <EditorialSlot />}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Project card — large mockup first, minimal metadata underneath.    */
/* ---------------------------------------------------------------- */

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group h-full">
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View the ${p.name} live website`}
        className="flex h-full flex-col"
      >
        {/* The mockup — the visual does the selling */}
        <BrowserFrame
          src={p.heroShot}
          alt={`${p.name} — live website designed by EMNEX AI`}
          domain={p.domain}
          sizes="(min-width: 768px) 46vw, 100vw"
        />

        {/* Project information — secondary, underneath the image */}
        <div className="flex flex-1 flex-col pt-6">
          <span className="font-serif text-[15px] italic leading-none text-ember">
            {p.index}
          </span>
          <h3 className="mt-3 font-serif text-[clamp(1.65rem,2.5vw,2.2rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
            {p.name}
          </h3>
          <p className="kicker mt-3 text-clay">{p.category}</p>
          <p className="mt-3.5 max-w-[430px] font-sans text-[15px] leading-relaxed text-clay">
            {p.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-sans text-[12.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/55 transition-colors duration-300 group-hover:text-ember">
            View Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </a>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/* Sixth cell — quiet editorial note beside Vanta Motorgroup.         */
/* ---------------------------------------------------------------- */

function EditorialSlot() {
  return (
    <Reveal delay={0.32} y={20} className="h-full">
      <div className="flex h-full flex-col justify-center py-6">
        <span className="h-px w-14 bg-ember" aria-hidden="true" />
        <p className="mt-8 max-w-[400px] font-serif text-[clamp(1.5rem,2.2vw,2rem)] font-normal leading-[1.22] text-charcoal">
          Every website on this page was designed, built and launched by EMNEX
          AI.
        </p>
        <p className="mt-4 max-w-[380px] font-sans text-[15px] leading-relaxed text-clay">
          Yours could be the next one here.
        </p>
        <div className="mt-9">
          <TextLink href={waLink()} external>
            Start Your Project
          </TextLink>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/* A closer look — three projects, large mockups, text secondary.     */
/* ---------------------------------------------------------------- */

export function CloserLook() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="bg-ivory">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-[760px]">
          <Reveal>
            <Kicker>Behind the Work</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
              A closer look at three projects.
            </h2>
          </Reveal>
        </div>

        {/* First project begins immediately after the heading */}
        <div className="mt-10">
          {featured.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.id} y={20}>
                <article
                  className={`grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-14 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  {/* LARGE mockup — the dominant visual */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.name} live website`}
                    className={`group block lg:col-span-8 ${flip ? "lg:order-2" : ""}`}
                  >
                    <BrowserFrame
                      src={p.altShot}
                      alt={`${p.name} — inside pages of the live website`}
                      domain={p.domain}
                      sizes="(min-width: 1024px) 66vw, 100vw"
                    />
                  </a>

                  {/* Secondary text column */}
                  <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-[15px] italic text-ember">
                        {p.index}
                      </span>
                      <span className="kicker text-clay">{p.category}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal uppercase leading-[1.05] tracking-[0.005em] text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-5 max-w-[400px] font-sans text-[15.5px] leading-relaxed text-clay">
                      {p.description}
                    </p>
                    <div className="mt-6">
                      <TextLink href={p.url} external>
                        View Project
                      </TextLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
