"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-4 flex overflow-hidden rounded-full border border-[color:var(--hairline)] bg-[color:var(--bg-void)]/50"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full bg-transparent px-4 py-2.5 text-sm text-[color:var(--ivory)] placeholder:text-[color:var(--muted)] focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-[color:var(--gold)] px-4 py-2.5 text-sm font-semibold text-[color:var(--bg-void)] transition hover:brightness-110"
      >
        Subscribe
      </button>
    </form>
  );
}
