import { Reveal } from "@/components/ui/Reveal";

export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return (
    <Reveal>
      <p className={`text-xs font-medium uppercase tracking-[0.22em] text-muted sm:text-sm ${className}`}>
        {children}
      </p>
    </Reveal>
  );
}
