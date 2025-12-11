// components/product/DisclosureMenu.jsx
import React, { useState } from "react";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

export default function DisclosureMenu({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-300">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 hover:text-primary transition"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </div>
            {openIndex === index ? (
              <BiChevronDown className="w-5 h-5" />
            ) : (
              <BiChevronRight className="w-5 h-5" />
            )}
          </button>
          {openIndex === index && (
            <div className="py-2 text-sm text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
