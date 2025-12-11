import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { bespokeMenuItems } from "../../data/bespokeMenu";

const SideDrawer = ({ isOpen, onClose, drawerRef }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const mainMenuItems = [
    { label: "TSS Experience", link: null },
    { label: "Off the Rack", link: "/off-the-rack" },
    { label: "Accessories", link: "/accessories" },
    { label: "Catalogue", link: "/catalogue" },
  ];

  const bespokeSubmenu = bespokeMenuItems.map((item) => ({
    label: item.label,
    link: `/bespoke-tailoring/${item.id}`,
  }));

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop (optional) */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose}></div>

      {/* Drawer Panel */}
      <div
        // ref={drawerRef}
        className={`absolute top-0 left-0 h-full w-80 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-primary text-sm h-full flex flex-col">
          <button className="flex items-center gap-2 mb-6" onClick={onClose}>
            <GrClose size={16} />
            <span className="uppercase text-xs">Close</span>
          </button>

          {!submenuOpen && (
            <div className="flex flex-col gap-6 mt-6">
              {mainMenuItems.map((item, index) => (
                <div key={index}>
                  {item.label === "TSS Experience" ? (
                    <div
                      className="flex justify-between items-center cursor-pointer hover:underline text-lg"
                      onClick={() => setSubmenuOpen(true)}
                    >
                      <span>{item.label}</span>
                      <BiChevronRight size={20} />
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={onClose}
                      className="flex justify-between items-center hover:underline text-xl"
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {submenuOpen && (
            <div className="flex flex-col gap-6 animate-slide-in mt-6">
              <div
                className="flex items-center gap-2 cursor-pointer mb-4"
                onClick={() => setSubmenuOpen(false)}
              >
                <BiChevronLeft size={20} />
                <span className=" text-xl">TSS Experience</span>
              </div>

              {bespokeSubmenu.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  onClick={onClose}
                  className="flex justify-between items-center cursor-pointer hover:underline text-xl"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
