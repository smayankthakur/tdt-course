import type { Metadata } from "next";
import "./globals.css";

// Fonts are loaded via a standard <link> tag below rather than
// next/font/google. next/font fetches the font files from Google at
// *build time*, which fails in network-restricted environments (e.g. a
// sandboxed CI runner with an allowlist that excludes
// fonts.googleapis.com). A <link> tag fetches at request time in the
// browser instead, so it works everywhere — including this build — with
// the same visual result. If your deploy target has open outbound
// network access at build time, you can switch back to next/font/google
// for the extra self-hosting/perf benefit; no other code needs to change
// since both approaches feed the same --font-* CSS variables.
const siteUrl = "https://mystic-arts.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mystic Arts School — Tarot, Runes, Dice & Candle Wax Reading",
    template: "%s · Mystic Arts School",
  },
  description:
    "Live, instructor-led courses in tarot, runes, dice divination and candle wax reading, plus an offline year-long healing membership.",
  openGraph: {
    title: "Mystic Arts School",
    description:
      "Live, instructor-led courses in tarot, runes, dice divination and candle wax reading, plus an offline year-long healing membership.",
    url: siteUrl,
    siteName: "Mystic Arts School",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this
            rule targets the Pages Router's pages/_document.js; loading
            fonts in the App Router's root layout head is the documented,
            correct pattern here. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Cinzel:wght@400..700&family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
