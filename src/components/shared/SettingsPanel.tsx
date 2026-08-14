"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme, ACCENTS } from "@/lib/theme-context";
import { useLanguage } from "@/lib/i18n-context";

export default function SettingsPanel({
  open,
  onClose,
  anchorClassName,
}: {
  open: boolean;
  onClose: () => void;
  anchorClassName?: string;
}) {
  const { mode, accent, setMode, setAccent } = useTheme();
  const { t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "absolute top-full mt-3 right-0 z-50 w-[300px] rounded-2xl p-5",
            "bg-popover border border-[var(--border)] shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
            anchorClassName
          )}
        >
          {/* Section label */}
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-text-muted)] uppercase mb-4">
            {t("settings.appearance")}
          </p>

          {/* Color theme */}
          <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            {t("settings.colorTheme")}
          </p>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {ACCENTS.map((a) => {
              const isActive = accent === a.id;
              return (
                <button
                  key={a.id}
                  onClick={() => setAccent(a.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-xl border py-3 px-2 transition-colors",
                    isActive
                      ? "border-[var(--accent-solid)] bg-[rgba(var(--accent-glow-rgb),0.08)]"
                      : "border-[var(--border)] hover:border-[var(--color-text-muted)]"
                  )}
                >
                  <span className="flex -space-x-1.5">
                    <span
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ background: a.grad1 }}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ background: a.grad2 }}
                    />
                  </span>
                  <span className="text-[11px] font-medium text-[var(--color-text-secondary)] text-center leading-tight">
                    {a.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mode */}
          <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            {t("settings.mode")}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setMode("dark")}
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-colors",
                mode === "dark"
                  ? "border-[var(--accent-solid)] text-[var(--color-text-primary)] bg-[rgba(var(--accent-glow-rgb),0.08)]"
                  : "border-[var(--border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              <Moon className="w-3.5 h-3.5" />
              {t("settings.dark")}
            </button>
            <button
              onClick={() => setMode("light")}
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-colors",
                mode === "light"
                  ? "border-[var(--accent-solid)] text-[var(--color-text-primary)] bg-[rgba(var(--accent-glow-rgb),0.08)]"
                  : "border-[var(--border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              <Sun className="w-3.5 h-3.5" />
              {t("settings.light")}
            </button>
          </div>

          {/* Active summary check (subtle, mirrors reference screenshot's checkmark language pattern) */}
          <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-[var(--border)] text-[11px] text-[var(--color-text-muted)]">
            <Check className="w-3 h-3 text-[var(--accent-solid)]" />
            {ACCENTS.find((a) => a.id === accent)?.label} · {mode === "dark" ? t("settings.dark") : t("settings.light")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
