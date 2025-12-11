import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

import { fetchAccessoryBySlug } from "../../../redux/action/AccessoriesAction/AccessoriesAction";
import AddToCartButton from "../../common/AddToCartButton";
import AddToWishlistButton from "../../common/AddToWIshlistButton";
import { getImageUrl } from "../../../api/api";
import QuantitySelector from "../../../utils/quantity-selector";
import { useImageZoom } from "../../../utils/useImageZoom";

export default function AccessoryPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { selectedAccessory: accessory, loading, error } = useSelector(
    (state) => state.accessory
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const {
    containerRef,
    backgroundPosition,
    handleMouseMove,
    handleMouseLeave,
    zoomScale,
  } = useImageZoom({ zoomScale: 2 });

  useEffect(() => {
    if (slug) dispatch(fetchAccessoryBySlug(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (accessory?.thumbnail) setSelectedImage(getImageUrl(accessory.thumbnail));
  }, [accessory]);

  if (loading) return <p className="text-center py-10">Loading accessory...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!accessory) return null;

  const images = [
    accessory.thumbnail ? getImageUrl(accessory.thumbnail) : "/placeholder.svg",
    accessory.category?.banner ? getImageUrl(accessory.category.banner) : null,
  ].filter(Boolean);

  return (
    <div className="min-h-screen mt-36">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <Link
            to="/accessories"
            className="hover:text-primary flex items-center"
          >
            <BsArrowLeft className="h-4 w-4 mr-2" />
            Back to Accessories
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* IMAGE GALLERY */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col space-y-4 w-24">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square overflow-hidden border-2 ${
                    selectedImage === img ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Variant ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="flex-1 relative aspect-[3/4] bg-gray-100"
              style={{
                backgroundImage: `url(${selectedImage || "/placeholder.svg"})`,
                backgroundSize: `${zoomScale * 100}%`,
                backgroundPosition,
                backgroundRepeat: "no-repeat",
                transition: "background-position 0.1s ease-out",
              }}
            />
          </div>

          <div className="space-y-6 text-primary">
            <div>
              <span className="mb-2 text-gray-800 border border-gray-600 px-2 py-1 text-xs tracking-wide">
                {accessory.collection?.name?.toUpperCase() || "ACCESSORY"}
              </span>

              <h1 className="text-4xl font-serif mb-4">{accessory.name}</h1>

              {accessory.amount && (
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-medium text-primary">
                    NPR {accessory.amount}
                  </span>
                </div>
              )}
            </div>

            <div
              className="text-primary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: accessory.description }}
            />

            {/* Quantity Selector */}
            <QuantitySelector value={quantity} setValue={setQuantity} />

            {/* Color Selector */}
            {accessory.color && accessory.color.length > 0 && (
              <div className="flex items-center gap-2">
                {accessory.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border rounded-md ${
                      selectedColor === color
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}

            {accessory.size && accessory.size.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                {accessory.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded-md ${
                      selectedSize === size
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <AddToCartButton
                product={accessory}
                quantity={quantity}
                color={selectedColor}
                size={selectedSize}
              />
              <AddToWishlistButton product={accessory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
