import React from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { bespokeMenuItems } from "../../data/bespokeMenu";

const BespokeNav = ({ isOpen, onClose }) => {
  const menuItems = bespokeMenuItems.map((item) => ({
    label: item.label,
    link: `/bespoke-tailoring/${item.id}`,
  }));
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6 text-primary text-sm h-full flex flex-col">
        {/* Close Button */}
        <button className="flex items-center gap-2 mb-6" onClick={onClose}>
          <GrClose size={16} />
          <span className="uppercase text-xs">Close</span>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 mt-6">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={onClose}
              className="flex justify-between items-center cursor-pointer hover:underline text-lg"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BespokeNav;
