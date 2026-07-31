# clintdoesdev.site

Clinton's portfolio — a single-page Next.js site built with TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion for scroll reveals, magnetic buttons, and hero parallax

## Structure

All content lives in one route (`src/app/page.tsx`) composed from section components in `src/components/`. Editable copy — bio, stats, skills, projects, contact links — lives in `src/lib/data.ts`.

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
