export const site = {
  name: "Clinton",
  role: "Full-stack & Web3 Developer",
  tagline: "I build products that ship fast",
  email: "clintdoesdev@gmail.com",
  x: "https://x.com/clintdoesdev",
  tiktok: "https://tiktok.com/@clintdoesdev",
  available: true,
  location: "Remote · Africa & the diaspora",
};

export const heroBio =
  "I'm Clinton — I build websites and digital products end to end. Landing pages, marketing sites, SaaS platforms, dashboards, and everything in between. Working with founders, teams, and businesses across regions.";

export const stats = [
  { value: 2.5, suffix: "", decimals: 1, label: "Years building" },
  { value: 2, suffix: "+", decimals: 0, label: "Projects shipped" },
  { value: 2, suffix: "", decimals: 0, label: "Countries served" },
  { value: 48, suffix: "h", decimals: 0, label: "Avg response time" },
];

export const approach = {
  heading: "Product builder.\nProblem solver.",
  paragraphs: [
    "I build whatever the project needs — a sharp landing page that converts, a marketing site that ranks, a SaaS product that scales, or a full-stack app with a real backend. I work with founders, agencies, and businesses who need things built properly and shipped fast.",
    "My approach is simple: understand what you need, build it clean, and ship it. Whether that's a one-page site or a multi-service platform with auth, payments, and a dashboard — I handle the full scope and hand over something you're proud to show.",
  ],
  promise: ["Clean code", "Fast queries", "Smooth UX", "On-time delivery"],
};

export const tiktokBlurb = {
  handle: "@clintdoesdev on TikTok",
  text: "Short-form history and creative content. Building on both screens — the code editor and the camera.",
  href: site.tiktok,
};

export const services = [
  "Landing Pages",
  "Marketing Sites",
  "SaaS Platforms",
  "Dashboards",
  "Client Websites",
  "APIs & Backends",
  "E-commerce",
  "Web3 (on request)",
];

export type KeyVariant = "alpha" | "mod" | "yellow" | "ink";

export type Keycap = {
  /** Printed legend: a glyph for modifier keys, a small symbol for service keys. */
  legend: string;
  /** Service name printed on alpha keys. */
  label?: string;
  variant: KeyVariant;
  /** Relative width inside its row. */
  grow?: number;
  /** What the little keyboard screen prints when this key is pressed. */
  message?: string;
  /** Real keyboard keys (KeyboardEvent.key) that press this keycap. */
  keys?: string[];
  hideOnMobile?: boolean;
};

// The hero keyboard: every service and hero tag is a keycap.
export const keyboardRows: Keycap[][] = [
  [
    { legend: "esc", variant: "yellow", message: "no escape — just shipping", keys: ["Escape"] },
    { legend: "◎", label: "Landing Pages", variant: "alpha", grow: 2 },
    { legend: "✦", label: "Marketing Sites", variant: "alpha", grow: 2 },
    { legend: "∞", label: "SaaS Platforms", variant: "alpha", grow: 2 },
    { legend: "▤", label: "Dashboards", variant: "alpha", grow: 2 },
    { legend: "⌫", variant: "mod", grow: 1.3, message: "deleting bugs…", keys: ["Backspace", "Delete"] },
  ],
  [
    { legend: "⇥", variant: "mod", grow: 1.3, message: "indenting clean code", keys: ["Tab"], hideOnMobile: true },
    { legend: "◍", label: "Client Websites", variant: "alpha", grow: 2 },
    { legend: "⇄", label: "APIs & Backends", variant: "alpha", grow: 2 },
    { legend: "¤", label: "E-commerce", variant: "alpha", grow: 2 },
    { legend: "{ }", variant: "mod", message: "writing clean code", keys: ["{", "}"] },
  ],
  [
    { legend: "⇧", variant: "mod", grow: 1.6, message: "shifting to production", keys: ["Shift"] },
    { legend: "Ξ", label: "Web3 (on request)", variant: "alpha", grow: 2 },
    { legend: "₦", label: "Paystack integration", variant: "alpha", grow: 2.2 },
    { legend: "#", label: "SEO-ready builds", variant: "alpha", grow: 2 },
    { legend: "↵", variant: "ink", grow: 1.5, message: "deploying… ✓ live", keys: ["Enter"] },
  ],
  [
    { legend: "⌘", variant: "mod", message: "⌘ + S — saved", keys: ["Meta", "Control"] },
    { legend: "⌥", variant: "mod", message: "exploring options", keys: ["Alt"], hideOnMobile: true },
    {
      legend: "»",
      label: "Fast delivery",
      variant: "yellow",
      grow: 5,
      message: "fast delivery — avg 48h response",
      keys: [" "],
    },
    { legend: "✺", label: "Africa-focused", variant: "alpha", grow: 2 },
    { legend: "$_", variant: "mod", message: "npm run ship", keys: ["$"], hideOnMobile: true },
  ],
];

