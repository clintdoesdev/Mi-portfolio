import { GooglyEyes } from "@/components/ui/GooglyEyes";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { MailIcon, TikTokIcon, XIcon } from "@/components/ui/SocialIcons";
import { ctaWords, site } from "@/lib/data";

const socials = [
  { label: "X", href: site.x, icon: <XIcon className="h-4 w-4" /> },
  { label: "TikTok", href: site.tiktok, icon: <TikTokIcon className="h-4 w-4" /> },
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon className="h-4 w-4" /> },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-background-2 pb-16 pt-24 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <GooglyEyes />
            {site.available && (
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Currently available for new projects
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-7 font-display text-[clamp(2.2rem,12.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            <span className="sr-only">Let&apos;s build something great</span>
            <span aria-hidden className="block">
              Let&apos;s <RotatingWord words={ctaWords} />
            </span>
            <span aria-hidden className="block">Something</span>
            <span aria-hidden className="block">Great</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end md:gap-16">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent sm:text-base"
            >
              {site.email}
            </a>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">Trusted by founders across Africa &amp; the diaspora</p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              Have an idea? Let&apos;s{" "}
              <em className="font-serif text-[1.15em] font-normal">ship</em> it.
            </p>
            <p className="mt-3 max-w-md text-pretty text-muted">
              Landing page, marketing site, SaaS platform, internal tool, or a full product from zero — I build
              all of it, remotely and across markets.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton
                href={`mailto:${site.email}`}
                className="rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-shadow hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5)]"
              >
                Share your requirements
              </MagneticButton>
              <MagneticButton
                href={site.x}
                className="rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                Message on X
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
