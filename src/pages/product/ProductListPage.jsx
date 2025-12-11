import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffTheRack } from "../../redux/action/OffTheRackAction/OffTheRackAction";
import hero from "../../assets/hero.jpg";
import { getImageUrl } from "../../api/api";
import AddToWishlistHeart from "../../components/common/AddToWishlistHeart";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.offTheRack);

  useEffect(() => {
    dispatch(fetchOffTheRack());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 text-lg font-medium">
          Loading products...
        </p>
      </div>
    );
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
        <img
          src={hero}
          alt="Hero Background"
          className="w-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-20 container mx-auto h-full flex items-end justify-center p-12 text-center text-secondary">
          <h1 className="text-5xl mb-4">TSS COLLECTION</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group"
            >
             <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] group">
  <img
    src={getImageUrl(product.thumbnail)}
    alt={product.name}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

  <AddToWishlistHeart
    product={product}
    className="absolute top-4 right-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
  />
</div>

              <div className="pt-4">
                <p className="text-sm text-primary-red mb-1">
                  {product.category?.name?.trim().toUpperCase() ||
                    "UNCATEGORIZED"}
                </p>
                <h3 className="text-lg font-serif mb-2">{product.name}</h3>
                <p className="text-xl font-medium">NPR {product.amount}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
