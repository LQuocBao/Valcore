"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star, Sparkles, MessageCircle, Building2, ShoppingBag, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { language, t } = useLanguage();
  const plans = t("pricing.plans");

  const currentMonth = new Date().getMonth() + 1;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthEN = monthNames[new Date().getMonth()];

  const promoMessage = language === "vi"
    ? `🔥 Đang có ưu đãi cực lớn trong tháng ${currentMonth}!`
    : `🔥 Massive deals available this ${currentMonthEN}!`;

  const icons = [
    <MessageCircle size={22} key="0" />,
    <Zap size={22} key="1" />,
    <Building2 size={22} key="2" />,
    <ShoppingBag size={22} key="3" />,
    <Sparkles size={22} key="4" />,
    <Smartphone size={22} key="5" />,
  ];

  const gradients = [
    "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
    "from-blue-500/10 to-cyan-500/5 border-blue-500/20",
    "from-brand-500/15 to-brand-600/5 border-brand-500/30",
    "from-orange-500/10 to-amber-500/5 border-orange-500/20",
    "from-violet-500/10 to-purple-500/5 border-violet-500/20",
    "from-sky-500/10 to-indigo-500/5 border-sky-500/20",
  ];

  const iconColors = [
    "bg-emerald-500 shadow-emerald-500/30",
    "bg-blue-500 shadow-blue-500/30",
    "bg-brand-600 shadow-brand-500/30",
    "bg-orange-500 shadow-orange-500/30",
    "bg-violet-500 shadow-violet-500/30",
    "bg-sky-500 shadow-sky-500/30",
  ];

  const badgeColors = [
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    "bg-blue-500/10 text-blue-600 border-blue-500/20",
    "bg-brand-500/10 text-brand-600 border-brand-500/30",
    "bg-orange-500/10 text-orange-600 border-orange-500/20",
    "bg-violet-500/10 text-violet-600 border-violet-500/20",
    "bg-sky-500/10 text-sky-600 border-sky-500/20",
  ];

  const checkColors = [
    "text-emerald-500",
    "text-blue-500",
    "text-brand-600",
    "text-orange-500",
    "text-violet-500",
    "text-sky-500",
  ];

  const btnStyles = [
    "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white",
    "border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white",
    "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40",
    "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    "border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white",
    "border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white",
  ];

  return (
    <section
      id="pricing"
      className="py-24 border-t border-border relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/3 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 font-semibold mb-6 uppercase tracking-wider text-sm border border-brand-500/20"
          >
            {t("pricing.badge")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex justify-center"
          >
            <span className="text-brand-600 font-bold text-sm bg-brand-500/5 px-4 py-1 rounded-full border border-brand-500/10 animate-pulse">
              {promoMessage}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-heading"
          >
            {t("pricing.titleStart")}{" "}
            <span className="text-brand-600">{t("pricing.titleEnd")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t("pricing.desc")}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(plans) &&
            plans.map((plan: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl border bg-gradient-to-br ${gradients[index]} backdrop-blur-sm p-7 transition-all duration-300 ${plan.popular ? "ring-2 ring-brand-500/50 shadow-xl shadow-brand-500/10 scale-[1.02] z-10" : ""}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/30 whitespace-nowrap">
                      ✨ {t("pricing.popular")}
                    </span>
                  </div>
                )}

                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${iconColors[index]}`}
                  >
                    {icons[index]}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${badgeColors[index]}`}
                  >
                    {plan.tag}
                  </span>
                </div>

                {/* Name & desc */}
                <h3 className="text-xl font-bold text-heading mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through opacity-50 mb-1 ml-1 font-medium">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="flex items-end gap-1">
                    <span className="text-2xl md:text-3xl font-extrabold text-heading tracking-tight">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-muted-foreground text-xs font-medium mb-1.5">
                        /{plan.unit}
                      </span>
                    )}
                  </div>
                  {plan.note && (
                    <p className="text-[11px] font-semibold text-brand-600/80 mt-1.5 uppercase tracking-wider">
                      {plan.note}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feat: string, fi: number) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-white/50 dark:bg-black/20 ${checkColors[index]}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-foreground/90 leading-snug font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full text-center py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${btnStyles[index]}`}
                >
                  {t("pricing.cta")}
                </a>
              </motion.div>
            ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          {t("pricing.footnote")}
        </motion.p>
      </div>
    </section>
  );
}
