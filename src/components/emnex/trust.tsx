"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { EMAIL, FAQS, waLink } from "./data";
import { ButtonPrimary, Kicker, Reveal, TextLink } from "./ui";

/* ---------------------------------------------------------------- */
/* About — high-end editorial split                                  */
/* ---------------------------------------------------------------- */

export function About() {
  return (
    <section id="about" className="bg-canvas">
      <div className="container-x py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Founder photograph — editorial treatment, not a card */}
          <Reveal className="lg:col-span-6">
            <figure>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 h-full w-full border border-line"
                />
                <div className="relative aspect-[1280/714] overflow-hidden rounded-[3px]">
                  <Image
                    src="/founder.jpg"
                    alt="The founder of EMNEX AI"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-5 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-clay/80">
                <span className="h-[6px] w-[6px] rounded-full bg-teal-soft/80" />
                The founder behind EMNEX AI
              </figcaption>
            </figure>
          </Reveal>

          {/* Text */}
          <div className="lg:col-span-6">
            <Reveal>
              <Kicker className="dot-teal-soft">About the Founder</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ivory">
                Thoughtful Website Design. Built Around Your Business.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-[540px] font-sans text-[16px] leading-relaxed text-clay">
                I&apos;m the creative mind behind EMNEX AI, helping businesses
                build a professional online presence through thoughtful design
                and AI-assisted website development.
              </p>
              <p className="mt-4 max-w-[540px] font-sans text-[16px] leading-relaxed text-clay">
                My focus is simple: make quality website design more
                accessible, create digital experiences that reflect the value
                of a business, and help business owners establish a credible
                home online.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <ButtonPrimary href="#contact" tone="dark">
                  Let&apos;s Build Your Website
                </ButtonPrimary>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* FAQ — clean editorial accordion                                   */
/* ---------------------------------------------------------------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-canvas">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Heading column */}
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker className="dot-teal-soft">FAQ</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ivory">
                Questions Before I Build Your Website?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[440px] font-sans text-[15.5px] leading-relaxed text-clay">
                Straight answers, no fine print. If anything else is unclear,
                ask directly and you&apos;ll get an honest reply before any
                money is discussed.
              </p>
              <div className="mt-8">
                <TextLink href={waLink()} external>
                  Ask Me a Question on WhatsApp
                </TextLink>
              </div>
            </Reveal>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-7">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={0.04 * i} y={14}>
                  <div
                    className={`border-t border-line ${
                      i === FAQS.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-sans text-[16px] font-semibold text-ivory md:text-[16.5px]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/20 transition-colors duration-300"
                      >
                        <span
                          className={`absolute h-[1.2px] w-[13px] bg-ivory transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                        <span
                          className={`absolute h-[1.2px] w-[13px] bg-ivory transition-transform duration-300 ${
                            isOpen ? "-rotate-45" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[640px] pb-7 font-sans text-[15.5px] leading-relaxed text-clay">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Final CTA — Deep Ink                                              */
/* ---------------------------------------------------------------- */

export function FinalCta() {
  return (
    <section id="contact" className="bg-ink text-ivory">
      <div className="container-x pt-20 pb-16 text-center md:pt-28 md:pb-24">
        <Reveal>
          <p className="kicker rule-dot dot-teal-soft justify-center text-ivory/60">
            Start the Conversation
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-7 max-w-[880px] font-serif text-[clamp(2.3rem,5.2vw,4.4rem)] font-normal leading-[1.08] tracking-[-0.012em]">
            Let&apos;s Put Your Business on the Internet.{" "}
            <em className="font-light italic text-ember-soft">The Right Way.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-7 max-w-[560px] font-sans text-[16px] leading-relaxed text-ivory/60">
            Your business has something worth showing the world. Let&apos;s
            build a website that gives it the online presence it deserves.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <ButtonPrimary
              href={waLink()}
              external
              tone="dark"
              ariaLabel="Start a WhatsApp conversation about your website project"
            >
              Let&apos;s Build My Website
            </ButtonPrimary>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-8 font-sans text-[14px] text-ivory/50">
            Prefer email?{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="border-b border-ivory/25 pb-0.5 text-ivory/80 transition-colors duration-300 hover:border-ember-soft hover:text-ember-soft"
            >
              {EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
