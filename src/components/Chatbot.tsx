"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

export default function Chatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize or update greeting when language changes IF no other messages exist
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([
        { role: "assistant", content: t("chat.greeting"), id: "greeting" },
      ]);
    }
  }, [language]); // React to language changes

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (contentOverride?: string) => {
    const messageContent = contentOverride || input.trim();
    if (!messageContent || isLoading) return;

    const userMsg: Message = { role: "user", content: messageContent, id: Date.now().toString() };
    setMessages((prev) => [...prev, userMsg]);
    if (!contentOverride) setInput("");
    setIsLoading(true);

    try {
      const history = [...messages, userMsg]
        .filter((m) => m.id !== "greeting")
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: history,
          lang: language 
        }),
      });
      const data = await res.json();
      const botMsg: Message = {
        role: "assistant",
        content: data.reply ?? (language === "vi" ? "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại!" : "Sorry, an error occurred. Please try again!"),
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: language === "vi" ? "Xin lỗi, tôi đang gặp sự cố kết nối. Bạn thử lại sau nhé!" : "Sorry, I'm having connection issues. Please try again later!", 
          id: Date.now().toString() 
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Parse simple bold markdown
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-6 right-[88px] z-[60] w-[360px] max-h-[560px] flex flex-col rounded-3xl shadow-2xl border border-border overflow-hidden bg-white dark:bg-slate-900"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-brand-600 to-violet-600 shrink-0">
              {/* Animated glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/30 to-violet-500/30 blur-xl" />

              <div className="relative flex items-center gap-3 flex-1">
                <div className="w-9 h-9 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm leading-tight">{t("chat.botName")}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/70 text-[11px]">{t("chat.status")}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0 bg-white dark:bg-slate-900">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 ${
                    msg.role === "assistant"
                      ? "bg-gradient-to-br from-brand-500 to-violet-600"
                      : "bg-gradient-to-br from-slate-600 to-slate-700"
                  }`}>
                    {msg.role === "assistant"
                      ? <Bot className="w-4 h-4 text-white" />
                      : <User className="w-4 h-4 text-white" />
                    }
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-brand-600 to-violet-600 text-white rounded-tr-sm"
                      : "bg-muted text-foreground rounded-tl-sm border border-border"
                  }`}>
                    {msg.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-1" : ""}>
                        {renderContent(line)}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Loading dots */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-muted border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-brand-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0 bg-white dark:bg-slate-900">
                {(language === "vi" 
                  ? ["💰 Báo giá dịch vụ", "⏱️ Thời gian hoàn thành", "🛠️ Công nghệ sử dụng"]
                  : ["💰 Service Pricing", "⏱️ Delivery Time", "🛠️ Tech Stack"]
                ).map((q) => (
                  <button
                    key={q}
                    onClick={() => { 
                      const text = language === "vi" ? q.slice(3) : q.split(" ").slice(1).join(" ");
                      sendMessage(text);
                    }}
                    className="px-3 py-1.5 rounded-full border border-border bg-muted text-foreground text-xs font-medium hover:border-brand-500 hover:text-brand-600 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-border shrink-0 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 bg-muted rounded-2xl border border-border px-4 py-2.5 focus-within:border-brand-500 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={t("chat.inputPlaceholder")}
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 enabled:hover:scale-105 enabled:active:scale-95"
                >
                  <Send className={`w-3.5 h-3.5 ${(!input.trim() || isLoading) ? "text-slate-400 dark:text-slate-500" : "text-white"}`} />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">{t("chat.poweredBy")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Welcome Tooltip */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="fixed bottom-[32px] right-[92px] z-[55] hidden sm:block"
          >
            <div className="relative bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-2xl shadow-xl border border-border/50 text-sm font-medium whitespace-nowrap">
              {t("chat.tooltip")}
              {/* Caret */}
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-border/50 rotate-[-45deg] rounded-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 text-white flex items-center justify-center shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-shadow"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-2xl bg-brand-500"
            animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        {/* Unread dot */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-card">
            <Sparkles className="w-2 h-2 text-white" />
          </span>
        )}
      </motion.button>
    </>
  );
}
