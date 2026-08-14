import en, { type Translations } from "./en";
import hi from "./hi";
import pa from "./pa";
import de from "./de";

export type { Translations };
export type Locale = "en" | "hi" | "pa" | "de";

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translations> = { en, hi, pa, de };

export const localeMeta: { code: Locale; nativeLabel: string; englishLabel: string }[] = [
  { code: "en", nativeLabel: "English", englishLabel: "English" },
  { code: "hi", nativeLabel: "हिन्दी", englishLabel: "Hindi" },
  { code: "pa", nativeLabel: "ਪੰਜਾਬੀ", englishLabel: "Punjabi" },
  { code: "de", nativeLabel: "Deutsch", englishLabel: "German" },
];

export const supportedLocales: Locale[] = localeMeta.map((l) => l.code);
