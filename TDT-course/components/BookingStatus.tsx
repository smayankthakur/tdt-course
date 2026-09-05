"use client";

import Link from "next/link";
import { formatBookingEndDate, isBookingClosed, type Course } from "@/lib/courses";

/**
 * Renders the "Pay & Enrol" action for a course, or a "Booking Closed!" badge
 * once the booking cutoff (2 days before the course starts) has passed — or
 * when a course has been manually closed via `bookingClosed: true`.
 *
 * Centralised here so the card, the details modal and the course page all
 * agree on booking status, computed fresh in the visitor's browser.
 */
export default function BookingStatus({
  course,
  size = "md",
}: {
  course: Course;
  size?: "sm" | "md";
}) {
  const closed = isBookingClosed(course);
  const padding = size === "sm" ? "px-5 py-2.5" : "px-7 py-3.5";

  if (closed) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-white/5 ${padding} text-sm font-semibold uppercase tracking-wide text-[color:var(--muted)]`}
      >
        🔒 Booking Closed!
      </span>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1.5">
      <Link
        href={course.payLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)] ${padding} text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110`}
      >
        Pay &amp; Enrol ✨
      </Link>
      <span className="text-[11px] text-[color:var(--muted)]">
        Booking closes {formatBookingEndDate(course)}
      </span>
    </div>
  );
}
