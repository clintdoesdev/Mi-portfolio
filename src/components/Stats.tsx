import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Shape } from "@/components/ui/FloatingShapes";
import { stats } from "@/lib/data";

const icons = [
  <svg key="years" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="projects" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="countries" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="response" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M12 8v5l3 2M9 2h6M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-dot-grid bg-surface/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <Shape
          variant="pill"
          from="245,212,14"
          to="230,160,10"
          size={26}
          style={{ top: "18%", right: "6%" }}
          duration={7}
          rotate={-14}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="h-full">
              <div className="group relative flex h-full flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-8">
                <span className="absolute right-5 top-5 font-display text-xs font-bold text-border transition-colors group-hover:text-accent/60 sm:right-6 sm:top-6">
                  0{i + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  {icons[i % icons.length]}
                </span>
                <div>
                  <div className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
