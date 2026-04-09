"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Headphones, Zap, ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Trust() {
  const { t } = useLanguage();

  const stats = t("trust.stats");
  const featuresData = t("trust.features");

  const icons = [
    <Zap className="w-5 h-5 text-amber-500" key="0" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-500" key="1" />,
    <Headphones className="w-5 h-5 text-brand-500" key="2" />,
  ];

  const statIcons = [
    <TrendingUp className="w-6 h-6" key="0" />,
    <Award className="w-6 h-6" key="1" />,
    <Users className="w-6 h-6" key="2" />,
  ];

  const statColors = [
    "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-500",
    "from-brand-500/20 to-violet-500/10 border-brand-500/30 text-brand-500",
    "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-500",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 text-sm font-semibold mb-4">
            {t("trust.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mt-4">
            {t("trust.titleStart")}{" "}
            <span className="relative inline-block">
              <span className="text-brand-600 font-extrabold">{t("trust.titleEnd")}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-500/40 rounded-full origin-left"
              />
            </span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16"
        >
          {Array.isArray(stats) && stats.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${statColors[idx]} backdrop-blur-sm flex items-center gap-5`}
            >
              <div className={`p-3 rounded-xl bg-white/10 border border-white/20`}>
                {statIcons[idx]}
              </div>
              <div>
                <p className="text-3xl font-extrabold text-heading">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium mt-0.5">{stat.label}</p>
              </div>
              {/* Decorative dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-current opacity-40" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-foreground leading-relaxed mb-10 max-w-lg">
              {t("trust.desc")}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 group"
            >
              {t("trust.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {Array.isArray(featuresData) && featuresData.map((feature: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-brand-500/40 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="p-3 rounded-xl bg-muted border border-border group-hover:border-brand-500/30 transition-colors shrink-0">
                  {icons[idx]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-heading">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
