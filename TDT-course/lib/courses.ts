export type Course = {
  slug: string;
  glyph: "moon" | "workshop" | "tarot" | "tarotPro" | "runes" | "dice" | "candle";
  tag: string;
  price: string;
  title: string;
  summary: string;
  formatNote: string;
  schedule: string[];
  learn: string[];
  need: string[];
  payLink: string;
};

export const courses: Course[] = [
  {
    slug: "heal-within",
    glyph: "moon",
    tag: "Offline · Membership",
    price: "₹15,000",
    title: "Heal WITHIN",
    summary:
      "A year-long, in-person healing circle — energy work, meditation and inner-child practice, held weekly so old patterns can loosen and you can meet yourself again.",
    formatNote: "In-person, once a week, for a full year. Venue confirmed closer to the start date.",
    schedule: ["Begins 11 Oct", "Sundays, 4:00–7:00 PM", "1-year membership", "Venue: to be confirmed"],
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
    tag: "Workshop",
    price: "₹5,000",
    title: "Tarot Workshop",
    summary:
      "A single afternoon to meet the deck properly — how the cards are structured, how to shuffle with intention, and how to pull your first honest reading.",
    formatNote: "A one-time, single-day session — no recordings, no ongoing access.",
    schedule: ["11 Oct (Sun)", "12:30–2:30 PM", "1 day · 2 hours"],
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
