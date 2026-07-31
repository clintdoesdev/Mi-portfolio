import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { Reveal } from "@/components/ui/Reveal";
import { projectAccentColors, projectBannerStyles, projectIcons } from "@/components/ui/ProjectIcons";
import { projects } from "@/lib/data";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32">
      <Glow className="right-0 top-0 -translate-y-1/3" color={projectAccentColors[1]} opacity={0.1} />

      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow>Selected work</Eyebrow>
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured work,
            <br className="hidden sm:block" /> real solutions.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            Selected web application builds by a full-stack web developer.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <article
                id={`work-${slugify(project.title)}`}
                className="group relative h-full scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
              >
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br text-foreground/80 transition-transform duration-500 group-hover:scale-[1.03] ${projectBannerStyles[i % projectBannerStyles.length]}`}
                >
                  <div className="absolute inset-0 bg-dot-grid opacity-20" />
                  <div className="relative h-8 w-8">{projectIcons[i % projectIcons.length]}</div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs text-muted">
                      {project.duration} · {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/90">{project.subtitle}</p>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        >
                          <path
                            d="M4 10.5l3.5 3.5L16 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
