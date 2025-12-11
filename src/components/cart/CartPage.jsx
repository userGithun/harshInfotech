import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CartSider } from "./CartSider";
import { getImageUrl } from "../../api/api";
import {
  fetchCart,
  removeFromCart,
  updateCart,
} from "../../redux/action/CartAction/CartAction";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, loading } = useSelector((state) => state.cart);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return;

    const dataToSend = {
      quantity: newQuantity,
      product: item.product.id,
      color: item.color,
      size: item.size,
    };

    dispatch(updateCart({ id: item.id, data: dataToSend }))
      .unwrap()
      .then(() => {
        toast.success("Quantity updated");
        dispatch(fetchCart());
      })
      .catch((err) => toast.error(err || "Failed to update quantity"));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
      .unwrap()
      .then(() => toast.success("Item removed from cart"))
      .catch((err) => toast.error(err || "Failed to remove item"));
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const subtotal = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.product.amount * item.quantity, 0);

  if (loading) return <p className="text-center py-10">Loading cart...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-heading text-primary text-2xl">Your cart</h2>
              <Link
                to="/products"
                className="text-sm text-gray-600 underline-transition hover:text-primary"
              >
                Continue shopping
              </Link>
            </div>

            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-gray-600">Your cart is empty.</p>
                <Link
                  to="/products"
                  className="mt-4 inline-block text-primary underline"
                >
                  Shop now
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-12 gap-4 p-6 border-b text-sm text-gray-500 uppercase tracking-wide">
                  <div className="col-span-1"></div>
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                  <div className="col-span-2"></div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 p-6 border-b last:border-b-0 items-center"
                  >
                    <div className="col-span-1 flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                      />
                    </div>

                    <div className="col-span-5 flex items-center gap-4">
                      <img
                        src={getImageUrl(item.product.thumbnail)}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                      />
                      <div>
                        <h4 className="font-medium text-xl text-primary mb-1">
                          {item.product.name}
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Colour: {item.color}</div>
                          {item.size && <div>Size: {item.size}</div>}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <BiMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <BiPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 text-right font-medium">
                      NPR {(item.product.amount * item.quantity).toFixed(2)}
                    </div>

                    <div className="col-span-2 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <BsTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <CartSider subtotal={subtotal} selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
