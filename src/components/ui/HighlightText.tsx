"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

function Word({
  children,
  progress,
  range,
  marked,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  marked: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const sweep = useTransform(progress, range, [0, 1]);

  if (!marked) {
    return (
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span style={{ opacity }} className="relative isolate inline-block px-[0.06em] text-ink">
      <motion.span
        aria-hidden
        style={{ scaleX: sweep }}
        className="absolute inset-x-0 bottom-[0.06em] top-[0.14em] -z-10 origin-left -rotate-1 rounded-[0.08em] bg-accent"
      />
      {children}
    </motion.span>
  );
}

// Words fill in from faint to solid as the paragraph scrolls past, and the
// highlighted words get a marker swipe.
export function HighlightText({
  text,
  highlights,
  className,
}: {
  text: string;
  highlights: string[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const marks = new Set(highlights.map((w) => w.toLowerCase()));
  const words = text.split(" ");
  const isMarked = (word: string) => marks.has(word.toLowerCase().replace(/[^a-z0-9]/g, ""));

  if (reduceMotion) {
    return (
      <p ref={ref} className={className}>
        {words.map((word, i) => (
          <span key={i}>
            {isMarked(word) ? (
              <span className="rounded-[0.08em] bg-accent px-[0.06em] text-ink">{word}</span>
            ) : (
              word
            )}{" "}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 2 / words.length);
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]} marked={isMarked(word)}>
              {word}
            </Word>{" "}
          </span>
        );
      })}
    </p>
  );
}
