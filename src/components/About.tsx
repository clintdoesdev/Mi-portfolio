"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import photo from "../../public/images/clinton-photo.jpg";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TikTokIcon } from "@/components/ui/SocialIcons";
import { approach, heroBio, site, stats, tiktokBlurb } from "@/lib/data";
import { useMediaQuery } from "@/lib/useMediaQuery";

// A conference-style pass on a lanyard. Mouse users can tug it; it swings back.
function DevPass() {
  const canDrag = useMediaQuery("(pointer: fine)");
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [22, -22]);

  return (
    <div className="relative mx-auto flex w-full max-w-[18rem] flex-col items-center">
      <div
        aria-hidden
        className="relative h-28 w-8 overflow-hidden bg-accent lg:h-60 shadow-[inset_-4px_0_0_rgba(0,0,0,0.08)] sm:h-36"
      >
        <p className="absolute left-1/2 top-1 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-ink [writing-mode:vertical-rl]">
          clintdoesdev · clintdoesdev
        </p>
      </div>

      <div className="animate-sway origin-top motion-reduce:animate-none">
        <motion.div
          drag={canDrag}
          dragSnapToOrigin
          dragElastic={0.35}
          dragTransition={{ bounceStiffness: 180, bounceDamping: 9 }}
          whileDrag={{ cursor: "grabbing" }}
          style={{ x, rotate, originY: 0 }}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ type: "spring", stiffness: 90, damping: 11 }}
          className={`flex flex-col items-center ${canDrag ? "cursor-grab" : ""}`}
        >
          <span aria-hidden className="h-6 w-12 rounded-b-xl rounded-t-md bg-gradient-to-b from-[#d6d6db] to-[#8f8f96] shadow-md" />
          <figure className="shadow-lift -mt-1 w-64 overflow-hidden rounded-3xl bg-white text-neutral-900 sm:w-72">
            <div className="relative flex items-center justify-between bg-neutral-950 px-5 pb-3 pt-6 font-mono text-[11px] uppercase tracking-widest text-accent">
              <span aria-hidden className="absolute left-1/2 top-2 h-2 w-12 -translate-x-1/2 rounded-full bg-neutral-800" />
              <span>Dev pass</span>
              <span className="text-white/60">No. 001</span>
            </div>
            <div className="p-4 pb-5">
              <div className="aspect-square overflow-hidden rounded-2xl bg-accent">
                <Image
                  src={photo}
                  alt={`${site.name}, ${site.role.toLowerCase()}`}
                  sizes="(min-width: 640px) 256px, 224px"
                  draggable={false}
                  className="h-full w-full select-none object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight">{site.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{site.role}</p>
              </figcaption>
              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-dashed border-neutral-200 pt-3 font-mono text-[10px] uppercase">
                <div>
                  <dt className="text-neutral-400">Access</dt>
                  <dd className="font-semibold">All areas</dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Based</dt>
                  <dd className="font-semibold">Remote</dd>
                </div>
              </dl>
              <div
                aria-hidden
                className="mt-4 h-9 w-full"
                style={{
                  background:
                    "repeating-linear-gradient(90deg,#141416 0 2px,transparent 2px 4px,#141416 4px 5px,transparent 5px 8px,#141416 8px 11px,transparent 11px 12px)",
                }}
              />
            </div>
          </figure>
        </motion.div>
      </div>
    </div>
  );
}

export function About() {
  const [lead, ...rest] = approach.heading.split("\n");

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <Eyebrow index="03">about me</Eyebrow>
          <Reveal>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              {lead}
              <br />
              <span className="text-muted">{rest.join(" ")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-xl text-balance text-lg font-medium leading-snug text-foreground/85 sm:text-2xl">
              {site.role} with{" "}
              <span className="whitespace-nowrap rounded-md bg-accent px-1.5 font-semibold text-ink">
                {stats[0].value} years
              </span>{" "}
              shipping for founders, teams, and businesses.
            </p>
          </Reveal>

          <ul className="mt-8 grid max-w-lg grid-cols-2 gap-2.5">
            {approach.promise.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-3.5 py-3 text-sm font-semibold sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                    <motion.path
                      d="m3 8.5 3.2 3.2L13 5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.25 + i * 0.12 }}
                    />
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 max-w-xl space-y-5">
            {[heroBio, approach.paragraphs[1]].map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.08}>
                <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse rounded-2xl bg-background-2 p-4">
                  <dt className="mt-1 font-mono text-[11px] text-muted">{stat.label}</dt>
                  <dd className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                    <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative flex flex-col items-center gap-10 lg:sticky lg:top-0 lg:-mt-48">
          <DevPass />

          <motion.a
            href={tiktokBlurb.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.3 }}
            className="shadow-soft flex w-full max-w-sm gap-3 rounded-3xl border border-border bg-surface/90 p-4 backdrop-blur-xl transition-transform hover:-translate-y-1"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white">
              <TikTokIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center justify-between text-xs text-muted">
                <span className="font-semibold uppercase tracking-wide">TikTok</span>
                <span>now</span>
              </span>
              <span className="mt-0.5 block text-sm font-semibold text-foreground">{tiktokBlurb.handle}</span>
              <span className="mt-0.5 block text-sm leading-snug text-muted">{tiktokBlurb.text}</span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
