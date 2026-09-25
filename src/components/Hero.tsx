import Image from "next/image";
import type { CSSProperties } from "react";
import heroPhoto from "../../public/images/clinton-photo.jpg";
import { Keyboard } from "@/components/Keyboard";
import { site } from "@/lib/data";

// Splits a line into letters that drop in one after another (see `.char` in globals.css).
function Letters({ text, from }: { text: string; from: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char"
          style={{ "--i": from + i, "--r": `${(i % 2 ? 1 : -1) * (6 + ((i * 7) % 9))}deg` } as CSSProperties}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="fade-up inline-flex items-end gap-2.5">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-accent ring-4 ring-surface sm:h-12 sm:w-12">
            <Image
              src={heroPhoto}
              alt=""
              priority
              sizes="48px"
              className="h-full w-full scale-[1.35] object-cover object-[50%_40%]"
            />
          </span>
          <span className="shadow-soft relative mb-3 rounded-2xl rounded-bl-sm border border-border bg-surface px-4 py-2 text-base font-medium sm:text-lg">
            Hi, I&apos;m {site.name}!{" "}
            <span className="inline-block origin-[70%_70%] animate-wave motion-reduce:animate-none">👋</span>
          </span>
        </div>

        <h1 className="mt-5 font-display text-[clamp(3rem,15vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.01em] [font-stretch:86%] sm:mt-6">
          <span className="sr-only">{site.role}</span>
          <span aria-hidden className="block">
            <Letters text="Full-stack" from={0} />
          </span>
          <span aria-hidden className="block py-[0.04em]">
            <span className="marker px-[0.08em]">
              <Letters text="& Web3" from={10} />
            </span>
          </span>
          <span aria-hidden className="block">
            <Letters text="Developer" from={16} />
            <span
              className="char ml-[0.05em] h-[0.68em] w-[0.1em] align-baseline"
              style={{ "--i": 25 } as CSSProperties}
            >
              <span className="block h-full w-full animate-caret rounded-[0.02em] bg-accent shadow-[0_0_0_0.025em_var(--foreground)]" />
            </span>
          </span>
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-[22rem] text-balance text-base leading-snug text-muted sm:mt-8 sm:max-w-xl sm:text-xl"
          style={{ animationDelay: "0.9s" }}
        >
          I build <strong className="font-semibold text-foreground">websites and digital products</strong> end
          to end — <strong className="font-semibold text-foreground">products that ship fast</strong>.
        </p>

        <div className="mt-12 sm:mt-14">
          <Keyboard />
        </div>
      </div>
    </section>
  );
}
