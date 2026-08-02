"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export type Accent = "nav-blue" | "cyber-violet" | "titanium";

export const ACCENTS: { id: Accent; label: string; grad1: string; grad2: string }[] = [
  { id: "nav-blue", label: "Nav Blue", grad1: "#38bdf8", grad2: "#2563eb" },
  { id: "cyber-violet", label: "Cyber Violet", grad1: "#d946ef", grad2: "#7c3aed" },
  { id: "titanium", label: "Titanium", grad1: "#fbbf24", grad2: "#e5e7eb" },
];

const MODE_KEY = "portfolio-theme-mode";
const ACCENT_KEY = "portfolio-theme-accent";

interface ThemeContextValue {
  mode: ThemeMode;
  accent: Accent;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: Accent) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var mode = localStorage.getItem('${MODE_KEY}') || 'dark';
    var accent = localStorage.getItem('${ACCENT_KEY}') || 'cyber-violet';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    root.setAttribute('data-accent', accent);
  } catch (e) {}
})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [accent, setAccentState] = useState<Accent>("cyber-violet");

  useEffect(() => {
    const storedMode = (localStorage.getItem(MODE_KEY) as ThemeMode | null) || "dark";
    const storedAccent = (localStorage.getItem(ACCENT_KEY) as Accent | null) || "cyber-violet";
    setModeState(storedMode);
    setAccentState(storedAccent);
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem(MODE_KEY, next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }, []);

  const setAccent = useCallback((next: Accent) => {
    setAccentState(next);
    localStorage.setItem(ACCENT_KEY, next);
    document.documentElement.setAttribute("data-accent", next);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, accent, setMode, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
