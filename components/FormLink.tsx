"use client";

import { clearEnrolIntent } from "@/lib/enrolIntent";

interface FormLinkProps {
  formUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export default function FormLink({
  formUrl,
  className,
  children = "📝 Fill Registration Form",
}: FormLinkProps) {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => clearEnrolIntent()}
    >
      {children}
    </a>
  );
}
