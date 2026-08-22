# Mystic Arts School — Course Platform

A Next.js 14+ (App Router, TypeScript) course enrollment site: tarot, runes,
dice, candle-wax reading courses, and an offline healing membership. Dark
purple/gold "cosmic" identity, fully data-driven.

## Local setup

```bash
npm install
cp .env.local.example .env.local   # fill in both Razorpay values
npm run dev
```

Visit http://localhost:3000.

## Adding or editing a course

Everything about a course — copy, schedule, price, amount, learn/need
lists, form link, accent color, image, slug — lives in one place:

```
lib/courses.ts
```

Add or edit an object in the `courses` array and the homepage grid, the
`/courses/[slug]` page, and checkout all update automatically.

## Payment → registration flow

There is **no visible payment link or Google Form link anywhere on the
site.** Both only exist in server-side data (`lib/courses.ts`) and are
only ever used behind the scenes. The registration form is handed to the
browser exactly once: after a real, cryptographically verified payment.

**How it works:**

1. Visitor clicks "Pay & Enrol" → the browser calls `POST /api/create-order`
   with just the course key. The server (`lib/razorpay.ts`, using
   `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET`) creates a Razorpay Order for
   that course's exact amount — the client never sends or controls the
   price.
2. Razorpay's Checkout.js opens an embedded payment modal (no redirect to
   an external page, no new tab).
3. On completion, Checkout.js hands the browser a payment ID + signature.
   The browser sends those to `POST /api/verify-payment`, which:
   - recomputes the HMAC signature server-side and rejects any mismatch,
   - re-fetches the order from Razorpay to confirm it's genuinely marked
     `paid` and belongs to the course being claimed (stops a signature for
     one course being replayed against another),
   - only then returns that course's Google Form URL in the response.
4. The browser opens the form automatically in a new tab. If the popup is
   blocked, a "Didn't open? Click here" button appears using the same
   verified URL — never a hardcoded one.
5. If the visitor closes the checkout modal without paying, or verification
   fails for any reason, they land back on "Pay & Enrol" with no form
   access — the only way forward is to actually pay.

## Required Vercel environment variables

Set these in **Vercel → your project → Settings → Environment Variables**
(add to both Production and Preview), from **Razorpay Dashboard → Settings
→ API Keys**:

| Variable | Value | Exposed to browser? |
|---|---|---|
| `RAZORPAY_KEY_ID` | Your Razorpay Key ID (e.g. `rzp_live_...`) | Yes — needed by Checkout.js, not secret |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Key Secret | **No** — server-only, used to create/verify orders |

Without these, `/api/create-order` will fail closed with a clear error —
checkout simply won't start, rather than silently accepting unpaid
"successful" registrations.

## Images

`public/images/*.svg` are placeholder illustrations (accent-colored,
symbolic motifs) generated for each course. Swap them for real photography —
same filenames, or update the `image` field per course in `lib/courses.ts`.

## Deploying

Push to a git repo, import into Vercel, set the two environment variables
above, then deploy. No Razorpay Payment Links or dashboard redirect
configuration are needed — orders are created and verified entirely
through this app's own API routes.
