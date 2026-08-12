"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What programs do you offer?",
  "CBA™ (Certified Business Accountant) fee details",
  "DGM™(Digital Growth & Marketing) fee details",
  "Placement support",
  "Eligibility criteria",
];

export default function FloatSupportBot() {
  const [showQueryPill, setShowQueryPill] = useState(true);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [typing, setTyping] = useState(false);

  const endRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: "bot",
          text:
            "Hi 👋 Welcome to Charters Union.\n\nI can guide you about programs, fees, placements and admissions.\n\nHow can I help you today?",
          timestamp: new Date(),
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text?: string) => {
    const messageText = text ?? input;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();

      window.setTimeout(() => {
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);
        setTyping(false);
      }, 600);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  return (
    <>
      {!open && (
        <div className={`fixed right-1 md:right-3 z-[999] flex items-center gap-1 md:gap-2 ${pathname === '/career-path' ? 'bottom-20' : 'bottom-1 md:bottom-3'}`}>

          {showQueryPill && (
            <div className="group relative w-auto max-w-[210px] md:max-w-none md:w-[280px] rounded-t-[12px] rounded-bl-[15px] bg-white border border-[#cccccc] shadow-md px-4 py-2 md:px-4 md:py-2">
              <button
                type="button"
                onClick={() => setShowQueryPill(false)}
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-200 transition opacity-0 group-hover:opacity-100"
                aria-label="Dismiss query pill"
              >
                <img src="/Charters-icon/Cancel.svg" alt="" width={10} height={10} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowQueryPill(false);
                  setOpen(true);
                }}
                className="text-xs md:text-sm text-gray-800 hover:text-[#B30437] transition text-left"
              >
                <span>Hey there.👋 </span>
                <span className="hidden md:inline">Got any questions? Schedule a personalized demo class</span>
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              setShowQueryPill(false);
              setOpen(true);
            }}
            className="relative flex items-center justify-center p-1 md:p-2 focus:outline-none transition-transform duration-300 hover:scale-105"
            aria-label="Open support chat"
          >
            {/* 1 Single Expanding & Fading Wave */}
            <span aria-hidden="true" className="absolute inset-1 rounded-full bg-[#00c853]/45 animate-samsung-ripple"></span>

            {/* Avatar with Green Line Border */}
            <div className="relative z-10 rounded-full border-[2px] md:border-[2.5px] border-[#00c853] bg-white shadow-sm overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/charters-customer_care_nl06po.avif"
                alt="Support representative"
                width={52}
                height={52}
                sizes="52px"
                className="h-[44px] w-[44px] md:h-[52px] md:w-[52px] rounded-full object-cover"
              />
            </div>
          </button>
        </div>
      )}

      {open && (
        <div className={`fixed right-3 z-[999] flex h-[530px] w-[360px] max-w-[95vw] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${pathname === '/career-path' ? 'bottom-24' : 'bottom-7'}`}>
          <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#B30437] p-1">
                <Image
                  src="/charters-customer-service.avif"
                  alt="Ragini"
                  width={32}
                  height={32}
                  sizes="32px"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-black">Ragini</p>
                <span className="text-[14px] text-gray-600">
                  AI Admission Counsellor
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className=" cursor-pointer"
              aria-label="Close support chat"
            >
              <img src="/Charters-icon/Cancel.svg" alt="" width={16} height={16} className="p-1 bg-[#efefef] hover:bg-[#cccccc] rounded-full h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-white px-4 py-4">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                {msg.sender === "bot" && (
                  <Image
                    src="/charters-customer-service.avif"
                    alt="Ragini"
                    width={28}
                    height={28}
                    sizes="28px"
                    className="mr-2 mt-1 h-7 w-7 rounded-full object-cover"
                  />
                )}

                <div
                  className={`max-w-[95%] break-words whitespace-pre-wrap rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.sender === "user"
                    ? "bg-[#B30437] text-white"
                    : "bg-[#F6F4F2] text-gray-800"
                    }`}
                >
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-base font-semibold text-gray-900">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-sm font-semibold text-gray-800">
                          {children}
                        </h2>
                      ),
                      strong: ({ children }) => (
                        <span className="font-semibold text-blue-600">
                          {children}
                        </span>
                      ),
                      ul: ({ children }) => (
                        <ul className="mt-2 space-y-2">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="relative pl-5">
                          <span className="absolute left-0 top-[8px] h-1.5 w-1.5 rounded-full bg-current" />
                          {children}
                        </li>
                      ),
                      a: ({ href, children }) => {
                        const isWhatsapp = href?.includes("wa.me");
                        const isApply = href?.includes("apply");

                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium shadow-sm transition ${isWhatsapp
                              ? "bg-green-500 text-white hover:bg-green-600"
                              : isApply
                                ? "bg-[#202124] text-white hover:bg-gray-800"
                                : "text-blue-600 underline"
                              }`}
                          >
                            {children}
                          </a>
                        );
                      },
                      p: ({ children }) => (
                        <p
                          className={`mb-2 last:mb-0 ${msg.sender === "user" ? "text-white" : "text-black"
                            }`}
                        >
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>

                  {index === 0 && showSuggestions && msg.sender === "bot" && (
                    <div className="mt-4 space-y-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => sendMessage(question)}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-xs transition hover:bg-gray-50"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-1 text-right text-[10px] opacity-60">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2">
                <Image
                  src="/charters-customer-service.avif"
                  alt="Ragini"
                  width={28}
                  height={28}
                  sizes="28px"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <div className="flex gap-1 rounded-xl bg-gray-200 px-3 py-2">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500 delay-150" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-gray-500 delay-300" />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="bg-[#ffffff] p-4">
            <div className="flex w-full rounded-full border border-gray-300 px-4 py-[6px] text-sm outline-none">
              <img src="/Charters-icon/AI-icon.svg"
                alt="AI icon"
                width={25}
                height={25}
                className="pt-[3px]"
              />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="ml-[10px] h-[30px] w-full outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    void sendMessage();
                  }
                }}
              />

              {input.trim() && (
                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  className="flex h-auto w-10 items-center justify-center rounded-full bg-[#202124] text-white"
                  aria-label="Send message"
                >
                  <img src="/Charters-icon/ic_shareicon.svg" alt="" width={16} height={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
