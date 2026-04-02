import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Valcore | Thiết Kế Website Chuyên Nghiệp - Giúp Bạn Phát Triển Kiến Doanh",
  description: "Dịch vụ thiết kế website chuyên nghiệp, nhanh chóng và giá cả hợp lý. Tôi xây dựng website giúp bạn phát triển kiến doanh hiệu quả.",
  other: {
    "theme-color": "#4f46e5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans antialiased overflow-x-hidden relative flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
