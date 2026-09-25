import type { PillIcon } from "@/lib/data";

const paths: Record<PillIcon, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  hash: <path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5a13 13 0 0 1 0 17 13 13 0 0 1 0-17z" />
    </>
  ),
  pencil: <path d="m4 20 4-1L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4zM14 7l3 3" />,
  quote: (
    <path d="M9 7H6a2 2 0 0 0-2 2v3h5V7zm0 5c0 3-1 4-4 5M20 7h-3a2 2 0 0 0-2 2v3h5V7zm0 5c0 3-1 4-4 5" />
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  square: <rect x="5" y="5" width="14" height="14" rx="3" />,
  star: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />
  ),
  arrow: <path d="M7 7l10 10M17 9v8H9" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.3 2.3 4.7-4.8" />
    </>
  ),
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3z" />,
  code: <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />,
  card: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
      <path d="M3.5 10h17M7 14.5h3" />
    </>
  ),
  layers: <path d="m12 4 8.5 4.5L12 13 3.5 8.5 12 4zM3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />,
  sparkle: (
    <path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8z" />
  ),
  cube: (
    <>
      <path d="m12 3 7.5 4.3v9.4L12 21l-7.5-4.3V7.3L12 3z" />
      <path d="M12 21v-8.6M4.5 7.3 12 12.4l7.5-5.1" />
    </>
  ),
  chart: <path d="M4 20V13M10 20V9M16 20V5M4 13l6-5 4 3 6-6" />,
};

export function Icon({
  name,
  className = "h-4 w-4",
  strokeWidth = 2,
}: {
  name: PillIcon;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
