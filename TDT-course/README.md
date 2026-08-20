# Mystic Arts School — Course Platform

A Next.js 14+ (App Router, TypeScript) course enrollment site: tarot, runes,
dice, candle-wax reading courses, and an offline healing membership. Dark
purple/gold "cosmic" identity, fully data-driven.

## Local setup

```bash
npm install
cp .env.local.example .env.local   # then fill in RAZORPAY_KEY_SECRET
npm run dev
```

Visit http://localhost:3000.

## Adding or editing a course

Everything about a course — copy, schedule, price, learn/need lists, payment
link, form link, accent color, image, slug — lives in one place:

```
lib/courses.ts
```

Add or edit an object in the `courses` array and the homepage grid, the
`/courses/[slug]` page, and the payment-success flow all update
automatically.

## Payment → registration flow (gated, not a guess)

The registration form is **never linked directly** anywhere on the site.
It only appears after a Razorpay Payment Link redirects back with a
verified, signed "paid" status. If verification fails or is missing, the
visitor is told to buy the course instead — no direct link is exposed.

**Required setup, per course, in the Razorpay Dashboard:**

1. Open **Payment Links → [that course's link] → Settings**.
2. Enable **"Redirect URL"** and set it to:
   ```
   https://<your-domain>/payment-success?course=<slug>
   ```
   Slugs (from `lib/courses.ts`):
   | Course | Slug |
   |---|---|
   | Heal WITHIN | `heal-within` |
   | Tarot Workshop | `tarot-workshop` |
   | Tarot: Beginning to Advance | `tarot-beginning-to-advance` |
   | Tarot Pro | `tarot-pro` |
   | Runes: Beginning to Advance | `runes-beginning-to-advance` |
   | Dice: Beginning to Advance | `dice-beginning-to-advance` |
   | Candle Wax Full Course | `candle-wax-full-course` |
3. Set `RAZORPAY_KEY_SECRET` (Dashboard → Settings → API Keys → Key Secret)
   as an environment variable on your deploy (Vercel → Project → Settings →
   Environment Variables), and in `.env.local` for local testing.

**How it works end to end:**

1. Visitor clicks "Pay & Enrol" → goes to the Razorpay Payment Link in the
   **same tab** (this is required for the redirect to land back on the
   site — see `components/EnrolButton.tsx`).
2. After a completed payment, Razorpay redirects the browser to
   `/payment-success?course=<slug>&razorpay_payment_id=...&razorpay_signature=...`.
3. `app/payment-success/page.tsx` verifies that signature **server-side**
   (`lib/razorpay.ts`, using `RAZORPAY_KEY_SECRET` — never exposed to the
   client) and checks the status is `"paid"`.
   - **Verified:** the page shows a confirmation and opens the course's
     Google Form (auto-open after ~1.2s, plus a manual button as a
     fallback in case the browser blocks the automatic open).
   - **Not verified** (missing/invalid signature, wrong status, or someone
     just visits that URL directly without paying): the page tells them
     the payment isn't confirmed and shows a **"Buy [Course]"** button
     back to the Payment Link instead. No form access.

This means someone can't reach the registration form by guessing or
sharing the `/payment-success` URL — the signature can only be produced by
Razorpay for a real, completed payment on that specific link.

## Images

`public/images/*.svg` are placeholder illustrations (accent-colored,
symbolic motifs) generated for each course. Swap them for real photography —
same filenames, or update the `image` field per course in `lib/courses.ts`.

## Deploying

Push to a git repo and import into Vercel. Set `RAZORPAY_KEY_SECRET` in the
Vercel project's environment variables before going live — without it,
`/payment-success` will correctly refuse to verify anyone's payment (fails
closed, not open).
