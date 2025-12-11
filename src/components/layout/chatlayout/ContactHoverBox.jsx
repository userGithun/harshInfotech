import React from "react";
import { MdPhone, MdEmail, MdLocationOn, MdArrowForward } from "react-icons/md";

export default function ContactHoverBox({ isHovering }) {
  return (
    <div className="flex text-white h-82">
      <button className="bg-primary h-full w-10 font-body text-white flex items-center justify-center ">
        <span className="transform rotate-270 whitespace-nowrap">
          CONTACT US
        </span>
      </button>

      {isHovering && (
        <div className="bg-[#B8896E]/60 backdrop-blur-2xl py-4 flex flex-col gap-4  transition-opacity duration-300 ease-in-out opacity-100">
          <div className="flex items-center gap-2 px-4">
            <MdPhone className="w-5 h-5" />
            <span>9803136497</span>
          </div>
          <div className="w-full h-[1px] bg-white/40" />
          <div className="flex items-center gap-2 px-4">
            <MdEmail className="w-5 h-5" />
            <span>contact@suitstudionepal.com</span>
          </div>
          <div className="w-full h-[1px] bg-white/40" />
          <div className="flex items-center gap-2 px-4">
            {" "}
            <MdLocationOn className="w-5 h-5" />
            <span>House 61, Tangal, Kathmandu</span>
          </div>
          <div className="w-full h-[1px] bg-white/40" />

          <div className="px-4">
            <p>Sign up to our newsletter</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Email"
                className="p-2 flex-grow text-secondary outline-none bg-white/10 border border-white/40 rounded-l-md"
              />
              <button className="bg-primary p-2">
                <MdArrowForward className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="px-4 mt-2 flex justify-between">
            <button className="text-sm">Locations</button>
            <button className="text-sm">FAQs</button>
          </div>
        </div>
      )}
    </div>
  );
}
