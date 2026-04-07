import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";

/* ─── Fonts ────────────────────────────────────────────────── */
const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* ─── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Gursharen Kaur Suri — Full Stack Developer",
    template: "%s | Gursharen Kaur Suri",
  },
  description:
    "Full Stack Developer specialising in React, Next.js and AI-powered applications. Open to opportunities in 2026.",
  keywords: [
    "Gursharen Kaur Suri",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Gursharen Kaur Suri" }],
  creator: "Gursharen Kaur Suri",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gursharen Kaur Suri — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js and AI-powered applications.",
    siteName: "Gursharen Kaur Suri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gursharen Kaur Suri — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js and AI-powered applications.",
  },
  robots: { index: true, follow: true },
};

/* ─── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden antialiased bg-[#000000]">
        {/* Custom cursor — desktop only, client component */}
        <CustomCursor />

        {/* Global navigation */}
        <Navbar />

        {/* Lenis smooth scroll + GSAP sync wrapper */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
