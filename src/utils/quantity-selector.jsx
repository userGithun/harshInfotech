import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Quantity</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrease}
          className="border border-gray-600 text-white px-3 py-2 rounded hover:bg-gray-800"
        >
          <BiMinus className="h-4 w-4" />
        </button>
        <span className="text-lg font-medium px-4">{quantity}</span>
        <button
          onClick={increase}
          className="border border-gray-600 text-white px-3 py-2 rounded hover:bg-gray-800"
        >
          <BiPlus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
