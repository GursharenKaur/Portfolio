"use client";

import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

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

/* ── Social icon map (using same SVGs as Hero for consistency) ── */
const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container-portfolio relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUp}
           className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Say <span className="gradient-text italic">Hello</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[var(--color-text-secondary)] text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
          >
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass border border-white/5 space-y-6 sm:space-y-8">
               <h3 className="text-xl font-bold font-heading">Direct Contact</h3>
               
               <div className="space-y-6">
                 <a 
                   href={`mailto:${personalInfo.email}`} 
                   className="flex items-center gap-4 group text-[var(--color-text-secondary)] hover:text-white transition-colors"
                 >
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all">
                      <Mail className="w-5 h-5 text-violet-400" />
                   </div>
                   <div>
                      <p className="text-xs uppercase font-bold text-[var(--color-text-muted)] tracking-widest">Email Me</p>
                      <p className="text-lg font-medium">{personalInfo.email}</p>
                   </div>
                 </a>

                 <div className="pt-8 border-t border-white/5">
                   <p className="text-sm font-heading font-bold mb-6 text-[var(--color-text-muted)] uppercase tracking-widest">Follow me</p>
                   <div className="flex gap-4">
                      {socialLinks.map(link => {
                        const icon = iconMap[link.icon.toLowerCase()] || <Send className="w-5 h-5" />;
                        return (
                          <a 
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:border-violet-500/30 hover:bg-violet-500/10 transition-all text-white/70 hover:text-white"
                            aria-label={link.label}
                          >
                             {icon}
                          </a>
                        );
                      })}
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Prompt Message */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col justify-center"
          >
            <div className="p-8 sm:p-12 rounded-2xl sm:rounded-[2.5rem] bg-violet-600/5 border border-violet-500/10 text-center">
               <h3 className="text-2xl sm:text-3xl font-heading font-black mb-6 italic gradient-text">
                  Let&apos;s build something <br /> amazing together.
               </h3>
               <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed text-lg">
                  Whether you have a question or just want to say hi, my inbox is always open. 
                  I&apos;ll get back to you as soon as possible!
               </p>
               <a 
                 href={`mailto:${personalInfo.email}`} 
                 className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-[0_0_24px_rgba(139,92,246,0.3)] hover:shadow-[0_0_32px_rgba(139,92,246,0.5)] hover:-translate-y-1"
               >
                  <Send className="w-4 h-4" />
                  Request Resume
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
