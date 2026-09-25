"use client";

import { motion } from "framer-motion";

export type TerminalLine = { command: string; output: string; tone?: "ok" | "info" };

// A small shell window whose lines print one after another once in view.
export function Terminal({ lines, title }: { lines: TerminalLine[]; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] font-mono text-[12px] text-neutral-300 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:text-[13px]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] text-neutral-500">{title}</span>
      </div>
      <motion.div
        className="space-y-3 p-4 sm:p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ staggerChildren: 0.35 }}
      >
        {lines.map((line) => (
          <motion.div
            key={line.command}
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3 }}
          >
            <p className="break-words">
              <span className="text-accent">❯</span> <span className="text-white">{line.command}</span>
            </p>
            <p className={`mt-1 break-words ${line.tone === "ok" ? "text-emerald-400" : "text-neutral-400"}`}>
              {line.tone === "ok" ? "✓" : "→"} {line.output}
            </p>
          </motion.div>
        ))}
        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <span className="text-accent">❯</span>{" "}
          <span className="inline-block h-3.5 w-2 translate-y-0.5 animate-caret bg-neutral-300" />
        </motion.p>
      </motion.div>
    </div>
  );
}
