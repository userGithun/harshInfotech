import React, { useState, useEffect, useRef } from "react";
import { BiHeart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import CurrencySelector from "../common/CurrencySelector";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import BespokeNav from "./BespokeNav";
import SideDrawer from "./SideDrawer";
import blacklogo from "../../assets/logo/sand-with-black.svg";
import whitelogo from "../../assets/logo/sand-with-white.svg";
import { useLocation } from "react-router-dom";
import WishlistDrawer from "../wishlist/WishListDrawer";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);
  const noTransparentPatterns = [
    /^\/products\/[^/]+$/,
    /^\/off-the-rack$/,
    /^\/catalogue$/,
    /^\/catalogue\/[^/]+$/,
    /^\/appointment$/,
    /^\/cart$/,
    /^\/blog$/,
    /^\/gallery$/,
    /^\/blog\/[^/]+$/,
    /^\/accessories\/[^/]+$/,
    /^\/profile$/,
    /^\/privacy-policy$/,
  ];
  const sideDrawerRef = useRef(null);
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideDrawerRef.current &&
        !sideDrawerRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isSearchActive]);

  const allowTransparent = !noTransparentPatterns.some((pattern) =>
    pattern.test(location.pathname)
  );
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-auto md:h-22 px-6 md:px-18 py-6 pt-8 transition-all duration-300 ${
        allowTransparent
          ? scrolled
            ? "bg-secondary text-primary"
            : "bg-transparent text-white"
          : "bg-secondary text-primary"
      } transition-all ease-in-out duration-500`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block hover:text-primary transition duration-300"
          >
            <BiMenu size={20} />
          </button>

          {!isSearchActive && (
            <button
              ref={searchButtonRef}
              className="hover:text-primary ease-in-out transition duration-300"
              onClick={() => setIsSearchActive(true)}
            >
              <BiSearch size={20} />
            </button>
          )}
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 ${
            allowTransparent
              ? scrolled
                ? "text-primary"
                : " text-white"
              : "text-primary"
          } 
          }`}
        >
          <Link
            to="/"
            className="relative flex items-center justify-center p-0 m-0 leading-none"
          >
            <img
              src={
                allowTransparent
                  ? scrolled
                    ? blacklogo
                    : whitelogo
                  : blacklogo
              }
              alt="Logo"
              className="block w-32 h-auto object-contain p-0"
            />
          </Link>

          <div className="-mt-8 relative hidden  justify-center space-x-6 font-heading text-sm uppercase tracking-wide ">
            <div
              className="relative group flex items-center cursor-pointer hover:text-primary underline-transition"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              <span className="inline-flex items-center gap-1">
                Bespoke
                <MdArrowDropDown />
              </span>
            </div>

            <NavLink
              to="/off-the-rack"
              className={({ isActive }) =>
                isActive
                  ? " underline-transition text-primary-red transition"
                  : "hover:text-primary underline-transition"
              }
            >
              Off the Rack
            </NavLink>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive
                  ? " underline-transition text-primary-red transition"
                  : "hover:text-primary underline-transition"
              }
            >
              Accessories
            </NavLink>
            <NavLink
              to="/catalogue"
              className={({ isActive }) =>
                isActive
                  ? " underline-transition text-primary-red transition"
                  : "hover:text-primary underline-transition"
              }
            >
              Catalogue
            </NavLink>
          </div>
        </div>

        <div className=" flex items-center gap-4">
          <div className=" hidden md:flex items-center gap-4">
            <CurrencySelector />

            <div
              className="group relative flex items-center"
              onClick={() => setIsWishlistOpen(true)}
            >
              <button className=" group-hover:text-primary transition duration-300">
                <BiHeart size={20} />
              </button>
              <span className=" absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-secondary text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none">
                My WishList
              </span>
            </div>

            <NavLink
              to={isLoggedIn ? "/profile" : "/login"}
              className="group relative flex items-center"
            >
              <button className="group-hover:text-primary transition duration-300">
                <BiUser size={20} />
              </button>
              <span className="absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-secondary text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none">
                {isLoggedIn ? "Profile" : "Login"}
              </span>
            </NavLink>

            <NavLink to="/cart" className="group relative flex items-center">
              <button className=" group-hover:text-primary transition duration-300">
                <FiShoppingBag size={20} />
              </button>
              <span className="absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-secondary text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none">
                My Bag
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      <SearchBar
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />
      <SideDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        drawerRef={sideDrawerRef}
      />
      <BespokeNav
        isOpen={isSubMenuOpen}
        onClose={() => setIsSubMenuOpen(false)}
      />
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
    </nav>
  );
};
