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
      about: "Về Chúng Tôi",
      services: "Dịch Vụ",
      portfolio: "Dự Án",
      process: "Quy Trình",
      testimonials: "Đánh Giá",
      faq: "Câu Hỏi",
      pricing: "Báo Giá",
      contact: "Liên Hệ Khảo Sát",
      talk: "Trò Chuyện",
    },
    hero: {
      trustBadge: "Được tin chọn bởi sinh viên & doanh nghiệp nhỏ",
      titleStart: "Giải pháp công nghệ toàn diện giúp",
      titleHighlight: "đột phá kinh doanh",
      desc: "Từ Web, Mobile App đến AI và Cloud. Chúng tôi biến ý tưởng kỹ thuật của bạn thành sản phẩm thực tế, chuẩn hiệu năng và tối ưu chi phí.",
      getWebsite: "Bắt Đầu Dự Án",
      contactMe: "Liên Hệ Trực Tiếp",
      fastDeliveryTitle: "Giao Hàng Nhanh",
      fastDeliveryDesc: "3-7 ngày",
      qaTitle: "Chất Lượng Cao",
      qaDesc: "Không lỗi (Bug-free)",
    },
    trust: {
      badge: "Về Chúng Tôi",
      titleStart: "Vài nét về",
      titleEnd: "Valcore",
      desc: "Valcore là đội ngũ chuyên gia công nghệ đam mê sáng tạo, chuyên cung cấp các giải pháp phần mềm toàn diện từ Web, Mobile App đến AI và hạ tầng Cloud. Sứ mệnh của chúng tôi là đồng hành cùng khách hàng biến những ý tưởng phức tạp thành sản phẩm thực tế, chuẩn hiệu năng và tối ưu chi phí.",
      cta: "Bắt Đầu Ngay",
      stats: [
        { value: "3+", label: "Năm kinh nghiệm" },
        { value: "40+", label: "Dự án hoàn thành" },
        { value: "100%", label: "Khách hàng hài lòng" },
      ],
      features: [
        { title: "Giao Nhanh Chóng", desc: "Hoàn thành chỉ từ 3–7 ngày làm việc" },
        { title: "Giá Cả Phải Chăng", desc: "Gói cố định, không phát sinh chi phí ẩn" },
        { title: "Hỗ Trợ 24/7", desc: "Luôn đồng hành cùng bạn sau bàn giao" },
      ],
    },
    tech: {
      badge: "Công Nghệ",
      titleStart: "Bộ công cụ",
      titleEnd: "chúng tôi sử dụng",
      desc: "Chúng tôi lựa chọn và sử dụng các công nghệ hiện đại nhất để đảm bảo sản phẩm của bạn luôn nhanh, bảo mật và dễ mở rộng.",
      frontend: "Frontend Development",
      backend: "Backend Development",
      cloud: "Cloud & DevOps",
      ecommerce: "E-commerce & CMS",
      mobile: "Mobile Development",
      ai: "AI & Machine Learning",
    },
    services: {
      badge: "Dịch vụ của chúng tôi",
      titleStart: "Giải pháp toàn diện cho",
      titleEnd: "hiện diện số của bạn",
      items: [
        {
          title: "Phát Triển Web & App",
          description: "Xây dựng hệ thống Web mạnh mẽ (Next.js, React) và ứng dụng di động (React Native) chuẩn hiệu năng cao.",
        },
        {
          title: "Giải Pháp AI & Chatbot",
          description: "Tích hợp trí tuệ nhân tạo (OpenAI, Anthropic) và chatbot tự động vào quy trình kinh doanh của bạn.",
        },
        {
          title: "Hệ Thống & Cloud",
          description: "Thiết kế kiến trúc hệ thống, triển khai Cloud (AWS, GCP) và tối ưu hóa hạ tầng DevOps chuyên nghiệp.",
        },
        {
          title: "Tư Vấn & Đồ Án IT",
          description: "Hỗ trợ giải quyết các bài toán kỹ thuật phức tạp, tư vấn công nghệ và đồng hành cùng đồ án sinh viên.",
        },
      ],
    },
    pricing: {
      badge: "Bảng Giá Dịch Vụ",
      titleStart: "Giá cả rõ ràng,",
      titleEnd: "không phát sinh thêm chi phí",
      desc: "Chúng tôi có nhiều gói phù hợp với từng nhu cầu — từ sinh viên IT đến doanh nghiệp quy mô lớn.",
      popular: "Phổ Biến Nhất",
      cta: "Liên Hệ Ngay",
      footnote: "⚡️ Giá trên chỉ mang tính tham khảo. Liên hệ để nhận báo giá chính xác theo dự án của bạn.",
      plans: [
        {
          name: "Tư Vấn & Đồ Án IT",
          tag: "Ưu Đãi",
          desc: "Hỗ trợ đồ án tốt nghiệp và tư vấn giải pháp kỹ thuật cho sinh viên.",
          price: "490.000đ",
          originalPrice: "750.000đ",
          unit: "dự án",
          note: "Hỗ trợ fix bug đến khi bảo vệ xong",
          popular: false,
          features: [
            "Phân tích đề tài và lập kế hoạch",
            "Viết code sạch, dễ hiểu (Next.js, Node...)",
            "Thiết kế cơ sở dữ liệu ERD / UML",
            "Hướng dẫn trình bày trước hội đồng",
            "Hỗ trợ cài đặt & triển khai local/cloud",
            "Đảm bảo pass hoặc hoàn toàn miễn phí",
          ],
        },
        {
          name: "Landing Page",
          tag: "Tối Ưu",
          desc: "Các trang web một trang tối ưu tỷ lệ chuyển đổi cho marketing.",
          price: "1.900.000đ",
          originalPrice: "2.500.000đ",
          unit: "dự án",
          note: "Bao gồm domain .com & hosting 1 năm",
          popular: false,
          features: [
            "Giao diện chuẩn hiện đại, responsive",
            "Tốc độ tải trang siêu tốc (90+ Score)",
            "Chuẩn SEO Google (meta, sitemap)",
            "Tích hợp Zalo / Facebook Chat",
            "Kết nối Google Sheets / Email nhận Form",
            "Bảo hành & bảo trì trọn đời",
          ],
        },
        {
          name: "Website Doanh Nghiệp",
          tag: "Chuyên Nghiệp",
          desc: "Website giới thiệu công ty, dịch vụ với đầy đủ tính năng chuẩn SEO.",
          price: "4.900.000đ",
          originalPrice: "5.500.000đ",
          unit: "dự án",
          note: "Tùy chỉnh không giới hạn theo brand",
          popular: true,
          features: [
            "Thiết kế độc quyền theo nhận diện thương hiệu",
            "Hệ thống CMS quản lý bài viết/dịch vụ",
            "Đa ngôn ngữ (VI/EN) chuẩn quốc tế",
            "Tối ưu UI/UX tăng trải nghiệm người dùng",
            "Bảo mật SSL & Chống Spam nâng cao",
            "Hỗ trợ nội dung & hình ảnh ban đầu",
          ],
        },
        {
          name: "Thương Mại Điện Tử",
          tag: "E-Commerce",
          desc: "Cửa hàng online chuyên nghiệp với quản lý kho, đơn và thanh toán.",
          price: "9.900.000đ",
          originalPrice: "10.800.000đ",
          unit: "dự án",
          note: "Giải pháp bán hàng tự động 24/7",
          popular: false,
          features: [
            "Quản lý sản phẩm, kho hàng & đơn hàng",
            "Tích hợp thanh toán QR, Chuyển khoản, MoMo",
            "Hệ thống mã giảm giá & membership",
            "Tự động tính phí vận chuyển GHTK/GHN",
            "Dashboard báo cáo doanh thu chi tiết",
            "Đồng bộ landing page bán hàng cực nhanh",
          ],
        },
        {
          name: "AI & Chatbot",
          tag: "Thông Minh",
          desc: "Xây dựng và tích hợp chatbot AI (OpenAI/Anthropic) vào quy trình.",
          price: "2.900.000đ",
          originalPrice: "3.500.000đ",
          unit: "dự án",
          note: "Tự động hóa chăm sóc khách hàng",
          popular: false,
          features: [
            "Kết nối OpenAI, Groq, Anthropic API",
            "Training dữ liệu theo file (PDF, Docx, URL)",
            "Tích hợp Chatbot vào Web / Zalo / Telegram",
            "Ghi nhớ lịch sử hội thoại khách hàng",
            "Tự động tư vấn & chốt đơn theo kịch bản",
            "Dashboard quản lý hội thoại thời gian thực",
          ],
        },
        {
          name: "Ứng Dụng Di Động",
          tag: "Đa Nền Tảng",
          desc: "Phát triển ứng dụng mobile (iOS/Android) mượt mà bằng React Native/Flutter.",
          price: "8.900.000đ",
          originalPrice: "10.000.000đ",
          unit: "dự án",
          note: "Trải nghiệm app Native đỉnh cao",
          popular: false,
          features: [
            "Hỗ trợ cả hai nền tảng iOS & Android",
            "Hiệu năng mượt mà, giao diện hiện đại",
            "Đẩy thông báo (Push Notifications)",
            "Tích hợp bản đồ & định vị GPS",
            "Kết nối API & Cơ sở dữ liệu thời gian thực",
            "Hỗ trợ đưa app lên App Store & Google Play",
          ],
        },
      ],
    },
    why: {
      badge: "Tại Sao Là Chúng Tôi",
      titleStart: "Đối tác công nghệ tận tâm",
      titleEnd: "để xây dựng hệ thống",
      desc: "Thay thế các ngôn ngữ kỹ thuật khô khan bằng sự thân thiện và minh bạch để bạn hoàn toàn tập trung vào việc kinh doanh.",
      cta: "Bắt Đầu Dự Án Ngay",
      points: [
        { title: "Báo Cáo Minh Bạch", desc: "Không sử dụng thuật ngữ chuyên ngành gây rối trí. Tôi làm rõ mọi thứ sao cho bạn dễ hiểu nhất." },
        { title: "Tốc Độ Nhanh Chóng", desc: "Thời gian là tiền bạc. Tôi cung cấp giải pháp làm web gọn gàng, nhanh chóng cho bạn." },
        { title: "Giá Cả Tiêu Chuẩn", desc: "Dù bạn là sinh viên hay một doanh nghiệp nhỏ, các gói giá luôn dễ chịu và phù hợp ngân sách." },
        { title: "Hỗ Trợ Mọi Mặt", desc: "Không bao giờ 'bỏ chạy' sau khi bàn giao. Chúng tôi luôn sẵn sàng đứng phía sau hỗ trợ lâu dài." },
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
          title: "Ứng Dụng Di Động Tài Chính",
          description: "Quản lý dòng tiền cá nhân với giao diện trực quan, bảo mật cao và đồng bộ hóa đa thiết bị.",
          tag: "Mobile App",
          image: "/business.png"
        },
        {
          title: "Cổng Thông Tin Nội Bộ",
          description: "Giải pháp quản lý nhân sự và giao tiếp nội bộ cho các tổ chức chuyên nghiệp.",
          tag: "Hệ Thống",
          image: "/student.png"
        },
        {
          title: "Hệ Thống Chatbot AI",
          description: "Tích hợp AI để tự động hóa quy trình chăm sóc khách hàng và phản hồi thông minh 24/7.",
          tag: "AI / Tech",
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
      zaloLabel: "Quốc Bảo - Valcore Tech",
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
    },
    chat: {
      botName: "Val — Trợ lý AI",
      status: "Trực tuyến",
      poweredBy: "Được tổng hợp bởi Groq AI • Valcore 2025",
      inputPlaceholder: "Nhập câu hỏi của bạn...",
      greeting: "Xin chào! Tôi là **Val** 👋 - trợ lý AI của **Valcore**.\n\nTôi có thể giúp bạn tìm hiểu về dịch vụ, giá cả, bảo hành trọn đời hoặc tặng domain .com. Bạn cần hỗ trợ gì?",
      tooltip: "Val nè! Bạn cần hỗ trợ làm web hay đồ án không? Inbox mình nhé! ✨",
    }
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      testimonials: "Testimonials",
      faq: "FAQ",
      pricing: "Pricing",
      contact: "Contact Me",
      talk: "Let's Talk",
    },
    hero: {
      trustBadge: "Trusted by small businesses & students",
      titleStart: "Comprehensive tech solutions to",
      titleHighlight: "scale your business",
      desc: "From Web and Mobile Apps to AI and Cloud. We turn your technical ideas into high-performance digital products efficiently.",
      getWebsite: "Start a Project",
      contactMe: "Contact Me",
      fastDeliveryTitle: "Fast Delivery",
      fastDeliveryDesc: "3-7 days",
      qaTitle: "Premium QA",
      qaDesc: "100% bug-free",
    },
    trust: {
      badge: "About Us",
      titleStart: "A little about",
      titleEnd: "Valcore",
      desc: "Valcore is a team of passionate technology experts providing comprehensive software solutions from Web and Mobile Apps to AI and Cloud infrastructure. Our mission is to partner with you to transform complex ideas into high-performance digital products efficiently.",
      cta: "Get Started",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "40+", label: "Projects Completed" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      features: [
        { title: "Fast Delivery", desc: "Completed in just 3–7 working days" },
        { title: "Affordable Pricing", desc: "Fixed packages, no hidden fees" },
        { title: "24/7 Support", desc: "Always here for you after delivery" },
      ],
    },
    tech: {
      badge: "Technologies",
      titleStart: "Our",
      titleEnd: "tech stack",
      desc: "We handpick the most modern, battle-tested technologies to ensure your product is fast, secure, and easy to scale.",
      frontend: "Frontend Development",
      backend: "Backend Development",
      cloud: "Cloud & DevOps",
      ecommerce: "E-commerce & CMS",
      mobile: "Mobile Development",
      ai: "AI & Machine Learning",
    },
    services: {
      badge: "My Services",
      titleStart: "Everything you need for a",
      titleEnd: "successful digital presence",
      items: [
        {
          title: "Web & App Development",
          description: "Building powerful Web systems (Next.js, React) and high-performance mobile applications (React Native).",
        },
        {
          title: "AI & Chatbot Solutions",
          description: "Integrating Artificial Intelligence (OpenAI, Anthropic) and automated chatbots into your business workflow.",
        },
        {
          title: "Systems & Cloud",
          description: "Architecting system backends, Cloud deployment (AWS, GCP), and professional DevOps infrastructure optimization.",
        },
        {
          title: "IT Consulting & Projects",
          description: "Solving complex technical problems, providing tech consulting, and comprehensive support for IT student projects.",
        },
      ],
    },
    pricing: {
      badge: "Service Pricing",
      titleStart: "Transparent pricing,",
      titleEnd: "no hidden fees",
      desc: "We have flexible packages suited for every need — from IT students to growing enterprises.",
      popular: "Most Popular",
      cta: "Get in Touch",
      footnote: "⚡️ Prices are indicative. Contact us for an accurate quote tailored to your project.",
      plans: [
        {
          name: "IT Projects",
          tag: "Student",
          desc: "Graduation project support and tech consulting for IT students.",
          price: "$20",
          originalPrice: "$30",
          unit: "project",
          note: "Pass guarantee with clean code",
          popular: false,
          features: [
            "Topic analysis & strategy planning",
            "Clean Next.js/Node.js source code",
            "Database design (ERD, UML)",
            "Defense presentation guidance",
            "Local/Cloud deployment support",
            "Free bug fix until final defense",
          ],
        },
        {
          name: "Landing Page",
          tag: "Optimized",
          desc: "High-converting single pages perfect for marketing campaigns.",
          price: "$79",
          originalPrice: "$100",
          unit: "project",
          note: "Includes domain & 1yr hosting",
          popular: false,
          features: [
            "Modern responsive UI/UX design",
            "Ultra-fast loading (90+ score)",
            "Google SEO optimized (Meta, Schema)",
            "Integrated Live Chat buttons",
            "Google Sheets/Email form integration",
            "Lifetime maintenance support",
          ],
        },
        {
          name: "Business Website",
          tag: "Professional",
          desc: "Corporate websites and service portals with full SEO suite.",
          price: "$199",
          originalPrice: "$230",
          unit: "project",
          note: "Unlimited brand customization",
          popular: true,
          features: [
            "Unique design based on brand ID",
            "Powerful CMS for blog/services",
            "International Multilanguage (VI/EN)",
            "User experience focused UI/UX",
            "SSL & Advanced Spam Protection",
            "Initial content & image setup",
          ],
        },
        {
          name: "E-Commerce",
          tag: "Storefront",
          desc: "Professional online store with inventory and payment systems.",
          price: "$399",
          originalPrice: "$450",
          unit: "project",
          note: "24/7 automated sales solution",
          popular: false,
          features: [
            "Product, Stock & Order Management",
            "Integrated payment gateways",
            "Discount & Membership systems",
            "Automated shipping cost calculation",
            "Detailed revenue reporting dashboard",
            "Sales landing page synchronization",
          ],
        },
        {
          name: "AI & Chatbot",
          tag: "Smart",
          desc: "Build and integrate AI chatbots (OpenAI/Anthropic) into workflows.",
          price: "$119",
          originalPrice: "$140",
          unit: "project",
          note: "Automated customer support",
          popular: false,
          features: [
            "OpenAI, Groq, Anthropic integration",
            "Training on custom data (PDF, URL)",
            "Web / Zalo / Telegram deployment",
            "Conversation history persistence",
            "Automated sales/support scripting",
            "Real-time chat management dashboard",
          ],
        },
        {
          name: "Mobile Application",
          tag: "Multi-platform",
          desc: "Developing smooth mobile apps (iOS/Android) using React Native/Flutter.",
          price: "$349",
          originalPrice: "$400",
          unit: "project",
          note: "Premium Native Experience",
          popular: false,
          features: [
            "iOS & Android platform support",
            "High performance & Modern UI",
            "Integrated Push Notifications",
            "Maps & GPS location services",
            "API & Real-time DB integration",
            "App Store & Google Play submission",
          ],
        },
      ],
    },
    why: {
      badge: "Why Choose Me",
      titleStart: "Your dedicated",
      titleEnd: "web partner",
      desc: "Working with a tech partner shouldn't be stressful. We prioritize a friendly, seamless experience so you can focus on running your business while we handle the tech.",
      cta: "Start Your Project",
      points: [
        { title: "Clear communication", desc: "No technical jargon or confusion. I explain everything simply so you know exactly what you're getting." },
        { title: "Fast turnaround time", desc: "Time is money. I build high-quality websites efficiently so you can launch faster without compromising on quality." },
        { title: "Affordable pricing", desc: "Whether you're a student building a graduation project or a small business owner, my rates are budget-friendly." },
        { title: "Real ongoing support", desc: "We don't just disappear after delivery. We are here to ensure your website continues to run smoothly long-term." },
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
          title: "FinTech Mobile Application",
          description: "Personal finance management with intuitive UI, high security, and cross-device synchronization.",
          tag: "Mobile App",
          image: "/business.png"
        },
        {
          title: "Corporate Intranet Portal",
          description: "Professional internal solutions for HR management and streamlined communication in modern organizations.",
          tag: "Systems",
          image: "/student.png"
        },
        {
          title: "AI Chatbot System",
          description: "Integrating AI to automate customer service workflows and provide 24/7 intelligent responses.",
          tag: "AI / Tech",
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
    },
    chat: {
      botName: "Val — AI Assistant",
      status: "Online",
      poweredBy: "Powered by Groq AI • Valcore 2025",
      inputPlaceholder: "Type your question...",
      greeting: "Hello! I am **Val** 👋 - Valcore's AI assistant.\n\nI can help you learn about our services, pricing, lifetime warranty, or free .com domain. How can I help you today?",
      tooltip: "Val here! Need help with web design or a project? Let's talk! ✨",
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
