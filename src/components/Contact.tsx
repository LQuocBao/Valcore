"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            {t("contact.titleStart")} <span className="text-brand-600 dark:text-brand-400">{t("contact.titleEnd")}</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-sm shadow-sm border border-red-200 dark:border-red-900/50"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            {t("contact.urgency")}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{t("contact.reachOut")}</h3>

            <div className="space-y-6">
              <a href="tel:+84785548882" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">{t("contact.phone")}</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors break-words">+84 78 554 8882</p>
                </div>
              </a>

              <a href="https://zalo.me/84785548882" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Zalo</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors break-words">{t("contact.zaloLabel")}</p>
                </div>
              </a>

              <a href="mailto:lamquocbao26042005@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">{t("contact.emailLabel")}</p>
                  <p className="text-base sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors break-all">lamquocbao26042005@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{t("contact.guaranteeTitle")}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{t("contact.guaranteeDesc")}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t("contact.sendMessage")}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.formName")}</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.formPhone")}</label>
                <input
                  type="text"
                  placeholder="0123 456 789"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.formMessage")}</label>
                <textarea
                  rows={4}
                  placeholder="..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-brand-500/25"
              >
                {t("contact.formSubmit")} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
