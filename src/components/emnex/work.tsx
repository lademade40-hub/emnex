"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FILTERS, PROJECTS, waLink, type FilterKey } from "./data";
import { BrowserFrame, Kicker, Reveal, TextLink } from "./ui";

/* ---------------------------------------------------------------- */
/* Selected Work — five projects, curated editorial portfolio        */
/* ---------------------------------------------------------------- */

export function SelectedWork() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.filter === filter
  );

  return (
    <section id="portfolio" className="bg-ivory">
      <div className="container-x py-24 md:py-32">
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
              travel, real estate, hospitality, creative services, nonprofits,
              and more.
            </p>
          </Reveal>
        </div>

        {/* Editorial filter — magazine text navigation */}
        <Reveal delay={0.18}>
          <div
            role="tablist"
            aria-label="Filter projects by industry"
            className="mt-12 flex gap-x-8 gap-y-3 overflow-x-auto border-y border-line py-5 md:flex-wrap md:overflow-visible"
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

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
              visible.map((p, i) => {
                const flip = i % 2 === 1;
                return (
                  <article
                    key={p.id}
                    className="grid items-center gap-9 py-14 lg:grid-cols-12 lg:gap-14 lg:py-[72px] md:py-16"
                  >
                    {/* Large mockup — the visual does the selling */}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.name} live website`}
                      className={`group block lg:col-span-7 ${
                        flip ? "lg:order-2" : ""
                      }`}
                    >
                      <BrowserFrame
                        src={p.heroShot}
                        alt={`${p.name} — live website preview`}
                        domain={p.domain}
                        sizes="(min-width: 1024px) 58vw, 100vw"
                      />
                    </a>

                    {/* Project information — secondary */}
                    <div
                      className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-[15px] italic text-ember">
                          {p.index}
                        </span>
                        <span className="kicker text-clay">
                          {p.category}
                        </span>
                      </div>
                      <h3 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
                        {p.name}
                      </h3>
                      <p className="mt-5 max-w-[430px] font-sans text-[15.5px] leading-relaxed text-clay">
                        {p.description}
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-x-9 gap-y-4">
                        <TextLink href={p.url} external>
                          View Project
                        </TextLink>
                        <TextLink href={waLink(p.name)} external>
                          Discuss a Similar Project
                        </TextLink>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Behind the Work — three large real mockups, image-first           */
/* ---------------------------------------------------------------- */

export function CloserLook() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="bg-ivory">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-[760px]">
          <Reveal>
            <Kicker>Behind the Work</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
              A closer look at three projects.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[560px] font-sans text-[16px] leading-relaxed text-clay">
              The same websites featured in the hero, with a little more
              context.
            </p>
          </Reveal>
        </div>

        <div className="mt-8">
          {featured.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.id} y={24}>
                <article className="grid items-center gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-12 lg:py-16 first:border-t-0 [&:not(:first-child)]:border-t">
                  {/* LARGE mockup — 65–75% of the visual attention */}
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
                    <div className="mt-8">
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
