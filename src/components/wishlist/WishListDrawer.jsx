import React, { useEffect } from "react";
import { BiShoppingBag, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchWishlist, removeFromWishlist } from "../../redux/action/WishlistAction/WishlistAction";
import { getImageUrl } from "../../api/api";

const WishlistDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const { items: wishlistItems, loading } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (token && isOpen) {
      dispatch(fetchWishlist());
    }
  }, [dispatch, token, isOpen]);

  if (!isOpen) return null;

  if (!token) {
    return (
      <>
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl animate-slide-in flex flex-col items-center justify-center p-6">
          <BiShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="font-medium text-gray-900 mb-2 text-center">
            You are not logged in
          </h3>
          <p className="text-gray-500 text-sm text-center mb-4">
            Log in to see your wishlist items.
          </p>
          <Link
            to="/login"
            onClick={onClose}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
          >
            Login
          </Link>
        </div>
      </>
    );
  }

  const handleDelete = (productId) => {
    dispatch(removeFromWishlist(productId))
      .unwrap()
      .then(() => toast.success("Item removed from wishlist"))
      .catch((err) => toast.error(err || "Failed to remove item"));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6">
            <h2 className="font-heading text-2xl text-primary">My Wishlist</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <BiX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <p className="text-center py-6">Loading wishlist...</p>
            ) : wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <BiShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-500 text-sm">
                  Save items you love to view them here later
                </p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
             {wishlistItems.map((item) => (
  <div
    key={item.id} 
    className="flex gap-4 p-4 border-[1px] border-gray-200 rounded-lg relative group"
  >
    <button
      onClick={() => handleDelete(item.id)} 
      className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
    >
      <BiX className="w-4 h-4" />
    </button>

    <div className="flex-shrink-0">
      <img
        src={getImageUrl(item.product.thumbnail)}
        alt={item.product.name}
        className="w-16 h-20 object-cover rounded-md bg-gray-100"
      />
    </div>

    <div className="flex-1 min-w-0">
      <h3 className="font-medium text-primary text-sm mb-1 pr-6">
        {item.product.name}
      </h3>

      <div className="text-xs text-gray-600 space-y-1 mb-3">
        <div>Category: {item.product.category?.name}</div>
        {item.product.size && <div>Size: {item.product.size}</div>}
        {item.product.stock ? (
          <div className="text-green-600">In Stock</div>
        ) : (
          <div className="text-red-500">Out of Stock</div>
        )}
      </div>

      <Link
        to={`/products/${item.product.slug}`}
        className="text-xs text-primary-red hover:text-primary underline-transition"
        onClick={onClose}
      >
        View Product
      </Link>
    </div>
  </div>
))}

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;
