export const site = {
  name: "Clinton",
  role: "Full-stack & Web3 Developer",
  tagline: "I build products that ship fast",
  email: "clintdoesdev@gmail.com",
  x: "https://x.com/clintdoesdev",
  tiktok: "https://tiktok.com/@clintdoesdev",
  available: true,
};

export const heroTags = [
  "Websites & Landing Pages",
  "SaaS & Dashboards",
  "Africa-focused",
  "Fast delivery",
];

export const heroBio =
  "I'm Clinton — I build websites and digital products end to end. Landing pages, marketing sites, SaaS platforms, dashboards, and everything in between. Working with founders, teams, and businesses across regions.";

export const heroCardTags = [
  "Landing pages",
  "SaaS & dashboards",
  "SEO-ready builds",
  "Paystack integration",
];

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

export type SkillCategory = "core" | "backend" | "design" | "specialist";

export const skills: {
  abbr: string;
  category: SkillCategory;
  title: string;
  description: string;
}[] = [
  {
    abbr: "RE",
    category: "core",
    title: "React",
    description:
      "Component architecture, hooks, state management, and performance optimization.",
  },
  {
    abbr: "NX",
    category: "core",
    title: "Next.js",
    description: "SSR, SSG, App Router patterns, route design, and polished delivery.",
  },
  {
    abbr: "TS",
    category: "core",
    title: "TypeScript",
    description: "Safer refactors, clearer contracts, and reliable developer experience.",
  },
  {
    abbr: "ND",
    category: "backend",
    title: "Node.js",
    description: "APIs, background tasks, middleware logic, and scalable server workflows.",
  },
  {
    abbr: "DB",
    category: "backend",
    title: "Databases",
    description: "Schema design, ORM-driven workflows, indexing, and query optimization.",
  },
  {
    abbr: "W3",
    category: "specialist",
    title: "Web3 & Blockchain",
    description:
      "Smart contracts, NFT platforms, wallet integration, and decentralised app architecture.",
  },
  {
    abbr: "UI",
    category: "design",
    title: "UI Systems",
    description: "Responsive layouts, animations, accessibility, and premium visual polish.",
  },
  {
    abbr: "PY",
    category: "specialist",
    title: "Paystack & Payments",
    description:
      "African payment flows, subscription billing, webhook handling, and multi-country support.",
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

export const projects = [
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
    href: undefined as string | undefined,
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
    href: undefined as string | undefined,
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
