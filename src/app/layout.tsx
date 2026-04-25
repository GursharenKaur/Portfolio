import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";
import TerminalChat from "@/components/shared/TerminalChat";

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
    default: "Gursharen Kaur Suri | Full Stack Developer & ML Engineer",
    template: "%s | Gursharen Kaur Suri",
  },
  description:
    "Computer Engineering student at TIET skilled in Full Stack Development and Machine Learning. Building scalable, user-focused applications.",
  keywords: [
    "Gursharen Kaur Suri",
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "Python",
    "TIET",
    "Computer Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Gursharen Kaur Suri" }],
  creator: "Gursharen Kaur Suri",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gursharen Kaur Suri — Full Stack Developer & ML Engineer",
    description:
      "Computer Engineering student at TIET skilled in Full Stack Development and Machine Learning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gursharen Kaur Suri — Full Stack Developer & ML Engineer",
    description:
      "Computer Engineering student at TIET skilled in Full Stack Development and Machine Learning.",
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
      <body className="min-h-screen overflow-x-hidden antialiased bg-[#000000]" suppressHydrationWarning>
        {/* Custom cursor — desktop only, client component */}
        <CustomCursor />

        {/* Global navigation */}
        <Navbar />

        {/* Lenis smooth scroll + GSAP sync wrapper */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

        {/* Terminal chatbot — floating, always available */}
        <TerminalChat />
      </body>
    </html>
  );
}

