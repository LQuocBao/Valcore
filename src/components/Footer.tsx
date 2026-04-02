"use client";

import { Code2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  // Provide robust fallback in case of translation issues
  const rightsText = t("footer.rights") 
    ? t("footer.rights").replace("{year}", year.toString()) 
    : `Valcore. Bản quyền năm ${year}. Thiết kế cho mọi nhà.`;
  
  const links = t("footer.links") || ["Services", "Portfolio", "Process", "Testimonials"];
  const hrefs = ["#services", "#portfolio", "#process", "#testimonials"];

  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-40 lg:pb-12 border-t border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
      {/* Premium subtle gradient line at the top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      {/* Background soft glow - Premium touch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-brand-500/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-3 group mb-6 inline-flex hover:opacity-90 transition-opacity">
              <div className="bg-gradient-to-br from-brand-500 to-indigo-600 p-2.5 rounded-2xl text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-slate-900 dark:text-white">
                Valcore<span className="text-brand-500 relative">.<span className="absolute inset-0 bg-brand-500 blur-sm rounded-full opacity-50"></span></span>
              </span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base max-w-sm mb-6">
              {t("hero.desc") || "Thiết kế website chuyên nghiệp, nhanh chóng và tối ưu cho doanh nghiệp của bạn."}
            </p>
            <a href="mailto:lamquocbao26042005@gmail.com" className="group flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-colors">
                 <ArrowUpRight size={16} />
              </span>
              lamquocbao26042005@gmail.com
            </a>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-row flex-wrap justify-between md:justify-end gap-12 sm:gap-24">
            
            {/* Quick Links Menu */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">Menu</h3>
              {Array.isArray(links) && links.map((link: string, idx: number) => (
                <a key={idx} href={hrefs[idx]} className="text-sm md:text-base font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors w-fit relative group">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Social / Contact Links */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{t("contact.reachOut") || "Liên Hệ"}</h3>
              <a href="https://zalo.me/84785548882" target="_blank" rel="noreferrer" className="text-sm md:text-base font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500 transition-colors relative group">
                Zalo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="https://m.me/valcore" target="_blank" rel="noreferrer" className="text-sm md:text-base font-medium text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-500 transition-colors relative group">
                Messenger
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="tel:+84785548882" className="text-sm md:text-base font-medium text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors relative group">
                +84 (78) 554-8882
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-4">
          
          <div className="order-2 lg:order-1 text-slate-500 dark:text-slate-400 text-sm xl:text-base text-left max-w-lg lg:max-w-none leading-relaxed pr-16 lg:pr-0">
            {rightsText}
          </div>
          
          <div className="order-1 lg:order-2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-fit group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{t("contact.urgency") || "Available for work"}</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
