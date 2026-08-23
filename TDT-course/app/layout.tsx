import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MysticBackground from "@/components/MysticBackground";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Our Courses | The Divine Tarot",
  description:
    "Learn tarot, runes, candle wax and dice reading with The Divine Tarot — beginner to advanced live courses to master divination and give accurate readings.",
  icons: {
    icon: "https://thedivinetarotonline.com/logo.png",
    shortcut: "https://thedivinetarotonline.com/logo.png",
    apple: "https://thedivinetarotonline.com/logo.png",
  },
  openGraph: {
    title: "Our Courses | The Divine Tarot",
    description:
      "Master tarot, runes, candle wax and dice reading — beginner to advanced spiritual courses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MysticBackground />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
