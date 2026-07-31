import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { Shape } from "@/components/ui/FloatingShapes";
import { Reveal } from "@/components/ui/Reveal";
import { approach, tiktokBlurb } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <Glow className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" color="56,189,248" opacity={0.08} />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <Shape
          variant="star"
          from="56,189,248"
          to="20,130,190"
          size={30}
          style={{ top: "8%", left: "44%" }}
          duration={7.5}
          rotate={10}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <Eyebrow>About</Eyebrow>
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {approach.heading.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-6">
          {approach.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.1}>
              <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {approach.promise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-accent">
                    <path
                      d="M4 10.5l3.5 3.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <a
              href={tiktokBlurb.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_16px_40px_-20px_rgba(245,212,14,0.35)]"
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
