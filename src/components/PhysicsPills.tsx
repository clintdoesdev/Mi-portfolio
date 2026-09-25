"use client";

import type Matter from "matter-js";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { Icon } from "@/components/ui/Icon";
import { heroDots, heroPills, services, type PillColor } from "@/lib/data";

const palette: Record<PillColor, { bg: string; ink: string }> = {
  pink: { bg: "#f58ab0", ink: "#5e0c31" },
  green: { bg: "#86d97c", ink: "#12440f" },
  yellow: { bg: "#f7cd56", ink: "#553800" },
  blue: { bg: "#5fb3f6", ink: "#0a355e" },
  purple: { bg: "#9a7ef7", ink: "#1f1060" },
  orange: { bg: "#fb8c4f", ink: "#5c1d00" },
  teal: { bg: "#58d0b5", ink: "#093d33" },
  salmon: { bg: "#f6806f", ink: "#5c1207" },
  lavender: { bg: "#b7a4f7", ink: "#281a6e" },
  lime: { bg: "#c3e46a", ink: "#2f3e00" },
};

const pillShadow =
  "inset 0 -0.2em 0 rgba(0,0,0,0.12), inset 0 0.14em 0 rgba(255,255,255,0.45), 0 0.6em 1.1em -0.6em rgba(0,0,0,0.45)";

// Pills and icon dots are interleaved so the pile reads like confetti.
const items = heroPills.flatMap((pill, i) => {
  const dot = heroDots[i];
  return dot
    ? [{ kind: "pill" as const, ...pill }, { kind: "dot" as const, ...dot, label: "" }]
    : [{ kind: "pill" as const, ...pill }];
});

type Entry = { el: HTMLDivElement; body: Matter.Body; w: number; h: number };

