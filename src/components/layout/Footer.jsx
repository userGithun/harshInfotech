import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import white from "../../assets/logo/white.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={white} alt="white_logo" className="w-32 mx-auto block" />

          <p className="font-['Gill_Sans_Light','Gill_Sans',sans-serif] text-white text-sm mb-4">
            Our mission is to create bespoke suits that not only fit your body,
            but also tell your story.
          </p>

          {/* <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-white px-2 py-1 w-full focus:outline-none font-light"
            />
            <button className="ml-2 border border-white px-4 py-1 hover:bg-white hover:text-black transition duration-300 font-light">
              SUBMIT
            </button>
          </div> */}
        </div>

        <div>
          <h3 className="font-heading text-lg mb-4">ABOUT US</h3>
          <ul className="font-['Gill_Sans_Light','Gill_Sans',sans-serif] text-white/80 text-sm space-y-2">
            <li>
              <Link
                to="/bespoke-tailoring/process"
                className="underline-transition"
              >
                 About Huntsman
              </Link>
            </li>
            <li>
              <Link to="/products" className="underline-transition">
                Ready to Wear
              </Link>
            </li>
            <li>
              <Link to="/blog" className="underline-transition">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="underline-transition">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg mb-4">HOW CAN WE HELP</h3>
          <ul className="font-['Gill_Sans_Light','Gill_Sans',sans-serif] text-white/80 text-sm space-y-2">
            <li>
              <Link to="/appointment" className="underline-transition">
                Book an Appointment
              </Link>
            </li>
            {/* <li>
              <Link to="/shipping-returns" className="underline-transition">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="underline-transition">
                FAQs
              </Link>
            </li> */}
            <li>
              <Link to="/privacy-policy" className="underline-transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/#" className="underline-transition">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/terms-conditions" className="underline-transition">
                Terms & Conditions
              </Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg mb-4">LOCATIONS</h3>
          <ul className="font-['Gill_Sans_Light','Gill_Sans',sans-serif] text-white/80 text-sm space-y-2">
            <li>
              <p className=" underline-transition">
                House 61, Tangal, Kathmandu
              </p>
            </li>
            <li>
              <Link
                to={"mailto: contact@suitstudionepal.com"}
                className=" underline-transition"
              >
                contact@suitstudionepal.com
              </Link>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center mt-2 underline-transition">
            <p>9803136497</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center border-t border-gray-700 pt-6">
        <p className="font-['Gill_Sans_Light','Gill_Sans',sans-serif] text-white text-xs">
          © 2025 Suit Studio Nepal. All rights reserved.
        </p>
        <div className="flex space-x-4 mr-12">
          <Link
            className="footer-main--socials_links__item"
            target="_blank"
            to="https://www.facebook.com/people/The-Suit-Studio/100087345884672/?mibextid=LQQJ4d&rdid=NJoSqLQRUP5B62Kv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12DaMwN2qTn%2F%3Fmibextid%3DLQQJ4d"
          >
            <FaFacebook
              size={18}
              className="cursor-pointer hover:text-gray-400"
            />{" "}
          </Link>
          <Link
            className="footer-main--socials_links__item"
            target="_blank"
            to="https://www.youtube.com/@TheSuitStudioTSS"
          >
            <FaYoutube
              size={18}
              className="cursor-pointer hover:text-gray-400"
            />{" "}
          </Link>

          <Link
            className="footer-main--socials_links__item"
            target="_blank"
            to="https://www.instagram.com/thesuitstudio_/?hl=en"
          >
            <FaInstagram
              size={18}
              className="cursor-pointer hover:text-gray-400"
            />{" "}
          </Link>
          <Link
            className="footer-main--socials_links__item"
            target="_blank"
            to="https://maps.app.goo.gl/sYRQTZLUi87qr4pU8"
          >
            <FaMap size={18} className="cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
