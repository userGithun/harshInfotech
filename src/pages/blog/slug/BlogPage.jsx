import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogBySlug,
  fetchBlogs,
} from "../../../redux/action/BlogAction/BlogAction";
import { getImageUrl } from "../../../api/api";

const BlogPost = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { items, selectedBlog, loading, error } = useSelector(
    (state) => state.blog
  );
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogBySlug(slug));
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (selectedBlog && items.length > 0) {
      const related = items
        .filter((post) => post.id !== selectedBlog.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [selectedBlog, items]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-black border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700">Loading blog...</p>
      </div>
    );

  if (error)
    return (
      <p className="text-center py-20 text-red-500">
        {error || "Something went wrong!"}
      </p>
    );

  if (!selectedBlog)
    return (
      <div className="p-8 text-center h-screen mt-26">Blog post not found.</div>
    );

  return (
    <div className="min-h-screen bg-white mt-24">
      <nav className="py-4 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/blog" className="hover:text-black transition-colors">
              Journal
            </a>
            <span>/</span>
            <span>{selectedBlog.category || "Uncategorized"}</span>
            <span>/</span>
            <span className="text-black">Current Article</span>
          </div>
        </div>
      </nav>
      <header className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 text-xs tracking-widest text-gray-600 border border-gray-300">
              {(selectedBlog.category || "UNCATEGORIZED").toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            {selectedBlog.name}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
            <span>By {selectedBlog.author || "Unknown"}</span>
            <span className="hidden sm:inline-block">•</span>
            <span>
              {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span>{selectedBlog.duration || "3 min read"}</span>
          </div>
        </div>
      </header>
      <div className="px-4 mb-12">
        <div className="max-w-5xl mx-auto">
          <img
            src={getImageUrl(selectedBlog.image)}
            alt={selectedBlog.name}
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </div>
      </div>
      <article className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
          />
        </div>
      </article>
      {relatedPosts.length > 0 && (
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <article key={post.id} className="group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                      <img
                        src={getImageUrl(post.image)}
                        alt={post.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500 tracking-wider">
                        {(post.category || "UNCATEGORIZED").toUpperCase()}
                      </span>
                      <h3 className="text-lg leading-tight group-hover:text-gray-600 transition-colors">
                        {post.name}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
