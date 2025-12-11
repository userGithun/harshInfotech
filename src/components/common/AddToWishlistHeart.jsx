import React from "react";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToWishlist } from "../../redux/action/WishlistAction/WishlistAction";

const AddToWishlistHeart = ({ product, className }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const handleAddToWishlist = () => {
    if (!token) {
      toast.warning("You must be logged in to add items to wishlist", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    dispatch(addToWishlist(product.id))
      .unwrap()
      .then(() => {
        toast.success(`${product.name} added to wishlist`, { autoClose: 2000 });
      })
      .catch((err) => {
        toast.error(err.message || "Failed to add to wishlist", { autoClose: 3000 });
      });
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // prevent navigating if inside Link
        handleAddToWishlist();
      }}
      className={`p-1 rounded-full text-white hover:bg-white/20 z-50 ${className}`}
    >
      <BiHeart className="h-5 w-5" />
    </button>
  );
};


export default AddToWishlistHeart;
