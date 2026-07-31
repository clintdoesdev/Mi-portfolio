import { Reveal } from "@/components/ui/Reveal";
import { approach, tiktokBlurb } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {approach.heading.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="space-y-6">
          {approach.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.1}>
              <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <ul className="flex flex-wrap gap-x-2 gap-y-3 pt-2">
              {approach.promise.map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground">
                    {item}
                  </span>
                  {i < approach.promise.length - 1 && (
                    <span aria-hidden className="text-border">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <a
              href={tiktokBlurb.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16.6 5.82c-1.02-.88-1.63-2.15-1.63-3.54h-3.03v13.68c0 1.56-1.27 2.83-2.83 2.83a2.83 2.83 0 0 1 0-5.66c.28 0 .55.04.8.12V9.98a5.84 5.84 0 0 0-.8-.06 5.86 5.86 0 1 0 5.86 5.86V8.4a7.62 7.62 0 0 0 4.46 1.43V6.8a4.5 4.5 0 0 1-2.83-.98z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {tiktokBlurb.handle}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {tiktokBlurb.text}
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
