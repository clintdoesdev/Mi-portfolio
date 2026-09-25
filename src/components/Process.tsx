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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow index="04">how i work</Eyebrow>
        <Reveal>
          <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            Understand. Build. <span className="marker px-[0.06em] [--marker-delay:0.2s]">Ship.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {/* The rail that links the steps: vertical on phones, horizontal from md up. */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-8 left-[2.2rem] top-8 w-0.5 origin-top rounded-full bg-accent md:hidden"
          />
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-[12%] right-[12%] top-[2.2rem] hidden h-0.5 origin-left rounded-full bg-accent md:block"
          />

          {processSteps.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-4 md:flex-col md:gap-5"
            >
              <span className="relative z-10 flex h-[4.4rem] w-[4.4rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-border bg-surface shadow-soft md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={step.color}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-6 w-6"
                >
                  {glyphs[step.glyph]}
                </svg>
                <span className="mt-1 font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              </span>

              <article className="flex-1 rounded-3xl border border-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                  <span className="h-2 w-2 rounded-full" style={{ background: step.color }} />
                  {step.step} · {step.phase}
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground">{step.title}</h3>
                <p className="text-sm text-muted">{step.subtitle}</p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">{step.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li key={tag} className="rounded-lg bg-background-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
