import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../api/api";
import { fetchAccessories } from "../../redux/action/AccessoriesAction/AccessoriesAction";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AccessoriesPageList = () => {
  const dispatch = useDispatch();
  const {
    items: accessories,
    loading,
    error,
  } = useSelector((state) => state.accessory);

  useEffect(() => {
    if (accessories.length === 0) {
      dispatch(fetchAccessories());
    }
  }, [dispatch, accessories.length]);

  if (loading) {
    return <div className="text-center py-10">Loading accessories...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full px-6 md:px-16 py-10 font-body max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accessories.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={getImageUrl(item.image)}
                alt={item.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-title text-primary text-base mb-1">
                  {item.name}
                </h3>
                {/* If you plan to add pricing later */}
                {/* <div className="text-sm text-gray-500 line-through">Rs 1999</div>
                <div className="text-primary text-lg font-semibold">Rs 1599</div> */}
              </div>

              <Link
                to={`/accessories/${item.slug}`}
                className="mt-4 w-full text-center bg-primary text-white py-2 rounded hover:bg-opacity-90 transition duration-300 text-sm"
              >
                View Product
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPageList;
