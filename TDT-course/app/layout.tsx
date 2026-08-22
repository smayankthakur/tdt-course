import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Courses · The Divine Tarot",
  description:
    "Live, instructor-led courses in tarot, runes, dice divination and candle wax reading, plus a year-long offline healing membership — from The Divine Tarot.",
  openGraph: {
    title: "Courses · The Divine Tarot",
    description:
      "Live, instructor-led courses in tarot, runes, dice divination and candle wax reading, plus a year-long offline healing membership.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
