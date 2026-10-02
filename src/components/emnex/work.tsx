"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
/* Selected Work — pill filters, panel cards with ember top line.     */
/* First project ("all" view) is an oversized featured row.           */
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

        {/* Pill filters — ember fill marks the active industry */}
        <Reveal delay={0.18}>
          <div
            role="tablist"
            aria-label="Filter projects by industry"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full border px-6 py-3 font-sans text-[11.5px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    active
                      ? "border-ember bg-ember text-ivory shadow-[0_12px_26px_-14px_rgba(166,61,40,0.6)]"
                      : "border-line bg-transparent text-clay hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {f.label}
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
              <div className="grid grid-cols-1 gap-x-12 gap-y-14 pt-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-16">
                {visible.map((p, i) =>
                  filter === "all" && i === 0 ? (
                    <Reveal key={p.id} delay={0} y={20} className="h-full md:col-span-2">
                      <FeaturedCard p={p} />
                    </Reveal>
                  ) : (
                    <Reveal key={p.id} delay={Math.min(i, 5) * 0.07} y={20} className="h-full">
                      <ProjectCard p={p} />
                    </Reveal>
                  )
                )}
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
/* Project card — panel with ember top line, lift on hover.           */
/* ---------------------------------------------------------------- */

const cardPanel =
  "flex h-full flex-col overflow-hidden rounded-[5px] border border-line bg-paper transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(23,19,16,0.35)]";

const cardTopLine =
  "block h-[3px] w-full origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100";

const cardVisit =
  "mt-auto inline-flex items-center gap-1.5 pt-6 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-ember";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group h-full">
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the ${p.name} live website`}
        className={cardPanel}
      >
        <span aria-hidden="true" className={cardTopLine} />
        <BrowserFrame
          flat
          src={p.heroShot}
          alt={`${p.name} — live website designed by EMNEX AI`}
          domain={p.domain}
          sizes="(min-width: 768px) 46vw, 100vw"
        />
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <span className="kicker text-clay">{p.category}</span>
            <span className="font-serif text-[14px] italic leading-none text-ember/90">
              {p.index}
            </span>
          </div>
          <h3 className="mt-3.5 font-serif text-[clamp(1.6rem,2.4vw,2.05rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
            {p.name}
          </h3>
          <p className="mt-3 max-w-[460px] font-sans text-[14.5px] leading-relaxed text-clay">
            {p.description}
          </p>
          <span className={cardVisit}>
            Visit Live Site
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </a>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/* Featured card — the first project, full-width oversized row.       */
/* ---------------------------------------------------------------- */

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="group h-full">
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the ${p.name} live website`}
        className={`${cardPanel} lg:grid lg:grid-cols-12`}
      >
        <span aria-hidden="true" className={`${cardTopLine} lg:col-span-full`} />
        <div className="lg:col-span-7">
          <BrowserFrame
            flat
            src={p.heroShot}
            alt={`${p.name} — live website designed by EMNEX AI`}
            domain={p.domain}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-7 md:p-9 lg:col-span-5 lg:justify-center">
          <div className="flex items-baseline justify-between gap-4">
            <span className="kicker text-clay">{p.category}</span>
            <span className="font-serif text-[14px] italic leading-none text-ember/90">
              {p.index}
            </span>
          </div>
          <h3 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-1">
            {p.name}
          </h3>
          <p className="mt-4 max-w-[440px] font-sans text-[15.5px] leading-relaxed text-clay">
            {p.description}
          </p>
          <span className={`${cardVisit} lg:pt-8`}>
            Visit Live Site
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                        Visit Live Site
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
