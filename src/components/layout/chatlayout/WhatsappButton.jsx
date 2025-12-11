import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=9779802346676&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-red bg-secondary rounded-full p-3 shadow-lg transform scale-90 hover:scale-100 transition-transform ease-in-out duration-300 "
    >
      <BsWhatsapp className="w-7 h-7" />
    </a>
  );
}
