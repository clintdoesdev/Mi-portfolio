"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRight } from "@/components/ui/SocialIcons";
import { navLinks, site } from "@/lib/data";
import { smoothScrollToHash } from "@/lib/scroll";

const glass = "shadow-soft pointer-events-auto border border-border/70 bg-surface/80 backdrop-blur-xl";

export function Nav() {
  const [active, setActive] = useState("");

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    smoothScrollToHash(href);
  }

  useEffect(() => {
    // Watch every section so the highlight clears outside the linked ones.
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          aria-label={`${site.name} — back to top`}
          className={`${glass} flex h-12 items-center gap-2.5 rounded-2xl pl-1.5 pr-3`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-lg font-extrabold text-ink">
            C
          </span>
          <span className="hidden font-display text-base font-bold tracking-tight sm:inline">clintdoesdev</span>
          {site.available && (
            <span className="relative flex h-2 w-2" title="Available for new projects">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          )}
        </a>

        <nav aria-label="Primary" className={`${glass} flex h-12 items-center rounded-2xl p-1`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative rounded-xl px-2.5 py-2 text-sm font-medium transition-colors sm:px-4 ${
                active === link.href ? "text-ink" : "text-muted hover:text-foreground"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-accent"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="pointer-events-none flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="pointer-events-auto hidden h-10 items-center gap-1.5 rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 md:flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
