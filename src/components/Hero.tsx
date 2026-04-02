"use client";

import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      <div className="bg-orb-1" />
      <div className="bg-orb-2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-200/50 dark:border-brand-500/20 text-sm font-medium text-brand-700 dark:text-brand-300 mb-8 animate-fade-in-up">
          <span className="flex text-amber-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </span>
          {t("hero.trustBadge")}
        </div>

        <h1 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight animate-fade-in-up animation-delay-100">
          {t("hero.titleStart")}{" "}
          <span className="text-gradient">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="relative z-20 mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          {t("hero.desc")}
        </p>

        <div className="relative z-20 mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto animate-fade-in-up animation-delay-300">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1"
          >
            {t("hero.getWebsite")} <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-sm"
          >
            {t("hero.contactMe")} <MessageCircle size={20} />
          </a>
        </div>

        {/* Floating element 1 */}
        <div className="hidden lg:block absolute top-1/4 left-[5%] xl:left-[10%] glass-card p-4 rounded-2xl rotate-[-6deg] z-0 float-up">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">✓</div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{t("hero.fastDeliveryTitle")}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.fastDeliveryDesc")}</p>
            </div>
          </div>
        </div>

        {/* Floating element 2 */}
        <div className="hidden lg:block absolute top-[40%] right-[5%] xl:right-[10%] glass-card p-4 rounded-2xl rotate-[3deg] z-0 float-down">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">✨</div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{t("hero.qaTitle")}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.qaDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
