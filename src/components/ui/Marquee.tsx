export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div className="flex w-max animate-marquee gap-3 py-1 motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="shrink-0 rounded-xl border border-border bg-surface px-4 py-2 font-mono text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
