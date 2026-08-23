type GlyphName = "moon" | "workshop" | "tarot" | "tarotPro" | "runes" | "dice" | "candle";

export default function Glyph({ name, className }: { name: GlyphName; className?: string }) {
  const common = { className, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg" };

  switch (name) {
    case "moon":
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
          <path
            d="M70 22a42 42 0 1 0 0 76 34 34 0 0 1 0-76Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="34" cy="40" r="1.6" fill="currentColor" />
          <circle cx="26" cy="60" r="1.2" fill="currentColor" />
          <circle cx="36" cy="80" r="1.4" fill="currentColor" />
        </svg>
      );
    case "workshop":
      return (
        <svg {...common}>
          <rect x="34" y="22" width="52" height="76" rx="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="60" cy="52" r="12" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M60 40v24M48 52h24" stroke="currentColor" strokeWidth="1.2" />
          <path d="M44 78h32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M60 8v10M40 14l6 8M80 14l-6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    case "tarot":
      return (
        <svg {...common}>
          <rect x="28" y="18" width="42" height="64" rx="5" transform="rotate(-8 49 50)" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
          <rect x="50" y="26" width="42" height="64" rx="5" transform="rotate(8 71 58)" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
          <rect x="39" y="24" width="42" height="64" rx="5" fill="currentColor" opacity="0.95" />
          <path d="M60 42a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z" fill="none" stroke="var(--bg-void)" strokeWidth="1.6" />
          <path d="M60 62v10M52 78h16" stroke="var(--bg-void)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "tarotPro":
      return (
        <svg {...common}>
          <path d="M60 12 71 44l34 3-27 22 10 34-28-19-28 19 10-34-27-22 34-3Z" fill="currentColor" opacity="0.9" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      );
    case "runes":
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <rect x="46" y="30" width="10" height="52" rx="2" fill="currentColor" opacity="0.85" />
          <path d="M56 34 76 50M56 58 76 74" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <rect x="70" y="40" width="9" height="40" rx="2" fill="currentColor" opacity="0.5" transform="rotate(10 74 60)" />
        </svg>
      );
    case "dice":
      return (
        <svg {...common}>
          <rect x="24" y="40" width="36" height="36" rx="6" transform="rotate(-8 42 58)" fill="currentColor" opacity="0.55" />
          <rect x="52" y="30" width="40" height="40" rx="7" fill="currentColor" opacity="0.95" />
          <circle cx="62" cy="40" r="2.4" fill="var(--bg-void)" />
          <circle cx="82" cy="40" r="2.4" fill="var(--bg-void)" />
          <circle cx="62" cy="60" r="2.4" fill="var(--bg-void)" />
          <circle cx="82" cy="60" r="2.4" fill="var(--bg-void)" />
          <circle cx="72" cy="50" r="2.4" fill="var(--bg-void)" />
        </svg>
      );
    case "candle":
      return (
        <svg {...common}>
          <path d="M60 20c6 8 6 12 0 18-6-6-6-10 0-18Z" fill="currentColor" opacity="0.9" />
          <rect x="50" y="40" width="20" height="46" rx="3" fill="currentColor" opacity="0.85" />
          <ellipse cx="60" cy="96" rx="34" ry="9" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
          <path d="M34 96c4-6 12-6 16 0M70 96c4-6 12-6 16 0" stroke="currentColor" strokeWidth="1.1" opacity="0.4" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}
