import "server-only";
import crypto from "crypto";
import Razorpay from "razorpay";

// Server-only. Never import this from a client component — it uses
// RAZORPAY_KEY_SECRET, which must never reach the browser. The
// "server-only" import above makes Next.js fail the build if that ever
// happens by mistake.

function getRazorpayClient(): Razorpay {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error(
      "RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set as environment variables."
    );
  }
  return new Razorpay({ key_id, key_secret });
}

export interface CreateOrderResult {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

/**
 * Creates a Razorpay Order for a given course. Called from
 * app/api/create-order/route.ts — the amount and currency always come
 * from our own trusted course data (lib/courses.ts), never from the
 * client, so a visitor cannot alter what they're charged.
 */
export async function createOrderForCourse(
  courseKey: string,
  amountInPaise: number
): Promise<CreateOrderResult> {
  const client = getRazorpayClient();
  const order = await client.orders.create({
    amount: amountInPaise,
    currency: "INR",
    receipt: `${courseKey}-${Date.now()}`,
    notes: { courseKey },
  });
  return {
    orderId: order.id,
    amount: Number(order.amount),
    currency: order.currency,
    keyId: process.env.RAZORPAY_KEY_ID as string,
  };
}

export interface VerifyOrderPaymentParams {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyResult {
  verified: boolean;
  reason?: string;
  courseKey?: string;
}

/**
 * Verifies the signature Razorpay Checkout.js hands back to the client on
 * success (see components/CheckoutButton.tsx), per Razorpay's Orders API
 * signature scheme: HMAC-SHA256("<order_id>|<payment_id>", key_secret).
 * Also re-fetches the order from Razorpay to confirm which course it was
 * actually created for and that it's marked paid — this stops someone
 * from replaying a valid signature for course A against course B.
 */
export async function verifyOrderPayment(
  params: VerifyOrderPaymentParams,
  expectedCourseKey: string
): Promise<VerifyResult> {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = params;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!secret) {
    return { verified: false, reason: "RAZORPAY_KEY_SECRET is not configured on the server." };
  }
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return { verified: false, reason: "Missing payment parameters." };
  }

  const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");

  const expectedBuf = Buffer.from(expected, "hex");
  const gotBuf = Buffer.from(razorpay_signature, "hex");
  const signatureOk =
    expectedBuf.length === gotBuf.length && crypto.timingSafeEqual(expectedBuf, gotBuf);

  if (!signatureOk) {
    return { verified: false, reason: "Signature did not match — payment could not be verified." };
  }

  // Cross-check with Razorpay directly: confirms the order is actually
  // paid and was created for the course the client claims, not just that
  // the signature math works out.
  try {
    const client = getRazorpayClient();
    const order = await client.orders.fetch(razorpay_order_id);
    const orderCourseKey = (order.notes as Record<string, string> | undefined)?.courseKey;

    if (orderCourseKey !== expectedCourseKey) {
      return { verified: false, reason: "Order does not match the requested course." };
    }
    if (order.status !== "paid") {
      return { verified: false, reason: `Order status was "${order.status}", not "paid".` };
    }
  } catch {
    return { verified: false, reason: "Could not confirm order status with Razorpay." };
  }

  return { verified: true, courseKey: expectedCourseKey };
}
