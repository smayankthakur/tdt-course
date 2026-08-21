# The Divine Tarot — Booking Site (Next.js)

A short, fast, single-page booking site for a personal Call Reading.

## How booking works now (simplified)

This version does **not** use Razorpay's Checkout SDK/API — that path was
hitting a persistent `SERVER_ERROR` on Razorpay's own UPI QR generation
endpoint (server-side, on their infrastructure, not fixable from this app).

Instead:

1. Visitor clicks **"Pay ₹8,500 on Razorpay"** → opens your real hosted
   Razorpay Payment Page (`rzp.io/rzp/8A6T0cz`) in a new tab. Whatever
   payment methods Razorpay enables on that hosted page (UPI, Cards,
   Netbanking, etc.) are available there — this app has no control over it.
2. Visitor pays, comes back, and clicks **"I've Completed My Payment."**
   This is a self-reported confirmation — there is no webhook or backend
   verifying it actually happened, because this app no longer creates
   orders or talks to the Razorpay API at all.
3. On confirming, the **Google Form** link is shown directly in-page so
   they can fill in their appointment details.

**Trade-off to be aware of:** because there's no order/verification step,
there's also no automatic "payment received" email — if you want that back,
you'd need a server-side Razorpay webhook (Razorpay calls your server when
a payment on that hosted page succeeds) rather than the old Checkout SDK
approach, since the hosted Payment Page doesn't return control to this app
the way the SDK modal did.

## What's configurable

Both links live in `.env.local` (copy from `.env.local.example`):

```
NEXT_PUBLIC_RAZORPAY_PAY_URL=https://rzp.io/rzp/8A6T0cz
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/.../viewform
```

Change either without touching code — just update `.env.local` (locally)
or the environment variables in Vercel (deployed), then redeploy.

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Deploy

Works out of the box on Vercel — no secrets required anymore (no Razorpay
key/secret, no SMTP credentials). Just set the two `NEXT_PUBLIC_*` vars
above in Project Settings → Environment Variables.

## Files of interest

- `app/page.tsx` — the entire single page (hero, pricing, pay/confirm flow,
  notes, footer)
- `app/globals.css` — theme/styling
- No `app/api/*` routes and no `lib/*` server helpers anymore — this app is
  fully static/client-side now.
