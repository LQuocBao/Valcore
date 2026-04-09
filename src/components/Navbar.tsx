"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Track active section using Intersection Observer
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // Triggers when section is in top 30% of viewport
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about", width: "w-[110px]" },
    { name: t("nav.services"), href: "#services", width: "w-[85px]" },
    { name: t("nav.portfolio"), href: "#portfolio", width: "w-[80px]" },
    { name: t("nav.process"), href: "#process", width: "w-[95px]" },
    { name: t("nav.testimonials"), href: "#testimonials", width: "w-[105px]" },
    { name: t("nav.faq"), href: "#faq", width: "w-[85px]" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "pt-4 pb-0" : "py-5"}`}
    >
      <div className={`mx-auto transition-all duration-500 ease-in-out ${scrolled ? "max-w-[90%] md:max-w-4xl lg:max-w-6xl glass rounded-full px-4 md:px-8 shadow-xl border border-border" : "container px-6 md:px-12 bg-transparent"}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "py-2" : "py-0"}`}>
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="bg-brand-600 p-2 rounded-xl text-white group-hover:bg-brand-500 transition-colors">
            <Code2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-heading">
            Valcore<span className="text-brand-600">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`${link.width} relative text-center py-2 transition-colors px-2 whitespace-nowrap ${
                  isActive ? "text-brand-600 font-bold" : "text-foreground hover:text-brand-600 font-medium"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-2 right-2 h-[3px] bg-brand-600 rounded-t-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <div className="flex items-center gap-4 border-l border-border pl-6 ml-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-foreground hover:text-brand-600 font-bold px-3 py-2 rounded-xl bg-muted transition-colors w-[65px] justify-center"
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
                      className="fixed inset-0 z-10 cursor-pointer"
                      onClick={() => setLangDropdownOpen(false)}
                    ></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-card rounded-2xl shadow-2xl border border-border p-2 z-20 overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          setLanguage("vi");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${language === "vi"
                            ? "bg-brand-500/10 text-brand-600"
                            : "hover:bg-muted text-foreground"
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
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${language === "en"
                            ? "bg-brand-500/10 text-brand-600"
                            : "hover:bg-muted text-foreground"
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
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-heading font-bold text-xs"
            aria-label="Toggle Language"
          >
            {language.toUpperCase()}
          </button>
          <button
            className="text-heading p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute left-0 w-full glass border-t border-border lg:hidden ${scrolled ? "top-[110%] rounded-2xl w-[90%] mx-[5%]" : "top-full"}`}
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-bold py-3 border-b border-border transition-colors ${
                      isActive ? "text-brand-600" : "text-heading"
                    }`}
                    onClick={() => {
                      setActiveSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
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
