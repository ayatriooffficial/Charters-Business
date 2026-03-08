"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Send } from "lucide-react";
interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
}

export default function FloatSupportBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- INTRO MESSAGE ---------------- */
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: "bot",
          text:
            "Hi 👋 Welcome to Charters Union.\n\nI can guide you about programs, fees, placements and admissions.\n\nHow can I help you today?",
        },
      ]);
    }
  }, [open]);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* ---------------- SEND MESSAGE ---------------- */
  const sendMessage = async (text?: string) => {
    const messageText = text ?? input;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: messageText }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply,
        };

        setMessages((prev) => [...prev, botMsg]);
        setTyping(false);
      }, 600); // realistic typing delay

    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }
  };

  const suggested = [
    "What programs do you offer?",
    "MBA fee details",
    "Placement support",
    "Eligibility criteria",
  ];

  return (
    <>
      {/* FLOAT BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-3 right-3 group z-30"
        >
          {/* Gradient Ring */}
          <div className="p-[3px] rounded-full bg-[#B30437] shadow-xl group-hover:scale-110 transition-all duration-300">

            {/* White Inner Circle */}
            <div className="shadow-[0_0_10px_rgba(179,4,55,0.3)] bg-white rounded-full p-1">

              {/* Avatar Image */}
              <img
                src="/customer-service.webp"
                alt="Chat"
                className="w-12 h-12 rounded-full object-cover"
              />

            </div>
          </div>
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-3 right-3 w-[360px] max-w-[95vw] h-[530px]
        bg-white/90 border border-gray-200
        rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        z-50 flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200 bg-white/80">
            <div className="flex items-center gap-3">
              <div className="bg-[#B30437]  p-1  rounded-full">
                <img src="/customer-service.webp" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm">
                  Charters AI Counsellor
                </div>
                <div className="flex flex-row align-middle">
                  <span className="w-[7px] h-[7px] mt-[4px] mr-[3px] bg-[#00853E] rounded-full text-xs text-green"></span><p className="text-xs text-gray-500">Online | Instant replies</p>
                </div>
              </div>
            </div>

            <X
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-700"
              size={18}
              onClick={() => setOpen(false)}
            />
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto px-4 py-4 bg-white space-y-4">

            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
                  }`}
              >
                {msg.sender === "bot" && (
                  <img
                    src="/customer-service.webp"
                    className="w-7 h-7 rounded-full mr-2 mt-1"
                  />
                )}

                <div
                  className={`px-4 py-3 rounded-xl text-sm leading-relaxed max-w-[95%] break-words whitespace-pre-wrap  ${msg.sender === "user"
                    ? "bg-[#F4F2EE] text-white"
                    : "bg-[#F4F2EE] text-gray-800"
                    }`}
                >
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-base font-semibold text-gray-900 ">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-sm font-semibold text-gray-800 ">
                          {children}
                        </h2>
                      ),
                      strong: ({ children }) => (
                        <span className="font-semibold text-blue-600">
                          {children}
                        </span>
                      ),
                      ul: ({ children }) => (
                        <ul className="mt-2 space-y-2">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="relative pl-5">
                          <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full"></span>
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
                            className={`block w-full text-center  px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm
        ${isWhatsapp
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : isApply
                                  ? "bg-black hover:bg-gray-800 text-white"
                                  : "text-white"
                              }`}
                          >
                            {children}
                          </a>
                        );
                      },
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0 text-black">
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>

                  {/* ✅ Attach suggestions to FIRST BOT MESSAGE */}
                  {index === 0 && showSuggestions && msg.sender === "bot" && (
                    <div className="mt-4 space-y-2">
                      {suggested.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="w-full text-left text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] opacity-60 mt-1 text-black text-right">
                    {new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {typing && (
              <div className="flex gap-2 items-center">
                <img src="/customer-service.webp" className="w-7 h-7 rounded-full" />
                <div className="bg-gray-200 px-3 py-2 rounded-xl flex gap-1">
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>



          {/* INPUT */}
          <div className="p-4 bg-[#ffffff]">
            <div className="relative">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 pr-12 rounded-full 
                 border border-gray-300 text-sm 
                 outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              {/* Send button appears only when typing */}
              {input.trim() && (
                <button
                  onClick={() => sendMessage()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 
                   bg-[#B30437] text-white 
                   w-8 h-8 rounded-full 
                   flex items-center justify-center
                   hover:bg-black transition"
                >
                  <Send size={16} />
                </button>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}