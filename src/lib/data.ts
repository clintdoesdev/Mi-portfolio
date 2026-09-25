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

export type PillColor =
  | "pink"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "orange"
  | "teal"
  | "salmon"
  | "lavender"
  | "lime";

export type PillIcon =
  | "target"
  | "plus"
  | "hash"
  | "globe"
  | "pencil"
  | "quote"
  | "smile"
  | "square"
  | "star"
  | "arrow"
  | "check"
  | "bolt"
  | "code"
  | "card"
  | "layers"
  | "sparkle"
  | "cube"
  | "chart";

// The hero pile: every service, hero tag and promise becomes a physics pill,
// with a few icon-only "buttons" mixed in like confetti.
export const heroPills: { label: string; color: PillColor; icon: PillIcon }[] = [
  { label: "Landing Pages", color: "pink", icon: "target" },
  { label: "SaaS Platforms", color: "orange", icon: "plus" },
  { label: "Dashboards", color: "purple", icon: "chart" },
  { label: "Marketing Sites", color: "green", icon: "sparkle" },
  { label: "APIs & Backends", color: "blue", icon: "code" },
  { label: "Fast delivery", color: "yellow", icon: "bolt" },
  { label: "Client Websites", color: "salmon", icon: "globe" },
  { label: "E-commerce", color: "teal", icon: "card" },
  { label: "Paystack integration", color: "lavender", icon: "square" },
  { label: "SEO-ready builds", color: "lime", icon: "hash" },
  { label: "Web3 (on request)", color: "pink", icon: "cube" },
  { label: "Africa-focused", color: "teal", icon: "globe" },
  { label: "Clean code", color: "yellow", icon: "code" },
  { label: "Smooth UX", color: "blue", icon: "smile" },
  { label: "Fast queries", color: "orange", icon: "bolt" },
  { label: "On-time delivery", color: "green", icon: "check" },
];

export const heroDots: { color: PillColor; icon: PillIcon }[] = [
  { color: "yellow", icon: "pencil" },
  { color: "orange", icon: "star" },
  { color: "blue", icon: "arrow" },
  { color: "purple", icon: "sparkle" },
  { color: "pink", icon: "layers" },
  { color: "green", icon: "smile" },
  { color: "teal", icon: "check" },
  { color: "blue", icon: "quote" },
  { color: "salmon", icon: "target" },
  { color: "lime", icon: "plus" },
  { color: "lavender", icon: "star" },
  { color: "yellow", icon: "hash" },
];

export const skills: {
  title: string;
  caption: string;
  tint: "white" | "lavender" | "mint" | "cream" | "sky" | "rose";
}[] = [
  { title: "React", caption: "hooks, state & performance", tint: "white" },
  { title: "Next.js", caption: "SSR, SSG & App Router", tint: "cream" },
  { title: "TypeScript", caption: "safer refactors, clear contracts", tint: "sky" },
  { title: "Node.js", caption: "APIs, jobs & middleware", tint: "mint" },
  { title: "Databases", caption: "schemas, indexing & queries", tint: "white" },
  { title: "Web3 & Blockchain", caption: "contracts, NFTs & wallets", tint: "lavender" },
  { title: "UI Systems", caption: "responsive, animated, accessible", tint: "rose" },
  { title: "Paystack & Payments", caption: "billing, webhooks, multi-country", tint: "cream" },
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

export const ctaWords = [
  { word: "BUILD", color: "#34d399" },
  { word: "SHIP", color: "#8b5cf6" },
  { word: "MAKE", color: "#ff6a2e" },
  { word: "LAUNCH", color: "#f472b6" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];
