"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------- */
/* Scroll reveal — quiet, once, never bouncy.                        */
/* ---------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Micro label                                                       */
/* ---------------------------------------------------------------- */

export function Kicker({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`kicker rule-dot ${
        tone === "light" ? "text-clay" : "text-ivory/60"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* ---------------------------------------------------------------- */
/* Buttons — slightly rounded rectangles, quiet color transitions.   */
/* ---------------------------------------------------------------- */

const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] px-7 py-4 font-sans text-[12.5px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ease-out";

export function ButtonPrimary({
  href,
  children,
  tone = "light",
  external = false,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const style =
    tone === "light"
      ? "bg-ink text-ivory hover:bg-ember"
      : "bg-ivory text-ink hover:bg-ember hover:text-ivory";
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btnBase} ${style} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
    </a>
  );
}

export function ButtonSecondary({
  href,
  children,
  tone = "light",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  external?: boolean;
  className?: string;
}) {
  const style =
    tone === "light"
      ? "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
      : "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btnBase} ${style} bg-transparent ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
    </a>
  );
}

export function TextLink({
  href,
  children,
  tone = "light",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link inline-flex items-center gap-2 font-sans text-[12.5px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
        tone === "light"
          ? "text-ink hover:text-ember"
          : "text-ivory hover:text-ember"
      } ${className}`}
    >
      <span className="border-b border-current pb-1">{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1.5"
        strokeWidth={1.75}
      />
    </a>
  );
}

export function ExternalMark() {
  return (
    <ArrowUpRight
      className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover/link:opacity-100"
      strokeWidth={1.75}
    />
  );
}

/* ---------------------------------------------------------------- */
/* Browser frame — quiet chrome around a real website screenshot.    */
/* ---------------------------------------------------------------- */

export function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 60vw, 100vw",
  interactive = true,
}: {
  src: string;
  alt: string;
  domain?: string | null;
  priority?: boolean;
  className?: string;
  sizes?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[5px] bg-paper shadow-[0_2px_6px_rgba(21,21,21,0.06),0_36px_80px_-32px_rgba(21,21,21,0.35)] ring-1 ring-ink/10 ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-3 border-b border-ink/[0.07] bg-paper px-4 py-2.5">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-[7px] w-[7px] rounded-full bg-line" />
          <span className="h-[7px] w-[7px] rounded-full bg-line" />
          <span className="h-[7px] w-[7px] rounded-full bg-line" />
        </div>
        <div className="mx-auto hidden max-w-[62%] items-center gap-1.5 truncate rounded-full bg-ivory px-4 py-1 sm:flex">
          {domain ? (
            <span className="truncate font-sans text-[10.5px] tracking-[0.04em] text-clay">
              {domain}
            </span>
          ) : (
            <span className="truncate font-sans text-[10.5px] tracking-[0.04em] text-clay/70">
              live preview
            </span>
          )}
        </div>
        <div className="w-10 shrink-0" />
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory-deep">
        <div
          className={`absolute inset-0 ${
            interactive
              ? "transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              : ""
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
