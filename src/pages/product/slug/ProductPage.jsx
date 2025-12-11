import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffTheRackBySlug } from "../../../redux/action/OffTheRackAction/OffTheRackAction";
import { BsArrowLeft, BsStars } from "react-icons/bs";
import { BiStar, BiUndo } from "react-icons/bi";
import { TbWashMachine } from "react-icons/tb";
import { getImageUrl } from "../../../api/api";
import QuantitySelector from "../../../utils/quantity-selector";
import DisclosureMenu from "../../../components/common/DisclosureMenu";
import { splitDescriptionThreeSections } from "../../../utils/splitDescription";
import AddToCartButton from "../../../components/common/AddToCartButton";
import AddToWishlistButton from "../../../components/common/AddToWIshlistButton";

export default function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct: product, loading, error } = useSelector(
    (state) => state.offTheRack
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    dispatch(fetchOffTheRackBySlug(slug));
  }, [slug,dispatch]);

  if (loading) return <p className="text-center py-10">Loading product...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!product) return null;

  const descriptionSections = splitDescriptionThreeSections(product.description);

  function getFirstParagraph(html) {
    if (!html) return "";
    const splitByBr = html.split(/<br\s*\/?>\s*<br\s*\/?>|<\/p>/i);
    return splitByBr[0].trim();
  }

  const images = product.gallery && product.gallery.length > 0
    ? [getImageUrl(product.thumbnail), ...product.gallery.map(getImageUrl)]
    : [getImageUrl(product.thumbnail)];

  return (
    <div className="min-h-screen mt-36">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <Link to="/products" className="hover:text-primary flex items-center">
            <BsArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )} 
          </div>

          <div className="space-y-6 text-primary">
            <div>
              <span className="mb-2 text-gray-800 border border-gray-600 px-2 py-1 text-xs tracking-wide">
                {typeof product.category === "string"
                  ? product.category.toUpperCase()
                  : product.category?.name?.toUpperCase() || ""}
              </span>

              <h1 className="text-4xl font-serif mb-4">{product.name}</h1>

              {product.rating && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <BiStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-800">
                    {product.rating} ({product.reviews || 0} reviews)
                  </span>
                </div>
              )}

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-medium text-primary">
                  NPR {product.amount}
                </span>
              </div>
            </div>

            <div className="text-primary leading-relaxed" dangerouslySetInnerHTML={{ __html: getFirstParagraph(product.description) }} />

            <DisclosureMenu
              items={Object.entries(descriptionSections).map(([title, content]) => ({
                title,
                icon:
                  title === "Delivery Timeline" ? (
                    <BiUndo className="text-primary-red" />
                  ) : title === "Garment Care" ? (
                    <TbWashMachine className="text-primary-red" />
                  ) : (
                    <BsStars className="text-primary-red" />
                  ),
                content: <div dangerouslySetInnerHTML={{ __html: content }} />,
              }))}
            />

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border py-2 px-4 rounded-md transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-white"
                          : "border-gray-600 text-primary hover:text-white hover:bg-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <QuantitySelector value={quantity} setValue={setQuantity} />

            <div className="space-y-4">
              <AddToCartButton
                product={product}
                data={{ quantity, size: selectedSize }}
              />
              <AddToWishlistButton
                product={product}
                data={{ quantity, size: selectedSize }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
