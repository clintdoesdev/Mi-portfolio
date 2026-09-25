import type { ProjectMockup } from "@/lib/data";

const uiFont = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

function Gobo() {
  return <div aria-hidden className="gobo pointer-events-none absolute -inset-10 opacity-70" />;
}

function SpendifyScreen() {
  const bars = [46, 62, 38, 70, 55, 82, 64, 90, 58, 76, 68, 96];
  return (
    <svg viewBox="0 0 640 400" className="block h-full w-full" style={uiFont} aria-hidden>
      <rect width="640" height="400" fill="#f6f7f9" />
      <rect width="124" height="400" fill="#ffffff" />
      <rect x="18" y="20" width="22" height="22" rx="7" fill="#16a34a" />
      <path d="M24 34l4-5 4 3 4-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="48" y="36" fontSize="13" fontWeight="700" fill="#111">Spendify</text>
      {["Overview", "Budgets", "Savings", "Activity", "Settings"].map((item, i) => (
        <g key={item}>
          {i === 0 && <rect x="12" y={64 + i * 30} width="100" height="24" rx="7" fill="#ecf8f0" />}
          <circle cx="28" cy={76 + i * 30} r="4" fill={i === 0 ? "#16a34a" : "#c7c9d1"} />
          <text x="40" y={80 + i * 30} fontSize="10" fontWeight={i === 0 ? 600 : 500} fill={i === 0 ? "#15803d" : "#6b7080"}>
            {item}
          </text>
        </g>
      ))}

      <text x="144" y="40" fontSize="17" fontWeight="700" fill="#111">Overview</text>
      <text x="144" y="56" fontSize="9.5" fill="#8a8f9c">This month at a glance</text>
      <rect x="470" y="26" width="110" height="24" rx="12" fill="#fff" stroke="#e7e8ec" />
      <text x="484" y="42" fontSize="9" fill="#a0a4b0">Search…</text>
      <circle cx="602" cy="38" r="12" fill="#f5d40e" />

      {[
        { label: "Income", value: "$8,420", delta: "+12%", good: true },
        { label: "Expenses", value: "$3,160", delta: "−4%", good: false },
        { label: "Savings", value: "$2,050", delta: "+8%", good: true },
      ].map((stat, i) => (
        <g key={stat.label} transform={`translate(${144 + i * 160} 72)`}>
          <rect width="148" height="76" rx="12" fill="#fff" stroke="#eceef2" />
          <text x="14" y="24" fontSize="9.5" fill="#8a8f9c">{stat.label}</text>
          <text x="14" y="52" fontSize="20" fontWeight="700" fill="#111">{stat.value}</text>
          <rect x="102" y="12" width="34" height="16" rx="8" fill={stat.good ? "#dcfce7" : "#fee2e2"} />
          <text x="119" y="23.5" fontSize="8" fontWeight="600" textAnchor="middle" fill={stat.good ? "#15803d" : "#b91c1c"}>
            {stat.delta}
          </text>
        </g>
      ))}

      <g transform="translate(144 164)">
        <rect width="300" height="212" rx="12" fill="#fff" stroke="#eceef2" />
        <text x="16" y="26" fontSize="11" fontWeight="600" fill="#111">Monthly trend</text>
        <circle cx="206" cy="22" r="3.5" fill="#16a34a" />
        <text x="214" y="25.5" fontSize="8" fill="#8a8f9c">Income</text>
        <circle cx="252" cy="22" r="3.5" fill="#1f2937" />
        <text x="260" y="25.5" fontSize="8" fill="#8a8f9c">Spend</text>
        {[0, 1, 2, 3].map((l) => (
          <line key={l} x1="16" x2="284" y1={60 + l * 38} y2={60 + l * 38} stroke="#f1f2f5" />
        ))}
        {bars.map((h, i) => (
          <g key={i} transform={`translate(${22 + i * 22} 0)`}>
            <rect x="0" y={176 - h * 1.1} width="7" height={h * 1.1} rx="3.5" fill="#16a34a" />
            <rect x="9" y={176 - h * 0.6} width="7" height={h * 0.6} rx="3.5" fill="#1f2937" />
          </g>
        ))}
        <text x="16" y="198" fontSize="8" fill="#a0a4b0">Jan</text>
        <text x="266" y="198" fontSize="8" fill="#a0a4b0">Dec</text>
      </g>

      <g transform="translate(456 164)">
        <rect width="164" height="212" rx="12" fill="#fff" stroke="#eceef2" />
        <text x="16" y="26" fontSize="11" fontWeight="600" fill="#111">By category</text>
        <g transform="translate(82 92) rotate(-90)">
          {[
            { c: "#16a34a", len: 88, off: 0 },
            { c: "#86efac", len: 56, off: 88 },
            { c: "#f5d40e", len: 40, off: 144 },
            { c: "#60a5fa", len: 42, off: 184 },
          ].map((seg) => (
            <circle
              key={seg.c}
              r="36"
              fill="none"
              stroke={seg.c}
              strokeWidth="14"
              strokeDasharray={`${seg.len - 3} ${226 - seg.len + 3}`}
              strokeDashoffset={-seg.off}
            />
          ))}
        </g>
        <text x="82" y="96" fontSize="12" fontWeight="700" textAnchor="middle" fill="#111">$3.1k</text>
        {["Housing", "Food", "Transport", "Fun"].map((label, i) => (
          <g key={label} transform={`translate(18 ${150 + i * 14})`}>
            <rect width="7" height="7" rx="2" fill={["#16a34a", "#86efac", "#f5d40e", "#60a5fa"][i]} />
            <text x="13" y="7" fontSize="8" fill="#6b7080">{label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function MagnusScreen() {
  const cards = [
    { title: "Solidity Audit", price: "0.12 ETH", from: "#8b5cf6", to: "#ec4899" },
    { title: "Brand Identity", price: "0.08 ETH", from: "#f59e0b", to: "#ef4444" },
    { title: "Next.js Build", price: "0.15 ETH", from: "#06b6d4", to: "#6366f1" },
    { title: "3D Motion", price: "0.10 ETH", from: "#22c55e", to: "#14b8a6" },
  ];
  return (
    <svg viewBox="0 0 280 600" className="block h-full w-full" style={uiFont} aria-hidden>
      <defs>
        {cards.map((c, i) => (
          <linearGradient key={i} id={`mgn-card-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
        ))}
        <linearGradient id="mgn-cta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="280" height="600" fill="#0d0b14" />
      <text x="24" y="34" fontSize="11" fontWeight="600" fill="#fff">9:41</text>
      <rect x="226" y="25" width="22" height="10" rx="3" fill="none" stroke="#fff" strokeOpacity=".7" />
      <rect x="228" y="27" width="14" height="6" rx="1.5" fill="#fff" />

      <text x="20" y="78" fontSize="20" fontWeight="800" fill="#fff">Magnus</text>
      <text x="20" y="94" fontSize="10" fill="#8f89a6">Skill Mart</text>
      <rect x="160" y="62" width="100" height="28" rx="14" fill="url(#mgn-cta)" />
      <text x="210" y="80" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#fff">Connect wallet</text>

      <rect x="20" y="112" width="240" height="34" rx="12" fill="#1a1726" />
      <circle cx="38" cy="129" r="5" fill="none" stroke="#6f6a86" strokeWidth="1.6" />
      <text x="52" y="133" fontSize="10" fill="#6f6a86">Search skills</text>

      {["All", "Dev", "Design", "Web3"].map((chip, i) => (
        <g key={chip} transform={`translate(${20 + i * 58} 160)`}>
          <rect width="50" height="24" rx="12" fill={i === 0 ? "#fff" : "#1a1726"} />
          <text x="25" y="16" fontSize="9.5" fontWeight="600" textAnchor="middle" fill={i === 0 ? "#0d0b14" : "#b8b3cc"}>
            {chip}
          </text>
        </g>
      ))}

      {cards.map((card, i) => {
        const x = 20 + (i % 2) * 124;
        const y = 200 + Math.floor(i / 2) * 176;
        return (
          <g key={card.title} transform={`translate(${x} ${y})`}>
            <rect width="116" height="164" rx="14" fill="#16131f" stroke="#262235" />
            <rect x="8" y="8" width="100" height="92" rx="10" fill={`url(#mgn-card-${i})`} />
            <circle cx="58" cy="54" r="20" fill="#fff" fillOpacity=".22" />
            <path d="M58 40l12 14-12 14-12-14z" fill="#fff" fillOpacity=".85" />
            <text x="10" y="120" fontSize="10" fontWeight="700" fill="#fff">{card.title}</text>
            <text x="10" y="136" fontSize="8.5" fill="#8f89a6">Verified skill</text>
            <circle cx="78" cy="133" r="4" fill="#22c55e" />
            <text x="10" y="153" fontSize="9" fontWeight="700" fill="#c4b5fd">{card.price}</text>
          </g>
        );
      })}

      <rect x="20" y="548" width="240" height="36" rx="18" fill="#1a1726" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={56 + i * 56} cy="566" r={i === 0 ? 6 : 5} fill={i === 0 ? "#fff" : "#4b4663"} />
      ))}
    </svg>
  );
}

function DashboardScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#ddd6cb] to-[#c9c0b3]">
      <Gobo />
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-b from-[#6f4e37] to-[#4a3223] shadow-[inset_0_2px_0_rgba(255,255,255,0.18)]" />
      <div className="absolute bottom-[24%] left-[7%] w-[11%]">
        <div className="relative mx-auto h-0 w-full pb-[120%]">
          <span className="absolute bottom-[55%] left-[10%] h-[60%] w-[34%] -rotate-[28deg] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#5f8f4e]" />
          <span className="absolute bottom-[58%] left-[38%] h-[70%] w-[30%] rounded-[50%] bg-[#6fa35b]" />
          <span className="absolute bottom-[55%] right-[6%] h-[58%] w-[34%] rotate-[28deg] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#557f45]" />
          <span className="absolute bottom-0 left-[12%] h-[58%] w-[76%] rounded-b-[40%] rounded-t-md bg-gradient-to-b from-[#d49a74] to-[#b87554]" />
        </div>
      </div>
      <div className="absolute bottom-[21%] left-1/2 w-[66%] -translate-x-[42%] transition-transform duration-700 group-hover:-translate-y-1">
        <div className="rounded-t-[0.6rem] bg-[#1c1c1f] p-[1.4%] shadow-[0_30px_40px_-24px_rgba(0,0,0,0.6)]">
          <div className="aspect-[16/10] overflow-hidden rounded-[0.2rem]">
            <SpendifyScreen />
          </div>
        </div>
        <div className="relative -mx-[6%] h-[0.55rem] rounded-b-[0.7rem] bg-gradient-to-b from-[#e2e2e6] to-[#a1a1a8] shadow-[0_12px_18px_-8px_rgba(0,0,0,0.5)]">
          <div className="mx-auto h-[45%] w-[15%] rounded-b-md bg-[#8e8e95]" />
        </div>
      </div>
    </div>
  );
}

function MarketplaceScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#d4cfdb] to-[#bfb8ca]">
      <Gobo />
      <div className="absolute bottom-[10%] left-1/2 h-[16%] w-[58%] -translate-x-1/2 rounded-t-[999px] bg-gradient-to-b from-[#b7825a] to-[#8a5a39] shadow-[inset_0_3px_0_rgba(255,255,255,0.25)]" />
      <div className="absolute inset-x-0 bottom-0 h-[11%] bg-gradient-to-b from-[#a89fb4] to-[#968ca3]" />
      <div className="absolute bottom-[19%] left-1/2 w-[27%] -translate-x-1/2 transition-transform duration-700 group-hover:-translate-y-1.5">
        <div className="rounded-[1.4rem] bg-[#111014] p-[4%] shadow-[0_30px_40px_-20px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[1.8rem]">
          <div className="relative aspect-[280/600] overflow-hidden rounded-[1.05rem] sm:rounded-[1.4rem]">
            <MagnusScreen />
            <span className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComingSoonScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#e7d8cd] to-[#d5c1b3]">
      <Gobo />
      <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-b from-[#c9ae9c] to-[#b89a86]" />
      <div className="absolute bottom-[12%] left-1/2 w-[46%] -translate-x-1/2 sm:w-[34%]">
        <div className="rounded-[0.7rem] bg-[#f1ece8] p-[2%] shadow-[0_30px_40px_-24px_rgba(0,0,0,0.5)]">
          <div className="aspect-[16/10] overflow-hidden rounded-[0.35rem] bg-white blur-[1.5px]">
            <div className="flex h-full">
              <div className="w-[18%] space-y-[6%] bg-[#faf7f5] p-[3%]">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-[6%] min-h-1 rounded-full bg-[#e5ddd7]" />
                ))}
              </div>
              <div className="flex-1 space-y-[4%] p-[4%]">
                <div className="h-[8%] w-1/2 rounded bg-[#e5ddd7]" />
                <div className="grid h-[30%] grid-cols-3 gap-[4%]">
                  <div className="rounded bg-[#f3eee9]" />
                  <div className="rounded bg-[#f3eee9]" />
                  <div className="rounded bg-[#ff5a1f]/70" />
                </div>
                <div className="h-[40%] rounded bg-[#f3eee9]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-[1.6rem] w-[14%] bg-gradient-to-b from-[#ddd5cf] to-[#c7bdb5]" />
        <div className="mx-auto h-[0.35rem] w-[34%] rounded-full bg-[#cfc5bd]" />
      </div>
    </div>
  );
}

export function ProjectScene({ mockup }: { mockup: ProjectMockup }) {
  return mockup === "dashboard" ? <DashboardScene /> : <MarketplaceScene />;
}
