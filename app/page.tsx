"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type Status = "idle" | "loading" | "verifying" | "success" | "error";

export default function Home() {
  const starsRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const wrap = starsRef.current;
    if (!wrap) return;
    const N = 70;
    for (let i = 0; i < N; i++) {
      const s = document.createElement("span");
      s.style.left = Math.random() * 100 + "vw";
      s.style.top = Math.random() * 100 + "vh";
      s.style.animationDelay = Math.random() * 4.5 + "s";
      wrap.appendChild(s);
    }
  }, []);

  async function handlePay() {
    setErrorMsg("");

    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please enter your name and email before proceeding.");
      return;
    }

    setStatus("loading");

    try {
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const order = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(order.error || "Could not start payment");
      }

      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "The Divine Tarot",
        description: "Call Reading (40 Mins) — Bharti Singh",
        order_id: order.orderId,
        prefill: { name, email, contact: phone },
        theme: { color: "#6d28d9" },
        handler: async function (response: any) {
          setStatus("verifying");
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                name,
                email,
              }),
            });
            const verifyData = await verifyRes.json();

            if (!verifyRes.ok || !verifyData.verified) {
              throw new Error(verifyData.error || "Payment could not be verified");
            }

            setStatus("success");
          } catch (err: any) {
            setErrorMsg(err.message || "Something went wrong while verifying your payment.");
            setStatus("error");
          }
        },
        modal: {
          ondismiss: function () {
            if (status !== "success") setStatus("idle");
          },
        },
      };

      // @ts-ignore - Razorpay is loaded globally via the checkout.js script
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function () {
        setErrorMsg("Payment failed or was cancelled. Please try again.");
        setStatus("error");
      });
      rzp.open();
    } catch (err: any) {
      setErrorMsg(err.message || "Could not start payment. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

      <div className="stars" ref={starsRef}></div>

      {/* NAV — exact structure/order per thedivinetarotonline.com header */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="https://thedivinetarotonline.com/" className="brand">
            <img src="/logo.png" alt="The Divine Tarot" className="mark" />
            <span>
              The Divine Tarot
              <small>Premium Tarot Guidance</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="https://thedivinetarotonline.com/" className="active">Home</a>
            <a href="https://thedivinetarotonline.com/about">About</a>
            <a href="https://thedivinetarotonline.com/reading">Reading</a>
            <a href="https://learn.thedivinetarotonline.com/">Course</a>
            <a href="https://thedivinetarotonline.com/kundli-milan">Kundli Milan</a>
            <a href="https://thedivinetarotonline.co.in/">Personal Reading</a>
          </div>

          <div className="nav-right">
            <div className="lang-toggle">
              <span className="active">EN</span>
              <span>हिंदी</span>
              <span>Hinglish</span>
            </div>
            <a href="https://thedivinetarotonline.com/reading" className="nav-cta">
              Ask your question here
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-portrait">
          <div className="hero-portrait-glow"></div>
          <img src="/logo.png" alt="The Divine Tarot — Bharti Singh" />
        </div>
        <div className="eyebrow">The Divine Tarot</div>
        <p className="namaste">Namaste, main hu Bharti Singh</p>
        <h1>India&rsquo;s No.1 Psychic Tarot Reader</h1>
        <p className="sub">
          Expert in Tarot, Astro, Numero, Hoodoo, Runes, Dice, Coffee Cup, Psychic
          Ability, Face Analysis, Candle Wax Reading, Kundli Analysis, Kundli Milan &amp;
          a Manifestation Coach.
        </p>
        <a href="#book" className="btn gold">Book Your Personal Reading ✨</a>
      </section>

      {/* SKILLS STRIP */}
      <div className="skills">
        <div className="container skills-track">
          {[
            "Tarot", "Astrology", "Numerology", "Hoodoo", "Runes", "Dice Reading",
            "Coffee Cup Reading", "Psychic Ability", "Face Analysis", "Candle Wax Reading",
            "Kundli Analysis", "Kundli Milan", "Manifestation Coaching",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="phase-divider">
        <span className="ln"></span>
        <span className="dots"><i></i><i></i><i></i><i></i><i></i></span>
        <span className="ln"></span>
      </div>

      {/* HOW TO BOOK */}
      <section id="how-to-book">
        <div className="container">
          <div className="kicker">How to Book</div>
          <h2>Personal Reading Kaise Book Karein?</h2>
          <p className="section-sub">Simple 4-step process — start to finish.</p>

          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <div>
                <h3>Pehle Pay Karein</h3>
                <p>
                  Payment complete karne ke turant baad aapko order confirmation ki
                  receipt aapke mail id par receive hogi.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">02</div>
              <div>
                <h3>Form Link Receive Karein</h3>
                <p>
                  Uske baad ek Appointment Form ki link aapko email par bhej di jayegi.
                  Isके liye aapko humein remind karne ki zaroorat nahi hai.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">03</div>
              <div>
                <h3>Form Dhyan Se Bharein</h3>
                <p>
                  Is form mein aapse kuch details puchi jayengi (naam, birthdate, etc).
                  Form ko dhyan se bharke submit karein.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">04</div>
              <div>
                <h3>Appointment Details Paayein</h3>
                <p>
                  Form submit karne ke 2 dino ke andar aapke appointment ki Date &amp; Time
                  aapki mail id par receive hongi. Bas us din available rahein — call hum
                  saamne se karte hain.
                </p>
              </div>
            </div>
          </div>

          <p className="section-sub" style={{ marginTop: 36, marginBottom: 0 }}>
            Appointment within 7–10 working days · Mon–Fri · 12PM–8PM (IST) · Slot availability
            per form response.
          </p>
        </div>
      </section>

      <div className="phase-divider">
        <span className="ln"></span>
        <span className="dots"><i></i><i></i><i></i><i></i><i></i></span>
        <span className="ln"></span>
      </div>

      {/* READING / PRICING */}
      <section id="reading">
        <div className="container">
          <div className="kicker">The Service</div>
          <h2>Voice Call Reading</h2>
          <p className="section-sub">
            One-on-one guidance, straight from the universe — no sugar-coating.
          </p>

          <div className="price-card">
            <span className="badge">Most Booked</span>
            <h3>Call Reading</h3>
            <div className="amount">
              ₹8,500<small>40 Minutes · Voice Call</small>
            </div>

            <div className="includes">
              Includes <strong>Tarot, Astrology, Numerology, Face Reading, Kundli
              Analysis &amp; Psychic</strong> guidance.
            </div>

            <ul className="feature-list">
              <li>Ask unlimited questions</li>
              <li>This session covers up to 3 people, including you</li>
              <li>You may only ask about the person(s) whose details you submit in the form</li>
              <li>Days: Mon–Fri · Time: 12PM–8PM (IST)</li>
              <li>Choose 3 time-slot options in the form for smoother scheduling</li>
              <li>No Refund Policy — please pay carefully</li>
              <li>Limited slots available per day</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="phase-divider">
        <span className="ln"></span>
        <span className="dots"><i></i><i></i><i></i><i></i><i></i></span>
        <span className="ln"></span>
      </div>

      {/* BOOKING / PAYMENT */}
      <section id="book">
        <div className="container">
          <div className="kicker">Book Now</div>
          <h2>Complete Your Booking</h2>
          <p className="section-sub">
            Enter your details, then pay securely via Razorpay. Your appointment form
            will be emailed to you right after payment is verified.
          </p>

          {status !== "success" ? (
            <div className="booking-panel">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number (optional)</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91"
                />
              </div>

              <button
                className="btn gold"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={handlePay}
                disabled={status === "loading" || status === "verifying"}
              >
                {status === "loading" && "Opening Payment…"}
                {status === "verifying" && "Verifying Payment…"}
                {(status === "idle" || status === "error") && "Pay ₹8,500 & Book Reading"}
              </button>

              {errorMsg && <div className="form-msg error">{errorMsg}</div>}
            </div>
          ) : (
            <div className="form-reveal">
              <div className="check">✓</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 20, marginBottom: 10 }}>
                Payment Confirmed — Thank you, {name}!
              </h3>
              <p style={{ color: "var(--ivory-dim)", marginBottom: 24, fontSize: 14.5 }}>
                A confirmation receipt and your appointment form have been sent to{" "}
                <strong style={{ color: "var(--ivory)" }}>{email}</strong>. Please check your
                inbox (and spam folder) and fill the form carefully.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "https://forms.gle/pxDsLcTv16qWMhUA7"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn gold"
              >
                Open Appointment Form →
              </a>
            </div>
          )}
        </div>
      </section>

      <div className="phase-divider">
        <span className="ln"></span>
        <span className="dots"><i></i><i></i><i></i><i></i><i></i></span>
        <span className="ln"></span>
      </div>

      {/* NOTES */}
      <section id="notes">
        <div className="container">
          <div className="kicker">Please Read Before Booking</div>
          <h2>Important Notes</h2>

          <div className="notes" style={{ marginBottom: 36 }}>
            <p>
              We are certified and experienced in Astrology, Numerology, Psychic Tarot
              Card Reading, Vedic Kundli Analysis, Hoodoo, Tantra Vidya, Candle Wax
              Reading &amp; Coffee Cup Reading.
            </p>
            <p>
              <strong>No sugar-coating:</strong> our purpose is to deliver the universe&rsquo;s
              message with complete honesty and sincerity.
            </p>
            <p>
              <strong>We do not offer</strong> Tantra or Vashikaran services under any
              circumstance — please do not request these.
            </p>
            <p>
              We do not provide readings on legal matters, share market, lottery, a
              child&rsquo;s gender, or sexual questions.
            </p>
            <p>
              Readings are guidance from the universe — please treat them as guidance,
              not absolute fact. When reading a partner&rsquo;s feelings, remember that
              energies change, as every person has free will.
            </p>
            <p><strong>We do not offer free readings under any circumstance.</strong></p>
            <p>
              <strong>No Refund Policy</strong> — payments are non-refundable. Please read
              everything carefully before paying.
            </p>
            <p>
              Your name, photos, and all shared details are kept strictly confidential.
              Your safety is our priority.
            </p>
            <p>
              This is a judgment-free space — whoever you are and whatever your question,
              you are heard with respect and compassion. Ask fearlessly.
            </p>
            <p>
              <strong>The Divine Tarot</strong> is a legally registered brand. Unauthorized
              copying of this name, content, or material will lead to legal action.
            </p>
          </div>

          <details className="tc">
            <summary>Full Terms &amp; Conditions</summary>
            <div className="tc-body">
              <p>
                We are certified and experienced in Astrology, Numerology, Psychic Tarot
                Card Reading, Vedic Kundli Analysis, Candle Wax Reading, Coffee Cup
                Reading, and other spiritual guidance practices.
              </p>
              <p>We do not provide sugar-coated readings. Our purpose is to deliver honest messages as guided by the universe with complete sincerity.</p>
              <p>We strictly DO NOT offer any services related to Tantra, Vashikaran, black magic, or any unethical practices. Please do not request such services.</p>
              <p>We do not provide readings on: legal matters, court cases, share market, lottery, gambling, child gender prediction, or explicit/sexual questions.</p>
              <p>All readings are for guidance purposes only. Please use your own judgment and decision-making.</p>
              <p>When asking about another person&rsquo;s feelings, please understand that energies and emotions can change over time, as every individual has free will.</p>
              <p>We do not offer FREE readings under any circumstances.</p>
              <p><strong>No Refund Policy:</strong> once payment is made, it is non-refundable under any situation. Please make your payment only after reading all details carefully.</p>
              <p>Your privacy is our priority. All information shared (name, photos, personal details) is kept strictly confidential.</p>
              <p>This is a safe and judgment-free space. No matter your situation (including relationships, personal choices, or identity), you are respected and heard with compassion.</p>
              <p>&ldquo;The Divine Tarot&rdquo; is a legally registered brand. Any unauthorized copying of content, name, or material may lead to legal action.</p>
              <p>By paying on this page, you agree to share the information entered with The Divine Tarot (owner of this page) and Razorpay, in accordance with applicable laws.</p>
            </div>
          </details>
        </div>
      </section>

      <div className="phase-divider">
        <span className="ln"></span>
        <span className="dots"><i></i><i></i><i></i><i></i><i></i></span>
        <span className="ln"></span>
      </div>

      {/* FOOTER — replicates thedivinetarotonline.com footer layout */}
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="https://thedivinetarotonline.com/" className="brand">
              <img src="/logo.png" alt="The Divine Tarot" className="mark" />
              <span>
                The Divine Tarot
                <small>Premium Tarot Guidance</small>
              </span>
            </a>
            <p className="footer-tagline">Clarity for your path. Guidance for your soul.</p>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              <li><a href="https://thedivinetarotonline.com/about">About</a></li>
              <li><a href="https://thedivinetarotonline.com/reading">Readings</a></li>
              <li><a href="https://learn.thedivinetarotonline.com/">Premium</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Connect With Us</div>
            <div className="social-row">
              <a href="https://instagram.com/thedivineetarot" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="https://facebook.com/profile.php?id=61578567343068" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://youtube.com/@TheDivineTarot" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
              <a href="https://youtube.com/@TheDivineTarot" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            </div>
            <a href="/privacy" className="footer-privacy-link">Privacy</a>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Get Daily Divine Insights</div>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Your email" aria-label="Email" />
              <input type="tel" placeholder="WhatsApp number (optional)" aria-label="WhatsApp number" />
              <button type="submit" className="btn gold" style={{ width: "100%", justifyContent: "center" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="trust-row">
          <span>🔒 Secure &amp; Private Readings</span>
          <span>♡ Trusted by 7L+ Seekers</span>
          <span>✦ Authentic Spiritual Guidance</span>
        </div>

        <div className="footer-bottom">
          <span>Designed by <a href="#" target="_blank" rel="noreferrer">Sitelytc</a></span>
          <span className="footer-bottom-right">
            <a href="/privacy">Privacy</a> · {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
