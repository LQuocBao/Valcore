"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full p-1 bg-slate-200 dark:bg-slate-800 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 0 : 90,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            position: "absolute"
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="text-amber-500" size={14} />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -90 }}
          animate={{
            rotate: isDark ? 0 : -90,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            position: "absolute"
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="text-indigo-400" size={14} />
        </motion.div>
      </motion.div>
      
      {/* Background icons for visual cue */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none opacity-20 dark:opacity-40 transition-opacity">
        <Sun className="text-amber-600" size={12} />
        <Moon className="text-indigo-600" size={12} />
      </div>
    </button>
  );
}
