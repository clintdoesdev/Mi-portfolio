import { Reveal } from "@/components/ui/Reveal";

// Section label styled like a code comment: "01 ── // what i do".
export function Eyebrow({
  children,
  index,
  className = "",
  tone = "default",
}: {
  children: string;
  index?: string;
  className?: string;
  tone?: "default" | "inverted";
}) {
  const inverted = tone === "inverted";
  return (
    <Reveal>
      <p
        className={`flex items-center gap-3 font-mono text-xs lowercase tracking-wide sm:text-sm ${
          inverted ? "text-background/60" : "text-muted"
        } ${className}`}
      >
        {index && <span className={inverted ? "text-background" : "text-foreground"}>{index}</span>}
        <span className="h-px w-8 bg-accent" />
        <span>
          <span className="text-accent">{"//"}</span> {children}
        </span>
      </p>
    </Reveal>
  );
}
