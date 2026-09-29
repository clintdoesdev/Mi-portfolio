"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// The real site is rendered at a desktop size and scaled down to fit the frame.
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

// Embeds a live, non-interactive view of a deployed site. Scripts are disabled
// in the frame: the site's current server-rendered page still shows, but none of
// its code runs, so three embedded apps can't slow down scrolling here. The
// fallback shows until the page has loaded, so there's never an empty screen.
export function LivePreview({ url, title, fallback }: { url: string; title: string; fallback: ReactNode }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_WIDTH));
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className="relative h-full w-full overflow-hidden bg-white">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
      >
        {fallback}
      </div>
      {scale > 0 && (
        <iframe
          src={url}
          title={title}
          loading="lazy"
          tabIndex={-1}
          sandbox="allow-same-origin"
          onLoad={() => setLoaded(true)}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
            opacity: loaded ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}
