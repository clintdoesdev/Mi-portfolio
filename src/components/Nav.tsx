"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { MailIcon } from "@/components/ui/SocialIcons";
import { navLinks, site } from "@/lib/data";
import { smoothScrollToHash } from "@/lib/scroll";

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="shadow-soft pointer-events-auto flex items-center gap-0.5 rounded-full border border-border/70 bg-surface/80 p-1.5 backdrop-blur-xl"
      >
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          aria-label={`${site.name} — back to top`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-background-2 font-display text-sm font-black text-foreground transition-transform duration-300 hover:rotate-[-12deg] hover:scale-105"
        >
          C
        </a>

        <div className="flex items-center px-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                active === link.href ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-background-2"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${site.email}`}
          aria-label={`Email ${site.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 hover:scale-110"
        >
          <MailIcon className="h-4 w-4" />
        </a>
      </motion.nav>
    </header>
  );
}
