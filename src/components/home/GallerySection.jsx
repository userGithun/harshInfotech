import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../../redux/action/GalleryAction/GalleryAction";
import { getImageUrl } from "../../api/api";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GalleryGrid = ({ items, isMobile }) => {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`grid gap-4 ${
        isMobile
          ? "grid-cols-2 md:hidden"
          : "grid-cols-4 grid-rows-2 hidden md:grid"
      } h-screen`}
      style={{ gridAutoFlow: "dense", gridAutoRows: "1fr" }}
    >
      {items.map((item, index) => {
        const spanClass = isMobile
          ? index === 2
            ? "col-span-2"
            : "col-span-1"
          : index === 2 || index === 3
          ? "col-span-2"
          : "row-span-1";

        return (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded shadow-sm group ${spanClass}`}
          >
            <img
              src={getImageUrl(item.thumbnail)}
              alt={item.name || `gallery-${index}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const GallerySection = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery());
  }, []);

  if (loading) return <p className="text-center py-10">Loading gallery...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!items || items.length === 0)
    return <p className="text-center py-10">No gallery items found.</p>;

  return (
    <div className="w-full px-6 md:px-24 py-12 font-body max-w-7xl mx-auto">
      <h2 className="font-heading text-center mb-10">TSS Gentlemen</h2>

      <GalleryGrid items={items} isMobile={false} />

      {/* <GalleryGrid items={items.slice(0, 3)} isMobile={true} /> */}
      <GalleryGrid items={items} isMobile={true} />

      {/* <Link to="/gallery" className="flex justify-center mt-10">
        <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 font-light tracking-wider">
          SEE MORE
        </button>
      </Link> */}
    </div>
  );
};

export default GallerySection;
