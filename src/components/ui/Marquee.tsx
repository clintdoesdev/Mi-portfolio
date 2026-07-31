export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 py-1 motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
