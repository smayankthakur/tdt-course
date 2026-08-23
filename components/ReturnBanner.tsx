"use client";

// See lib/enrolIntent.ts: this is a best-effort nudge, not payment
// verification. The reliable fix is setting each Razorpay Payment Link's
// dashboard "Redirect URL" to that course's formUrl — Razorpay only fires
// that redirect after a confirmed successful payment. This banner covers
// the case where someone closes the payment tab manually instead.

import { useEffect, useState } from "react";
import { getCourseByKey } from "@/lib/courses";
import { getEnrolIntent, clearEnrolIntent, MIN_AWAY_MS } from "@/lib/enrolIntent";

export default function ReturnBanner() {
  const [courseKey, setCourseKey] = useState<string | null>(null);

  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState !== "visible") return;
      const pending = getEnrolIntent();
      if (!pending) return;
      if (Date.now() - pending.t < MIN_AWAY_MS) return;
      setCourseKey(pending.key);
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!courseKey) return null;
  const course = getCourseByKey(courseKey);
  if (!course) return null;

  function handleFormClick() {
    clearEnrolIntent();
    setCourseKey(null);
  }

  function handleDismiss() {
    clearEnrolIntent();
    setCourseKey(null);
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 z-[200] w-[min(94vw,480px)] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--card)] to-[var(--bg-soft)] p-5 shadow-[var(--shadow)]"
      style={{ borderTopColor: "var(--gold)", borderTopWidth: 2 }}
    >
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-3 text-[var(--muted)] transition hover:text-[var(--gold)]"
      >
        ✕
      </button>
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none">✨</span>
        <div className="text-sm leading-relaxed text-[var(--text)]">
          <strong className="block font-[family-name:var(--font-display)] text-[var(--gold-soft)]">
            Welcome back!
          </strong>
          If your payment for{" "}
          <span className="font-semibold text-[var(--purple-light)]">{course.title}</span> went
          through, complete your registration below.
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={course.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFormClick}
          className="flex-1 min-w-[160px] rounded-full bg-[var(--gold)] px-4 py-2.5 text-center text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
        >
          📝 Fill Registration Form
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-1 min-w-[120px] rounded-full border border-[var(--border)] px-4 py-2.5 text-center text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
        >
          Not yet, dismiss
        </button>
      </div>
    </div>
  );
}
