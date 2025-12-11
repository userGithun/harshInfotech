import React from "react";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToWishlist } from "../../redux/action/WishlistAction/WishlistAction";

const AddToWishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const handleAddToWishlist = () => {
    if (!token) {
      toast.error("You need to login to add items to your wishlist");
      return;
    }

    dispatch(addToWishlist(product.id))
      .unwrap()
      .then(() => toast.success("Product added to wishlist"))
      .catch((err) => toast.error(err.message || "Failed to add product to wishlist"));
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="w-full border border-gray-600 hover:text-white hover:bg-black flex items-center justify-center py-3 text-lg gap-4 transition-colors duration-300"
    >
      <BiHeart className="h-5 w-5" />
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
