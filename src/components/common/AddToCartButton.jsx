import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/CartAction/CartAction";

const AddToCartButton = ({ product, quantity = 1, color, size }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const handleAddToCart = () => {
    if (!token) {
      toast.error("You need to login to add items to the cart");
      return;
    }

    const dataToSend = { quantity };
    if (color) dataToSend.color = color;
    if (size) dataToSend.size = size;
    if (product.id) dataToSend.product = product.id;

    dispatch(addToCart({ id: product.id, data: dataToSend }))
      .unwrap()
      .then(() => toast.success("Product added to cart"))
      .catch((err) => toast.error(err.message || "Failed to add product to cart"));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-primary hover:bg-secondary text-white hover:text-primary border border-primary py-3 text-lg flex items-center justify-center gap-4 transition-colors duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
