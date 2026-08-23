"use client";

import { useState } from "react";
import { courses, type Course } from "@/lib/courses";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";

export default function CoursesGrid() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <div
            key={course.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${Math.min(i, 6) * 80}ms` }}
          >
            <CourseCard course={course} onOpenDetails={() => setSelected(course)} />
          </div>
        ))}
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}
