import React, { useState, useEffect, useRef } from "react";

export default function ChatInterface({ onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      fromUser: false,
      text: "We're not online right now but if you leave your details, we'll reply as soon as one of our team becomes available.",
    },
  ]);

  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages((prev) => [...prev, { fromUser: true, text: message }]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to bottom when messages update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-6 w-80 h-[400px] bg-secondary rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 z-50">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">The Suits Studio</h3>
        <button
          onClick={onClose}
          className="text-white text-2xl hover:text-gray-200"
        >
          &times;
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${
              msg.fromUser
                ? "flex self-end items-end bg-primary text-white"
                : "self-start bg-gray-300 text-black"
            } px-3 py-2 rounded-lg max-w-[80%]`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a message"
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-red-900"
        >
          Send
        </button>
      </div>
    </div>
  );
}
