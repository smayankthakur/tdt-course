import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, isBookingClosed } from "@/lib/courses";
import BookingStatus from "@/components/BookingStatus";
import Glyph from "@/components/Glyph";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} · The Divine Tarot`,
    description: course.summary,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const closed = isBookingClosed(course);

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#courses"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ivory)]"
        >
          ← Back to all courses
        </Link>

        <div className="relative mt-8 flex h-56 items-center justify-center overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface-2)]">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 25% 20%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(circle at 80% 85%, rgba(212,175,106,0.28), transparent 50%)",
            }}
          />
          <Glyph name={course.glyph} className="relative h-28 w-28 text-[color:var(--gold-light,#ecd9a8)]" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[color:var(--muted)]">
            {course.tag}
          </span>
          <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-[11px] font-bold text-[color:var(--bg-void)]">
            {course.price}
          </span>
          {closed && (
            <span className="rounded-full border border-[color:var(--hairline)] bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--muted)]">
              🔒 Booking Closed!
            </span>
          )}
        </div>

        <h1 className="mt-4 font-serif text-4xl text-[color:var(--ivory)] sm:text-5xl">{course.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{course.summary}</p>

        <p className="mt-5 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] p-4 text-sm leading-relaxed text-[color:var(--ivory)]/90">
          {course.formatNote}
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {course.schedule.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2 rounded-xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] px-4 py-3 text-sm text-[color:var(--ivory)]/90"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-[color:var(--ivory)]">What you&apos;ll learn</h2>
            <ul className="mt-4 space-y-3">
              {course.learn.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                  <span className="mt-0.5 text-[color:var(--gold)]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[color:var(--ivory)]">What you&apos;ll need</h2>
            <ul className="mt-4 space-y-3">
              {course.need.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                  <span className="mt-0.5 text-[color:var(--purple-light,#a78bfa)]">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[color:var(--hairline)] pt-8">
          <BookingStatus course={course} />
          <Link
            href="/#courses"
            className="text-sm font-medium text-[color:var(--muted)] underline decoration-transparent underline-offset-4 transition hover:text-[color:var(--ivory)] hover:decoration-current"
          >
            Browse other courses
          </Link>
        </div>
      </div>
    </section>
  );
}
