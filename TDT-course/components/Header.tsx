import Link from "next/link";

const MAIN_SITE = "https://thedivinetarotonline.com";

const navLinks = [
  { label: "Home", href: MAIN_SITE },
  { label: "About", href: `${MAIN_SITE}/about` },
  { label: "Reading", href: `${MAIN_SITE}/reading` },
  { label: "Courses", href: "/", current: true },
  { label: "Kundli Milan", href: `${MAIN_SITE}/kundli-milan` },
  { label: "Personal Reading", href: "https://thedivinetarotonline.co.in/" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--hairline)] bg-[color:var(--bg-void)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold)]/60 text-[color:var(--gold)] transition group-hover:border-[color:var(--gold)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M14 3a9 9 0 1 0 0 18 7 7 0 0 1 0-18Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[17px] tracking-wide text-[color:var(--ivory)]">
              The Divine Tarot
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Courses &amp; Workshops
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.current
                  ? "text-sm font-medium text-[color:var(--gold)]"
                  : "text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ivory)]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#courses"
          className="hidden shrink-0 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110 sm:inline-block"
        >
          View Batches
        </Link>

        {/* Mobile nav */}
        <details className="relative lg:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-[color:var(--hairline)] text-[color:var(--ivory)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] p-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.current
                    ? "block rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--gold)]"
                    : "block rounded-lg px-3 py-2 text-sm text-[color:var(--muted)] hover:bg-white/5 hover:text-[color:var(--ivory)]"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