export const skills: {
  abbr: string;
  title: string;
  caption: string;
  from: string;
  to: string;
  darkText?: boolean;
}[] = [
  { abbr: "Re", title: "React", caption: "Hooks, state & performance", from: "#7dd3fc", to: "#0284c7" },
  { abbr: "Nx", title: "Next.js", caption: "SSR, SSG & App Router", from: "#52525b", to: "#09090b" },
  { abbr: "Ts", title: "TypeScript", caption: "Safer refactors, clear contracts", from: "#60a5fa", to: "#1d4ed8" },
  { abbr: "Nd", title: "Node.js", caption: "APIs, jobs & middleware", from: "#86efac", to: "#15803d" },
  { abbr: "Db", title: "Databases", caption: "Schemas, indexing & queries", from: "#fdba74", to: "#ea580c" },
  { abbr: "W3", title: "Web3 & Blockchain", caption: "Contracts, NFTs & wallets", from: "#c4b5fd", to: "#6d28d9" },
  { abbr: "Ui", title: "UI Systems", caption: "Responsive, animated, accessible", from: "#f9a8d4", to: "#be185d" },
  {
    abbr: "Py",
    title: "Paystack & Payments",
    caption: "Billing, webhooks, multi-country",
    from: "#fde047",
    to: "#eab308",
    darkText: true,
  },
];

export const alsoFamiliar = [
  "Solidity",
  "Ethers.js",
  "Docker",
  "Tailwind",
  "Vercel",
  "Railway",
  "MongoDB",
  "PostgreSQL",
];

export type ProjectMockup = "dashboard" | "marketplace";

export const projects: {
  title: string;
  subtitle: string;
  tags: string[];
  duration: string;
  year: string;
  description: string;
  highlights: string[];
  mockup: ProjectMockup;
  href?: string;
}[] = [
  {
    title: "Spendify",
    subtitle: "Personal Finance Dashboard",
    tags: ["Frontend dashboard build", "Live demo"],
    duration: "1 week",
    year: "2026",
    description:
      "A polished personal finance dashboard for tracking income, expenses, budgets, savings goals, and transaction activity through a clean analytics-focused interface.",
    highlights: [
      "Finance overview dashboard with income, expense, and savings stat cards",
      "Interactive analytics using Recharts for category and monthly trend visualisation",
    ],
    mockup: "dashboard",
  },
  {
    title: "Magnus Skill Mart",
    subtitle: "Web3 skills marketplace",
    tags: ["Web3 frontend", "Live demo"],
    duration: "2 weeks",
    year: "2025",
    description:
      "An NFT-inspired Web3 marketplace for skills and digital services, with wallet integration, mobile-responsive design, and a premium dark UI.",
    highlights: [
      "Web3 wallet connection and on-chain skill verification",
      "NFT-style skill card marketplace with filtering",
    ],
    mockup: "marketplace",
  },
];

// "Understand, build it clean, ship it" — the approach, laid out as a journey.
export const processSteps: {
  step: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  glyph: "search" | "code" | "rocket";
}[] = [
  {
    step: "Step 01",
    phase: "Understand",
    title: "Understand",
    subtitle: "What you need",
    description:
      "Landing page, marketing site, SaaS platform, internal tool, or a full product from zero — it starts with understanding what the project needs.",
    tags: ["Founders", "Agencies", "Businesses"],
    color: "#22c55e",
    glyph: "search",
  },
  {
    step: "Step 02",
    phase: "Build",
    title: "Build it clean",
    subtitle: "The full scope",
    description:
      "Whether that's a one-page site or a multi-service platform with auth, payments, and a dashboard — I handle the full scope.",
    tags: approach.promise.slice(0, 3),
    color: "#8b5cf6",
    glyph: "code",
  },
  {
    step: "Step 03",
    phase: "Ship",
    title: "Ship it",
    subtitle: "Proud to show",
    description:
      "Built properly and shipped fast — handed over as something you're proud to show.",
    tags: [approach.promise[3], "48h avg response"],
    color: "#3b82f6",
    glyph: "rocket",
  },
];

export const ctaWords = ["BUILD", "SHIP", "LAUNCH", "MAKE"];

export const tickerItems = [
  "Available for new projects",
  site.email,
  "Let's build something great",
  "Remote · Africa & diaspora",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];
