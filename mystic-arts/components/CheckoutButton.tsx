"use client";

import { useState } from "react";
import Script from "next/script";

type Status = "idle" | "loading" | "verifying" | "success" | "error";

interface CheckoutButtonProps {
  courseKey: string;
  courseTitle: string;
  accent: string;
  className?: string;
  wrapperClassName?: string;
}

export default function CheckoutButton({
  courseKey,
  courseTitle,
  accent,
  className,
  wrapperClassName = "flex-1",
}: CheckoutButtonProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formUrl, setFormUrl] = useState<string | null>(null);

  async function startCheckout() {
    setStatus("loading");
    setErrorMsg(null);

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseKey }),
      });
      if (!orderRes.ok) {
        const data = await orderRes.json().catch(() => ({}));
        throw new Error(data.error || "Could not start checkout.");
      }
      const order = await orderRes.json();

      if (typeof window === "undefined" || !window.Razorpay) {
        throw new Error("Payment could not load. Please refresh and try again.");
      }

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Mystic Arts School",
        description: courseTitle,
        order_id: order.orderId,
        theme: { color: accent },
        modal: {
          ondismiss: () => {
            // User closed the checkout without paying — back to idle,
            // no error message, no form access.
            setStatus((s) => (s === "loading" ? "idle" : s));
          },
        },
        handler: async (response) => {
          setStatus("verifying");
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ courseKey, ...response }),
            });
            const result = await verifyRes.json();
            if (!verifyRes.ok || !result.verified) {
              setStatus("error");
              setErrorMsg(
                result.reason ||
                  "We couldn't confirm this payment. Please contact us with your payment reference, or try again."
              );
              return;
            }
            setFormUrl(result.formUrl as string);
            setStatus("success");
            window.open(result.formUrl, "_blank", "noopener,noreferrer");
          } catch {
            setStatus("error");
            setErrorMsg("We couldn't confirm this payment. Please contact us with your payment reference.");
          }
        },
      });

      rzp.open();
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className={wrapperClassName}>
      {/* Loaded once per page; safe to include on every card/modal instance. */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {status === "success" && formUrl ? (
        <div className="space-y-2">
          <p className="text-sm font-medium text-[var(--gold)]">
            ✅ Payment confirmed — registration form opened in a new tab.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-[var(--gold)] px-4 py-2 text-center text-sm font-medium text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[#1a1408]"
          >
            Didn&apos;t open? Click here
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          <button
            type="button"
            onClick={startCheckout}
            disabled={status === "loading" || status === "verifying"}
            className={`w-full ${className ?? ""}`}
          >
            {status === "loading"
              ? "Opening payment…"
              : status === "verifying"
                ? "Confirming payment…"
                : "Pay & Enrol ✨"}
          </button>
          {status === "error" && errorMsg && (
            <p className="text-xs text-[#ff8a8a]">{errorMsg}</p>
          )}
        </div>
      )}
    </div>
  );
}
