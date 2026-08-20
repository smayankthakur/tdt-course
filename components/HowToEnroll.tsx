import RevealOnScroll from "@/components/RevealOnScroll";

const steps = [
  "Click \u201cPay & Enrol\u201d on your chosen course and complete payment securely via Razorpay.",
  "You'll receive a payment receipt and invoice by email right away.",
  "Right after paying, click \u201cFill Registration Form\u201d and share your details so we can add you to the batch.",
  "Within two days, you'll get an email with your class link, login ID and password.",
  "Recorded-video access is valid for one year — keep a notebook handy during live sessions.",
  "On completion of the course, your certificate is sent by email.",
];

export default function HowToEnroll() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <RevealOnScroll>
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl text-[var(--text)]">
            How to <span className="text-[var(--gold)]">Enroll</span>
          </h2>
        </RevealOnScroll>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} index={i}>
              <li className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm text-[var(--muted)]">
                <span className="font-[family-name:var(--font-display)] text-[var(--gold-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
