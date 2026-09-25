"use client";

import { useRef } from "react";
import { setTheme, useTheme } from "@/lib/theme";

// A little keycap that flips light/dark and physically "clicks" down.
export function ThemeToggle() {
  const theme = useTheme();
  const dark = theme === "dark";
  const ref = useRef<HTMLButtonElement>(null);

  function press() {
    const el = ref.current;
    if (el) {
      el.dataset.pressed = "";
      window.setTimeout(() => delete el.dataset.pressed, 140);
    }
    setTheme(dark ? "light" : "dark");
  }

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={press}
      data-variant="ink"
      className="keycap pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center !rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-foreground"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="relative h-[18px] w-[18px] dark:hidden">
        <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </g>
        <circle cx="12" cy="12" r="4.4" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden className="relative hidden h-[18px] w-[18px] dark:block">
        <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z" fill="currentColor" />
      </svg>
    </button>
  );
}
