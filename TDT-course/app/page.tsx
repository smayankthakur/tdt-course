import Link from "next/link";
import CoursesGrid from "@/components/CoursesGrid";
import MoonPhases from "@/components/MoonPhases";

const steps = [
  {
    n: "01",
    title: "Choose & pay",
    body: "Tap “Pay & Enrol” on the course you want and complete payment securely through Razorpay.",
  },
  {
    n: "02",
    title: "Get your receipt",
    body: "A payment receipt and invoice land in your inbox immediately after checkout.",
  },
  {
    n: "03",
    title: "We note you down",
    body: "Once payment clears, we add you to the batch roster using the details from your payment.",
  },
  {
    n: "04",
    title: "Class access follows",
    body: "Within two working days you'll receive an email with your class link, login ID and password.",
  },
  {
    n: "05",
    title: "Attend & record",
    body: "Recorded-session access stays valid for a full year — keep a notebook handy during live classes.",
  },
  {
    n: "06",
    title: "Certify",
    body: "On completing the course, your certificate is sent straight to your email.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="starfield pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-2xl tracking-[0.3em] text-[color:var(--gold)]" aria-hidden="true">
            ✨ 🌙 🔮 ✦
          </p>
          <p className="mt-4 font-serif text-sm uppercase tracking-[0.35em] text-[color:var(--gold)]">
            Learn The Sacred Arts
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-[color:var(--ivory)] sm:text-6xl">
            Our <span className="italic text-[color:var(--gold-light,#ecd9a8)]">Courses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            Step into the world of divination. From your first tarot spread to advanced
            intuitive mastery, learn to read cards, runes, wax and dice — and offer guidance
            that genuinely resonates.
          </p>
          <p className="mt-4 text-sm tracking-wide text-[color:var(--gold)]">
            ✦ Click any course to begin your journey ✦
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#courses"
              className="rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110"
            >
              Choose Your Path
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-[color:var(--hairline)] px-7 py-3.5 text-sm font-semibold text-[color:var(--ivory)] transition hover:border-[color:var(--gold)]/60"
            >
              How Enrolment Works
            </Link>
          </div>
        </div>
      </section>

      {/* How to enroll */}
      <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-[color:var(--ivory)] sm:text-4xl">How to Enrol</h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Six steps between deciding to learn and holding your certificate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--bg-surface)] p-6"
              >
                <span className="font-serif text-3xl text-[color:var(--gold)]">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl text-[color:var(--ivory)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoonPhases className="opacity-70" />

      {/* Courses */}
      <section id="courses" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-[color:var(--ivory)] sm:text-4xl">
              Upcoming Live Batches
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Live, instructor-led classes with a fixed schedule and limited seats — reserve
              your place before a batch fills up. Dates are provisional; please confirm before
              booking.
            </p>
          </div>

          <div className="mt-12">
            <CoursesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
