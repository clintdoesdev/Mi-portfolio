"use client";

import { setTheme, useTheme } from "@/lib/theme";

// Sized in em so it can sit inside the headline in place of a letter.
export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`group relative inline-block h-[0.72em] w-[1.42em] cursor-pointer rounded-full bg-accent align-baseline shadow-[inset_0_0.05em_0.1em_rgba(0,0,0,0.28),inset_0_-0.03em_0.05em_rgba(255,255,255,0.25)] outline-offset-4 transition-[filter] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-foreground ${className}`}
    >
      <span className="absolute left-[0.07em] top-[0.07em] flex h-[0.58em] w-[0.58em] items-center justify-center rounded-full bg-white shadow-[0_0.03em_0.08em_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-90 dark:translate-x-[0.7em]">
        <svg viewBox="0 0 24 24" aria-hidden className="h-[72%] w-[72%] transition-transform duration-500 dark:hidden">
          <g stroke="#f5a300" strokeWidth="2.4" strokeLinecap="round">
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M5.3 18.7l1.5-1.5M17.2 6.8l1.5-1.5" />
          </g>
          <circle cx="12" cy="12" r="4.6" fill="#ffc414" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden className="hidden h-[70%] w-[70%] dark:block">
          <path
            d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z"
            fill="#2a2a31"
          />
          <circle cx="15.5" cy="8" r="1" fill="#2a2a31" />
        </svg>
      </span>
    </button>
  );
}
