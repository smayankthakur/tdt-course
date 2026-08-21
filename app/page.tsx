"use client";

import { useState } from "react";

const PAY_URL =
  process.env.NEXT_PUBLIC_RAZORPAY_PAY_URL || "https://rzp.io/rzp/8A6T0cz";
const FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLScOt9_M6dXtizMxsHsP9tyQ3hLUUXx2J9NrV_Naq7KyloKjAA/viewform";

export default function Home() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
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
          Tarot · Astro · Numero · Kundli Analysis · Face Reading · Psychic Ability
        </p>
        <a href="#book" className="btn gold">Book Your Personal Reading</a>
      </section>

      {/* BOOK — pricing + payment + form, all in one fast section */}
      <section id="book">
        <div className="container">
          <div className="kicker">Book Now</div>
          <h2>Voice Call Reading</h2>

          {!confirmed ? (
            <div className="price-card">
              <span className="badge">40 Minutes · Voice Call</span>
              <h3>Call Reading</h3>
              <div className="amount">
                ₹8,500<small>Tarot, Astro, Numero, Face Reading, Kundli Analysis &amp; Psychic</small>
              </div>

              <ul className="feature-list">
                <li>Ask unlimited questions, up to 2 people including you</li>
                <li>Appointment within 7–10 days · Mon–Fri · 12PM–8PM (IST)</li>
                <li>No Refund Policy — please pay carefully</li>
              </ul>

              <a
                href={PAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn gold"
                style={{ width: "100%", justifyContent: "center", marginBottom: 14 }}
              >
                Pay ₹8,500 on Razorpay
              </a>

              <button
                className="btn ghost"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setConfirmed(true)}
              >
                I&rsquo;ve Completed My Payment
              </button>
            </div>
          ) : (
            <div className="form-reveal">
              <div className="check">✓</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 20, marginBottom: 10 }}>
                Thank you — one last step
              </h3>
              <p style={{ color: "var(--ivory-dim)", marginBottom: 24, fontSize: 14.5 }}>
                Fill the Personal Reading form below with your details so your appointment
                can be scheduled.
              </p>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn gold">
                Fill Personal Reading Form →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* NOTES */}
      <section id="notes">
        <div className="container">
          <div className="kicker">Please Read Before Booking</div>
          <h2>Important Notes</h2>

          <div className="notes" style={{ marginBottom: 32 }}>
            <p>
              We do not offer Tantra, Vashikaran, or free readings under any circumstance.
              We don&rsquo;t cover legal matters, share market, lottery, child&rsquo;s gender,
              or sexual questions.
            </p>
            <p>
              <strong>No Refund Policy</strong> — payments are non-refundable. Your details
              are kept strictly confidential, and this is a judgment-free space.
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
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
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
