import type { Metadata } from "next";
import Link from "next/link";
import { getCourseBySlug } from "@/lib/courses";
import { verifyRazorpayPaymentLinkRedirect } from "@/lib/razorpay";
import AutoOpenForm from "@/components/AutoOpenForm";

export const metadata: Metadata = {
  title: "Payment Status",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{
    course?: string;
    razorpay_payment_id?: string;
    razorpay_payment_link_id?: string;
    razorpay_payment_link_reference_id?: string;
    razorpay_payment_link_status?: string;
    razorpay_signature?: string;
  }>;
}

export default async function PaymentSuccessPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const course = sp.course ? getCourseBySlug(sp.course) : undefined;

  if (!course) {
    return (
      <StatusShell heading="Course not found" accent="#e24b6a">
        <p className="text-[var(--muted)]">
          We couldn&apos;t tell which course this payment was for. If you just
          paid, please contact us with your payment reference so we can add
          you to the right batch.
        </p>
        <Link
          href="/#courses"
          className="mt-6 inline-block rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
        >
          Browse courses
        </Link>
      </StatusShell>
    );
  }

  const result = verifyRazorpayPaymentLinkRedirect(sp);

  if (!result.verified) {
    return (
      <StatusShell heading="We couldn't confirm your payment" accent="#e24b6a">
        <p className="text-[var(--muted)]">
          We don&apos;t have a confirmed successful payment for{" "}
          <strong className="text-[var(--text)]">{course.title}</strong> yet.
          If you completed payment moments ago, wait a few seconds and
          refresh this page. Otherwise, please purchase the course to get
          access to the registration form.
        </p>
        <a
          href={course.paymentUrl}
          className="mt-6 inline-block rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
        >
          Buy {course.title} — {course.price}
        </a>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Already paid and still seeing this? Contact us with your payment
          reference and we&apos;ll add you manually.
        </p>
      </StatusShell>
    );
  }

  return (
    <StatusShell heading="Payment confirmed 🎉" accent={course.accent}>
      <p className="text-[var(--muted)]">
        Thank you — your payment for{" "}
        <strong className="text-[var(--text)]">{course.title}</strong> is
        confirmed. Opening your registration form now.
      </p>
      <AutoOpenForm formUrl={course.formUrl} />
      <a
        href={course.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
      >
        📝 Open Registration Form
      </a>
      <p className="mt-4 text-xs text-[var(--muted)]">
        Didn&apos;t open automatically? Use the button above — it&apos;s the
        same registration form.
      </p>
    </StatusShell>
  );
}

function StatusShell({
  heading,
  accent,
  children,
}: {
  heading: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[var(--bg)] px-6 py-16">
      <div
        className="w-full max-w-md rounded-2xl border bg-[var(--card)] p-8 text-center shadow-[var(--shadow)]"
        style={{ borderColor: accent }}
      >
        <h1 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--text)]">
          {heading}
        </h1>
        <div className="mt-4">{children}</div>
      </div>
    </main>
  );
}
