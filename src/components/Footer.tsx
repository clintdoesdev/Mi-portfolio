import { site, tickerItems } from "@/lib/data";

export function Footer() {
  const ticker = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <footer className="relative overflow-hidden pt-10">
      <div className="overflow-hidden border-y border-border py-3">
        <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none">
          {ticker.map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= tickerItems.length}
              className="flex shrink-0 items-center gap-8 whitespace-nowrap font-mono text-sm uppercase tracking-[0.12em] text-muted"
            >
              {item}
              <span aria-hidden className="text-accent">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <p>Designed &amp; built by {site.name}</p>
        <a href="#top" className="font-mono text-xs text-foreground underline decoration-accent decoration-2 underline-offset-4">
          back to top ↑
        </a>
      </div>

      <p
        aria-hidden
        className="mt-6 select-none whitespace-nowrap text-center font-display text-[14.5vw] font-extrabold leading-[0.78] tracking-[-0.03em] text-foreground [font-stretch:86%] sm:mt-4"
      >
        clintdoesdev<span className="text-accent">.</span>
      </p>
    </footer>
  );
}
