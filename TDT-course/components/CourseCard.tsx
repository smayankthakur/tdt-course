import Link from "next/link";
import type { Course } from "@/lib/courses";
import Glyph from "./Glyph";

export default function CourseCard({
  course,
  onOpenDetails,
}: {
  course: Course;
  onOpenDetails: () => void;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] transition hover:border-[color:var(--gold)]/50">
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[color:var(--bg-surface-2)]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(212,175,106,0.25), transparent 50%)",
          }}
        />
        <Glyph name={course.glyph} className="relative h-20 w-20 text-[color:var(--gold-light,#ecd9a8)]" />
        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[color:var(--ivory)] backdrop-blur">
          {course.tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[11px] font-bold text-[color:var(--bg-void)]">
          {course.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-[color:var(--ivory)]">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">{course.summary}</p>

        <ul className="mt-4 space-y-1.5 text-[13px] text-[color:var(--muted)]">
          {course.schedule.slice(0, 3).map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--gold)]" />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={course.payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110"
          >
            Pay &amp; Enrol ✨
          </Link>
          <button
            onClick={onOpenDetails}
            className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--purple-light,#a78bfa)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
          >
            Course details →
          </button>
        </div>
      </div>
    </div>
  );
}
