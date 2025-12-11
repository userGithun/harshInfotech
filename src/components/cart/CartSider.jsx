import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { verifyCoupon } from "../../redux/action/CheckoutAction/CouponAction";
import {
  checkoutBank,
  checkoutCod,
} from "../../redux/action/CheckoutAction/CheckoutAction";

export const CartSider = ({ subtotal, selectedItems }) => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [paymentType, setPaymentType] = useState("cod");
  const couponData = useSelector((state) => state.coupon.data);

  const handleApplyCoupon = () => {
    if (!coupon) return toast.error("Enter coupon code");
    dispatch(
      verifyCoupon({
        data: { cartId: selectedItems, coupon },
        cartTotal: subtotal,
        callback: () => toast.success("Coupon applied!"),
        failed: () => toast.error("Invalid coupon"),
      })
    );
  };

  const handleCheckout = () => {
    if (!selectedItems.length) {
      toast.error("Select items to checkout");
      return;
    }

    const data = {
      paymentType,
      cartId: selectedItems,
      shippingType: "home",
    };

    if (paymentType === "cod") {
      dispatch(
        checkoutCod({
          data,
          callback: () => toast.success("Order placed successfully"),
        })
      );
    } else {
      dispatch(
        checkoutBank({
          data,
          callback: () => toast.success("Redirecting to bank for payment..."),
        })
      );
    }
  };

  const discount = couponData?.discount ?? 0;
  const total = subtotal - discount;

  return (
    <div className="lg:w-80">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">NPR {subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Coupon Discount</span>
              <span>- NPR {discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-primary text-lg">
            <span>Total</span>
            <span>NPR {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="border rounded-md px-3 py-2 w-full"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-primary text-white px-3 rounded-md"
          >
            Apply
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Payment Method:
          </label>
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="mbl">Bank (MBL)</option>
          </select>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors mb-4"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
