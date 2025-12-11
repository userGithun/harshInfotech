import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/action/BlogAction/BlogAction";
import { getImageUrl } from "../../api/api";

const BlogListing = () => {
  const dispatch = useDispatch();
  const { items: blogs, loading, error } = useSelector((state) => state.blog);
  const categories = [
    "Tailoring Insights",
    "Style Guide",
    "Heritage Stories",
    "Seasonal Collections",
    "Behind the Scenes",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  useEffect(() => {
    if (!blogs) return;
    if (selectedCategory === "All") {
      setFilteredPosts(blogs);
    } else {
      setFilteredPosts(
        blogs.filter((post) => post.category === selectedCategory)
      );
    }
  }, [blogs, selectedCategory]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-black border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700">Loading blogs...</p>
      </div>
    );

  if (error)
    return (
      <p className="text-center py-20 text-red-500">
        {error || "Something went wrong!"}
      </p>
    );

  return (
    <div className="min-h-screen bg-white mt-24">
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">
            THE SUITS STUDIO NEPAL JOURNAL
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Insights into the world of bespoke tailoring, style guidance, and
            the heritage that defines TSS excellence.
          </p>
        </div>
      </section>

      {/* <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                selectedCategory === "All"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              ALL
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      <section className="pt-2 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={getImageUrl(post.image) || "/placeholder.svg"}
                      alt={post.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 tracking-wider">
                      <span>
                        {(typeof post.category === "string" &&
                          post.category.toUpperCase()) ||
                          "UNCATEGORIZED"}
                      </span>
                      <span>{post.duration || "3 min read"}</span>
                    </div>
                    <h2 className="text-xl font-serif leading-tight group-hover:text-gray-600 transition-colors">
                      {post.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-sm text-gray-500">
                      {new Date(post.cereatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest insights from TSS, exclusive
            content, and updates on our collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors tracking-wider text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BlogListing;
