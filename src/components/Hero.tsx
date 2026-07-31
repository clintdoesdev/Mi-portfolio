"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import heroPhoto from "../../public/images/clinton-hero.png";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Glow } from "@/components/ui/Glow";
import { WorkMarquee } from "@/components/WorkMarquee";
import { heroBio, heroCardTags, heroTags, site } from "@/lib/data";

export function Hero() {
  const px = useMotionValue(0.5);
  const rotateYRaw = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const springX = useSpring(px, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 120, damping: 20 });
  const rotateX = useSpring(rotateXRaw, { stiffness: 120, damping: 20 });
  const glowLeft = useTransform(springX, [0, 1], [0, 100]);
  const glowX = useMotionTemplate`${glowLeft}%`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    px.set(relX);
    rotateYRaw.set((relX - 0.5) * 16);
    rotateXRaw.set((relY - 0.5) * -16);
  }

  function handleMouseLeave() {
    px.set(0.5);
    rotateYRaw.set(0);
    rotateXRaw.set(0);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,212,14,0.10), transparent 70%)",
        }}
      />
      <Glow className="-left-24 bottom-0 -z-10" color="255,138,61" opacity={0.08} size={420} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:pb-28">
        <div>
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              I build products{" "}
              <span className="relative inline-block whitespace-nowrap text-accent">
                that ship fast
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  className="absolute -bottom-2 left-0 w-full text-accent"
                >
                  <motion.path
                    d="M2 14C60 4 240 4 298 14"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base text-muted sm:text-lg">
              {heroBio}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-[0_0_0_0_rgba(245,212,14,0.4)] transition-shadow hover:shadow-[0_0_36px_4px_rgba(245,212,14,0.25)]"
              >
                See my work
              </MagneticButton>
              <MagneticButton
                href={`mailto:${site.email}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60"
              >
                Get in touch
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32}>
          <div
            className="relative mx-auto w-full max-w-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full blur-3xl motion-reduce:hidden"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(245,212,14,0.35), transparent)",
                left: glowX,
                translateX: "-50%",
              }}
            />

            <motion.div
              className="relative animate-float motion-reduce:animate-none"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <Image
                src={heroPhoto}
                alt="Portrait of Clinton, full-stack and Web3 developer"
                priority
                sizes="(min-width: 768px) 384px, 320px"
                className="relative z-10 h-auto w-full select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
              />

              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -right-4 top-6 z-20 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:-right-8"
              >
                {heroCardTags[2]}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -left-4 bottom-10 z-20 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:-left-8"
              >
                {heroCardTags[3]}
              </motion.span>
            </motion.div>

            <p className="mt-6 text-center text-sm text-muted">
              {site.name} — {site.role}
            </p>
          </div>
        </Reveal>
      </div>

      <WorkMarquee />
    </section>
  );
}
