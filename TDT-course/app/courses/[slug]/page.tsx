import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/courses";
import EnrolButton from "@/components/EnrolButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.blurb,
    openGraph: {
      title: course.title,
      description: course.blurb,
      images: [course.image],
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#courses"
        className="text-xs text-[var(--muted)] underline underline-offset-4 hover:text-[var(--gold-soft)]"
      >
        ← Back to all courses
      </Link>

      <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl sm:h-72">
        <Image src={course.image} alt={course.title} fill className="object-cover" priority />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span
          className="rounded-full px-3 py-1 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-wider text-white"
          style={{ backgroundColor: course.accent }}
        >
          {course.badge}
        </span>
        <span className="text-lg font-semibold text-[var(--gold)]">{course.price}</span>
      </div>

      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[var(--text)] sm:text-4xl">
        {course.title}
      </h1>
      <p className="mt-3 text-[var(--muted)]">{course.blurb}</p>

      <p
        className="rich-info mt-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm text-[var(--muted)]"
        dangerouslySetInnerHTML={{ __html: course.info }}
      />

      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
        {course.schedule.map((item, i) => (
          <li key={i} className="rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-[var(--gold-soft)]">
            What you&apos;ll learn
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
            {course.learn.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--gold-soft)]">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-[var(--gold-soft)]">
            What you&apos;ll need
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
            {course.need.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--purple-light)]">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <EnrolButton
          paymentUrl={course.paymentUrl}
          className="flex-1 min-w-[160px] rounded-full bg-[var(--gold)] px-5 py-3 text-center text-sm font-semibold text-[#1a1408] transition hover:bg-[var(--gold-soft)]"
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Your registration form opens automatically right after payment is confirmed —
        there&apos;s no separate link to find.
      </p>
    </main>
  );
}
