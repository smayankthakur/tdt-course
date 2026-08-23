export interface Course {
  key: string;
  slug: string;
  title: string;
  badge: string;
  accent: string;
  price: string;
  image: string;
  blurb: string;
  schedule: string[];
  learn: string[];
  need: string[];
  info: string;
  paymentUrl: string;
  formUrl: string;
}

export const courses: Course[] = [
  {
    key: "healwithin",
    slug: "heal-within",
    title: "Heal WITHIN (Offline)",
    badge: "Offline · Membership",
    accent: "#2c9678",
    price: "₹15,000",
    image: "/images/01-heal-within.svg",
    blurb:
      "Year-long offline healing membership — energy work, meditation, inner-child healing. Weekly in-person sessions to release old patterns and reconnect with yourself.",
    schedule: ["Starts: 11 Oct", "Sun 4:00–7:00 PM", "1 year membership", "Location: TBC"],
    learn: [
      "Energy healing & chakra balancing",
      "Meditation & breathwork for daily grounding",
      "Inner-child & shadow-work practices",
      "Self-healing rituals for long-term use",
      "Building a sustainable healing routine in a group setting",
    ],
    need: [
      "Open mind, willingness to reflect",
      "Journal for weekly notes",
      "Comfortable clothing for seated/floor work",
      "Consistent weekly attendance",
    ],
    info: "<b>Offline, in-person</b> — weekly Sundays for <b>1 year</b>. Venue TBC.",
    paymentUrl: "https://rzp.io/rzp/JdMP80qp",
    formUrl: "https://forms.gle/ZX8m5pNGpKHrnUwY7",
  },
  {
    key: "tarotworkshop",
    slug: "tarot-workshop",
    title: "Tarot Workshop",
    badge: "Workshop",
    accent: "#8b5cf6",
    price: "₹5,000",
    image: "/images/02-tarot-workshop.svg",
    blurb:
      "One-day tarot intro for beginners — learn the language of the cards and pull your first real reading in an afternoon.",
    schedule: ["11 Oct (Sun)", "12:30–2:30 PM", "1 day, 2 hours"],
    learn: [
      "Deck structure: Major & Minor Arcana",
      "Shuffling, cutting, drawing with intention",
      "Reading a first 3-card spread",
      "Common beginner mistakes",
      "Where to go next",
    ],
    need: [
      "No experience required",
      "A tarot deck (guidance shared beforehand)",
      "Notebook & pen",
    ],
    info: "Single-day, 2-hour <b>workshop</b> — one-time session, no ongoing access.",
    paymentUrl: "https://rzp.io/rzp/UsKBd1F",
    formUrl: "https://forms.gle/avdYDMycGPsmHoiq6",
  },
  {
    key: "tarotBatchBeginAdv",
    slug: "tarot-beginning-to-advance",
    title: "Tarot: Beginning to Advance",
    badge: "Live Batch",
    accent: "#e6c063",
    price: "₹1,00,000",
    image: "/images/03-tarot-beginning-to-advance.svg",
    blurb:
      "4-month live batch from first card pull to reading confidently for others — exams, live practice, a full year of recordings.",
    schedule: [
      "23 Oct – 7 Feb",
      "Fri & Sat 8–10 PM, Sun 12–2 PM",
      "4 months",
      "Exams, practice, Q&A, 1-yr video access",
    ],
    learn: [
      "Full Major & Minor Arcana meanings",
      "Card combinations, spreads, layouts",
      "Reversed cards",
      "Reading for self vs. others — ethics",
      "Practice, mock readings, live Q&A",
      "Exam-based assessment",
    ],
    need: [
      "A tarot deck",
      "Notebook",
      "Reliable internet (Fri/Sat/Sun)",
      "Practice between classes",
    ],
    info: "<b>Live batch</b> — 4 months, Fri & Sat 8–10 PM, Sun 12–2 PM. Exams, practice, Q&A, <b>1-yr</b> video access.",
    paymentUrl: "https://rzp.io/rzp/fWD6L2a",
    formUrl: "https://forms.gle/XScdePbyh4YP7BiX6",
  },
  {
    key: "tarotPro",
    slug: "tarot-pro",
    title: "Tarot Pro",
    badge: "Live Batch",
    accent: "#e6c063",
    price: "₹2,00,000",
    image: "/images/04-tarot-pro.svg",
    blurb:
      "Advanced continuation for Beginner-to-Advance graduates — sharpen intuition, refine complex spreads, prepare to read professionally.",
    schedule: [
      "12 Feb – 11 Apr",
      "Fri & Sat 8–10 PM, Sun 12–2 PM",
      "2 months (6 months total with Beginner batch)",
      "Exams, practice, Q&A, 1-yr video access",
    ],
    learn: [
      "Advanced spreads: career, relationships, life-path",
      "Combining tarot with deeper intuitive technique",
      "Client-consultation skills",
      "Handling sensitive questions with care",
      "Confidence to read professionally",
    ],
    need: [
      "Completion of Beginner to Advance (or equivalent)",
      "A deck you're comfortable with",
      "Consistent attendance",
    ],
    info: "<b>Live batch</b> — 2 months (6 months total with Beginner batch). Fee for this batch: <b>₹2,00,000</b>.",
    paymentUrl: "https://rzp.io/rzp/uNgw2T4",
    formUrl: "https://forms.gle/eWUgVgoS7rHm1b2g7",
  },
  {
    key: "runesBatch",
    slug: "runes-beginning-to-advance",
    title: "Runes: Beginning to Advance",
    badge: "Live Batch",
    accent: "#ff5a3c",
    price: "₹1,00,000",
    image: "/images/05-runes-beginning-to-advance.svg",
    blurb:
      "Ancient Nordic rune reading — from casting your first stones to advanced spreads, over a 3-month live batch.",
    schedule: [
      "24 Apr – 11 Jul",
      "Sat 8–10 PM, Sun 12–2 PM",
      "3 months",
      "Exams, practice, Q&A, 1-yr video access",
    ],
    learn: [
      "Elder Futhark rune meanings & history",
      "Casting & interpreting single-rune draws",
      "Multi-rune spreads (love, career, life)",
      "Reversed/merkstave interpretation",
      "Practice & live Q&A",
    ],
    need: ["A rune set (guidance shared beforehand)", "Notebook", "Reliable internet (Sat/Sun)"],
    info: "<b>Live batch</b> — 3 months, Sat 8–10 PM, Sun 12–2 PM. Exams, practice, Q&A, <b>1-yr</b> video access.",
    paymentUrl: "https://rzp.io/rzp/wfh8B9vv",
    formUrl: "https://forms.gle/V88qxjTv1g5w6iiKA",
  },
  {
    key: "diceBatch",
    slug: "dice-beginning-to-advance",
    title: "Dice: Beginning to Advance",
    badge: "Live Batch",
    accent: "#e24b6a",
    price: "₹1,00,000",
    image: "/images/06-dice-beginning-to-advance.svg",
    blurb:
      "Hands-on 3-month live batch in dice divination — from basic throws to advanced interpretation.",
    schedule: [
      "24 Jul – 10 Oct",
      "Sat 8–10 PM, Sun 12–2 PM",
      "3 months",
      "Exams, practice, Q&A, 1-yr video access",
    ],
    learn: [
      "Dice divination fundamentals & number symbolism",
      "Single/double/triple throw setups",
      "Combining dice with intuitive guidance",
      "Practical real-life exercises",
      "Exams & live practice",
    ],
    need: ["A dice set (details shared beforehand)", "Notebook", "Reliable internet (Sat/Sun)"],
    info: "<b>Live batch</b> — 3 months, Sat 8–10 PM, Sun 12–2 PM. Exams, practice, Q&A, <b>1-yr</b> video access.",
    paymentUrl: "https://rzp.io/rzp/s7XosLAt",
    formUrl: "https://forms.gle/kKw2n49ezfsArUqJ9",
  },
  {
    key: "candleBatch",
    slug: "candle-wax-full-course",
    title: "Candle Wax Full Course",
    badge: "Live Batch",
    accent: "#ff9d4d",
    price: "₹1,00,000",
    image: "/images/07-candle-wax-full-course.svg",
    blurb:
      "~2-month live batch in ceromancy — interpreting the shapes candle wax leaves behind for intuitive, symbolic guidance.",
    schedule: [
      "6 Nov – 26 Dec",
      "Sat 8–10 PM, Sun 12–2 PM",
      "~2 months",
      "Exams, practice, Q&A, 1-yr video access",
    ],
    learn: [
      "Ceromancy basics",
      "Reading shapes/patterns/symbols in wax",
      "Setting up a safe wax-reading session",
      "Interpreting readings for different questions",
      "Practice, exams, live Q&A",
    ],
    need: [
      "Candles, heatproof bowl of water, safe workspace (list shared beforehand)",
      "Notebook",
      "Reliable internet (Sat/Sun)",
    ],
    info: "<b>Live batch</b> — ~2 months, Sat 8–10 PM, Sun 12–2 PM. Exams, practice, Q&A, <b>1-yr</b> video access.",
    paymentUrl: "https://rzp.io/rzp/nmDQu8QA",
    formUrl: "https://forms.gle/1sKFhUei73Muke7D9",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCourseByKey(key: string): Course | undefined {
  return courses.find((c) => c.key === key);
}
