"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const projects = t("portfolio.projects");
  const [displayCount, setDisplayCount] = useState(3);

  const colors = [
    "from-blue-500/20 to-indigo-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-amber-500/20 to-orange-500/20",
  ];

  const hasMore = Array.isArray(projects) && displayCount < projects.length;

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-semibold mb-6 uppercase tracking-wider text-sm"
            >
              {t("portfolio.badge")}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
            >
              {t("portfolio.titleStart")} <span className="text-brand-600 dark:text-brand-400">{t("portfolio.titleEnd")}</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {Array.isArray(projects) && projects.slice(0, displayCount).map((project: any, index: number) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="group bg-white dark:bg-slate-800/40 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl"
              >
                {/* Image Container with Chromeless Crop */}
                <div className={`relative h-64 w-full bg-gradient-to-br ${colors[index % colors.length]} overflow-hidden`}>
                  {project.image ? (
                    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <div className="absolute inset-x-0 -top-[18%] w-full h-[125%]">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill
                          className="object-cover object-top" 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-bold text-slate-400 text-lg opacity-50">{t("portfolio.mockupPlaceholder")}</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-brand-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg z-10">
                    {project.tag}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button 
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="px-10 py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-700 hover:shadow-lg transition-all active:scale-95 shadow-md"
            >
              {t("portfolio.viewMore") || "Xem Thêm Dự Án"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
