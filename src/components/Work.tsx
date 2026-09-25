import { Eyebrow } from "@/components/ui/Eyebrow";
import { ComingSoonScene, ProjectScene } from "@/components/ui/ProjectMockups";
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
        <Eyebrow>Selected work</Eyebrow>
        <Reveal>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
            Featured work, real solutions.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Selected web application builds by a full-stack web developer.
          </p>
          <span className="mt-6 inline-flex rounded-full border border-border px-3.5 py-1 text-xs font-medium text-muted">
            Full-stack
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article id={`work-${slugify(project.title)}`} className="group scroll-mt-28">
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <ProjectScene mockup={project.mockup} />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-neutral-900 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {project.title}: {project.subtitle}
                  </h3>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="mt-1 shrink-0 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="mt-1.5 shrink-0 text-xs text-muted">{project.duration}</span>
                  )}
                </div>

                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background-2 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="md:col-span-2">
            <a href="#contact" className="group block">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl sm:aspect-[21/9]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <ComingSoonScene />
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-neutral-950 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Coming soon
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  Your product: next on the build list
                </h3>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-2 text-sm text-muted sm:text-base">
                Have an idea? Let&apos;s ship it.
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
