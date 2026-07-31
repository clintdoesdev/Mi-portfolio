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

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
