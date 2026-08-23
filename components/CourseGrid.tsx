"use client";

import { useState } from "react";
import { courses, getCourseByKey } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function CourseGrid() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const openCourse = openKey ? getCourseByKey(openKey) ?? null : null;

  return (
    <section id="courses" className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <div className="mb-2 text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--text)] sm:text-4xl">
              Upcoming <span className="text-[var(--gold)]">Live Batches</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
              Live, instructor-led classes with a fixed schedule and seat limit —
              reserve your place before the batch fills up. Dates below are
              provisional; please confirm before booking.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <RevealOnScroll key={course.key} index={i}>
              <CourseCard course={course} onOpenDetails={setOpenKey} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <CourseModal course={openCourse} onClose={() => setOpenKey(null)} />
    </section>
  );
}
