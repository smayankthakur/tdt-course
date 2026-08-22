import { NextRequest, NextResponse } from "next/server";
import { getCourseByKey } from "@/lib/courses";
import { verifyOrderPayment } from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  let body: {
    courseKey?: string;
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ verified: false, reason: "Invalid request body." }, { status: 400 });
  }

  const course = body.courseKey ? getCourseByKey(body.courseKey) : undefined;
  if (!course) {
    return NextResponse.json({ verified: false, reason: "Unknown course." }, { status: 404 });
  }
  if (!body.razorpay_order_id || !body.razorpay_payment_id || !body.razorpay_signature) {
    return NextResponse.json({ verified: false, reason: "Missing payment parameters." }, { status: 400 });
  }

  const result = await verifyOrderPayment(
    {
      razorpay_order_id: body.razorpay_order_id,
      razorpay_payment_id: body.razorpay_payment_id,
      razorpay_signature: body.razorpay_signature,
    },
    course.key
  );

  if (!result.verified) {
    return NextResponse.json({ verified: false, reason: result.reason }, { status: 402 });
  }

  // Only reached once the payment is genuinely confirmed with Razorpay —
  // this is the one and only place formUrl is ever sent to the client.
  return NextResponse.json({ verified: true, formUrl: course.formUrl });
}
