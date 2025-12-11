import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ContactHoverBox from "./ContactHoverBox";
import ChatInterface from "./ChatInterface";

export default function CommonChatAndContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative z-50">
      <div
        className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            isHovering ? "translate-x-0" : "translate-x-[calc(100%-40px)]"
          }`}
        >
          <ContactHoverBox isHovering={isHovering} />
        </div>
      </div>

      <ChatButton isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />

      {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
    </div>
  );
}
