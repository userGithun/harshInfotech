import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import MainLayout from "./components/layout/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoader from "./components/common/SkeletonLoader";
import AccessoryPage from "./components/accessories/slug/AccessoryPage";
import PrivateRoute from "./components/routes/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const Appointment = lazy(() => import("./pages/Appointment"));
const BespokeTailoringPage = lazy(() => import("./pages/BespokeTailoringPage"));
const AccessoriesPage = lazy(() => import("./pages/AccessoriesPage"));
const OffTheRackPage = lazy(() => import("./pages/OffTheRackPage"));
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ForgotPasswordPage = lazy(() => import("./pages/auth/ForgotPassword"));
const ProductsPage = lazy(() => import("./pages/product/ProductListPage"));
const ProductPage = lazy(() => import("./pages/product/slug/ProductPage"));
const CartPage = lazy(() => import("./components/cart/CartPage"));
const BlogListing = lazy(() => import("./pages/blog/BlogListPage"));
const BlogPost = lazy(() => import("./pages/blog/slug/BlogPage"));
const CatalogPage = lazy(() => import("./pages/catalogue/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/catalogue/slug/CatalogDetailPage")
);
const Gallery = lazy(() => import("./pages/Gallery"));
const PrivacyPolicy = lazy(() => import("./pages/documents/PrivacyPolicy"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route
              path="/bespoke-tailoring/:tab?"
              element={<BespokeTailoringPage />}
            />
            <Route path="/off-the-rack" element={<OffTheRackPage />} />
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/catalogue/:slug" element={<CatalogDetailPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/accessories/:slug" element={<AccessoryPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
