# The Divine Tarot — Booking Site (Next.js)

A single-page Next.js 14 (App Router) booking site for a personal Call Reading,
with a real Razorpay Checkout integration and an automated email (containing
the Google Form link) sent after the payment signature is verified server-side.

## What's real vs. what needs your input

- **Design/content**: built from the content your client sent, styled in the
  same violet/mystical visual language as thedivinetarotonline.com (theme
  color `#6d28d9`, Cinzel/Cormorant Garamond fonts, starfield, card-style
  sections). No images/logo files were copied from either live site — I
  couldn't access their binary assets, and reproducing another site's exact
  artwork isn't something I'll do regardless. The look is recreated in CSS;
  drop your own logo into `/public/logo.png` and reference it in `page.tsx`
  when you have the file.
- **Payment flow**: fully wired — order creation, Razorpay Checkout modal,
  and **server-side signature verification** (the part that actually proves
  a payment is genuine, not just a client-side "success" callback).
- **Email after payment**: wired via Nodemailer/SMTP. Fires only after the
  signature check in `/api/razorpay/verify` passes.
- **You need to supply**: Razorpay Key ID + Key Secret, and SMTP credentials
  (Gmail App Password, Zoho, SendGrid SMTP, Resend SMTP, etc.) — put these in
  `.env.local` (copy from `.env.local.example`). Nothing is hardcoded in the
  code.

## One content note

The "How to Book" copy your client sent says the form link arrives **within
24 hours** of payment. The technical instruction was to email it
**immediately** after a verified payment. I built it as immediate (that's
what automation gives you), but the on-page copy still says 24 hours — you
may want to either update that copy to "shortly after payment" or add a
deliberate delay/queue if 24 hours is actually a business requirement (e.g.
Bharti reviews bookings manually before the form goes out).

## Setup

```bash
npm install
cp .env.local.example .env.local
# fill in RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, SMTP_* in .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Deploy

Works out of the box on Vercel. Add the same environment variables in
Project Settings → Environment Variables before deploying.

## Files of interest

- `app/page.tsx` — the entire single page (all sections + payment logic)
- `app/globals.css` — theme/styling
- `app/api/razorpay/order/route.ts` — creates a Razorpay order server-side
- `app/api/razorpay/verify/route.ts` — verifies payment signature, then
  triggers the booking-form email
- `lib/razorpay.ts`, `lib/mailer.ts` — Razorpay & Nodemailer helpers

## Security notes

- Never put `RAZORPAY_KEY_SECRET` or SMTP password in `NEXT_PUBLIC_*` vars —
  only `RAZORPAY_KEY_ID` is exposed client-side, which is correct and safe.
- Payment is only considered valid after the HMAC-SHA256 signature check in
  `verify/route.ts` — the client-side "payment success" callback alone is
  never trusted.
- `.env.local` is gitignored — do not commit real keys.
