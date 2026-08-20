"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Course } from "@/lib/courses";
import EnrolButton from "@/components/EnrolButton";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!course) return;
    lastFocused.current = document.activeElement as HTMLElement;
    document.body.classList.add("no-scroll");
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
      lastFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-hidden={false}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl border bg-[var(--card)] p-6 shadow-[var(--shadow)]"
        style={{ borderColor: course.accent }}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className="rounded-full px-3 py-1 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-wider text-white"
            style={{ backgroundColor: course.accent }}
          >
            {course.badge}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close course details"
            className="rounded-full p-1 text-[var(--muted)] transition hover:text-[var(--gold)]"
          >
            ✕
          </button>
        </div>

        <div className="relative mt-4 h-40 w-full overflow-hidden rounded-xl">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
        </div>

        <h2
          id="course-modal-title"
          className="mt-4 font-[family-name:var(--font-serif)] text-2xl text-[var(--text)]"
        >
          {course.title}
        </h2>
        <p className="mt-1 text-lg font-semibold text-[var(--gold)]">{course.price}</p>

        <p
          className="rich-info mt-3 text-sm text-[var(--muted)]"
          dangerouslySetInnerHTML={{ __html: course.info }}
        />
        <p className="mt-2 text-xs text-[var(--muted)]">
          Your registration form opens automatically right after payment is confirmed.
        </p>

        <div className="mt-5">
          <h3 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-[var(--gold-soft)]">
            What you&apos;ll learn
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text)]">
            {course.learn.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--gold-soft)]">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-[var(--gold-soft)]">
            What you&apos;ll need
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text)]">
            {course.need.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--purple-light)]">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <EnrolButton
            paymentUrl={course.paymentUrl}
            className="flex-1 min-w-[140px] rounded-full bg-[var(--gold)] px-4 py-2.5 text-center text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
          />
          <button
            type="button"
            onClick={onClose}
            className="flex-1 min-w-[100px] rounded-full border border-[var(--border)] px-4 py-2.5 text-center text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
