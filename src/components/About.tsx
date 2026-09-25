"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../public/images/clinton-photo.jpg";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TikTokIcon } from "@/components/ui/SocialIcons";
import { approach, heroBio, site, stats, tiktokBlurb } from "@/lib/data";

const stickers = [
  { bg: "#cbbcff", ink: "#2a176b", rotate: -4 },
  { bg: "#d6f36e", ink: "#324200", rotate: 3 },
  { bg: "#a9d4ff", ink: "#0a355e", rotate: 2 },
  { bg: "#ffb4c3", ink: "#6e0d27", rotate: -3 },
];

export function About() {
  const [lead, ...rest] = approach.heading.split("\n");

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Eyebrow>About me</Eyebrow>
          <Reveal>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {lead}
              <br />
              {rest.join(" ")}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-xl text-balance font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground/80 sm:text-2xl">
              {site.role} with{" "}
              <span className="font-serif text-[1.2em] font-normal italic text-foreground">
                {stats[0].value} years
              </span>{" "}
              shipping for founders, teams, and businesses.
            </p>
          </Reveal>

          <ul className="mt-7 flex max-w-md flex-wrap gap-3">
            {approach.promise.map((item, i) => {
              const sticker = stickers[i % stickers.length];
              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: sticker.rotate }}
                  whileHover={{ rotate: -sticker.rotate, scale: 1.06 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 + i * 0.07 }}
                  className="rounded-md px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider shadow-[inset_0_-2px_0_rgba(0,0,0,0.1),0_6px_14px_-8px_rgba(0,0,0,0.35)] sm:text-xs"
                  style={{ background: sticker.bg, color: sticker.ink }}
                >
                  {item}
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-8 max-w-xl space-y-5">
            {[heroBio, approach.paragraphs[1]].map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.08}>
                <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-20 sm:pb-24">
          <motion.figure
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            whileHover={{ rotate: 0, y: -6 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="relative mx-auto w-[82%]"
          >
            <span
              aria-hidden
              className="absolute -left-5 top-3 z-10 h-7 w-24 -rotate-[38deg] bg-[#e8dcc0]/75 shadow-sm backdrop-blur-[1px]"
            />
            <span
              aria-hidden
              className="absolute -right-5 top-3 z-10 h-7 w-24 rotate-[38deg] bg-[#e8dcc0]/75 shadow-sm backdrop-blur-[1px]"
            />
            <div className="shadow-lift bg-white p-3 pb-14 sm:p-4 sm:pb-16">
              <Image
                src={photo}
                alt={`${site.name}, ${site.role.toLowerCase()}`}
                sizes="(min-width: 1024px) 320px, 80vw"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-4 text-center font-mono text-sm uppercase tracking-[0.35em] text-neutral-500 sm:bottom-5">
                {site.name}
              </figcaption>
            </div>
          </motion.figure>

          <motion.a
            href={tiktokBlurb.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            whileHover={{ rotate: 0, y: -4 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.2 }}
            className="shadow-lift absolute -bottom-2 left-0 z-20 block w-[70%] max-w-[16rem] bg-[#fdf0a4] p-4 text-neutral-900 sm:-left-6"
          >
            <span className="flex items-center gap-2 text-sm font-bold">
              <TikTokIcon className="h-4 w-4" />
              {tiktokBlurb.handle}
            </span>
            <span className="mt-1.5 block text-[13px] leading-snug text-neutral-700">{tiktokBlurb.text}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
