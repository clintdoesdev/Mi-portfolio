import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/data";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(245,212,14,0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          {site.available && (
            <span className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Currently available for new projects
            </span>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Have an idea?
            <br /> Let&apos;s ship it.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted">
            Landing page, marketing site, SaaS platform, internal tool, or a
            full product from zero — I build all of it, remotely and across
            markets.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-shadow hover:shadow-[0_0_36px_4px_rgba(245,212,14,0.25)]"
            >
              Share your requirements
            </MagneticButton>
            <MagneticButton
              href={site.x}
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60"
            >
              Message on X
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
