import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CurrencySelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NPR रू");

  const currencies = ["NPR रू"];

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-sm focus:outline-none"
      >
        <span className="mr-1">{selectedCurrency}</span>
        <FiChevronDown size={16} />
      </button>

      {open && (
        <ul className="absolute top-full mt-1 bg-white text-black rounded shadow-md w-24 z-10">
          {currencies.map((currency) => (
            <li
              key={currency}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(currency)}
            >
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelector;
