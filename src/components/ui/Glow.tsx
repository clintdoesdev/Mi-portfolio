export function Glow({
  className = "",
  color = "245,212,14",
  opacity = 0.14,
  size = 480,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, rgba(${color},${opacity}), transparent)`,
      }}
    />
  );
}
