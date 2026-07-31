import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { alsoFamiliar, services, skills, type SkillCategory } from "@/lib/data";

const categoryStyles: Record<SkillCategory, { badge: string; glow: string }> = {
  core: {
    badge: "bg-accent/10 text-accent",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(245,212,14,0.4)]",
  },
  backend: {
    badge: "bg-sky-400/10 text-sky-300",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]",
  },
  design: {
    badge: "bg-fuchsia-400/10 text-fuchsia-300",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(232,121,249,0.35)]",
  },
  specialist: {
    badge: "bg-emerald-400/10 text-emerald-300",
    glow: "group-hover:shadow-[0_0_0_1px_rgba(52,211,153,0.35)]",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What I use
            <br className="hidden sm:block" /> to get it done.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            Modern tools, production-grade thinking, SEO-aware delivery, and
            clean implementation.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {service}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const style = categoryStyles[skill.category];
            return (
              <Reveal key={skill.title} delay={(i % 4) * 0.06}>
                <div
                  className={`group relative h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 ${style.glow}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold ${style.badge}`}
                    >
                      {skill.abbr}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted">
                      {skill.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <p className="mb-4 text-sm text-muted">Also familiar with</p>
            <Marquee items={alsoFamiliar} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
