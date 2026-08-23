import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-serif text-sm uppercase tracking-[0.3em] text-[color:var(--gold)]">
        The Cards Are Silent
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[color:var(--ivory)]">Page not found</h1>
      <p className="mt-3 max-w-md text-[color:var(--muted)]">
        That course or page doesn&apos;t exist. Let&apos;s guide you back to something real.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[color:var(--gold)] px-7 py-3 text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110"
      >
        Back to Courses
      </Link>
    </section>
  );
}
