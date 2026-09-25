"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { ReactNode } from "react";
import heroPhoto from "../../public/images/clinton-photo.jpg";
import { PhysicsPills } from "@/components/PhysicsPills";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

// Each headline line rises out of its own mask; the clip opens past the line box
// once revealed so the toggle's focus ring is never cut off.
function Line({ children, delay, className = "" }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.span
      className={`block ${className}`}
      initial={{ y: "60%", clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ y: "0%", clipPath: "inset(-40% -10% -40% -10%)" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[max(100svh,700px)] flex-col overflow-hidden md:min-h-[max(100svh,820px)]"
    >
      <div
        ref={copyRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 text-center sm:pt-32 lg:pt-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-center gap-2.5 text-lg text-muted sm:text-2xl"
        >
          Hi, I&apos;m
          <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-full bg-brand ring-2 ring-surface sm:h-11 sm:w-11">
            <Image
              src={heroPhoto}
              alt=""
              priority
              sizes="44px"
              className="h-full w-full scale-[1.35] object-cover object-[50%_40%]"
            />
          </span>
          <span className="text-foreground">{site.name}</span>
        </motion.p>

        <h1 className="mt-3 font-display text-[clamp(2.4rem,13.4vw,7.75rem)] font-black uppercase leading-[0.86] tracking-[-0.04em] sm:mt-4">
          <span className="sr-only">{site.role}</span>
          <span aria-hidden>
            <Line delay={0.1}>Full-stack</Line>
            <Line delay={0.18} className="text-accent">
              &amp; Web3
            </Line>
          </span>
          <Line delay={0.26}>
            <span aria-hidden>Devel</span>
            <ThemeToggle className="mx-[0.03em]" />
            <span aria-hidden>per</span>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-5 max-w-[22rem] text-balance text-base leading-snug text-muted sm:mt-7 sm:max-w-xl sm:text-xl"
        >
          I build <strong className="font-semibold text-foreground">websites and digital products</strong> end
          to end — <strong className="font-semibold text-foreground">products that ship fast</strong>.
        </motion.p>
      </div>

      <PhysicsPills copyRef={copyRef} />
    </section>
  );
}
