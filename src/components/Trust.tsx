"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Headphones, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Laravel",
  "Node.js",
  "TypeScript",
];

export default function Trust() {
  const { t } = useLanguage();

  const stats = t("trust.stats");
  const featuresData = t("trust.features");

  const icons = [
    <Zap className="w-6 h-6 text-amber-500" key="0" />,
    <CheckCircle2 className="w-6 h-6 text-green-500" key="1" />,
    <Headphones className="w-6 h-6 text-brand-500" key="2" />,
  ];

  return (
    <section className="py-20 border-t border-slate-100 dark:border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              {t("trust.titleStart")} <span className="text-brand-600 font-extrabold">{t("trust.titleEnd")}</span>
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-lg">
              {t("trust.desc")}
            </p>

            <div className="flex flex-col gap-6">
              {Array.isArray(featuresData) && featuresData.map((feature: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-xl border border-border">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-heading">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(stats) && stats.map((stat: any, idx: number) => (
                <div key={idx} className="glass-card p-6 text-center border-t-2 border-t-brand-500 hover:-translate-y-1 transition-transform">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-heading">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 mt-4 bg-card/50">
              <h3 className="font-semibold text-heading mb-4 uppercase tracking-wider text-sm">{t("trust.techStack")}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium border border-border transition-colors hover:border-brand-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
