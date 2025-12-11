import React from "react";
import { MdChat, MdClose } from "react-icons/md";

export default function ChatButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-orange-950 transition-all duration-300"
    >
      {isOpen ? (
        <MdClose className="w-6 h-6" />
      ) : (
        <MdChat className="w-6 h-6" />
      )}
    </button>
  );
}
