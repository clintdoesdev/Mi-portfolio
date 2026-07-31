"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import heroPhoto from "../../public/images/clinton-photo.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Glow } from "@/components/ui/Glow";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { WorkMarquee } from "@/components/WorkMarquee";
import { heroCardTags, heroTags, site } from "@/lib/data";
import { smoothScrollToHash } from "@/lib/scroll";

const avatarColors = ["245,212,14", "56,189,248", "232,121,249"];

export function Hero() {
  const rotateYRaw = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 18 });
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 18 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    rotateYRaw.set((relX - 0.5) * 14);
    rotateXRaw.set((relY - 0.5) * -14);
  }

  function handleMouseLeave() {
    rotateYRaw.set(0);
    rotateXRaw.set(0);
  }

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(245,212,14,0.10), transparent 70%)",
          }}
        />
        <Glow className="-left-24 bottom-0 -z-10" color="255,138,61" opacity={0.08} size={420} />
        <Glow className="-right-16 top-24 -z-10" color="56,189,248" opacity={0.06} size={360} />

        <FloatingShapes />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 overflow-hidden"
          >
            <div className="flex w-max animate-marquee-slow motion-reduce:animate-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="select-none whitespace-nowrap px-8 font-display text-[26vw] font-extrabold leading-none tracking-tight text-white/[0.035] sm:text-[20vw] md:text-[16vw]"
                >
                  CLINTON
                </span>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m <span className="text-accent italic">{site.name}</span>!
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.role}
            </p>
          </Reveal>

          <Reveal delay={0.2} y={36}>
            <div
              className="relative mx-auto mt-10 w-56 sm:w-64"
              style={{ perspective: 900 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="relative animate-float motion-reduce:animate-none"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              >
                <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:rotate-0">
                  <Image
                    src={heroPhoto}
                    alt="Clinton, full-stack and Web3 developer"
                    priority
                    sizes="(min-width: 640px) 256px, 224px"
                    className="h-auto w-full select-none"
                  />
                </div>

                <motion.span
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -right-6 top-8 z-20 hidden rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:-right-10 sm:block"
                >
                  {heroCardTags[2]}
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -left-6 bottom-10 z-20 hidden rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:-left-10 sm:block"
                >
                  {heroCardTags[3]}
                </motion.span>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="flex -space-x-2.5">
                {avatarColors.map((color, i) => (
                  <span
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background"
                    style={{ background: `rgb(${color})` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-accent-ink/70">
                      <path
                        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c0-4 4-6 8-6s8 2 8 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ))}
              </span>
              <p className="text-sm text-muted">
                Trusted by founders across Africa &amp; the diaspora
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton
                href={`mailto:${site.email}`}
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_0_0_0_rgba(245,212,14,0.4)] transition-shadow hover:shadow-[0_0_36px_4px_rgba(245,212,14,0.25)]"
              >
                Let&apos;s work together!
              </MagneticButton>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToHash("#work");
                }}
                className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
              >
                See my work ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div aria-hidden className="mt-12 flex items-center justify-center gap-2">
              <span className="h-2 w-6 rounded-full bg-accent" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
            </div>
          </Reveal>
        </div>
      </div>

      <WorkMarquee />
    </section>
  );
}
