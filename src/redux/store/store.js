import { configureStore } from "@reduxjs/toolkit";
import offTheRackReducer from "../reducer/OffTheRackSlice/OffTheRackSlice";
import authReducer from "../reducer/AuthSlice/AuthSlice";
import blogReducer from "../reducer/BlogSlice/BlogSlice";
import accessoryReducer from "../reducer/AccessoriesSlice/AccessoriesSlice";
import cartReducer from "../reducer/CartSlice/CartSlice";
import wishlistReducer from "../reducer/WIshlistSlice/WIshlistSlice";
import catalogueReducer from "../reducer/CatalogueSlice/CatalogueSlice";
import galleryReducer from "../reducer/GallerySlice/GallerySlice";
import appointmentReducer from "../reducer/AppointmentSlice/AppointmentSlice";
import profileReducer from "../reducer/ProfileSlice/ProfileSlice";
import checkoutReducer from "../reducer/CheckoutSlice/CheckoutSlice";
import couponReducer from "../reducer/CheckoutSlice/CouponSlice";
import sliderReducer from "../reducer/SliderSlice/SliderSlice";
export const store = configureStore({
  reducer: {
    offTheRack: offTheRackReducer,
    auth: authReducer,
    blog: blogReducer,
    accessory: accessoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    catalogue: catalogueReducer,
    gallery: galleryReducer,
    appointment: appointmentReducer,
    profile: profileReducer,
    slider: sliderReducer,
    checkout: checkoutReducer,
    coupon: couponReducer,
  },
});
