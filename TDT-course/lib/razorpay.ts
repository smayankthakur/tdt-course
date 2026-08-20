import "server-only";
import crypto from "crypto";

// Verifies the signed redirect Razorpay sends back after a Payment Link
// checkout, per Razorpay's Payment Links documentation. This is what makes
// "form only opens after a real successful payment" actually true, instead
// of a client-side guess.
//
// Setup required (see README): each Razorpay Payment Link must have its
// "Redirect URL" (in the Razorpay dashboard, under that link's settings)
// pointed at:
//   https://<your-domain>/payment-success?course=<course-slug>
// Razorpay appends its own query params to that URL after payment:
//   razorpay_payment_id
//   razorpay_payment_link_id
//   razorpay_payment_link_reference_id   (may be empty if not set on the link)
//   razorpay_payment_link_status         ("paid" on success)
//   razorpay_signature
//
// RAZORPAY_KEY_SECRET must be set as a server-side environment variable
// (Vercel → Project → Settings → Environment Variables). It is never sent
// to the client — this file is marked "server-only" to enforce that at
// build time.

export interface RazorpayRedirectParams {
  razorpay_payment_id?: string;
  razorpay_payment_link_id?: string;
  razorpay_payment_link_reference_id?: string;
  razorpay_payment_link_status?: string;
  razorpay_signature?: string;
}

export interface VerifyResult {
  verified: boolean;
  reason?: string;
}

export function verifyRazorpayPaymentLinkRedirect(
  params: RazorpayRedirectParams
): VerifyResult {
  const {
    razorpay_payment_id,
    razorpay_payment_link_id,
    razorpay_payment_link_reference_id,
    razorpay_payment_link_status,
    razorpay_signature,
  } = params;

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return { verified: false, reason: "RAZORPAY_KEY_SECRET is not configured on the server." };
  }
  if (
    !razorpay_payment_id ||
    !razorpay_payment_link_id ||
    !razorpay_payment_link_status ||
    !razorpay_signature
  ) {
    return { verified: false, reason: "Missing Razorpay redirect parameters." };
  }
  if (razorpay_payment_link_status !== "paid") {
    return { verified: false, reason: `Payment status was "${razorpay_payment_link_status}", not "paid".` };
  }

  const payload = [
    razorpay_payment_link_id,
    razorpay_payment_link_reference_id ?? "",
    razorpay_payment_link_status,
    razorpay_payment_id,
  ].join("|");

  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");

  const expectedBuf = Buffer.from(expected, "hex");
  const gotBuf = Buffer.from(razorpay_signature, "hex");
  const isValid =
    expectedBuf.length === gotBuf.length && crypto.timingSafeEqual(expectedBuf, gotBuf);

  if (!isValid) {
    return { verified: false, reason: "Signature did not match — payment could not be verified." };
  }

  return { verified: true };
}
