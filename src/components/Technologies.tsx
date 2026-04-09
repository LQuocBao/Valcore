"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Cloud,
  ShoppingBag,
  Smartphone,
  Brain,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const techCategories = [
  {
    icon: Monitor,
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-500",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    labelKey: "tech.frontend",
    techs: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "Vite",
      "Redux",
      "Zustand",
      "Styled Components",
      "Sass / SCSS",
      "HTML5 / CSS3",
    ],
  },
  {
    icon: Server,
    color: "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-500",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    labelKey: "tech.backend",
    techs: [
      "Node.js",
      "Laravel",
      "Express.js",
      "NestJS",
      "Python",
      "Django",
      "Go (Golang)",
      "Ruby on Rails",
      "PHP",
      "Java Spring",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Prisma",
      "GraphQL",
    ],
  },
  {
    icon: Cloud,
    color: "from-sky-500/20 to-indigo-500/10 border-sky-500/30 text-sky-500",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    labelKey: "tech.cloud",
    techs: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Netlify",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
      "PM2",
      "CI/CD Pipelines",
      "Linux Server",
    ],
  },
  {
    icon: ShoppingBag,
    color: "from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-500",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    labelKey: "tech.ecommerce",
    techs: [
      "WooCommerce",
      "Shopify",
      "Magento",
      "BigCommerce",
      "WordPress",
      "Ghost CMS",
      "Strapi (Headless)",
      "Contentful",
      "Sanity.io",
      "Directus",
      "Payload CMS",
    ],
  },
  {
    icon: Smartphone,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-500",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    labelKey: "tech.mobile",
    techs: [
      "React Native",
      "Flutter",
      "Ionic",
      "Swift (iOS)",
      "Kotlin (Android)",
      "Expo",
      "Apple SDK",
      "Firebase Mobile",
      "Push Notifications",
    ],
  },
  {
    icon: Brain,
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-500",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    labelKey: "tech.ai",
    techs: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Anthropic API",
      "LangChain",
      "AutoGPT",
      "Computer Vision",
      "NLP",
      "Pandas / NumPy",
      "Hugging Face",
      "Stable Diffusion",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="py-24 relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/3 rounded-full blur-3xl" />
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
            {t("tech.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mt-4">
            {t("tech.titleStart")}{" "}
            <span className="text-brand-600 font-extrabold">{t("tech.titleEnd")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            {t("tech.desc")}
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {techCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`relative p-6 rounded-2xl border bg-gradient-to-br ${category.color} backdrop-blur-sm`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl border ${category.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-heading">
                    {t(category.labelKey)}
                  </h3>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/70 border border-border text-foreground text-xs font-medium hover:border-current transition-colors cursor-default shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative badge count */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-background/50 border border-current/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold">{category.techs.length}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
