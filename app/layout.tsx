import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CCMRE / CCISA — Centre for Christian-Muslim Relations in Eastleigh",
    template: "%s | CCMRE / CCISA",
  },
  description:
    "Building bridges of peace across faiths and communities. A St. Paul's University initiative promoting interfaith dialogue, peaceful coexistence, and inclusive education across Africa since 2010.",
  keywords: [
    "Christian-Muslim relations",
    "interfaith dialogue",
    "Kenya",
    "Africa",
    "peace",
    "CCMRE",
    "CCISA",
    "St. Paul's University",
    "Eastleigh",
    "Islamic studies",
  ],
  authors: [{ name: "CCMRE / CCISA" }],
  creator: "CCMRE / CCISA",
  metadataBase: new URL("https://ccmre.spu.ac.ke"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ccmre.spu.ac.ke",
    siteName: "CCMRE / CCISA",
    title: "CCMRE / CCISA — Building Bridges of Peace Across Faiths",
    description:
      "Over a decade of Christian-Muslim dialogue, grassroots peacebuilding, and academic excellence from Eastleigh to all of Africa.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCMRE / CCISA — Building Bridges of Peace",
    description:
      "A St. Paul's University initiative promoting interfaith dialogue across Africa since 2010.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
