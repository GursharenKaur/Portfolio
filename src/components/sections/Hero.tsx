"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { personalInfo, socialLinks, stats } from "@/lib/data";

/* Lazy-load 3D canvas — never SSR */
const ParticleCanvas = dynamic(
  () => import("@/components/shared/ParticleCanvas"),
  { ssr: false }
);

/* ── Animation variants ──────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6 } },
};

/* ── Character-split name reveal ─────────────────────────── */
function AnimatedName({ text }: { text: string }) {
  return (
    <span aria-label={text} className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 48, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.5 + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Social icon map (inline SVGs) ──────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.243 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ─────────────────────────────── */}

      {/* Deep gradient base */}
      <div className="absolute inset-0 animated-bg" />

      {/* Radial violet glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(109,40,217,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top-right accent glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom-left accent glow */}
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 3D Particle canvas — fills background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Vertical social rail (desktop) ───────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute left-6 bottom-32 hidden lg:flex flex-col items-center gap-4"
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            {iconMap[s.icon]}
          </a>
        ))}
        {/* Connecting line */}
        <div className="w-px h-16 bg-gradient-to-b from-white/15 to-transparent" />
      </motion.div>

      {/* ── Main content ─────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-portfolio flex flex-col items-center text-center gap-6 pt-24"
      >
        {/* Availability badge */}
        <motion.div variants={fadeIn} className="flex items-center gap-2">
          <div
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-medium"
            style={{
              background: "rgba(74,222,128,0.08)",
              borderColor: "rgba(74,222,128,0.2)",
              color: "#4ade80",
            }}
          >
            <span className="availability-dot" />
            {personalInfo.availabilityNote}
            <Sparkles className="w-3.5 h-3.5 opacity-70" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          className="text-[var(--color-text-secondary)] text-lg font-light tracking-widest uppercase"
          style={{ letterSpacing: "0.2em" }}
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name — character-by-character */}
        <h1
          className="font-heading gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
          style={{ perspective: "800px" }}
        >
          <AnimatedName text={personalInfo.name} />
        </h1>

        {/* Role badge */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#8b5cf6" }}
          />
          <span className="text-[var(--color-text-secondary)] text-sm font-medium tracking-wide">
            {personalInfo.role}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-[var(--color-text-secondary)] text-lg leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          {/* Primary — View Work */}
          <Link href="#work">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                boxShadow: "0 0 28px rgba(124,58,237,0.45), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>

          {/* Secondary — View Resume */}
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[var(--color-text-primary)] text-sm glass border border-white/10 hover:border-violet-500/40 transition-colors"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 w-full max-w-2xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 group">
              <span className="font-heading font-black text-3xl gradient-text group-hover:scale-110 transition-transform duration-200">
                {s.value}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
