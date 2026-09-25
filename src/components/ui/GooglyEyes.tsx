"use client";

import { useEffect, useRef } from "react";

// Two cartoon eyes whose pupils follow the pointer anywhere on the page.
export function GooglyEyes({ className = "" }: { className?: string }) {
  const eyeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pupilRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    let px = 0;
    let py = 0;

    function update() {
      raf = 0;
      eyeRefs.current.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        if (!eye || !pupil) return;
        const rect = eye.getBoundingClientRect();
        const dx = px - (rect.left + rect.width / 2);
        const dy = py - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(rect.width * 0.24, dist / 10);
        pupil.style.transform = `translate(${(dx / dist) * reach}px, ${(dy / dist) * reach}px)`;
      });
    }

    function onMove(e: PointerEvent) {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`shadow-soft inline-flex gap-1.5 rounded-full bg-surface-2 px-3 py-2.5 ${className}`}
    >
      {[0, 1].map((i) => (
        <span
          key={i}
          ref={(el) => {
            eyeRefs.current[i] = el;
          }}
          className="animate-blink flex h-10 w-9 items-center justify-center rounded-full bg-white shadow-[inset_0_-3px_5px_rgba(0,0,0,0.12)] sm:h-12 sm:w-11"
        >
          <span
            ref={(el) => {
              pupilRefs.current[i] = el;
            }}
            className="relative h-4 w-4 rounded-full bg-neutral-950 transition-transform duration-150 ease-out sm:h-5 sm:w-5"
          >
            <span className="absolute right-[18%] top-[18%] h-[30%] w-[30%] rounded-full bg-white" />
          </span>
        </span>
      ))}
    </div>
  );
}
