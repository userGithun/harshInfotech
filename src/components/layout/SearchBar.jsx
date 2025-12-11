import React, { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffTheRack } from "../../redux/action/OffTheRackAction/OffTheRackAction";
import { getImageUrl } from "../../api/api";

const SearchBar = ({ isSearchActive, setIsSearchActive }) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: products } = useSelector((state) => state.offTheRack);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchOffTheRack());
    }
  }, [dispatch, products]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSearchActive]);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.name?.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 20)); // up to 20 suggestions
  }, [query, products]);

  const handleSelect = (slug) => {
    navigate(`/products/${slug}`);
    setIsSearchActive(false);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-600 ease-in-out ${
        isSearchActive
          ? "translate-x-0"
          : "-translate-x-full pointer-events-none"
      }`}
      ref={searchRef}
    >
      {/* Search Bar */}
      <div className="bg-white w-full h-22 flex items-center justify-center shadow-md">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg md:w-full h-10 max-w-lg px-4 py-2 border-gray-600 border-[1px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border-none rounded-md focus:outline-none text-primary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="ml-2 text-primary hover:text-primary transition duration-300"
            onClick={() => setIsSearchActive(false)}
          >
            <GrClose />
          </button>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul
          className="bg-white w-full max-w-lg mx-auto mt-2 shadow-md rounded-md overflow-y-auto"
          style={{ maxHeight: "42vh" }} // scrollable, min-height relative to viewport
        >
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSelect(product.slug)}
            >
              <img
                src={getImageUrl(product.thumbnail)}
                alt={product.name}
                className="w-10 h-10 object-cover rounded-md mr-2"
              />
              <div>
                <p className="text-sm font-medium text-primary">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">
                  {product.category?.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
