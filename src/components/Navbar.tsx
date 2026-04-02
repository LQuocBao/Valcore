"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services", width: "w-[80px]" },
    { name: t("nav.portfolio"), href: "#portfolio", width: "w-[75px]" },
    { name: t("nav.process"), href: "#process", width: "w-[90px]" },
    { name: t("nav.testimonials"), href: "#testimonials", width: "w-[100px]" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="bg-brand-600 p-2 rounded-xl text-white group-hover:bg-brand-500 transition-colors">
            <Code2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Valcore<span className="text-brand-600 dark:text-brand-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${link.width} text-center py-2 text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors px-2`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 ml-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 font-bold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 transition-colors w-[65px] justify-center"
                aria-label="Switch Language"
                aria-expanded={langDropdownOpen}
              >
                <Globe size={16} />
                {language.toUpperCase()}
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setLangDropdownOpen(false)}
                    ></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-2 z-20 overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          setLanguage("vi");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                          language === "vi" 
                            ? "bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400" 
                            : "hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <span className="text-base">🇻🇳</span>
                        VI
                      </button>
                      <button
                        onClick={() => {
                          setLanguage("en");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                          language === "en" 
                            ? "bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400" 
                            : "hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <span className="text-base">🇺🇸</span>
                        EN
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 font-bold whitespace-nowrap min-w-[140px] text-center"
            >
              {t("nav.contact")}
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs"
            aria-label="Toggle Language"
          >
            {language.toUpperCase()}
          </button>
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-slate-200 dark:border-slate-800 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-200 font-bold py-3 border-b border-slate-100 dark:border-slate-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-600 text-white text-center py-4 rounded-2xl font-extrabold mt-2 shadow-lg shadow-brand-500/20"
              >
                {t("nav.talk")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
