import { ArrowUpRight } from "@/components/ui/SocialIcons";
import { site } from "@/lib/data";

function GetInTouchBadge() {
  return (
    <a
      href={`mailto:${site.email}`}
      aria-label={`Get in touch with ${site.name}`}
      className="group relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28"
    >
      <svg viewBox="0 0 100 100" aria-hidden className="animate-spin-slow absolute inset-0 h-full w-full text-foreground">
        <defs>
          <path id="badge-circle" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
        </defs>
        <text fontSize="10.5" fontWeight="600" letterSpacing="2.6" fill="currentColor">
          <textPath href="#badge-circle">GET IN TOUCH • GET IN TOUCH •</textPath>
        </text>
      </svg>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 sm:h-12 sm:w-12">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-background-2">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 border-t border-border px-4 pb-10 pt-8 sm:px-6">
        <div className="space-y-1.5 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <p>{site.location}</p>
          <p>Designed &amp; built by {site.name}</p>
        </div>
        <GetInTouchBadge />
      </div>
    </footer>
  );
}
