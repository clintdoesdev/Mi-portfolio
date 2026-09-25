"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Cycles through words inside a coloured highlighter block.
export function RotatingWord({
  words,
  interval = 2200,
}: {
  words: { word: string; color: string }[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [interval, reduceMotion, words.length]);

  const current = words[index];

  return (
    <motion.span
      layout
      animate={{ backgroundColor: current.color }}
      transition={{ layout: { type: "spring", stiffness: 320, damping: 30 }, duration: 0.4 }}
      className="inline-flex overflow-hidden rounded-[0.1em] px-[0.06em] align-baseline text-neutral-950"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={current.word}
          initial={{ opacity: 0, y: "35%", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-35%", filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {current.word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
