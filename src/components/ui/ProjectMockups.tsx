import { LivePreview } from "@/components/ui/LivePreview";
import type { ProjectMockup } from "@/lib/data";

const uiFont = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

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

// Stand-in for Queuely's landing page, shown until the live site loads.
function QueuelyScreen() {
  return (
    <svg viewBox="0 0 640 400" className="block h-full w-full" style={uiFont} aria-hidden>
      <defs>
        <radialGradient id="qly-glow" cx="50%" cy="105%" r="75%">
          <stop offset="0" stopColor="#ff6363" stopOpacity=".38" />
          <stop offset="1" stopColor="#ff6363" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="#040506" />
      <rect width="640" height="400" fill="url(#qly-glow)" />

      <rect x="24" y="20" width="16" height="16" rx="5" fill="#ff6363" />
      <text x="48" y="32.5" fontSize="12" fontWeight="700" fill="#fff">Queuely</text>
      {["Features", "How it works", "Analytics"].map((item, i) => (
        <text key={item} x={250 + i * 62} y="32" fontSize="9" fill="#9c9c9d">
          {item}
        </text>
      ))}
      <rect x="540" y="18" width="76" height="22" rx="11" fill="#fff" />
      <text x="578" y="32.5" fontSize="9" fontWeight="600" textAnchor="middle" fill="#040506">Sign in</text>

      <rect x="232" y="76" width="176" height="22" rx="11" fill="#fff" fillOpacity=".05" stroke="#fff" strokeOpacity=".1" />
      <rect x="236" y="80" width="40" height="14" rx="7" fill="#ff6363" />
      <text x="256" y="90" fontSize="7" fontWeight="700" textAnchor="middle" fill="#1a0a0a">NEW</text>
      <text x="284" y="91" fontSize="8.5" fill="#cfcfd1">Token-gated waitlists</text>

      <text x="320" y="146" fontSize="34" fontWeight="500" textAnchor="middle" fill="#fff">Every launch starts</text>
      <text x="320" y="184" fontSize="34" fontWeight="500" textAnchor="middle" fill="#fff">with a line.</text>
      <text x="320" y="210" fontSize="10" textAnchor="middle" fill="#9c9c9d">
        Build hype before you ship. Collect signups with branded, token-gated forms.
      </text>

      <rect x="232" y="228" width="92" height="28" rx="14" fill="#ff6363" />
      <text x="278" y="246" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#1a0a0a">Get started</text>
      <rect x="332" y="228" width="76" height="28" rx="14" fill="none" stroke="#fff" strokeOpacity=".22" />
      <text x="370" y="246" fontSize="9.5" fontWeight="600" textAnchor="middle" fill="#fff">How it works</text>

      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${128 + i * 80} ${284 + Math.abs(i - 2) * 10})`}>
          <rect width="68" height="84" rx="9" fill="#0b0c0e" stroke="#fff" strokeOpacity=".09" />
          <text x="10" y="20" fontSize="7" letterSpacing="1" fill="#6a6b6c">TICKET</text>
          <text x="10" y="42" fontSize="15" fontWeight="700" fill={i === 2 ? "#ff6363" : "#fff"}>
            #{String(126 + i).padStart(4, "0")}
          </text>
          <line x1="8" x2="60" y1="56" y2="56" stroke="#fff" strokeOpacity=".15" strokeDasharray="3 3" />
          <text x="10" y="72" fontSize="7" fill={i === 2 ? "#ff6363" : "#6a6b6c"}>
            {i === 2 ? "NOW SERVING" : i < 2 ? "SERVED" : "IN LINE"}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Stand-in for FrameSound's landing page, shown until the live site loads.
function FrameSoundScreen() {
  const cards = [
    { from: "#f472b6", to: "#7c3aed" },
    { from: "#2ee6a6", to: "#0e7490" },
    { from: "#fbbf24", to: "#ea580c" },
  ];
  return (
    <svg viewBox="0 0 640 400" className="block h-full w-full" style={uiFont} aria-hidden>
      <defs>
        <linearGradient id="fs-headline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.1" stopColor="#f5f5f4" />
          <stop offset="0.55" stopColor="#7df0c6" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
        <radialGradient id="fs-glow" cx="50%" cy="0%" r="70%">
          <stop offset="0" stopColor="#2ee6a6" stopOpacity=".22" />
          <stop offset="1" stopColor="#2ee6a6" stopOpacity="0" />
        </radialGradient>
        {cards.map((c, i) => (
          <linearGradient key={i} id={`fs-art-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
        ))}
      </defs>
      <rect width="640" height="400" fill="#0a0a0c" />
      <rect width="640" height="400" fill="url(#fs-glow)" />

      <circle cx="32" cy="28" r="8" fill="#2ee6a6" />
      <text x="48" y="32.5" fontSize="12" fontWeight="700" fill="#f5f5f4">FrameSound</text>
      <rect x="532" y="17" width="84" height="22" rx="11" fill="#fff" fillOpacity=".08" />
      <text x="574" y="31.5" fontSize="9" fontWeight="600" textAnchor="middle" fill="#f5f5f4">Batch export</text>

      <text x="320" y="96" fontSize="34" fontWeight="700" textAnchor="middle" fill="#f5f5f4">Turn Spotify</text>
      <text x="320" y="134" fontSize="34" fontWeight="700" textAnchor="middle" fill="url(#fs-headline)">into art.</text>
      <text x="320" y="158" fontSize="10" textAnchor="middle" fill="#f5f5f4" fillOpacity=".68">
        Paste a track link to generate a beautiful shareable card in seconds.
      </text>

      <rect x="180" y="174" width="280" height="30" rx="15" fill="#fff" fillOpacity=".06" stroke="#fff" strokeOpacity=".1" />
      <text x="198" y="193" fontSize="9.5" fill="#f5f5f4" fillOpacity=".44">Search or paste a Spotify link…</text>
      <rect x="400" y="178" width="56" height="22" rx="11" fill="#2ee6a6" />
      <text x="428" y="192.5" fontSize="9" fontWeight="700" textAnchor="middle" fill="#04140d">Paste</text>

      {cards.map((_, i) => (
        <g key={i} transform={`translate(${156 + i * 116} ${226 + (i === 1 ? 0 : 14)}) rotate(${(i - 1) * 6} 50 70)`}>
          <rect width="100" height="148" rx="12" fill="#141417" stroke="#fff" strokeOpacity=".1" />
          <rect x="8" y="8" width="84" height="84" rx="8" fill={`url(#fs-art-${i})`} />
          <rect x="10" y="104" width="56" height="7" rx="3.5" fill="#f5f5f4" fillOpacity=".85" />
          <rect x="10" y="117" width="38" height="6" rx="3" fill="#f5f5f4" fillOpacity=".4" />
          <rect x="10" y="132" width="80" height="3" rx="1.5" fill="#fff" fillOpacity=".12" />
          <rect x="10" y="132" width={30 + i * 14} height="3" rx="1.5" fill="#2ee6a6" />
        </g>
      ))}
    </svg>
  );
}

