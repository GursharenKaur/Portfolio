"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n-context";
import { localeMeta } from "@/lib/translations";

export default function LanguageSwitcher({
  open,
  onToggle,
  onClose,
  anchorClassName,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  anchorClassName?: string;
}) {
  const { locale, setLocale, t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const current = localeMeta.find((l) => l.code === locale) ?? localeMeta[0];

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
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
    <div className="relative flex items-center" ref={wrapperRef}>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={onToggle}
        className="flex items-center gap-1.5 px-2.5 py-2.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] border border-[var(--border)] transition-colors"
        aria-label={t("language.switchLanguage")}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="text-[11px] font-bold uppercase tracking-wide hidden sm:inline">
          {current.code}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label={t("language.label")}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute top-full mt-3 right-0 z-50 w-[200px] rounded-2xl p-2",
              "bg-popover border border-[var(--border)] shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
              anchorClassName
            )}
          >
            {localeMeta.map((l) => {
              const isActive = l.code === locale;
              return (
                <button
                  key={l.code}
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => {
                    setLocale(l.code);
                    onClose();
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-[var(--color-text-primary)] bg-[rgba(var(--accent-glow-rgb),0.1)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]"
                  )}
                >
                  <span>{l.nativeLabel}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-[var(--accent-solid)]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
