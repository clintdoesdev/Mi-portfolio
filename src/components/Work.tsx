import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectScene } from "@/components/ui/ProjectMockups";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow index="02">selected work</Eyebrow>
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                Featured work, real solutions.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p className="max-w-xs text-pretty text-base leading-relaxed text-muted md:text-right">
              Selected web application builds by a full-stack web developer.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6 sm:space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} y={40}>
              <article
                id={`work-${slugify(project.title)}`}
                className="group grid scroll-mt-28 gap-6 rounded-[2rem] border border-border bg-surface p-3 sm:p-4 md:grid-cols-[1.3fr_1fr] md:gap-10"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <ProjectScene mockup={project.mockup} />
                </div>

                <div className="flex flex-col px-2 pb-3 md:px-2 md:py-6">
                  <div className="flex items-center justify-between font-mono text-xs text-muted">
                    <span>
                      <span className="text-foreground">{String(i + 1).padStart(2, "0")}</span> / {project.year}
                    </span>
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-medium text-muted">{project.subtitle}</p>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-foreground/80">
                        <span className="mt-[0.3rem] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[4px] bg-accent">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-ink" fill="none" aria-hidden>
                            <path d="m2.5 6.2 2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-background-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                        {tag}
                      </span>
                    ))}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-foreground"
                      >
                        Visit <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <a
              href="#contact"
              className="group flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-dashed border-border px-6 py-14 text-center transition-colors hover:border-foreground/40 sm:flex-row sm:justify-between sm:px-10 sm:text-left"
            >
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-3xl font-light text-ink transition-transform duration-300 group-hover:rotate-90">
                  +
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">
                    <span className="text-foreground">03</span> / coming soon
                  </p>
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    Your product could be next.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background">
                Have an idea? Let&apos;s ship it
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
