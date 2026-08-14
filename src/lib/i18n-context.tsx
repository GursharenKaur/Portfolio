"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  translations,
  defaultLocale,
  supportedLocales,
  type Locale,
} from "@/lib/translations";

const LANG_KEY = "portfolio-lang";

/* Runs before hydration to avoid a flash of the wrong language. */
export const LANG_INIT_SCRIPT = `
(function () {
  try {
    var supported = ${JSON.stringify(supportedLocales)};
    var stored = localStorage.getItem('${LANG_KEY}');
    var lang = stored && supported.indexOf(stored) !== -1 ? stored : null;
    if (!lang) {
      var browser = (navigator.language || '').slice(0, 2).toLowerCase();
      lang = supported.indexOf(browser) !== -1 ? browser : '${defaultLocale}';
    }
    document.documentElement.lang = lang;
  } catch (e) {}
})();
`;

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  /** Like `t`, but returns `fallback` (e.g. literal data from data.ts) instead of the raw key when no translation exists. */
  td: (key: string, fallback: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(LANG_KEY) as Locale | null;
  if (stored && supportedLocales.includes(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase() as Locale;
  if (supportedLocales.includes(browser)) return browser;
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LANG_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let value = getByPath(translations[locale], key);
      if (typeof value !== "string") value = getByPath(translations[defaultLocale], key);
      if (typeof value !== "string") return key;
      if (!vars) return value;
      return Object.entries(vars).reduce(
        (str, [name, val]) => str.replaceAll(`{${name}}`, String(val)),
        value
      );
    },
    [locale]
  );

  const td = useCallback(
    (key: string, fallback: string) => {
      const value = getByPath(translations[locale], key);
      return typeof value === "string" ? value : fallback;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, td }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
