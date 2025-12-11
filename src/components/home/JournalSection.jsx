import React, { useEffect } from "react";
import Slider from "react-slick/lib/slider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/action/BlogAction/BlogAction";
import { getImageUrl } from "../../api/api";

export const JournalSection = () => {
  const dispatch = useDispatch();
  const { items: blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  // Prepare featured + others
  const featuredArticle = blogs[0] || null;
  const articles = blogs.slice(1, 5); // next 4 blogs

  const mobileSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.15,
    slidesToScroll: 1,
  };

  if (loading) {
    return <div className="text-center py-12">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  if (!featuredArticle) {
    return null; // no blogs to show yet
  }

  return (
    <div className="w-full mx-auto px-8 md:px-24 py-12 font-body max-w-7xl">
      <h1 className="text-center font-heading mb-6">TSS Journal</h1>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {/* Featured */}
        <div className="col-span-1 bg-gray-100">
          <Link to={`/blog/${featuredArticle.slug}`}>
            <img
              src={getImageUrl(featuredArticle.image)}
              alt={featuredArticle.name}
              className="w-full h-96 object-cover"
            />
          </Link>
          <div className="p-4">
            <h2 className="text-base text-gray-700 mb-2">
              {featuredArticle.name}
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              {featuredArticle.excerpt}
            </p>
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="text-sm text-gray-700 flex items-center text-primary-red"
            >
              Read More <span className="ml-1">›</span>
            </Link>
          </div>
        </div>

        {/* Grid of Articles */}
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {articles.map((article) => (
              <div key={article.id} className="col-span-1 bg-gray-100">
                <Link to={`/blog/${article.slug}`}>
                  <img
                    src={getImageUrl(article.image)}
                    alt={article.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-2">
                  <h3 className="text-sm text-center text-gray-700">
                    {article.name}
                  </h3>
                  <div className="text-center mt-1">
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-sm text-gray-700 flex justify-center items-center text-primary-red"
                    >
                      Read More <span className="ml-1">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Slider {...mobileSliderSettings}>
          {[featuredArticle, ...articles].map((article) => (
            <div key={article.id} className="px-2">
              <div className="bg-gray-100 rounded overflow-hidden">
                <Link to={`/blog/${article.slug}`}>
                  <img
                    src={getImageUrl(article.image)}
                    alt={article.name}
                    className="w-full h-60 object-cover"
                  />
                </Link>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    {article.name}
                  </h3>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-sm text-gray-700 flex items-center text-primary-red"
                  >
                    Read More <span className="ml-1">›</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Link to="/blog" className="flex justify-center mt-6">
        <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 font-light tracking-wider">
          MORE ARTICLES
        </button>
      </Link>
    </div>
  );
};
