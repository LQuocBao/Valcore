"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const reviews = t("testimonials.reviews");

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            {t("testimonials.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            {t("testimonials.titleStart")} <br />
            <span className="text-brand-600 dark:text-brand-400">{t("testimonials.titleEnd")}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(reviews) && reviews.map((review: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-brand-500/30 w-12 h-12 mb-6" />
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="w-12 h-12 bg-gradient-to-tr from-brand-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{review.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
