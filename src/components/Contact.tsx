import { Eyebrow } from "@/components/ui/Eyebrow";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, TikTokIcon, XIcon } from "@/components/ui/SocialIcons";
import { Terminal, type TerminalLine } from "@/components/ui/Terminal";
import { Typewriter } from "@/components/ui/Typewriter";
import { ctaWords, site, stats } from "@/lib/data";

const socials = [
  { label: "X", href: site.x, icon: <XIcon className="h-4 w-4" /> },
  { label: "TikTok", href: site.tiktok, icon: <TikTokIcon className="h-4 w-4" /> },
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon className="h-4 w-4" /> },
];

const responseTime = stats.find((s) => s.suffix === "h");

const terminalLines: TerminalLine[] = [
  ...(site.available
    ? [{ command: "clint --status", output: "Currently available for new projects", tone: "ok" as const }]
    : []),
  ...(responseTime
    ? [{ command: "clint --response-time", output: `${responseTime.value}${responseTime.suffix} on average` }]
    : []),
  { command: "clint --based", output: site.location },
  { command: "clint --works-with", output: "Founders, agencies & businesses — anywhere" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-5 py-14 text-background sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Eyebrow index="05" tone="inverted">
              contact
            </Eyebrow>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,10.5vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em] [font-stretch:86%]">
                <span className="sr-only">Let&apos;s build something great</span>
                <span aria-hidden className="block">
                  Let&apos;s <Typewriter words={ctaWords} />
                </span>
                <span aria-hidden className="block">Something</span>
                <span aria-hidden className="block">Great.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Have an idea? Let&apos;s ship it.
              </p>
              <p className="mt-3 max-w-md text-pretty text-background/65">
                Landing page, marketing site, SaaS platform, internal tool, or a full product from zero — I build
                all of it, remotely and across markets.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href={`mailto:${site.email}`}
                  className="rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-ink shadow-[0_6px_0_#b39800] transition-[box-shadow,transform] hover:shadow-[0_3px_0_#b39800] active:shadow-none"
                >
                  Share your requirements
                </MagneticButton>
                <MagneticButton
                  href={site.x}
                  className="rounded-xl border border-background/25 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background"
                >
                  Message on X
                </MagneticButton>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-sm text-background underline decoration-background/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {site.email}
                </a>
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-background/20 text-background transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <Terminal title={`${site.name.toLowerCase()}@dev — zsh`} lines={terminalLines} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