export function PhysicsPills({ copyRef }: { copyRef: RefObject<HTMLElement | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const [{ default: M }] = await Promise.all([
        import("matter-js"),
        document.fonts?.ready ?? Promise.resolve(),
      ]);
      if (disposed) return;
      cleanup = startSimulation(M, container, itemRefs.current, copyRef);
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [copyRef]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      <ul className="sr-only">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      {items.map((item, i) => {
        const colors = palette[item.color];
        return (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            aria-hidden
            data-shape={item.kind}
            style={{
              visibility: "hidden",
              background: colors.bg,
              color: colors.ink,
              boxShadow: pillShadow,
              touchAction: "pan-y",
            }}
            className={
              item.kind === "pill"
                ? "pointer-events-auto absolute left-0 top-0 flex cursor-grab select-none items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-tight will-change-transform active:cursor-grabbing sm:gap-2 sm:px-5 sm:py-3 sm:text-[13px] lg:px-6 lg:py-3.5 lg:text-base"
                : "pointer-events-auto absolute left-0 top-0 flex h-9 w-9 cursor-grab select-none items-center justify-center rounded-full will-change-transform active:cursor-grabbing sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            }
          >
            {item.kind === "pill" && item.label}
            <Icon
              name={item.icon}
              strokeWidth={2.4}
              className={
                item.kind === "pill"
                  ? "h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4"
                  : "h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

function startSimulation(
  M: typeof Matter,
  container: HTMLDivElement,
  elements: (HTMLDivElement | null)[],
  copyRef: RefObject<HTMLElement | null>
) {
  const { Engine, Bodies, Body, Composite, Constraint, Sleeping } = M;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const engine = Engine.create({ enableSleeping: true });
  engine.gravity.y = 1.15;

  const STEP = 1000 / 60;
  let entries: Entry[] = [];
  let size = { w: 0, h: 0 };
  let raf = 0;
  let last = 0;
  let acc = 0;
  let visible = true;

  const listeners: [HTMLElement, string, EventListener][] = [];
  function on<K extends keyof HTMLElementEventMap>(
    el: HTMLElement,
    type: K,
    fn: (e: HTMLElementEventMap[K]) => void
  ) {
    el.addEventListener(type, fn as EventListener);
    listeners.push([el, type, fn as EventListener]);
  }

  function render() {
    for (const { el, body, w, h } of entries) {
      el.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0) rotate(${body.angle}rad)`;
    }
  }

  function build() {
    Composite.clear(engine.world, false);
    entries = [];

    const rect = container.getBoundingClientRect();
    size = { w: rect.width, h: rect.height };
    const copy = copyRef.current?.getBoundingClientRect();
    const copyBottom = copy ? copy.bottom - rect.top : size.h * 0.55;
    // Only drop as many pills as comfortably pile up below the headline.
    const available = Math.max(size.h - copyBottom - 16, size.h * 0.2);
    const budget = (available * size.w) / 1.8;

    const T = 400;
    const walls = [
      Bodies.rectangle(size.w / 2, size.h + T / 2, size.w * 3, T, { isStatic: true }),
      Bodies.rectangle(-T / 2, size.h / 2 - size.h, T, size.h * 4, { isStatic: true }),
      Bodies.rectangle(size.w + T / 2, size.h / 2 - size.h, T, size.h * 4, { isStatic: true }),
    ];

    let used = 0;
    let spawnY = 0;
    elements.forEach((el) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (used + w * h > budget) {
        el.style.visibility = "hidden";
        return;
      }
      used += w * h;

      const x = w / 2 + Math.random() * Math.max(1, size.w - w);
      spawnY -= h * 1.4 + Math.random() * 30;
      const common = { restitution: 0.25, friction: 0.6, frictionAir: 0.012, density: 0.0015 };
      const body =
        el.dataset.shape === "dot"
          ? Bodies.circle(x, spawnY, w / 2, common)
          : Bodies.rectangle(x, spawnY, w, h, { ...common, chamfer: { radius: h / 2 - 0.5 } });
      Body.setAngle(body, (Math.random() - 0.5) * 1.2);
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);
      entries.push({ el, body, w, h });
    });

    Composite.add(engine.world, [...walls, ...entries.map((e) => e.body)]);

    if (reduceMotion) {
      for (let i = 0; i < 900; i++) Engine.update(engine, STEP);
    }
    render();
    for (const { el } of entries) el.style.visibility = "visible";
  }

  // --- Dragging, flicking and tapping -------------------------------------
  let drag: {
    constraint: Matter.Constraint;
    pointerId: number;
    startX: number;
    startY: number;
    moved: boolean;
    body: Matter.Body;
  } | null = null;

  function toLocal(e: PointerEvent) {
    const rect = container.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function release(e: PointerEvent) {
    if (!drag || drag.pointerId !== e.pointerId) return;
    Composite.remove(engine.world, drag.constraint);
    if (!drag.moved && e.type === "pointerup") {
      // A tap pops the pill into the air.
      Body.setVelocity(drag.body, { x: (Math.random() - 0.5) * 8, y: -14 });
      Body.setAngularVelocity(drag.body, (Math.random() - 0.5) * 0.35);
    }
    drag = null;
  }

  elements.forEach((el) => {
    if (!el) return;
    on(el, "pointerdown", (e) => {
      const entry = entries.find((item) => item.el === el);
      if (!entry || drag) return;
      const p = toLocal(e);
      Sleeping.set(entry.body, false);
      const constraint = Constraint.create({
        pointA: p,
        bodyB: entry.body,
        pointB: { x: p.x - entry.body.position.x, y: p.y - entry.body.position.y },
        length: 0.01,
        stiffness: 0.15,
        damping: 0.1,
      });
      Composite.add(engine.world, constraint);
      drag = {
        constraint,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        moved: false,
        body: entry.body,
      };
      el.setPointerCapture(e.pointerId);
      wake();
    });
    on(el, "pointermove", (e) => {
      if (!drag || drag.pointerId !== e.pointerId) return;
      drag.constraint.pointA = toLocal(e);
      if (Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) > 5) drag.moved = true;
    });
    on(el, "pointerup", release);
    on(el, "pointercancel", release);
  });

  // --- Loop -----------------------------------------------------------------
  function tick(now: number) {
    acc += Math.min(now - (last || now), 50);
    last = now;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      Engine.update(engine, STEP);
      acc -= STEP;
      steps++;
    }
    render();
    // Once the pile has settled there is nothing to animate until the next touch.
    if (!drag && entries.every((e) => e.body.isSleeping)) {
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
  }

  function wake() {
    if (raf || !visible) return;
    last = 0;
    acc = 0;
    raf = requestAnimationFrame(tick);
  }

  function sleep() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) wake();
    else sleep();
  });
  io.observe(container);

  let resizeTimer: ReturnType<typeof setTimeout> | undefined;
  const ro = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;
    if (Math.abs(width - size.w) < 40 && Math.abs(height - size.h) < 120) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      build();
      wake();
    }, 220);
  });

  build();
  ro.observe(container);
  wake();

  return () => {
    sleep();
    io.disconnect();
    ro.disconnect();
    clearTimeout(resizeTimer);
    listeners.forEach(([el, type, fn]) => el.removeEventListener(type, fn));
    Composite.clear(engine.world, false);
    Engine.clear(engine);
  };
}
