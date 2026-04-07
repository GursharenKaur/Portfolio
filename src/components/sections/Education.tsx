"use client";

import { motion } from "motion/react";
import { timeline } from "@/lib/data";

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

export default function Education() {
  const education = timeline.filter((item) => item.type === "education");

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container-portfolio relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUp}
           className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            My <span className="gradient-text italic">Education</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[var(--color-text-secondary)] text-lg">
            Academic background and learning milestones.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative p-8 rounded-3xl glass border border-white/5 hover:border-violet-500/20 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                 <div>
                   <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)]">
                     {item.title}
                   </h3>
                   <p className="text-emerald-400 font-medium">{item.organization}</p>
                 </div>
                 <div className="text-right flex flex-col md:items-end">
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[var(--color-text-muted)] group-hover:text-emerald-300 transition-colors">
                      {item.period}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)] mt-1">{item.location}</span>
                 </div>
              </div>
              
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {item.description}
              </p>
              
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                   {item.tags.map(tag => (
                     <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 text-[var(--color-text-muted)] group-hover:border-emerald-500/30 transition-colors">
                       {tag}
                     </span>
                   ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
