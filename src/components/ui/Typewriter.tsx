"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

// Types a word, pauses, deletes it and moves on to the next one.
export function Typewriter({ words }: { words: string[] }) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const word = words[index];
    let delay = deleting ? 55 : 95;
    if (!deleting && length === word.length) delay = 1600;
    if (deleting && length === 0) delay = 250;

    const id = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setLength((n) => n + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [deleting, index, length, reduceMotion, words]);

  const text = reduceMotion ? words[0] : words[index].slice(0, length);

  return (
    <span className="inline-flex items-baseline">
      <span className="min-w-[0.3em] rounded-[0.08em] bg-accent px-[0.06em] text-ink">{text || " "}</span>
      <span aria-hidden className="ml-[0.06em] inline-block h-[0.72em] w-[0.08em] animate-caret bg-accent" />
    </span>
  );
}
