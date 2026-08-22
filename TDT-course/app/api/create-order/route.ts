import { NextRequest, NextResponse } from "next/server";
import { getCourseByKey } from "@/lib/courses";
import { createOrderForCourse } from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  let body: { courseKey?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const course = body.courseKey ? getCourseByKey(body.courseKey) : undefined;
  if (!course) {
    return NextResponse.json({ error: "Unknown course." }, { status: 404 });
  }

  try {
    // Amount always comes from our own trusted course data — never from
    // the client — so a visitor cannot alter what they're charged.
    const order = await createOrderForCourse(course.key, course.amountInPaise);
    return NextResponse.json(order);
  } catch (err) {
    console.error("Failed to create Razorpay order:", err);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 502 });
  }
}
