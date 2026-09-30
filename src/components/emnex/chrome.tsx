"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EMAIL, NAV_LINKS, SOCIALS } from "./data";

/* ---------------------------------------------------------------- */
/* Wordmark                                                          */
/* ---------------------------------------------------------------- */

export function Wordmark({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <a
      href="#top"
      aria-label="EMNEX AI — home"
      className={`inline-flex items-baseline gap-[3px] ${className}`}
    >
      <span
        className={`font-serif text-[21px] font-medium tracking-[0.02em] ${
          tone === "light" ? "text-ink" : "text-ivory"
        }`}
      >
        EMNEX
      </span>
      <span className="font-serif text-[21px] font-light italic text-ember">
        AI
      </span>
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* Header                                                            */
/* ---------------------------------------------------------------- */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-ivory/95 backdrop-blur-md"
            : "border-transparent bg-ivory"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Wordmark />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:text-ember"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-ink px-6 py-3 font-sans text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:bg-ember"
            >
              Let&apos;s Build Your Website
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — full ivory overlay, large serif links */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory lg:hidden"
          >
            <div className="mt-[72px] flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-10 pt-10">
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 * i + 0.1,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-line py-5 font-serif text-[34px] font-normal leading-tight text-ink"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="mt-10 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-7 py-4 font-sans text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ivory"
                >
                  Let&apos;s Build Your Website
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-center font-sans text-[14px] text-clay"
                >
                  {EMAIL}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Footer                                                            */
/* ---------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-x pb-10 pt-14 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Wordmark tone="dark" className="!text-[26px]" />
            <p className="kicker mt-4 text-ivory/50">
              AI-Powered Website Design
            </p>
            <p className="mt-6 max-w-xs font-sans text-[15px] leading-relaxed text-ivory/70">
              Professional websites. Thoughtful design. Affordable ownership.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group/link mt-8 inline-flex items-center gap-2 font-serif text-[19px] italic text-ivory transition-colors duration-300 hover:text-ember"
            >
              {EMAIL}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="kicker text-ivory/40">Explore</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {[
                { label: "Home", href: "#top" },
                ...NAV_LINKS,
                { label: "About", href: "#about" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-[14.5px] text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <p className="kicker text-ivory/40">Connect</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-sans text-[14.5px] text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {s.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-ivory/40 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-ember"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[12.5px] text-ivory/45">
            © {new Date().getFullYear()} EMNEX AI. All rights reserved.
          </p>
          <p className="font-sans text-[12.5px] text-ivory/45">
            Designed &amp; built by EMNEX AI
          </p>
        </div>
      </div>
    </footer>
  );
}
