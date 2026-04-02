"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseMe() {
  const { t } = useLanguage();
  const points = t("why.points");

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="glass-card p-8 md:p-12 relative z-10">
              <div className="space-y-8">
                {Array.isArray(points) && points.map((point: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="text-brand-600 dark:text-brand-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{point.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-semibold mb-6 uppercase tracking-wider text-sm">
              {t("why.badge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
               {t("why.titleStart")} <br />
              <span className="text-brand-600 dark:text-brand-400">{t("why.titleEnd")}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
              {t("why.desc")}
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-4 rounded-full font-semibold transition-transform hover:-translate-y-1"
            >
              {t("why.cta")}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
