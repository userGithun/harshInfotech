import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { fetchAccessories } from "../../redux/action/AccessoriesAction/AccessoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../api/api";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AccessoriesComponent = ({ limit }) => {
  const dispatch = useDispatch();
  const { items: accessories, loading, error } = useSelector(
    (state) => state.accessory
  );

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

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  };

  const displayedAccessories = limit ? accessories.slice(0, limit) : accessories;

  // 🔥 Layout pattern for desktop grid (repeatable)
  const layoutPattern = [
    "col-span-2 row-span-2", // big tile
    "col-span-1 row-span-1", // normal
    "col-span-1 row-span-1", // normal
    "col-span-2 row-span-1", // wide
    "col-span-1 row-span-2", // normal
    "col-span-1 row-span-2", // tall
    "col-span-2 row-span-1", // wide
  ];

  return (
    <div className="w-full px-8 md:px-24 pb-12 py-2 font-body max-w-7xl mx-auto">
      {/* Mobile view: slider */}
      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {displayedAccessories.map((item) => (
            <div key={item.id} className="pr-4">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <Link
                  to={`/accessories/${item.slug}`}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end justify-center p-4"
                >
                  <h3 className="text-white text-sm font-semibold text-center">
                    {item.name}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop view: grid with pattern */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[200px] gap-4">
        {displayedAccessories.map((item, index) => {
          const layout = layoutPattern[index % layoutPattern.length];
          return (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group shadow-lg ${layout}`}
            >
              <img
                src={getImageUrl(item.image)}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <Link
                to={`/accessories/${item.slug}`}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end justify-center p-4"
              >
                <h3 className="text-white text-center text-sm md:text-base font-semibold tracking-wide">
                  {item.name}
                </h3>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AccessoriesComponent;
