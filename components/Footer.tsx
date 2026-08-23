import Link from "next/link";
import MoonPhases from "./MoonPhases";
import NewsletterForm from "./NewsletterForm";

const MAIN_SITE = "https://thedivinetarotonline.com";

const quickLinks = [
  { label: "About", href: `${MAIN_SITE}/about` },
  { label: "Readings", href: `${MAIN_SITE}/reading` },
  { label: "Premium", href: `${MAIN_SITE}/reading?upgrade=1` },
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://thedivinetarotonline.com/logo.png"
                alt="The Divine Tarot Logo"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="leading-tight">
                <span className="block font-serif text-lg text-[color:var(--ivory)]">The Divine Tarot</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  Premium Tarot Guidance
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Clarity for your path. Guidance for your soul.
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
              Get Daily Divine Insights
            </h3>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Follow along for batch dates and new course announcements.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-[11px] text-[color:var(--muted)]">
          <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Secure &amp; Private Readings</span>
          <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Trusted by 7L+ Seekers</span>
          <span className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5">Authentic Spiritual Guidance</span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-[color:var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} The Divine Tarot. All readings and courses offered in good faith, for guidance and reflection.</p>
          <Link href={`${MAIN_SITE}/privacy`} className="transition hover:text-[color:var(--ivory)]">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
