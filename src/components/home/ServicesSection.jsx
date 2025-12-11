import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";

const slides = [
  {
    title: "LONDON",
    address: "11 Savile Row",
    image: service1,
  },
  {
    title: "NEW YORK",
    address: "W.57th Street",
    image: service2,
  },
];

export const Services = () => {
  const [hovered, setHovered] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    afterChange: (index) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: false,
        },
      },
    ],
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="hidden md:flex flex-row h-screen -mt-12 overflow-hidden">
        {slides.map((slide, index) => {
          const id = slide.title.toLowerCase();
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
              initial={{
                opacity: 0,
                y: 50,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="relative h-full overflow-hidden group w-full"
            >
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover absolute inset-0 z-0"
                animate={{
                  scale: hovered === id ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
                <h2 className="text-4xl font-light tracking-wider font-cormorant">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl italic font-light mt-2 font-cormorant">
                  {slide.address}
                </p>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white z-20">
                <a
                  href="/bespoke"
                  className="text-sm tracking-widest relative pb-2 group"
                >
                  <span>BESPOKE SERVICES</span>
                  <span className="absolute bottom-0 left-0 w-10 h-px bg-white group-hover:w-full transition-all duration-500"></span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section className="md:hidden  w-full relative overflow-hidden -mt-12">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center pb-16 z-20 text-white text-center">
                <h2 className="text-4xl font-light tracking-wider font-cormorant">
                  {slide.title}
                </h2>
                <p className="text-lg italic font-light mt-2 font-cormorant">
                  {slide.address}
                </p>
                <a
                  href="/bespoke"
                  className="mt-8 text-sm tracking-widest relative pb-2 group"
                >
                  <span>BESPOKE SERVICES</span>
                  <span className="absolute bottom-0 left-0 h-px bg-white w-full transition-all duration-500"></span>
                </a>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goToSlide(dotIndex)}
              className={`w-4 h-[1px] bg-black ${
                currentIndex === dotIndex ? "bg-primary" : "bg-secondary"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};
