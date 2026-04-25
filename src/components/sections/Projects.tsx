"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

/* ── Social icon map (using same SVG style as Hero) ── */
const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export default function Projects() {
  /* Show only the top 4 featured projects on the main page */
  const featuredProjects = projects.filter(p => p.featured && !p.isOngoing).slice(0, 4);
  const ongoing = projects.filter(p => p.isOngoing);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container-portfolio relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUp}
           className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            My <span className="gradient-text italic">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[var(--color-text-secondary)] text-lg">
            A selection of my best work and current experiments.
          </p>
        </motion.div>

        {/* Featured Projects (top 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] glass border border-white/5 group hover:border-violet-500/20 transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                   <h3 className="text-lg sm:text-2xl font-bold font-heading mb-2">{project.title}</h3>
                   <p className="text-[var(--color-text-muted)] text-sm tracking-wide uppercase font-bold">{project.tagline}</p>
                </div>
                <div className="flex gap-2">
                   {project.githubUrl && (
                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all text-[var(--color-text-secondary)] hover:text-white">
                        {iconMap.github}
                     </a>
                   )}
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-8 flex-grow">
                 {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] uppercase font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-24"
        >
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold cursor-pointer
                         bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/30
                         text-[var(--color-text-secondary)] hover:text-white
                         transition-all duration-300 group
                         hover:bg-violet-600/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Ongoing Research / Projects */}
        {ongoing.length > 0 && (
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="p-6 sm:p-12 rounded-2xl sm:rounded-[2.5rem] bg-violet-600/5 border border-violet-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
               <span className="px-3 sm:px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/20 text-violet-300 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] animate-pulse">
                  Ongoing Experiment
               </span>
            </div>
            
            <div className="max-w-2xl">
               <h3 className="text-2xl sm:text-3xl font-heading font-black mb-6 mt-10 sm:mt-0">
                  What&apos;s <span className="gradient-text italic">Brewing?</span>
               </h3>
               {ongoing.map(project => (
                 <div key={project.id}>
                   <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{project.title}</h4>
                   <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap gap-3">
                     {project.techStack.map(tech => (
                       <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] uppercase font-bold text-[var(--color-text-muted)]">
                          {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

