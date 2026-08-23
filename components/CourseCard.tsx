"use client";

import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import EnrolButton from "@/components/EnrolButton";
import FormLink from "@/components/FormLink";

interface CourseCardProps {
  course: Course;
  onOpenDetails: (key: string) => void;
}

export default function CourseCard({ course, onOpenDetails }: CourseCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--gold)]/40">
      <div className="relative h-44 w-full">
        <span
          className="absolute left-3 top-3 z-10 rounded-full px-3 py-1 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-wider text-white"
          style={{ backgroundColor: course.accent }}
        >
          {course.badge}
        </span>
        <span className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-[var(--gold)] backdrop-blur">
          {course.price}
        </span>
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--text)]">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{course.blurb}</p>
        <ul className="mt-4 space-y-1 text-xs text-[var(--muted)]">
          {course.schedule.slice(0, 3).map((item, i) => (
            <li key={i}>
              <span className="text-[var(--gold-soft)]">•</span> {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            <EnrolButton
              courseKey={course.key}
              paymentUrl={course.paymentUrl}
              className="flex-1 rounded-full bg-[var(--gold)] px-4 py-2 text-center text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
            />
            <button
              type="button"
              onClick={() => onOpenDetails(course.key)}
              className="flex-1 rounded-full border border-[var(--border)] px-4 py-2 text-center text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Course Details
            </button>
          </div>
          <FormLink
            formUrl={course.formUrl}
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--purple-light)] underline underline-offset-4 transition hover:text-[var(--gold)]"
          />
          <Link
            href={`/courses/${course.slug}`}
            className="mt-2 block text-xs text-[var(--muted)] underline underline-offset-4 hover:text-[var(--gold-soft)]"
          >
            View full page
          </Link>
        </div>
      </div>
    </article>
  );
}
