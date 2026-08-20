interface EnrolButtonProps {
  paymentUrl: string;
  className?: string;
  children?: React.ReactNode;
}

// Deliberately NOT target="_blank": Razorpay redirects the browser back to
// this site's /payment-success route after a completed payment (see that
// route + lib/razorpay.ts). That redirect only works if the payment
// happens in the same tab.
export default function EnrolButton({
  paymentUrl,
  className,
  children = "Pay & Enrol ✨",
}: EnrolButtonProps) {
  return (
    <a href={paymentUrl} className={className}>
      {children}
    </a>
  );
}
