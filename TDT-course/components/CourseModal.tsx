"use client";

import { useEffect } from "react";
import { isBookingClosed, type Course } from "@/lib/courses";
import BookingStatus from "./BookingStatus";
import Glyph from "./Glyph";

export default function CourseModal({
  course,
  onClose,
}: {
  course: Course | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!course) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [course, onClose]);

  if (!course) return null;

  const closed = isBookingClosed(course);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm animate-overlay-fade sm:items-center sm:py-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] shadow-2xl animate-modal-pop">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-[color:var(--ivory)] backdrop-blur transition hover:bg-black/60"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[color:var(--bg-surface-2)] sm:h-52">
          {course.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 25% 20%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(circle at 80% 85%, rgba(212,175,106,0.28), transparent 50%)",
              }}
            />
          )}
          {course.image && <div className="absolute inset-0 bg-black/25" />}
          {!course.image && (
            <Glyph name={course.glyph} className="relative h-24 w-24 text-[color:var(--gold-light,#ecd9a8)] sm:h-28 sm:w-28" />
          )}
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
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

          <h2 id="course-modal-title" className="mt-4 font-serif text-3xl text-[color:var(--ivory)] sm:text-4xl">
            {course.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">{course.summary}</p>

          <p className="mt-5 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface-2)]/50 p-4 text-sm leading-relaxed text-[color:var(--ivory)]/90">
            {course.formatNote}
          </p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {course.schedule.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 rounded-xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface-2)]/40 px-4 py-3 text-sm text-[color:var(--ivory)]/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl text-[color:var(--ivory)]">What you&apos;ll learn</h3>
              <ul className="mt-3 space-y-2.5">
                {course.learn.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                    <span className="mt-0.5 text-[color:var(--gold)]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[color:var(--ivory)]">What you&apos;ll need</h3>
              <ul className="mt-3 space-y-2.5">
                {course.need.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                    <span className="mt-0.5 text-[color:var(--purple-light,#a78bfa)]">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[color:var(--hairline)] pt-6">
            <BookingStatus course={course} />
            <button
              onClick={onClose}
              className="text-sm font-medium text-[color:var(--muted)] underline decoration-transparent underline-offset-4 transition hover:text-[color:var(--ivory)] hover:decoration-current"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
