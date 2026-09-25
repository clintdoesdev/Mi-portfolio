"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightText } from "@/components/ui/HighlightText";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { alsoFamiliar, approach, skills } from "@/lib/data";

function SkillTile({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 220, damping: 18 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    rx.set(((e.clientY - rect.top) / rect.height - 0.5) * -16);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ type: "spring", stiffness: 200, damping: 18, delay: (index % 4) * 0.07 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY }}
        className="group h-full rounded-3xl border border-border bg-surface p-4 transition-shadow duration-300 hover:shadow-lift sm:p-5"
      >
        <span
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.05rem] font-display text-xl font-extrabold tracking-tight shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5),inset_0_-3px_0_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-16 sm:w-16 sm:text-2xl"
          style={{
            background: `linear-gradient(145deg, ${skill.from}, ${skill.to})`,
            color: skill.darkText ? "#141416" : "#ffffff",
          }}
        >
          <span aria-hidden className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />
          <span className="relative">{skill.abbr}</span>
        </span>
        <h3 className="mt-4 font-display text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
          {skill.title}
        </h3>
        <p className="mt-1 text-sm leading-snug text-muted">{skill.caption}</p>
      </motion.div>
    </motion.li>
  );
}

export function WhatIDo() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow index="01">what i do</Eyebrow>

        <HighlightText
          text={approach.paragraphs[0]}
          highlights={["converts", "ranks", "scales", "backend"]}
          className="mt-8 max-w-5xl text-balance font-display text-[1.85rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.6rem]"
        />

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillTile key={skill.title} skill={skill} index={i} />
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <p className="font-mono text-xs text-muted">
              <span className="text-accent">&gt;</span> also familiar with
            </p>
            <Marquee items={alsoFamiliar} className="mt-4" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
