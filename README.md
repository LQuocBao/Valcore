# 🚀 Valcore — Personal Brand Landing Page

> **"Thiết kế website chuyên nghiệp giúp bạn phát triển kinh doanh"**  
> Nhanh chóng · Giá cả hợp lý · Chất lượng vượt trội

---

## 👤 Về Tôi

**Lâm Quốc Bảo** – Nhà phát triển web tự do (Freelance Web Developer) với hơn 3 năm kinh nghiệm xây dựng giao diện web hiện đại, tối ưu hiệu năng và thiết kế hướng chuyển đổi (conversion-focused).

Tôi chuyên phục vụ **sinh viên IT**, **tiểu thương**, **chủ cửa hàng online** và **doanh nghiệp vừa & nhỏ** — những người cần website đẹp, chạy nhanh, và có ngân sách hợp lý.

- 📞 **Zalo / Phone:** +84 78 554 8882
- 📧 **Email:** lamquocbao26042005@gmail.com

---

## ✨ Điểm Nổi Bật Của Dự Án

| Hạng mục | Điểm số |
|---|---|
| ⚡ Performance | **90 – 95 / 100** |
| ♿ Accessibility | **91 / 100** |
| ✅ Best Practices | **96 / 100** |
| 🔍 SEO | **100 / 100** |

> *Đo bằng Google Lighthouse trên bản Production (incognito mode)*

---

## 🛠️ Tech Stack

| Công nghệ | Mục đích |
|---|---|
| **Next.js 16** (App Router) | Framework React với Static Site Generation |
| **TypeScript** | Type-safety cho toàn bộ codebase |
| **Tailwind CSS v4** | Utility-first styling, zero runtime CSS |
| **Framer Motion** | Animations mượt mà trên các section phụ |
| **Lucide React** | Icon library nhẹ và nhất quán |
| **next/font** | Font tối ưu, zero layout shift |
| **next/image** | Image optimization tự động (WebP, lazy load) |

---

## 🏗️ Cấu Trúc Dự Án

```
valcore/
├── public/                   # Ảnh portfolio, favicon
│   ├── business.png
│   ├── student.png
│   └── portfolio_*.png
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, font, SEO metadata
│   │   ├── page.tsx          # Trang chủ, dynamic imports
│   │   └── globals.css       # CSS toàn cục, keyframes, design tokens
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header, mobile menu, language switcher
│   │   ├── Hero.tsx          # Section chính, CTA, floating cards (pure CSS)
│   │   ├── Trust.tsx         # Stats & tech stack
│   │   ├── Services.tsx      # 4 dịch vụ chính
│   │   ├── WhyChooseMe.tsx   # Điểm mạnh cạnh tranh
│   │   ├── Portfolio.tsx     # Danh sách dự án, lazy load ảnh
│   │   ├── Process.tsx       # 3-bước quy trình
│   │   ├── Testimonials.tsx  # Review từ khách hàng
│   │   ├── Contact.tsx       # Thông tin liên hệ & form
│   │   ├── Footer.tsx        # Footer với links & branding
│   │   └── ScrollToTop.tsx   # Floating scroll-to-top button
│   └── context/
│       └── LanguageContext.tsx  # i18n: Tiếng Việt / English
└── README.md
```

---

## 🌐 Tính Năng

- **Đa ngôn ngữ (i18n):** Chuyển đổi mượt giữa 🇻🇳 Tiếng Việt và 🇺🇸 English, lưu lựa chọn vào localStorage
- **Dark Mode:** Tự động theo system preference, hỗ trợ đầy đủ toàn bộ giao diện
- **Responsive:** Tối ưu Mobile → Tablet (lg breakpoint) → Desktop
- **SEO sẵn sàng:** Meta tags, semantic HTML, heading hierarchy chuẩn, JSON title/description
- **Hiệu năng cao:** Dynamic imports, CSS-only animations ở Hero, `font-display: swap`, `next/image`
- **Accessibility:** ARIA labels, keyboard navigation, contrast ratio đạt chuẩn WCAG

---

## 🎨 Design System

**Màu chủ đạo (Brand colors):**

```
brand-400: #818cf8  (Indigo tươi – Dark mode)
brand-500: #6366f1  (Indigo – Primary)
brand-600: #4f46e5  (Indigo đậm – CTA, accent)
brand-700: #4338ca  (Indigo sâu)
```

**Typography:** Inter (Google Fonts) — `display: swap`, preload từ Next.js

**Hiệu ứng đặc trưng:**
- `glass` / `glass-card` — Glassmorphism với `backdrop-blur`
- `text-gradient` — Gradient text từ brand-600 → indigo-400
- `float-up` / `float-down` — Floating card animations (pure CSS `@keyframes`)
- `animate-fade-in-up` — Reveal animation cho Hero content

---

## 🚀 Chạy Dự Án

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Development
```bash
npm install
npm run dev
# Mở http://localhost:3000
```

### Production Build
```bash
npm run build
npx next start -p 3000
# Mở http://localhost:3000
```

### Kiểm tra Lighthouse
> **Quan trọng:** Luôn đo trên bản Production trong Tab Ẩn Danh để có kết quả chính xác.

```bash
npm run build
npx next start -p 3001
# Mở http://localhost:3001 trong Incognito → F12 → Lighthouse
```

---

## 📦 Deploy

Dự án tương thích với mọi nền tảng hỗ trợ Next.js:

| Nền tảng | Cách Deploy |
|---|---|
| **Vercel** (khuyến nghị) | `vercel deploy` hoặc kết nối GitHub repo |
| **Netlify** | Build command: `npm run build`, Publish: `.next` |
| **VPS / Server** | `npm run build && npx next start -p 80` |

---

## 📬 Liên Hệ & Hợp Tác

Bạn muốn đặt làm website hoặc có câu hỏi về dự án? Liên hệ ngay:

| Kênh | Thông tin |
|---|---|
| 💬 Zalo | [+84 78 554 8882](https://zalo.me/84785548882) |
| 📧 Email | [lamquocbao26042005@gmail.com](mailto:lamquocbao26042005@gmail.com) |

---

## 📄 Bản Quyền

© {year} **Lâm Quốc Bảo – Valcore**. All rights reserved.  
*"Làm dâu trăm họ — Thiết kế cho mọi nhà."*
