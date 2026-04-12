"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/lib/data";

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

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container-portfolio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-12 max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">
                My <span className="gradient-text italic">Story</span>
              </h2>
              
              <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed text-justify sm:text-center">
                <p>
                  {personalInfo.bio}
                </p>
                <p>
                  My journey is driven by a deep curiosity for how things work. Whether it&apos;s architecting a 
                  robust backend system or fine-tuning the motion of a 3D interface, I find beauty in the 
                  balance between complexity and simplicity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
