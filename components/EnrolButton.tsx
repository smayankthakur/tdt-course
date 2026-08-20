"use client";

import { markEnrolIntent } from "@/lib/enrolIntent";

interface EnrolButtonProps {
  courseKey: string;
  paymentUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EnrolButton({
  courseKey,
  paymentUrl,
  className,
  children = "Pay & Enrol ✨",
}: EnrolButtonProps) {
  return (
    <a
      href={paymentUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => markEnrolIntent(courseKey)}
    >
      {children}
    </a>
  );
}
