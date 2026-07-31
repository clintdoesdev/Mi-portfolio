import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

const bannerStyles = [
  "from-emerald-400/25 via-emerald-400/5 to-transparent",
  "from-fuchsia-400/25 via-violet-400/10 to-transparent",
];

const bannerIcons = [
  <svg key="finance" viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M4 19V13M10 19V9M16 19V5M4 13l6-6 4 3 6-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="web3" viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M12 3l7.5 4.33v9.34L12 21l-7.5-4.33V7.33L12 3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 21v-8.5M4.5 7.33L12 12.5l7.5-5.17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
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
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br text-foreground/80 transition-transform duration-500 group-hover:scale-[1.03] ${bannerStyles[i % bannerStyles.length]}`}
                >
                  {bannerIcons[i % bannerIcons.length]}
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
