"use client";

import { motion } from "framer-motion";
import { CodeXml, PanelsTopLeft, GraduationCap, MonitorCog } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const serviceItems = t("services.items");

  const icons = [
    <CodeXml size={32} key="0" />,
    <PanelsTopLeft size={32} key="1" />,
    <GraduationCap size={32} key="2" />,
    <MonitorCog size={32} key="3" />,
  ];

  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-brand-500",
    "bg-emerald-500"
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            {t("services.badge")}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            {t("services.titleStart")} <span className="text-brand-600 dark:text-brand-400">{t("services.titleEnd")}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(serviceItems) && serviceItems.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${colors[index]}`}>
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
