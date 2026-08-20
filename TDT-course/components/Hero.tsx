import Starfield from "@/components/Starfield";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg-soft)]">
      <Starfield />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-28 text-center sm:py-36">
        <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.35em] text-[var(--gold-soft)]">
          Live · Instructor-Led · Since the First Card Drawn
        </span>
        <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--text)] sm:text-6xl">
          Learn to Read the
          <span className="block text-[var(--gold)]">Signs Others Miss</span>
        </h1>
        <p className="max-w-2xl text-balance text-base text-[var(--muted)] sm:text-lg">
          Tarot, runes, dice divination, candle wax reading, and a year-long
          healing membership — taught live, in small batches, by practitioners
          who still read for real people every week.
        </p>
        <a
          href="#courses"
          className="mt-2 rounded-full border border-[var(--gold)] bg-[var(--gold)] px-8 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-[#1a1408] transition hover:bg-transparent hover:text-[var(--gold)]"
        >
          View Upcoming Batches
        </a>
      </div>
    </section>
  );
}
