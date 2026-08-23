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
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} onOpenDetails={() => setSelected(course)} />
        ))}
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}
