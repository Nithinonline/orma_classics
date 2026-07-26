"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome to Orma Classics! I'm Orma AI. Ask me about our products, shipping, payments, or returns.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-96 bg-white border-radius-20 text-black p-2">

    {/* <div className="fixed bottom-6 right-6 z-[99999] w-96 rounded-xl bg-white border border-gray-300 shadow-2xl"></div> */}

      <div className="bg-black text-white p-4 font-semibold">
        Orma AI
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-3">

        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <span
              className={`inline-block rounded-xl px-3 py-2 ${
                message.role === "user"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}

        {loading && (
          <p className="text-gray-500 text-sm">
            Orma AI is typing...
          </p>
        )}
      </div>

      <div className="flex border-t">

        <input
          className="flex-1 p-3 outline-none"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-5"
        >
          Send
        </button>

      </div>
    </div>
  );
}