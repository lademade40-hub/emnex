"use client";

import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS, PROBLEMS, SERVICES, SOLUTIONS } from "./data";
import { ButtonPrimary, Kicker, Reveal } from "./ui";

/* ---------------------------------------------------------------- */
/* Problem — Deep Ink editorial rows                                 */
/* ---------------------------------------------------------------- */

export function Problem() {
  return (
    <section className="bg-ink text-ivory">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-[780px]">
          <Reveal>
            <Kicker tone="dark">The Everyday Problem</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em]">
              Your Customers Are Online. Is Your Business Ready for Them?
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-[640px] font-sans text-[16px] leading-relaxed text-ivory/60">
              Your business may already be doing great work. But when potential
              customers look you up, what do they find?
            </p>
            <p className="mt-4 max-w-[640px] font-sans text-[16px] leading-relaxed text-ivory/60">
              A professional website gives your business a home online: a place
              to showcase your services, answer questions, build trust, and
              help customers take the next step.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.index} delay={0.05 * i} y={16}>
              <div
                className={`grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-x-5 border-t border-ivory/[0.13] py-8 md:grid-cols-[90px_minmax(0,5fr)_minmax(0,6fr)] md:gap-x-8 md:py-9 ${
                  i === PROBLEMS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-serif text-[15px] italic text-ember">
                  {p.index}
                </span>
                <h3 className="font-serif text-[22px] font-normal leading-snug text-ivory md:text-[26px]">
                  {p.title}
                </h3>
                <p className="col-span-2 mt-3 max-w-[560px] font-sans text-[15px] leading-relaxed text-ivory/55 md:col-span-1 md:mt-0">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Solution — Warm Ivory editorial rows                              */
/* ---------------------------------------------------------------- */

export function Solution() {
  return (
    <section className="bg-ivory">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-[780px]">
          <Reveal>
            <Kicker>The Way Forward</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
              A Professional Website. Without the Unnecessary Hosting Burden.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-[640px] font-sans text-[16px] leading-relaxed text-clay">
              EMNEX AI combines modern design with AI-assisted development to
              help businesses get online with less complexity.
            </p>
            <p className="mt-4 max-w-[640px] font-sans text-[16px] leading-relaxed text-clay">
              From your first impression to your contact button, every section
              is designed to help visitors understand your business and take
              action.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.index} delay={0.05 * i} y={16}>
              <div
                className={`grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-x-5 border-t border-line py-8 md:grid-cols-[90px_minmax(0,5fr)_minmax(0,6fr)] md:gap-x-8 md:py-9 ${
                  i === SOLUTIONS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-serif text-[15px] italic text-ember">
                  {s.index}
                </span>
                <h3 className="font-serif text-[22px] font-normal leading-snug text-ink md:text-[26px]">
                  {s.title}
                </h3>
                <p className="col-span-2 mt-3 max-w-[560px] font-sans text-[15px] leading-relaxed text-clay md:col-span-1 md:mt-0">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Services — editorial index list                                   */
/* ---------------------------------------------------------------- */

export function Services() {
  return (
    <section id="services" className="bg-ivory">
      <div className="container-x py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <Reveal>
              <Kicker>Services</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                Everything You Need to Establish Your Business Online.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="md:max-w-[360px]">
            <p className="font-sans text-[15.5px] leading-relaxed text-clay">
              Every project is scoped to what your business actually needs: no
              bloated packages, no hidden fees. Request a quote based on your
              requirements, and get a clear agreement before work begins.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.index} delay={0.04 * i} y={14}>
              <a
                href="#contact"
                aria-label={`${s.name} — discuss your project`}
                className={`group grid grid-cols-[44px_minmax(0,1fr)_28px] items-center gap-x-4 border-t border-line py-7 transition-colors duration-300 md:grid-cols-[72px_minmax(0,5fr)_minmax(0,6fr)_40px] md:gap-x-8 md:py-8 ${
                  i === SERVICES.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-serif text-[14px] italic text-ember">
                  {s.index}
                </span>
                <h3 className="font-serif text-[21px] font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-ember md:text-[25px]">
                  {s.name}
                </h3>
                <p className="col-span-3 mt-2.5 max-w-[520px] font-sans text-[14.5px] leading-relaxed text-clay md:col-span-1 md:mt-0">
                  {s.body}
                </p>
                <ArrowRight
                  className="hidden h-[18px] w-[18px] text-ink/40 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-ember md:block"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-7 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[520px]">
              <h3 className="font-serif text-[22px] font-normal text-ink">
                Not sure which one you need?
              </h3>
              <p className="mt-2.5 font-sans text-[15px] leading-relaxed text-clay">
                Tell me about your business and goals, and I&apos;ll recommend
                the right approach and quote for your exact project.
              </p>
            </div>
            <ButtonPrimary href="#contact" className="shrink-0">
              Discuss Your Project
            </ButtonPrimary>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Process — Deep Ink, four editorial columns                        */
/* ---------------------------------------------------------------- */

export function Process() {
  return (
    <section id="how-it-works" className="bg-ink text-ivory">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-[720px]">
          <Reveal>
            <Kicker tone="dark">How It Works</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.01em]">
              From Idea to Live Website in 4 Simple Steps.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={0.07 * i} y={18}>
              <div className="border-t border-ivory/[0.16] pt-7">
                <span className="font-serif text-[40px] font-light leading-none text-ivory/90">
                  {step.index}
                  <span className="text-ember">.</span>
                </span>
                <h3 className="mt-5 font-serif text-[21px] font-normal leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3.5 font-sans text-[14.5px] leading-relaxed text-ivory/55">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-7 border-t border-ivory/10 pt-10 md:flex-row md:items-center md:justify-between md:gap-12">
            <p className="max-w-[640px] font-sans text-[14.5px] leading-relaxed text-ivory/55">
              Before we begin: hosting options, domain costs, revision scope,
              and delivery timelines are all confirmed with you up front, so
              there are no surprises, only a clear agreement.
            </p>
            <ButtonPrimary href="#contact" tone="dark" className="shrink-0">
              Start My Website Project
            </ButtonPrimary>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
