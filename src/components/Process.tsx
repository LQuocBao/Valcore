"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = t("process.steps");

  const icons = [
    <MessageSquare size={28} key="0" />,
    <Code2 size={28} key="1" />,
    <Rocket size={28} key="2" />,
  ];

  const nums = ["01", "02", "03"];

  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            {t("process.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            {t("process.titleStart")} <span className="text-brand-600 dark:text-brand-400">{t("process.titleEnd")}</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-brand-100 via-brand-500 to-brand-100 dark:from-brand-900/30 dark:via-brand-500 dark:to-brand-900/30 rounded-full" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {Array.isArray(steps) && steps.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number & Icon */}
                <div className="w-[120px] h-[120px] bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-950 mb-8 z-10 relative group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 transition-colors duration-500">
                  <div className="absolute top-2 right-2 text-brand-700 dark:text-brand-400 text-xs font-black">{nums[index]}</div>
                  <div className="text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform duration-500">{icons[index]}</div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
