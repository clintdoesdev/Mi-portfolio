"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

const glyphs: Record<(typeof processSteps)[number]["glyph"], React.ReactNode> = {
  search: <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm9 2-4-4" />,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  rocket: (
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9A2.1 2.1 0 0 0 5 15zm7-.2L9.2 12A14.7 14.7 0 0 1 20.5 3.5C20.5 6 19.8 10.4 15 13.5a15 15 0 0 1-3 1.3zM9.2 12H5s.5-2.8 1.8-3.8c1.4-1 4.2 0 4.2 0M12 14.8v4.2s2.8-.5 3.8-1.8c1-1.4 0-4.2 0-4.2" />
  ),
};

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Eyebrow>How I work</Eyebrow>
        <Reveal>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
            Understand. Build. Ship.
          </h2>
        </Reveal>
      </div>

      <ol className="relative mx-auto mt-14 max-w-[26rem] px-4 sm:max-w-lg">
        <span
          aria-hidden
          className="absolute bottom-10 left-1/2 top-4 w-px -translate-x-1/2 bg-gradient-to-b from-border via-border to-transparent"
        />
        {processSteps.map((step, i) => {
          const tilt = i % 2 === 0 ? -1.5 : 1.5;
          return (
            <li key={step.step} className="relative flex flex-col items-center pb-14 last:pb-0">
              <Reveal>
                <span className="relative inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground shadow-soft">
                  {step.step}
                  <span className="text-faint">–</span>
                  <span className="text-muted">{step.phase}</span>
                </span>
              </Reveal>
              <span
                aria-hidden
                className="relative my-4 h-2.5 w-2.5 rounded-full ring-[5px] ring-background"
                style={{ background: step.color }}
              />

              <motion.article
                initial={{ opacity: 0, y: 40, rotate: tilt * 4 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                whileHover={{ rotate: 0, y: -4 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ type: "spring", stiffness: 110, damping: 16 }}
                className="shadow-lift relative w-full rounded-3xl border border-border/60 bg-surface p-6 text-left sm:p-7"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)]"
                    style={{ background: step.color }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="h-6 w-6"
                    >
                      {glyphs[step.glyph]}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted">{step.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">{step.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-background-2 px-3 py-1 text-xs font-medium text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
