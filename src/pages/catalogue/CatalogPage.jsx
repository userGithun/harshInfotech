import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogue } from "../../redux/action/CatalogueAction/CatalogueAction";
import { getImageUrl } from "../../api/api";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items: catalogs, loading } = useSelector((state) => state.catalogue);

  useEffect(() => {
    dispatch(fetchCatalogue());
  }, []);

  return (
    <div className="min-h-screen bg-secondary mt-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl text-primary mb-4">
            OUR CATALOG
          </h1>
          <p className="font-light text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite collection of bespoke suits and tailored
            garments, crafted with the finest materials and attention to detail.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 py-10">Loading catalogue...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((catalog) => (
              <Link
                key={catalog.id}
                to={`/catalogue/${catalog.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={catalog.image ? getImageUrl(catalog.image) : "/placeholder.svg"}
                      alt={catalog.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white font-title text-lg mb-2">
                        {catalog.name}
                      </h3>
                      {catalog.excerpt && (
                        <p className="text-gray-200 text-sm font-light">
                          {catalog.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-16 py-16 border-t border-gray-100">
          <h2 className="font-heading text-3xl text-primary mb-4">
            TSS TAILORING SERVICES
          </h2>
          <p className="font-light text-gray-600 mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our master tailors can create a
            completely custom piece just for you.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-primary text-secondary px-8 py-3 hover:bg-primary-hover transition-colors font-light tracking-wide"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      </main>
    </div>
  );
}
