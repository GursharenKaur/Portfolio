"use client";

import { motion } from "motion/react";
import { skills, currentlyLearning } from "@/lib/data";

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

export default function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container-portfolio relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUp}
           className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            My <span className="gradient-text italic">Toolkit</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[var(--color-text-secondary)] text-lg">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-violet-500/20 transition-all group"
            >
              <h3 className="text-xl font-bold font-heading text-violet-400 mb-6 flex items-center justify-between">
                {cat}
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-violet-300 transition-colors">
                  {skills.filter(s => s.category === cat).length} Tools
                </span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all hover:scale-105 cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-[var(--color-text-primary)] text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Currently Learning */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/20 transition-all group lg:col-span-1"
            >
              <h3 className="text-xl font-bold font-heading text-emerald-400 mb-6">
                 Currently Exploring
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentlyLearning.map(skill => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:scale-105 cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-[var(--color-text-primary)] text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
