"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { alsoFamiliar, approach, skills } from "@/lib/data";
import { useMediaQuery } from "@/lib/useMediaQuery";

const tints: Record<(typeof skills)[number]["tint"], string> = {
  white: "bg-white/90 dark:bg-white/[0.07]",
  lavender: "bg-[#ece6fd] dark:bg-violet-400/15",
  mint: "bg-[#e1f4e8] dark:bg-emerald-400/15",
  cream: "bg-[#f6f0de] dark:bg-amber-300/15",
  sky: "bg-[#e1edfb] dark:bg-sky-400/15",
  rose: "bg-[#fbe4ec] dark:bg-pink-400/15",
};

// Where each card rests in the cluster: centre point in % plus a tilt.
const layout = [
  { x: 36, y: 12, r: -6 },
  { x: 68, y: 21, r: 5 },
  { x: 32, y: 35, r: -8 },
  { x: 68, y: 45, r: 7 },
  { x: 42, y: 58, r: 2 },
  { x: 33, y: 76, r: 8 },
  { x: 67, y: 69, r: -7 },
  { x: 56, y: 90, r: -3 },
];

export function WhatIDo() {
  const clusterRef = useRef<HTMLDivElement>(null);
  // Dragging would swallow touch scrolling, so it is a mouse/trackpad-only treat.
  const canDrag = useMediaQuery("(pointer: fine)");

  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow>What I do</Eyebrow>

        <div className="mt-8 grid items-center gap-12 lg:mt-4 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div ref={clusterRef} className="relative mx-auto h-[24rem] w-full max-w-md sm:h-[28rem] lg:max-w-lg">
            {skills.map((skill, i) => {
              const spot = layout[i % layout.length];
              return (
                <div
                  key={skill.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%`, zIndex: i }}
                >
                  <motion.div
                    drag={canDrag}
                    dragConstraints={clusterRef}
                    dragElastic={0.18}
                    whileDrag={{ scale: 1.08, zIndex: 40, cursor: "grabbing" }}
                    whileHover={{ scale: 1.04, rotate: spot.r * 0.4 }}
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: spot.r }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.06 }}
                    className={`relative ${canDrag ? "cursor-grab" : ""}`}
                  >
                    <div
                      className={`shadow-soft animate-bob rounded-2xl border border-white/80 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5 dark:border-white/10 ${tints[skill.tint]}`}
                      style={{ animationDelay: `${-i * 0.8}s`, animationDuration: `${6 + (i % 3)}s` }}
                    >
                      <p className="whitespace-nowrap text-[10px] text-muted sm:text-[11px]">{skill.caption}</p>
                      <p className="whitespace-nowrap font-display text-base font-semibold tracking-tight text-foreground sm:text-xl">
                        {skill.title}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
            <p className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-serif text-base italic text-muted pointer-fine:block">
              (go on, drag them around)
            </p>
          </div>

          <div>
            <ScrollRevealText
              text={approach.paragraphs[0]}
              className="text-balance font-display text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.6rem]"
            />

            <Reveal delay={0.1}>
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                  Also familiar with
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {alsoFamiliar.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
