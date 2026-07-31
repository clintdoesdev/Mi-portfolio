import { Reveal } from "@/components/ui/Reveal";

export function Eyebrow({ children }: { children: string }) {
  return (
    <Reveal>
      <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent" />
        {children}
      </div>
    </Reveal>
  );
}
