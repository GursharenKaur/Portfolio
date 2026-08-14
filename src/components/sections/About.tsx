"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n-context";

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
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 relative overflow-hidden">
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
                <span className="gradient-text italic">{t("about.heading")}</span>
              </h2>

              <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed text-justify sm:text-center">
                <p>
                  {t("data.personalInfo.bio")}
                </p>
                <p>
                  {t("about.paragraph2")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
