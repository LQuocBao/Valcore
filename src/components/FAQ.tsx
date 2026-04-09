"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Làm sao để bắt đầu một dự án?",
    answer:
      "Hãy liên hệ với chúng tôi qua form ở mục Liên hệ, Zalo, hoặc Messenger. Chúng tôi sẽ sắp xếp một buổi thảo luận để hiểu rõ nhu cầu và mục tiêu dự án của bạn trước khi đưa ra đề xuất chi tiết.",
  },
  {
    question: "Thời gian hoàn thành một trang web là bao lâu?",
    answer:
      "Thời gian phụ thuộc vào quy mô và độ phức tạp của dự án. Với landing page thông thường mất khoảng 1 tuần, trong khi các hệ thống phức tạp hơn có thể từ 2-3 tuần. Chúng tôi sẽ cung cấp timeline ước tính chính xác sau khi tư vấn.",
  },
  {
    question: "Bạn có hỗ trợ sau khi bàn giao dự án không?",
    answer:
      "Có, chúng tôi luôn hỗ trợ khách hàng bảo hành kỹ thuật, sửa lỗi (nếu có) và hướng dẫn sử dụng chi tiết sau khi bàn giao. Ngoài ra chúng tôi còn cung cấp các gói bảo trì và nâng cấp lâu dài.",
  },
  {
    question: "Chi phí cho một trang web là bao nhiêu?",
    answer:
      "Mỗi dự án đều có đặc thù riêng và yêu cầu khác nhau về tính năng, giao diện. Vui lòng chia sẻ với chúng tôi về yêu cầu của bạn, chúng tôi sẽ tư vấn và đưa ra báo giá minh bạch, tối ưu nhất dành cho bạn.",
  },
  {
    question: "Tôi có thể tự cập nhật nội dung sau khi web hoàn thành không?",
    answer:
      "Hoàn toàn có thể. Chúng tôi luôn tích hợp hệ thống quản trị nội dung (CMS) thân thiện, dễ sử dụng kèm theo tài liệu hướng dẫn để bạn có thể tự quản lý và thay đổi nội dung trang web mà không cần kiến thức lập trình.",
  },
  {
    question: "Nếu thiết kế không ưng ý thì có được chỉnh sửa lại không?",
    answer:
      "Chúng tôi sẽ cung cấp cho bạn nhiều lựa chọn thiết kế ban đầu để duyệt. Ngoài ra chúng tôi hỗ trợ 2-3 lần chỉnh sửa tuỳ theo từng giai đoạn, đảm bảo sản phẩm cuối cùng đúng ý bạn nhất.",
  },
  {
    question: "Hình thức thanh toán cho dự án như thế nào?",
    answer:
      "Thông thường chi phí dự án được chia làm 2-3 đợt. Giai đoạn đầu thanh toán 30-50% thiết kế, và phần trả còn lại sau khi xuất bản và bàn giao toàn bộ source.",
  },
  {
    question: "Website sau khi làm xong có tối ưu SEO không?",
    answer:
      "Chắc chắn rồi! Tất cả sản phẩm của chúng tôi đều được tối ưu tốc độ (Core Web Vitals), cấu trúc HTML/Meta, thân thiện với các công cụ tìm kiếm và thiết bị di động (Responsive).",
  },
  {
    question: "Mã nguồn trang web (source code) sẽ thuộc về ai?",
    answer:
      "Sau khi quá trình phát triển hoàn tất và thanh toán đầy đủ, chúng tôi sẽ bàn giao toàn bộ mã nguồn và trang web hoàn toàn thuộc quyền sở hữu của bạn.",
  },
  {
    question: "Tôi có thể liên hệ với bạn trong những giờ nào?",
    answer:
      "Bạn có thể nhắn tin Zalo hoặc gửi form 24/7. Chúng tôi sẽ phản hồi lại bạn sớm nhất trong vòng 2-4 tiếng trong giờ làm việc (Từ 8h-18h các ngày trong tuần).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 w-full bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Giải đáp một số thắc mắc phổ biến của khách hàng khi làm việc với chúng tôi.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                      : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
