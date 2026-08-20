"use client";

import { useEffect } from "react";

// Fires once, client-side only, after this page has already verified (on
// the server) that the payment succeeded. Browsers may block this
// programmatic navigation/popup depending on settings — the visible
// "Open Registration Form" button on the page is the reliable fallback.
export default function AutoOpenForm({ formUrl }: { formUrl: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    }, 1200);
    return () => clearTimeout(timer);
  }, [formUrl]);

  return null;
}
