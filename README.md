# clintdoesdev.site

Clinton's portfolio — a single-page Next.js site built with TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion for reveals, the swinging dev pass, and scroll-linked text

## Structure

All content lives in one route (`src/app/page.tsx`) composed from section components in `src/components/`:

- `Nav` — logo, section links, and the keycap light/dark `ThemeToggle`
- `Hero` — letter-drop headline over an interactive `Keyboard` (hover/tap the keys, or type on your own keyboard)
- `WhatIDo` — highlighter-on-scroll paragraph and app-icon skill tiles
- `Work` — project rows with illustrated device mockups (`ui/ProjectMockups.tsx`)
- `About` — swinging dev pass, promise checklist, stats, and the TikTok card
- `Process` — the "understand, build, ship" steps
- `Contact` + `Footer` — typewriter call to action, terminal status, socials, ticker, and wordmark

Editable copy — bio, stats, skills, keyboard keys, projects, process steps, contact links — lives in `src/lib/data.ts`. The theme defaults to light; a saved choice is applied before first paint by the inline script in `src/lib/theme-script.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
