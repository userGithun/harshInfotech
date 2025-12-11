import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import overcoat from "../../assets/overcoat.png";
import peacoats from "../../assets/peacoats.png";
import heritage3 from "../../assets/heritage3.jpg";
import { Link } from "react-router-dom";
const featuredSlides = [
  {
    title: "READYMADE",
    image: heritage3,
    link: "/products",
  },
  // {
  //   title: "MADE TO MEASURE",
  //   image: overcoat,
  //   link: "/appointment",
  // },
  {
    title: "BESPOKE",
    image: peacoats,
    link: "/bespoke-tailoring/process",
  },
];


export const FeaturedCollection = () => {
  const [hovered, setHovered] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    arrows: false,
  };

  const mobileSettings = {
    afterChange: (index) => setCurrentIndex(index),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
  };

  return (
    <>
      <section className=" hidden md:block overflow-hidden">
        {featuredSlides.length > 3 ? (
          <>
            <div className="  hidden justify-end gap-4  pr-14">
              <button
                onClick={handlePrev}
                className="text-primary bg-secondary rounded-full p-2 shadow-xl border-[1px] border-black/20 hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="text-primary bg-secondary rounded-full p-2 shadow-xl border-[1px] border-black/20 hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                &#8594;
              </button>
            </div>

            <div className="relative">
              <Slider {...desktopSettings} ref={sliderRef}>
                {featuredSlides.map((slide, index) => {
                  const id = slide.title.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <motion.div
                      key={id}
                      onMouseEnter={() => setHovered(id)}
                      onMouseLeave={() => setHovered(null)}
                      animate={{
                        opacity: 1,
                        y: isVisible ? 0 : 50,
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      transition={{
                        duration: 2,
                        ease: "easeOut",
                        delay: index * 0.5,
                      }}
                      className="relative h-[90vh] px-2 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                      <motion.img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover absolute inset-0 z-0"
                        animate={{ scale: hovered === id ? 1.05 : 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white"></div>
                      <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white z-20">
                        <Link
                          to={slide.link}
                          className="text-sm tracking-widest relative pb-2 group underline-transition"
                        >
                          <h2 className="text-3xl font-light tracking-wider font-cormorant">
                            {slide.title}
                          </h2>
                        </Link>

                      </div>
                    </motion.div>
                  );
                })}
              </Slider>
            </div>
          </>
        ) : (
          <div className="flex flex-row h-screen">
            {featuredSlides.map((slide, index) => {
              const id = slide.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.div
                  key={id}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  animate={{
                    flex: hovered === id ? 1.2 : 1,
                    opacity: 1,
                    y: isVisible ? 0 : 50,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: index * 0.5,
                  }}
                  className="relative h-full overflow-hidden group w-full"
                >
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover absolute inset-0 z-0"
                    animate={{ scale: hovered === id ? 1.05 : 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white"></div>
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white z-20">
                    <Link
                      to={slide.link}
                      className="tracking-widest relative pb-6 group"
                    >
                      <h2 className="text-2xl font-light tracking-wider font-cormorant underline-transition">
                        {slide.title}
                      </h2>
                    </Link>

                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Mobile View */}
      <section className="md:hidden w-full relative overflow-hidden h-[90vh]">
        <Slider {...mobileSettings}>
          {featuredSlides.map((slide, index) => (
            <div key={index} className="relative h-[90vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white z-20">
                <Link
                  to="/products"
                  className="tracking-widest relative pb-6 group"
                >
                  <h2 className="text-2xl font-light tracking-wider font-cormorant underline-transition">
                    {slide.title}
                  </h2>{" "}
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {featuredSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`w-4 h-[1px] ${currentIndex === dotIndex ? "bg-primary" : "bg-white/40"
                }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};
