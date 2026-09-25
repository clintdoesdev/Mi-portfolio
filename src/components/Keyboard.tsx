"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { keyboardRows, services } from "@/lib/data";
import { useMediaQuery } from "@/lib/useMediaQuery";

const DEFAULT_MESSAGE = "npm run ship";

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// A tilted mechanical keyboard whose keys are services. Keys click on hover/tap,
// follow the visitor's real keyboard, and idly "ghost type" when left alone.
export function Keyboard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const keyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastUserPress = useRef(0);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [presses, setPresses] = useState(0);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const keys = useMemo(
    () =>
      keyboardRows.flat().map((key, index) => ({
        ...key,
        index,
        message: key.message ?? `ship --${slug(key.label ?? key.legend)}`,
      })),
    []
  );

  const rows = useMemo(() => {
    let i = 0;
    return keyboardRows.map((row) => row.map(() => keys[i++]));
  }, [keys]);

  const down = useCallback(
    (index: number) => {
      const el = keyRefs.current[index];
      if (el) el.dataset.pressed = "";
      setMessage(keys[index].message);
      setPresses((n) => n + 1);
    },
    [keys]
  );

  const up = useCallback((index: number) => {
    const el = keyRefs.current[index];
    if (el) delete el.dataset.pressed;
  }, []);

  const tap = useCallback(
    (index: number) => {
      down(index);
      window.setTimeout(() => up(index), 150);
    },
    [down, up]
  );

  // Only react while the keyboard is on screen.
  const visible = useRef(false);
  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const io = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    io.observe(board);
    return () => io.disconnect();
  }, []);

  // Mirror the visitor's physical keyboard.
  useEffect(() => {
    const held = new Map<string, number>();
    const alphas = keys.filter((k) => k.label && !k.keys).map((k) => k.index);

    function onDown(e: KeyboardEvent) {
      if (!visible.current || e.repeat || held.has(e.key)) return;
      const match = keys.find((k) => k.keys?.includes(e.key));
      const index =
        match?.index ??
        (/^[a-z0-9]$/i.test(e.key) ? alphas[Math.floor(Math.random() * alphas.length)] : undefined);
      if (index === undefined) return;
      held.set(e.key, index);
      lastUserPress.current = Date.now();
      down(index);
    }

    function onUp(e: KeyboardEvent) {
      const index = held.get(e.key);
      if (index === undefined) return;
      held.delete(e.key);
      up(index);
    }

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [keys, down, up]);

  // Ghost typing when nobody is playing with it.
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (!visible.current || document.hidden) return;
      if (Date.now() - lastUserPress.current < 5000) return;
      tap(Math.floor(Math.random() * keys.length));
    }, 1800);
    return () => window.clearInterval(id);
  }, [keys.length, reduceMotion, tap]);

  return (
    <div className="fade-up relative mx-auto w-full max-w-4xl" style={{ animationDelay: "550ms", perspective: "1400px" }}>
      <ul className="sr-only">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <div
        ref={boardRef}
        aria-hidden
        className="relative rounded-[1.6rem] p-2.5 sm:rounded-[2rem] sm:p-4"
        style={{
          transform: "rotateX(16deg)",
          transformOrigin: "50% 100%",
          background: "linear-gradient(180deg, var(--tray), var(--tray-edge))",
          boxShadow:
            "inset 0 2px 0 rgb(255 255 255 / 0.25), inset 0 -3px 0 rgb(0 0 0 / 0.08), 0 40px 60px -30px rgb(var(--shadow-color) / 0.55)",
        }}
      >
        <div className="mb-3 flex items-center justify-between gap-3 px-1 sm:mb-4">
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-[#0b0b0d] px-3 py-2 font-mono text-[11px] text-accent shadow-[inset_0_1px_4px_rgba(0,0,0,0.7)] sm:max-w-sm sm:text-xs">
            <span className="text-emerald-400">❯</span>
            <span key={message + presses} className="typing truncate">
              {message}
            </span>
            <span className="h-3.5 w-1.5 shrink-0 animate-caret bg-accent" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span key={presses} className="led-flash h-1.5 w-1.5 rounded-full bg-[#4a4a50]" />
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:inline">
              clint-65
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-2.5">
          {rows.map((row, r) => (
            <div key={r} className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-2.5">
              {row.map((key) => {
                const index = key.index;
                const service = !!key.label;
                return (
                  <div
                    key={index}
                    className={`key-in min-w-0 ${key.hideOnMobile ? "hidden sm:block" : ""}`}
                    style={
                      {
                        "--k": index,
                        "--r": `${((index % 3) - 1) * 4}deg`,
                        flexGrow: key.grow ?? 1,
                        flexBasis: service ? "7.5rem" : "3rem",
                      } as CSSProperties
                    }
                  >
                    <div
                      ref={(el) => {
                        keyRefs.current[index] = el;
                      }}
                      data-variant={key.variant}
                      onPointerDown={() => {
                        lastUserPress.current = Date.now();
                        down(index);
                      }}
                      onPointerUp={() => up(index)}
                      onPointerLeave={() => up(index)}
                      onPointerCancel={() => up(index)}
                      className={`keycap flex h-12 cursor-pointer sm:h-14 lg:h-16 ${
                        service
                          ? "flex-col justify-between px-2.5 py-2 text-left sm:px-3"
                          : "items-center justify-center"
                      }`}
                    >
                      {service ? (
                        <>
                          <span className="relative self-end font-mono text-[10px] leading-none opacity-60 sm:text-xs">
                            {key.legend}
                          </span>
                          <span className="relative truncate font-mono text-[9px] font-semibold uppercase leading-none tracking-wide sm:text-[11px]">
                            {key.label}
                          </span>
                        </>
                      ) : (
                        <span
                          className={`relative font-mono font-semibold leading-none ${
                            key.legend.length > 2 ? "text-[10px] sm:text-xs" : "text-base sm:text-lg"
                          }`}
                        >
                          {key.legend}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] text-muted">
        <span className="hidden pointer-fine:inline">hover the keys — or type on your own keyboard</span>
        <span className="pointer-fine:hidden">tap the keys</span>
      </p>
    </div>
  );
}
