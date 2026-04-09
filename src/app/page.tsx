import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeToggle } from "@/components/ThemeToggle";

const Trust = dynamic(() => import("@/components/Trust"));
const Technologies = dynamic(() => import("@/components/Technologies"));
const Services = dynamic(() => import("@/components/Services"));
const WhyChooseMe = dynamic(() => import("@/components/WhyChooseMe"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Process = dynamic(() => import("@/components/Process"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
import FAQ from "@/components/FAQ";
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <div className="w-full">
        <Hero />
        <Trust />
        <Technologies />
        <Services />
        <WhyChooseMe />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <ScrollToTop />

        {/* Zalo Button */}
        <a
          href="https://zalo.me/84123456789"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#0068ff] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          title="Zalo"
          aria-label="Liên hệ qua Zalo"
        >
          <div className="relative w-full h-full flex items-center justify-center group-hover:bg-white/5 transition-colors">
            {/* White Speech Bubble Shape */}
            <svg className="absolute w-[80%] h-[80%]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 17.5C35 25.5081 28.2843 32 20 32C18.2323 32 16.5413 31.7062 14.9818 31.1633C14.0431 32.1864 12.3361 33.6496 10.3644 34.629C10.0246 34.7978 9.65886 34.4551 9.77114 34.0935C10.3138 32.3458 10.8715 30.1378 11.0347 28.529C7.36942 26.0469 5 22.0526 5 17.5C5 9.49187 11.7157 3 20 3C28.2843 3 35 9.49187 35 17.5Z" fill="white" />
            </svg>
            {/* Zalo Text */}
            <span className="relative z-10 text-[#0068ff] font-bold text-[10px] sm:text-[11px] leading-none mb-1">Zalo</span>
          </div>
        </a>

        {/* Messenger Button */}
        <a
          href="https://m.me/valcore"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-[#0695FF] via-[#A334FA] to-[#FF6968] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
          title="Messenger"
          aria-label="Liên hệ qua Messenger"
        >
          <svg className="w-9 h-9 brightness-110" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C12.95 4 4 12.2 4 22.35C4 28.13 6.64 33.2 10.78 36.63C11.13 36.92 11.35 37.35 11.37 37.81L11.53 42.64C11.56 43.6 12.63 44.18 13.43 43.64L18.66 40.12C18.98 39.9 19.37 39.84 19.74 39.94C21.11 40.31 22.53 40.51 24 40.51C35.05 40.51 44 32.31 44 22.16C44 12.01 35.05 4 24 4Z" fill="white" />
            <path d="M33.63 17.37L26.79 24.63C26.15 25.31 25.1 25.35 24.41 24.71L20.25 20.85L12.44 26.54C11.66 27.11 10.63 26.16 11.17 25.33L18.01 18.07C18.65 17.39 19.7 17.35 20.39 17.99L24.55 21.85L32.36 16.16C33.14 15.59 34.17 16.54 33.63 17.37Z" fill="url(#messenger_bolt)" />
            <defs>
              <linearGradient id="messenger_bolt" x1="12.44" y1="21.35" x2="33.63" y2="21.35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0695FF" />
                <stop offset="0.5" stopColor="#A334FA" />
                <stop offset="1" stopColor="#FF6968" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>

      {/* Theme Toggle - Floating Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="glass p-2 rounded-full shadow-2xl border border-border/50 hover:scale-110 transition-transform bg-white/10 dark:bg-black/10">
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}
