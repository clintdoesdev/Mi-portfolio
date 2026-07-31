import { projectAccentColors, projectIcons } from "@/components/ui/ProjectIcons";
import { projects } from "@/lib/data";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function WorkMarquee() {
  const track = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 pt-6">
        <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-muted">
          Recently shipped
        </span>
        <div className="divider-fade hidden flex-1 sm:block" />
      </div>

      <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-4 pb-2 motion-reduce:animate-none">
          {track.map((project, i) => (
            <a
              key={`${project.title}-${i}`}
              href={`#work-${slugify(project.title)}`}
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface/70 px-5 py-3.5 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg p-1.5"
                style={{
                  color: `rgb(${projectAccentColors[i % projectAccentColors.length]})`,
                  background: `rgba(${projectAccentColors[i % projectAccentColors.length]},0.12)`,
                }}
              >
                {projectIcons[i % projectIcons.length]}
              </span>
              <span className="whitespace-nowrap">
                <span className="block text-sm font-semibold text-foreground">
                  {project.title}
                </span>
                <span className="block text-xs text-muted">{project.subtitle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
