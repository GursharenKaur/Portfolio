"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { ArrowLeft, Filter } from "lucide-react";
import type { ProjectTag } from "@/types";

/* ── Social icon map ── */
const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
};

const filterTags: ProjectTag[] = ["All", "Full-Stack", "AI", "UI/UX"];

export default function AllProjectsPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag>("All");

  const allProjects = projects.filter((p) => !p.isOngoing);
  const filtered =
    activeTag === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="relative bg-black min-h-screen">
      {/* Grid background overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <section className="pt-32 pb-24 relative z-10">
        <div className="container-portfolio">
          {/* ── Back Button ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/#work">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer
                           bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/30
                           text-[var(--color-text-secondary)] hover:text-white
                           transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </motion.span>
            </Link>
          </motion.div>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
              All{" "}
              <span className="gradient-text italic">Projects</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-[var(--color-text-secondary)] text-lg">
              Every project I&apos;ve built — from full-stack apps to deep
              learning experiments.
            </p>
          </motion.div>

          {/* ── Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filterTags.map((tag) => {
              const isActive = tag === activeTag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`
                    relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-[0_0_16px_rgba(139,92,246,0.2)]"
                        : "bg-white/[0.04] text-[var(--color-text-secondary)] border border-white/[0.08] hover:border-white/[0.15] hover:text-white"
                    }
                  `}
                >
                  {tag}
                </button>
              );
            })}
          </motion.div>

          {/* ── Projects Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="p-6 rounded-2xl glass border border-white/5 group hover:border-violet-500/20 transition-all flex flex-col h-full overflow-hidden"
                >
                  {/* Header */}
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold font-heading mb-1.5 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] text-xs tracking-wide uppercase font-bold leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all text-[var(--color-text-secondary)] hover:text-white"
                        >
                          {iconMap.github}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags + Year */}
                  <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/15 text-violet-300 text-[10px] uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-[10px] text-[var(--color-text-muted)] font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase font-bold opacity-50 group-hover:opacity-100 transition-opacity"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[var(--color-text-muted)] py-20 text-lg"
            >
              No projects found for this category.
            </motion.p>
          )}
        </div>
      </section>
    </main>
  );
}
