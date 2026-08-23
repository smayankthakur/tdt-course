import Link from "next/link";
import MoonPhases from "./MoonPhases";

const MAIN_SITE = "https://thedivinetarotonline.com";

const quickLinks = [
  { label: "About", href: `${MAIN_SITE}/about` },
  { label: "Readings", href: `${MAIN_SITE}/reading` },
  { label: "Kundli Milan", href: `${MAIN_SITE}/kundli-milan` },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/thedivineetarot" },
  { label: "Facebook", href: "https://facebook.com/profile.php?id=61578567343068" },
  { label: "YouTube", href: "https://youtube.com/@TheDivineTarot" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--hairline)] bg-[color:var(--bg-surface)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <MoonPhases className="mb-10 opacity-80" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold)]/60 text-[color:var(--gold)]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M14 3a9 9 0 1 0 0 18 7 7 0 0 1 0-18Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-serif text-lg text-[color:var(--ivory)]">The Divine Tarot</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Live courses in tarot, runes, dice divination and candle wax reading — taught with
              care, in small batches, by practitioners who still read every week.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ivory)]">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#courses" className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ivory)]">
                  All Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ivory)]">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Follow along for batch dates and new course announcements.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
              <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Secure enrolment</span>
              <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Small live batches</span>
              <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Certified on completion</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-[color:var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} The Divine Tarot. All readings and courses offered in good faith, for guidance and reflection.</p>
          <Link href={`${MAIN_SITE}/privacy`} className="transition hover:text-[color:var(--ivory)]">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
