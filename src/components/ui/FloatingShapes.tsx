import type { CSSProperties } from "react";

type ShapeVariant = "sphere" | "cube" | "pyramid" | "star" | "pill";

export type ShapeConfig = {
  variant: ShapeVariant;
  from: string;
  to: string;
  size: number;
  style: CSSProperties;
  duration?: number;
  delay?: number;
  rotate?: number;
};

export function Shape({ from, to, size, variant, style, duration = 7, delay = 0, rotate = 0 }: ShapeConfig) {
  const gradient = `linear-gradient(135deg, rgb(${from}) 0%, rgb(${to}) 100%)`;
  const shadow = `0 18px 30px -10px rgba(${to},0.45)`;

  const shared: CSSProperties = {
    ...style,
    width: size,
    height: size,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    ["--float-rotate" as string]: `${rotate}deg`,
  };

  if (variant === "sphere") {
    return (
      <div
        aria-hidden
        className="absolute animate-float rounded-full motion-reduce:animate-none"
        style={{
          ...shared,
          background: `radial-gradient(circle at 32% 28%, rgb(${from}) 0%, rgb(${to}) 70%)`,
          boxShadow: shadow,
        }}
      />
    );
  }

  if (variant === "cube") {
    return (
      <div
        aria-hidden
        className="absolute animate-float rounded-2xl motion-reduce:animate-none"
        style={{
          ...shared,
          background: gradient,
          boxShadow: `${shadow}, inset 0 2px 8px rgba(255,255,255,0.25)`,
        }}
      />
    );
  }

  if (variant === "pill") {
    return (
      <div
        aria-hidden
        className="absolute animate-float motion-reduce:animate-none"
        style={{
          ...shared,
          height: size * 1.6,
          borderRadius: size,
          background: gradient,
          boxShadow: shadow,
        }}
      />
    );
  }

  if (variant === "pyramid") {
    return (
      <div
        aria-hidden
        className="absolute animate-float motion-reduce:animate-none"
        style={{
          ...shared,
          background: gradient,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: `drop-shadow(0 14px 18px rgba(${to},0.4))`,
        }}
      />
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 51 48"
      className="absolute animate-float motion-reduce:animate-none"
      style={{
        ...shared,
        filter: `drop-shadow(0 14px 18px rgba(${to},0.4))`,
      }}
    >
      <defs>
        <linearGradient id={`star-${from}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`rgb(${from})`} />
          <stop offset="100%" stopColor={`rgb(${to})`} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#star-${from})`}
        d="M25.5 0l6.3 15.9 17.1 1.3-13 11.1 4 16.6-14.4-8.9-14.4 8.9 4-16.6-13-11.1 17.1-1.3z"
      />
    </svg>
  );
}

const heroShapes: ShapeConfig[] = [
  { variant: "pyramid", from: "255,138,61", to: "245,140,20", size: 76, style: { top: "8%", left: "2%" }, duration: 8, delay: 0.2, rotate: 4 },
  { variant: "star", from: "125,211,252", to: "56,150,220", size: 60, style: { top: "6%", right: "4%" }, duration: 7, delay: 0.6, rotate: -6 },
  { variant: "sphere", from: "216,180,254", to: "168,120,230", size: 68, style: { top: "38%", left: "0%" }, duration: 9, delay: 0.1 },
  { variant: "cube", from: "190,242,100", to: "132,204,60", size: 58, style: { top: "42%", right: "1%" }, duration: 7.5, delay: 0.4, rotate: 8 },
  { variant: "pill", from: "56,189,248", to: "14,130,200", size: 40, style: { bottom: "10%", left: "6%" }, duration: 8.5, delay: 0.3, rotate: -10 },
  { variant: "cube", from: "245,212,14", to: "230,160,10", size: 54, style: { bottom: "6%", right: "6%" }, duration: 6.5, delay: 0.5, rotate: -6 },
];

export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
      {heroShapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
    </div>
  );
}
