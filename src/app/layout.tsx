import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  JetBrains_Mono,
  Noto_Sans_Devanagari,
  Noto_Sans_Gurmukhi,
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";
import TerminalChat from "@/components/shared/TerminalChat";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/theme-context";
import { LanguageProvider, LANG_INIT_SCRIPT } from "@/lib/i18n-context";

/* ─── Fonts ────────────────────────────────────────────────── */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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

/* Non-Latin fallback coverage — layered into the sans stack via globals.css
   so Hindi (Devanagari) and Punjabi (Gurmukhi) render correctly without
   changing the visual font for English/German content. */
const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoGurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-gurmukhi",
  subsets: ["gurmukhi"],
  weight: ["400", "500", "600", "700"],
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
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoDevanagari.variable} ${notoGurmukhi.variable} dark`}
      data-accent="cyber-violet"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LANG_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased bg-background" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

