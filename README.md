# Mystic Arts School — Course Platform

A Next.js 14+ (App Router, TypeScript) rebuild of the course enrollment site:
tarot, runes, dice, candle-wax reading courses, and an offline healing
membership. Same dark purple/gold "cosmic" identity as the original static
site, now fully data-driven.

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Adding or editing a course

Everything about a course — copy, schedule, price, learn/need lists, payment
link, form link, accent color, image — lives in one place:

```
lib/courses.ts
```

Add a new object to the `courses` array (or edit an existing one) and both
the homepage grid and the `/courses/[slug]` detail page update automatically.
No other file needs to change.

## Payment → registration flow

1. Clicking "Pay & Enrol" opens the course's Razorpay Payment Link in a new
   tab and records the click in `sessionStorage` (see `lib/enrolIntent.ts`).
2. **Set this up for the real, reliable flow:** in the Razorpay dashboard,
   open each Payment Link's settings and set its **Redirect URL** to that
   course's `formUrl` (from `lib/courses.ts`). Razorpay only fires that
   redirect after a *confirmed successful payment*, so the customer lands
   straight on the correct Google Form.
3. As a fallback for anyone who closes the payment tab instead of being
   redirected, `components/ReturnBanner.tsx` shows a nudge when they return
   to the site tab, prompting them to open the registration form manually.
   This is a best-effort UX nudge, **not** payment verification.
4. Phase 2 (not built here): swap Payment Links for the Razorpay Orders API
   + Checkout.js, verify the signature in a server route/webhook, and gate
   the registration form on a real success signal instead of a nudge.

## Images

`public/images/*.svg` are placeholder illustrations (accent-colored,
symbolic motifs) generated for each course. Swap them for real photography —
same filenames, or update the `image` field per course in `lib/courses.ts`.

## Deploying

Push to a git repo and import into Vercel — no environment variables are
required for this v1 (all client-side, no backend/API routes).