function Laptop({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="rounded-t-[0.6rem] bg-[#1c1c1f] p-[1.4%] shadow-[0_30px_40px_-24px_rgba(0,0,0,0.55)]">
        <div className="aspect-[16/10] overflow-hidden rounded-[0.2rem]">{children}</div>
      </div>
      <div className="relative -mx-[6%] h-[0.55rem] rounded-b-[0.7rem] bg-gradient-to-b from-[#e8e8ec] to-[#a1a1a8] shadow-[0_14px_18px_-8px_rgba(0,0,0,0.45)]">
        <div className="mx-auto h-[45%] w-[15%] rounded-b-md bg-[#8e8e95]" />
      </div>
    </div>
  );
}

// The laptop, centred in a scene, showing the live site (or the illustration until it loads).
function SceneLaptop({ live, title, screen }: { live?: string; title: string; screen: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-[44%] transition-transform duration-700 group-hover:-translate-y-[47%]">
      <Laptop>
        {live ? <LivePreview url={live} title={`Live preview of ${title}`} fallback={screen} /> : screen}
      </Laptop>
    </div>
  );
}

function DashboardScene({ live, title }: { live?: string; title: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(150deg,#e6f7ec_0%,#bde8cb_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(21,128,61,0.2)_1.2px,transparent_1.2px)] [background-size:18px_18px]" />
      <div className="absolute -right-[12%] -top-[25%] aspect-square w-[60%] rounded-full bg-white/50 blur-2xl" />
      <SceneLaptop live={live} title={title} screen={<SpendifyScreen />} />
      {live && <LiveBadge url={live} />}
    </div>
  );
}

function WaitlistScene({ live, title }: { live?: string; title: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#2b1214_0%,#0b0c0e_55%,#040506_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -bottom-[35%] left-1/2 aspect-square w-[70%] -translate-x-1/2 rounded-full bg-[#ff6363]/25 blur-3xl" />
      <SceneLaptop live={live} title={title} screen={<QueuelyScreen />} />
      {live && <LiveBadge url={live} />}
    </div>
  );
}

function CardsScene({ live, title }: { live?: string; title: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#0f2a22_0%,#0c0c0f_55%,#0a0a0c_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(46,230,166,0.16)_1.2px,transparent_1.2px)] [background-size:20px_20px]" />
      <div className="absolute -left-[15%] -bottom-[30%] aspect-square w-[55%] rounded-full bg-[#2ee6a6]/20 blur-3xl" />
      <div className="absolute -right-[15%] -top-[25%] aspect-square w-[50%] rounded-full bg-[#f472b6]/20 blur-3xl" />
      <SceneLaptop live={live} title={title} screen={<FrameSoundScreen />} />
      {live && <LiveBadge url={live} />}
    </div>
  );
}

function LiveBadge({ url }: { url: string }) {
  return (
    <div className="absolute left-[4%] top-[6%] flex max-w-[90%] items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2.5 pr-3 text-[10px] font-semibold text-neutral-900 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md sm:text-xs">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Live
      <span className="truncate font-mono font-normal text-neutral-500">{new URL(url).host}</span>
    </div>
  );
}

const scenes: Record<ProjectMockup, (props: { live?: string; title: string }) => React.ReactNode> = {
  dashboard: DashboardScene,
  waitlist: WaitlistScene,
  cards: CardsScene,
};

export function ProjectScene({ mockup, live, title }: { mockup: ProjectMockup; live?: string; title: string }) {
  const Scene = scenes[mockup];
  return <Scene live={live} title={title} />;
}
