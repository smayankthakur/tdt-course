// import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";
// import { sendBookingFormEmail } from "@/lib/mailer";

// export async function POST(req: NextRequest) {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       name,
//       email,
//     } = await req.json();

//     if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !email) {
//       return NextResponse.json({ error: "Missing verification data" }, { status: 400 });
//     }

//     const secret = process.env.RAZORPAY_KEY_SECRET;
//     if (!secret) {
//       return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
//     }

//     // Signature check — this is what actually proves the payment is genuine,
//     // never trust the client-side "success" callback alone.
//     const expectedSignature = crypto
//       .createHmac("sha256", secret)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest("hex");

//     if (expectedSignature !== razorpay_signature) {
//       return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
//     }

//     // Signature valid → payment is genuine. Send the booking form link.
//     await sendBookingFormEmail(email, name);

//     return NextResponse.json({ verified: true });
//   } catch (err: any) {
//     console.error("Verification failed:", err);
//     return NextResponse.json({ error: "Verification failed" }, { status: 500 });
//   }
// }
