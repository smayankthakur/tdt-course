// Best-effort tracking of "which course did the user just try to pay for".
//
// IMPORTANT: this cannot confirm a Razorpay payment actually succeeded —
// that confirmation only exists on Razorpay's servers. This is a nudge,
// not verification. The reliable fix is setting each Razorpay Payment
// Link's "Redirect URL" (in the Razorpay dashboard) to that course's
// formUrl, which only fires after a confirmed successful payment.

const STORAGE_KEY = "pendingEnrolCourse";
export const MIN_AWAY_MS = 4000; // ignore accidental quick tab-flicks
export const EXPIRE_MS = 30 * 60 * 1000; // forget intent after 30 minutes

interface PendingIntent {
  key: string;
  t: number;
}

export function markEnrolIntent(courseKey: string) {
  if (typeof window === "undefined") return;
  try {
    const payload: PendingIntent = { key: courseKey, t: Date.now() };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // storage unavailable — ignore, this is best-effort only
  }
}

export function getEnrolIntent(): PendingIntent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as PendingIntent;
    if (!data?.key || Date.now() - data.t > EXPIRE_MS) return null;
    return data;
  } catch {
    return null;
  }
}

export function clearEnrolIntent() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
