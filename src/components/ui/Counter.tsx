"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({
  value,
  decimals = 0,
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    // Written directly to the DOM so counting up doesn't re-render React every frame.
    const unsubscribe = spring.on("change", (latest) => {
      if (numberRef.current) numberRef.current.textContent = latest.toFixed(decimals);
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <span ref={ref} className={className}>
      <span ref={numberRef}>{(0).toFixed(decimals)}</span>
      {suffix}
    </span>
  );
}
