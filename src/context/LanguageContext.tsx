"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, any> = {
  vi: {
    nav: {
      services: "Dịch Vụ",
      portfolio: "Dự Án",
      process: "Quy Trình",
      testimonials: "Đánh Giá",
      contact: "Liên Hệ Khảo Sát",
      talk: "Trò Chuyện",
    },
    hero: {
      trustBadge: "Được tin chọn bởi sinh viên & doanh nghiệp nhỏ",
      titleStart: "Thiết kế website chuyên nghiệp giúp bạn",
      titleHighlight: "phát triển kinh doanh",
      desc: "Nhanh chóng, giá cả hợp lý và được tinh chỉnh cho nhu cầu của bạn. Biến ý tưởng thành hiện thực chỉ trong vài ngày.",
      getWebsite: "Nhận Báo Giá",
      contactMe: "Liên Hệ Trực Tiếp",
      fastDeliveryTitle: "Giao Hàng Nhanh",
      fastDeliveryDesc: "3-7 ngày",
      qaTitle: "Chất Lượng Cao",
      qaDesc: "Không lỗi (Bug-free)",
    },
    trust: {
      titleStart: "Tại sao nên đồng hành cùng",
      titleEnd: "Valcore?",
      desc: "Tôi chuyên tạo các trang web với giao diện vượt trội và tỷ lệ chuyển đổi cao. Dành cho sinh viên cần đồ án hoặc chủ shop cần bán hàng online với chi phí tiết kiệm.",
      stats: [
        { value: "3+", label: "Năm kinh nghiệm" },
        { value: "40+", label: "Dự án hoàn thành" },
        { value: "100%", label: "Khách hàng hài lòng" },
      ],
      features: [
        { title: "Giao Nhanh Chóng", desc: "Chỉ từ 3-7 ngày" },
        { title: "Giá Cả Phải Chăng", desc: "Không phát sinh chi phí" },
        { title: "Hỗ Trợ 24/7", desc: "Luôn đồng hành cùng bạn" },
      ],
      techStack: "Công nghệ sử dụng",
    },
    services: {
      badge: "Dịch vụ của tôi",
      titleStart: "Giải pháp toàn diện cho",
      titleEnd: "hiện diện số của bạn",
      items: [
        {
          title: "Thiết Kế Web",
          description: "Giao diện hiện đại, tải trang siêu tốc, tuỳ chỉnh đặc biệt để thu hút và chuyển đổi khách truy cập.",
        },
        {
          title: "Landing Page Cực Nét",
          description: "Các trang web một trang tối ưu tỷ lệ chuyển đổi, hoàn hảo cho chạy quảng cáo hoặc bán khoá học.",
        },
        {
          title: "Đồ Án Tốt Nghiệp",
          description: "Hỗ trợ sinh viên IT toàn diện với mã nguồn sạch đẹp, dễ hiểu và dễ dàng bảo vệ trước hội đồng.",
        },
        {
          title: "Bảo Trì Hệ Thống",
          description: "Giữ cho website hoạt động trơn tru 24/7 với các bản cập nhật, sửa lỗi bảo mật, tối ưu tốc độ.",
        },
      ],
    },
    why: {
      badge: "Tại Sao Là Tôi",
      titleStart: "Người cộng sự tận tâm",
      titleEnd: "để xây dựng hệ thống",
      desc: "Thay thế các ngôn ngữ kỹ thuật khô khan bằng sự thân thiện và minh bạch để bạn hoàn toàn tập trung vào việc kinh doanh.",
      cta: "Bắt Đầu Dự Án Ngay",
      points: [
        { title: "Báo Cáo Minh Bạch", desc: "Không sử dụng thuật ngữ chuyên ngành gây rối trí. Tôi làm rõ mọi thứ sao cho bạn dễ hiểu nhất." },
        { title: "Tốc Độ Nhanh Chóng", desc: "Thời gian là tiền bạc. Tôi cung cấp giải pháp làm web gọn gàng, nhanh chóng cho bạn." },
        { title: "Giá Cả Tiêu Chuẩn", desc: "Dù bạn là sinh viên hay một doanh nghiệp nhỏ, các gói giá luôn dễ chịu và phù hợp ngân sách." },
        { title: "Hỗ Trợ Mọi Mặt", desc: "Không bao giờ 'bỏ chạy' sau khi bàn giao. Tôi luôn sẵn sàng đứng phía sau hỗ trợ lâu dài." },
      ],
    },
    portfolio: {
      badge: "Dự Án Đã Làm",
      titleStart: "Các dự án",
      titleEnd: "tiêu biểu",
      viewAll: "Xem tất cả",
      caseStudy: "Chi tiết dự án",
      viewMore: "Xem Thêm Dự Án",
      mockupPlaceholder: "Hình Giao Diện",
      projects: [
        {
          title: "Thiết Kế Web Doanh Nghiệp",
          description: "Giao diện hiện đại, chuyên nghiệp dành cho các công ty khởi nghiệp và doanh nghiệp vừa và nhỏ.",
          tag: "Doanh Nghiệp",
          image: "/business.png"
        },
        {
          title: "Hệ Thống Quản Lý Giáo Dục",
          description: "Dashboard thông minh giúp theo dõi tiến độ học tập và quản lý dự án sinh viên hiệu quả.",
          tag: "Sinh Viên",
          image: "/student.png"
        },
        {
          title: "Trang Thương Mại Điện Tử",
          description: "Tối ưu hóa trải nghiệm mua sắm với thiết kế tối giản, tốc độ tải trang nhanh và chuẩn SEO.",
          tag: "Bán Hàng",
          image: "/portfolio_ecommerce.png"
        },
        {
          title: "Landing Page Bán Hàng",
          description: "Mẫu trang đích chuyên sâu cho chiến dịch marketing, thu thập lead và tăng doanh thu.",
          tag: "Marketing",
          image: "/business.png"
        },
        {
          title: "Cổng Thông Tin Nội Bộ",
          description: "Giải pháp quản lý nhân sự và giao tiếp nội bộ cho các tổ chức chuyên nghiệp.",
          tag: "Hệ Thống",
          image: "/student.png"
        },
        {
          title: "Ứng Dụng Blog Cá Nhân",
          description: "Nền tảng chia sẻ kiến thức tối ưu cho trải nghiệm đọc và tương tác với người dùng.",
          tag: "Cá Nhân",
          image: "/portfolio_restaurant.png"
        },
      ],
    },
    process: {
      badge: "Cách Thức Hoạt Động",
      titleStart: "Quy trình",
      titleEnd: "đơn giản & minh bạch",
      steps: [
        { title: "Trao đổi nhu cầu", desc: "Tìm hiểu chi tiết về phong cách yêu thích cũng như mục tiêu kinh doanh của dự án." },
        { title: "Thiết kế & Lập trình", desc: "Xây dựng dự án trên nền tảng công nghệ cao siêu mượt mà để chuẩn bị xuất xưởng." },
        { title: "Bàn giao & Hỗ trợ", desc: "Giao mã nguồn cho sinh viên hoặc hosting cho dự án thực tế, và tiếp tục hỗ trợ bạn." },
      ],
    },
    testimonials: {
      badge: "Phản Hồi",
      titleStart: "Bạn không tin? Hãy xem",
      titleEnd: "khách hàng nói gì",
      reviews: [
        { name: "Trần Minh Tuấn", role: "Chủ Cửa Hàng", content: "Tôi cần một landing page cho tiệm cafe mới và Valcore đã làm nhanh hơn mong đợi. Quá chất lượng!" },
        { name: "Nguyễn Hoàng An", role: "Sinh Viên IT", content: "Valcore hỗ trợ tôi đồ án cực kỳ nhiệt tình, code rành mạch và giúp tôi đạt điểm cao lúc bảo vệ." },
        { name: "Lê Quỳnh Mai", role: "Thợ Ảnh Tự Do", content: "Dịch vụ nhanh, web siêu đẹp mượt. Nhờ web mà tôi nhận được nhiều booking hơn hẳn lúc trước." },
      ]
    },
    contact: {
      titleStart: "Chốt lịch xây web ngay",
      titleEnd: "hôm nay!",
      urgency: "Đang CÓ KHUYẾN MÃI Tuần Này!",
      reachOut: "Liên Hệ Số Của Tôi",
      phone: "Gọi Khảo Sát",
      zaloLabel: "Quốc Bảo - Valcore",
      emailLabel: "Gửi Email",
      guaranteeTitle: "Phản hồi siêu nhanh",
      guaranteeDesc: "Tôi thường trực tuyến và trả lời trong vòng chưa tới 1 tiếng.",
      sendMessage: "Gửi tin nhắn ngay",
      formName: "Tên Của Bạn",
      formPhone: "Zalo / Số Điện Thoại",
      formMessage: "Dịch vụ bạn cần làm là gì?",
      formSubmit: "Nhận Phản Hồi",
    },
    footer: {
      rights: "Valcore. Bản quyền năm {year}. Làm dâu trăm họ - Thiết kế cho mọi nhà.",
      links: ["Dịch Vụ", "Dự Án", "Quy Trình"],
    }
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      testimonials: "Testimonials",
      contact: "Contact Me",
      talk: "Let's Talk",
    },
    hero: {
      trustBadge: "Trusted by small businesses & students",
      titleStart: "I build professional websites that help you",
      titleHighlight: "grow your business",
      desc: "Fast, affordable, and tailored for your needs. Turn your ideas into a beautiful, high-performing reality.",
      getWebsite: "Get a Website",
      contactMe: "Contact Me",
      fastDeliveryTitle: "Fast Delivery",
      fastDeliveryDesc: "3-7 days",
      qaTitle: "Premium QA",
      qaDesc: "100% bug-free",
    },
    trust: {
      titleStart: "Why work with",
      titleEnd: "Valcore?",
      desc: "I specialize in delivering high-quality, high-converting websites for small businesses and students without breaking the bank. My process is simple, transparent, and focused on results.",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "40+", label: "Projects Completed" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      features: [
        { title: "Fast Delivery", desc: "3-7 days turnaround" },
        { title: "Affordable Pricing", desc: "Fixed packages" },
        { title: "24/7 Support", desc: "Always here for you" },
      ],
      techStack: "Tech Stack",
    },
    services: {
      badge: "My Services",
      titleStart: "Everything you need for a",
      titleEnd: "successful digital presence",
      items: [
        {
          title: "Website Design & Dev",
          description: "Custom built, fast loading, and tailored specifically to attract and convert your target audience.",
        },
        {
          title: "Landing Pages",
          description: "High-converting single pages perfect for modern marketing campaigns, product launches, or events.",
        },
        {
          title: "Graduation Projects",
          description: "Affordable and comprehensive support for IT students. Get clean code and clear explanations to help you pass.",
        },
        {
          title: "Website Maintenance",
          description: "Keep your website running smoothly 24/7 with regular updates, security checks, and reliable support.",
        },
      ],
    },
    why: {
      badge: "Why Choose Me",
      titleStart: "Your dedicated",
      titleEnd: "web partner",
      desc: "Working with a developer shouldn't be stressful. I prioritize a friendly, seamless experience so you can focus on running your business while I handle the tech.",
      cta: "Start Your Project",
      points: [
        { title: "Clear communication", desc: "No technical jargon or confusion. I explain everything simply so you know exactly what you're getting." },
        { title: "Fast turnaround time", desc: "Time is money. I build high-quality websites efficiently so you can launch faster without compromising on quality." },
        { title: "Affordable pricing", desc: "Whether you're a student building a graduation project or a small business owner, my rates are budget-friendly." },
        { title: "Real ongoing support", desc: "I don't just disappear after delivery. I'm here to ensure your website continues to run smoothly long-term." },
      ],
    },
    portfolio: {
      badge: "Recent Work",
      titleStart: "Featured",
      titleEnd: "Projects",
      viewAll: "View all projects",
      caseStudy: "Case study",
      viewMore: "View More Projects",
      mockupPlaceholder: "E-Commerce Mockup",
      projects: [
        {
          title: "Modern Business Platform",
          description: "Clean and professional web design for startups and SMEs focused on digital growth.",
          tag: "Business",
          image: "/business.png"
        },
        {
          title: "Education Management System",
          description: "A smart dashboard helping students track academic progress and collaborative project milestones.",
          tag: "Student",
          image: "/student.png"
        },
        {
          title: "Next-Gen E-commerce",
          description: "Optimized shopping experience with minimal design, super fast loading, and SEO-friendly structure.",
          tag: "E-commerce",
          image: "/portfolio_ecommerce.png"
        },
        {
          title: "Sales Landing Page",
          description: "High-converting single pages tailored for marketing campaigns, lead generation, and revenue growth.",
          tag: "Marketing",
          image: "/business.png"
        },
        {
          title: "Corporate Intranet Portal",
          description: "Professional internal solutions for HR management and streamlined communication in modern organizations.",
          tag: "Enterprise",
          image: "/student.png"
        },
        {
          title: "Personal Blog Platform",
          description: "Optimized reading experience with minimal aesthetic for modern knowledge sharers and storytellers.",
          tag: "Personal",
          image: "/portfolio_restaurant.png"
        },
      ],
    },
    process: {
      badge: "How It Works",
      titleStart: "A simple, transparent",
      titleEnd: "process",
      steps: [
        { title: "Discuss your needs", desc: "We start with a quick chat to understand your goals, target audience, and current challenges. No technical jargon, just a simple conversation about what you need." },
        { title: "Design & Build", desc: "I will craft a modern, responsive design tailored for your brand, then build it using state-of-the-art technologies for maximum speed and performance." },
        { title: "Deliver & Support", desc: "After your approval, we launch! I also provide hands-on training to manage your site, plus ongoing support to ensure everything runs smoothly." },
      ],
    },
    testimonials: {
      badge: "Client Reviews",
      titleStart: "Don't just take my word for it.",
      titleEnd: "See what clients say",
      reviews: [
        { name: "Tran Minh Tuan", role: "Small Business Owner", content: "I needed a website for my new coffee shop and Valcore delivered it quickly. It looks amazing on mobile, and the process was so simple! Great communication throughout." },
        { name: "Nguyen Hoang An", role: "IT Student", content: "Valcore helped me structure and finalize my graduation project. The code is clean and he explained everything very clearly. Super supportive and affordable!" },
        { name: "Le Quynh Mai", role: "Freelance Photographer", content: "Fast service, beautiful design, and very responsive to feedback. My portfolio has never looked this professional. Highly recommend Valcore's services." },
      ]
    },
    contact: {
      titleStart: "Let's build your website",
      titleEnd: "today",
      urgency: "Limited slots available this week!",
      reachOut: "Reach out directly",
      phone: "Phone",
      zaloLabel: "Quoc Bao - Valcore",
      emailLabel: "Email",
      guaranteeTitle: "Fast Response Guarantee",
      guaranteeDesc: "I typically reply within 1-2 hours during business days.",
      sendMessage: "Send me a message",
      formName: "Your Name",
      formPhone: "Phone Number / Zalo",
      formMessage: "How can I help you?",
      formSubmit: "Send Message",
    },
    footer: {
      rights: "Valcore. All rights reserved. Built with ❤️ for small businesses.",
      links: ["Services", "Portfolio", "Process"],
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Client-side initialization to avoid hydration errors or set default empty initially
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    // Optionally check localStorage
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "vi" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
