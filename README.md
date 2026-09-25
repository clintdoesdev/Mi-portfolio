# clintdoesdev.site

Clinton's portfolio — a single-page Next.js site built with TypeScript, Tailwind CSS, Framer Motion, and Matter.js.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion for reveals, draggable cards, and scroll-linked text
- [Matter.js](https://brm.io/matter-js/) for the hero's physics pill pile

## Structure

All content lives in one route (`src/app/page.tsx`) composed from section components in `src/components/`:

- `Hero` — headline with an inline light/dark `ThemeToggle`, over `PhysicsPills` (drag, flick, or tap the pills)
- `WhatIDo` — draggable skill cards and a paragraph that sharpens into focus as you scroll
- `Work` — case-study cards with illustrated device mockups (`ui/ProjectMockups.tsx`)
- `About` — sticker tags, taped polaroid, stats, and the TikTok note
- `Process` — the "understand, build, ship" timeline
- `Contact` + `Footer` — googly eyes, rotating call to action, and socials

Editable copy — bio, stats, skills, hero pills, projects, process steps, contact links — lives in `src/lib/data.ts`. The theme defaults to light; a saved choice is applied before first paint by the inline script in `src/lib/theme-script.ts`.

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
