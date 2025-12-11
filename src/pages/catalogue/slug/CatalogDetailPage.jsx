import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiShare } from "react-icons/bi";
import { fetchCatalogueBySlug } from "../../../redux/action/CatalogueAction/CatalogueAction";
import { getImageUrl } from "../../../api/api";
import { toast } from "react-toastify";

export default function CatalogDetailPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const { selectedCatalogue, loading, error } = useSelector(
    (state) => state.catalogue
  );

  useEffect(() => {
    if (slug) dispatch(fetchCatalogueBySlug(slug));
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading product...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!selectedCatalogue || selectedCatalogue.length === 0)
    return <p className="text-center py-10">No products found.</p>;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-secondary mt-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb - Only once at the top */}
        <div className="flex items-center gap-2 text-sm font-light mb-8">
          <Link
            to="/catalogue"
            className="text-primary-red underline-transition"
          >
            Catalog
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{slug}</span>
        </div>

        {selectedCatalogue.map((product, index) => {
          const isLast = index === selectedCatalogue.length - 1;
          const isZigZag = index > 0 && index % 2 === 1; // zig-zag starts from second object

          return (
            <div key={product.id} className="mb-16">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isZigZag ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/5] overflow-hidden bg-gray-50 ${
                    isZigZag ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div
                  className={`space-y-6 text-primary ${
                    isZigZag ? "lg:col-start-1" : ""
                  }`}
                >
                  <h1 className="font-heading text-4xl text-primary mb-4">
                    {product.name}
                  </h1>

                  <div
                    className="font-light text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />

                  {/* Only show buttons for last item */}
                  {isLast && (
                    <div className="space-y-4 pt-8 border-t border-gray-100">
                      <button
                        onClick={() => navigate("/appointment")}
                        className="w-full bg-primary text-secondary py-4 hover:bg-primary-hover transition-colors font-light tracking-wide"
                      >
                        REQUEST CONSULTATION
                      </button>

                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={handleShare}
                          className="flex items-center gap-2 text-primary hover:text-primary-red transition-colors font-light"
                        >
                          <BiShare className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
