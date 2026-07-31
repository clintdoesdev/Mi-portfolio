import { Shape } from "@/components/ui/FloatingShapes";
import { site } from "@/lib/data";

const socials = [
  {
    label: "X",
    href: site.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.6 22H1.5l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: site.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.6 5.82c-1.02-.88-1.63-2.15-1.63-3.54h-3.03v13.68c0 1.56-1.27 2.83-2.83 2.83a2.83 2.83 0 0 1 0-5.66c.28 0 .55.04.8.12V9.98a5.84 5.84 0 0 0-.8-.06 5.86 5.86 0 1 0 5.86 5.86V8.4a7.62 7.62 0 0 0 4.46 1.43V6.8a4.5 4.5 0 0 1-2.83-.98z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M3 6h18v12H3V6zm0 0l9 7 9-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const tickerItems = [
  "Available for new projects",
  site.email,
  "Let's build something great",
  "Remote · Africa & diaspora",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <div className="divider-fade absolute inset-x-0 top-0" />

      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
          <Shape
            variant="star"
            from="245,212,14"
            to="230,160,10"
            size={44}
            style={{ top: "10%", left: "6%" }}
            duration={7}
            rotate={-8}
          />
          <Shape
            variant="sphere"
            from="232,121,249"
            to="180,90,220"
            size={38}
            style={{ top: "18%", right: "10%" }}
            duration={8}
            delay={0.4}
          />
          <Shape
            variant="cube"
            from="52,211,153"
            to="20,170,120"
            size={34}
            style={{ bottom: "22%", left: "14%" }}
            duration={6.5}
            delay={0.2}
            rotate={10}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-10 text-center">
          <p className="font-display text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl md:text-7xl">
            {site.name}.
          </p>
          <p className="mt-3 text-sm text-muted">
            {site.role} — building clean, fast, and shipped-with-care products.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:border-accent hover:bg-accent hover:text-accent-ink hover:shadow-[0_10px_24px_-8px_rgba(245,212,14,0.4)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-border bg-surface/50 py-3">
        <div className="flex w-max animate-marquee-text gap-8 motion-reduce:animate-none">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-muted"
              >
                {item}
                <span aria-hidden className="text-accent">
                  ✦
                </span>
              </span>
            )
          )}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <p className="text-xs text-muted">Designed &amp; built by {site.name}</p>
      </div>
    </footer>
  );
}
