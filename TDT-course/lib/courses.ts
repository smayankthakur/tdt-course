export type Course = {
  slug: string;
  glyph: "moon" | "workshop" | "tarot" | "tarotPro" | "runes" | "dice" | "candle";
  image?: string;
  tag: string;
  price: string;
  title: string;
  summary: string;
  formatNote: string;
  schedule: string[];
  learn: string[];
  need: string[];
  payLink: string;
  /** ISO date (YYYY-MM-DD) the course/batch begins. Used to compute the booking cutoff. */
  startDate: string;
  /** Manual override — forces "Booking Closed!" regardless of date. Used to close a batch early. */
  bookingClosed?: boolean;
};

export const courses: Course[] = [
  {
    slug: "heal-within",
    glyph: "moon",
    image: "/courses/heal-within.png",
    tag: "Offline · Membership",
    price: "₹15,000",
    title: "Heal WITHIN",
    summary:
      "A year-long, in-person healing circle — energy work, meditation and inner-child practice, held weekly so old patterns can loosen and you can meet yourself again.",
    formatNote: "In-person, once a week, for a full year. Venue confirmed closer to the start date.",
    schedule: ["Begins 15 Nov", "Sundays, 4:00–7:00 PM", "1-year membership", "Venue: to be confirmed"],
    startDate: "2026-11-15",
    bookingClosed: true,
    learn: [
      "Energy healing & chakra balancing",
      "Meditation and breathwork for everyday grounding",
      "Inner-child and shadow-work practice",
      "Self-healing rituals you can keep using",
      "Building a sustainable healing routine within a group",
    ],
    need: [
      "An open mind and willingness to reflect",
      "A journal for weekly notes",
      "Comfortable clothing for floor / seated work",
      "Steady weekly attendance",
    ],
    payLink: "https://rzp.io/rzp/JdMP80qp",
  },
  {
    slug: "tarot-workshop",
    glyph: "workshop",
    image: "/courses/tarot-workshop.png",
    tag: "Workshop",
    price: "₹5,000",
    title: "Tarot Workshop",
    summary:
      "A single afternoon to meet the deck properly — how the cards are structured, how to shuffle with intention, and how to pull your first honest reading.",
    formatNote: "A one-time, single-day session — no recordings, no ongoing access.",
    schedule: ["11 Oct (Sun)", "12:30–2:30 PM", "1 day · 2 hours"],
    startDate: "2026-10-11",
    learn: [
      "Deck structure: Major & Minor Arcana",
      "Shuffling, cutting and drawing with intention",
      "Reading your first 3-card spread",
      "Common beginner mistakes to avoid",
      "Where to go next in your practice",
    ],
    need: ["No prior experience needed", "A tarot deck (guidance shared beforehand)", "Notebook & pen"],
    payLink: "https://rzp.io/rzp/UsKBd1F",
  },
  {
    slug: "tarot-beginning-to-advance",
    glyph: "tarot",
    image: "/courses/tarot-beginning-to-advance.png",
    tag: "Live Batch",
    price: "₹1,00,000",
    title: "Tarot: Beginner's to Advance",
    summary:
      "A four-month live journey from your first card pull to reading confidently for other people — full arcana, live practice, exams and a year of recordings to fall back on.",
    formatNote: "Live batch, 4 months. Includes exams, practice sessions, live Q&A and 1-year video access.",
    schedule: [
      "23 Oct – 7 Feb",
      "Fri & Sat 8–10 PM, Sun 12–2 PM",
      "4 months",
      "Exams, practice, Q&A, 1-year video access",
    ],
    startDate: "2026-10-23",
    learn: [
      "Full Major & Minor Arcana meanings",
      "Card combinations, spreads and layouts",
      "Reading reversed cards",
      "Reading for yourself vs. reading for others — ethics",
      "Practice sessions, mock readings & live Q&A",
      "Exam-based assessment",
    ],
    need: ["A tarot deck", "Notebook", "Reliable internet on Fri/Sat/Sun", "Willingness to practice between classes"],
    payLink: "https://rzp.io/rzp/fWD6L2a",
  },
  {
    slug: "tarot-pro",
    glyph: "tarotPro",
    image: "/courses/tarot-pro.png",
    tag: "Live Batch",
    price: "₹2,00,000",
    title: "Tarot Pro",
    summary:
      "The advanced continuation for graduates of Beginner's to Advance — sharpening intuition, refining complex spreads and building the confidence to read professionally.",
    formatNote: "Live batch, 2 months (6 months total when paired with the Beginner's batch).",
    schedule: [
      "12 Feb – 11 Apr",
      "Fri & Sat 8–10 PM, Sun 12–2 PM",
      "2 months (6 months total with Beginner's batch)",
      "Exams, practice, Q&A, 1-year video access",
    ],
    startDate: "2027-02-12",
    learn: [
      "Advanced spreads for career, relationships and life-path",
      "Blending tarot with deeper intuitive technique",
      "Client-consultation skills",
      "Holding sensitive questions with care",
      "Confidence to read for others professionally",
    ],
    need: ["Completion of Beginner's to Advance (or equivalent)", "A deck you're comfortable with", "Consistent attendance"],
    payLink: "https://rzp.io/rzp/uNgw2T4",
  },
  {
    slug: "runes-beginning-to-advance",
    glyph: "runes",
    image: "/courses/runes-beginning-to-advance.png",
    tag: "Live Batch",
    price: "₹1,00,000",
    title: "Runes: Beginner's to Advance",
    summary:
      "The old Nordic practice of rune-casting, taught from your first single-stone draw through to layered, advanced spreads, across a three-month live batch.",
    formatNote: "Live batch, 3 months. Includes exams, practice sessions, live Q&A and 1-year video access.",
    schedule: [
      "24 Apr – 11 Jul",
      "Sat 8–10 PM, Sun 12–2 PM",
      "3 months",
      "Exams, practice, Q&A, 1-year video access",
    ],
    startDate: "2027-04-24",
    learn: [
      "Elder Futhark rune meanings & history",
      "Casting and interpreting single-rune draws",
      "Multi-rune spreads for love, career and life",
      "Reversed / merkstave interpretation",
      "Practice sessions & live Q&A",
    ],
    need: ["A rune set (guidance shared beforehand)", "Notebook", "Reliable internet on Sat/Sun"],
    payLink: "https://rzp.io/rzp/wfh8B9vv",
  },
  {
    slug: "dice-beginning-to-advance",
    glyph: "dice",
    image: "/courses/dice-beginning-to-advance.png",
    tag: "Live Batch",
    price: "₹1,00,000",
    title: "Dice: Beginner's to Advance",
    summary:
      "A hands-on three-month batch in dice divination — starting with basic throws and number symbolism, building up to advanced, layered interpretation.",
    formatNote: "Live batch, 3 months. Includes exams, practice sessions, live Q&A and 1-year video access.",
    schedule: [
      "24 Jul – 10 Oct",
      "Sat 8–10 PM, Sun 12–2 PM",
      "3 months",
      "Exams, practice, Q&A, 1-year video access",
    ],
    startDate: "2027-07-24",
    learn: [
      "Dice divination fundamentals & number symbolism",
      "Single, double and triple throw setups",
      "Blending dice with intuitive guidance",
      "Practical, real-life reading exercises",
      "Exams & live practice",
    ],
    need: ["A dice set (details shared beforehand)", "Notebook", "Reliable internet on Sat/Sun"],
    payLink: "https://rzp.io/rzp/s7XosLAt",
  },
  {
    slug: "candle-wax-full-course",
    glyph: "candle",
    image: "/courses/candle-wax-full-course.png",
    tag: "Live Batch",
    price: "₹1,00,000",
    title: "Candle Wax Reading Course",
    summary:
      "Roughly two months live, learning ceromancy — the art of reading the shapes candle wax leaves behind in water, for intuitive, symbolic guidance.",
    formatNote: "Live batch, ~2 months. Includes exams, practice sessions, live Q&A and 1-year video access.",
    schedule: [
      "6 Nov – 26 Dec",
      "Sat 8–10 PM, Sun 12–2 PM",
      "~2 months",
      "Exams, practice, Q&A, 1-year video access",
    ],
    startDate: "2027-11-06",
    learn: [
      "Ceromancy fundamentals",
      "Reading shapes, patterns & symbols in wax",
      "Setting up a safe wax-reading session",
      "Interpreting readings for different kinds of questions",
      "Practice, exams & live Q&A",
    ],
    need: ["Candles, a heatproof bowl of water, a safe workspace (full list shared beforehand)", "Notebook", "Reliable internet on Sat/Sun"],
    payLink: "https://rzp.io/rzp/nmDQu8QA",
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** How many days before the start date bookings must close. */
export const BOOKING_CUTOFF_DAYS = 2;

/** The course's start date as a Date object (local midnight). */
export function getStartDate(course: Course): Date {
  return new Date(`${course.startDate}T00:00:00`);
}

/** Bookings close at 11:59 PM on the day that is N days before the course starts. */
export function getBookingEndDate(course: Course): Date {
  const cutoff = new Date(getStartDate(course).getTime() - BOOKING_CUTOFF_DAYS * MS_PER_DAY);
  cutoff.setHours(23, 59, 59, 999); // stays open through the whole cutoff day, closes at 11:59 PM
  return cutoff;
}

/** True if a manual override is set, or the booking cutoff date has passed. */
export function isBookingClosed(course: Course, now: Date = new Date()): boolean {
  if (course.bookingClosed) return true;
  return now.getTime() > getBookingEndDate(course).getTime();
}

/** Human-readable booking cutoff, e.g. "9 Oct 2026, 11:59 PM". */
export function formatBookingEndDate(course: Course): string {
  const datePart = getBookingEndDate(course).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${datePart}, 11:59 PM`;
}
