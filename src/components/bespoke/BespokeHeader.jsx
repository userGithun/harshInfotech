import React from "react";
import defaultBanner from "../../assets/bespoke/bannerimage.png";
import secondBanner from "../../assets/bespoke/main.png";

import { Link } from "react-router-dom";

const BespokeHeader = ({ tab }) => {
  const tabContent = {
    process: {
      subtitle: "Level up your suit game",
      image: defaultBanner,
    },
    tuxedo: {
      subtitle: "Suit up for your moment",
      image: secondBanner,
    },
    "hand-crafted": {
      subtitle: "Buttons that tell a story",
      image: secondBanner,
    },
    "bespoke-shirt": {
      subtitle: "Precision in every stitch - Shirts",
      image: secondBanner,
    },
    "bespoke-accessories": {
      subtitle: "Elevate your ensemble with curated details",
      image: secondBanner,
    },
    "garment-care": {
      subtitle: "Preserve perfection with thoughtful care",
      image: secondBanner,
    },
    virtual: {
      subtitle: "Tailored virtual experience",
      image: secondBanner,
    },
  };

  const { title, subtitle, image } = tabContent[tab] || {
    title: "BESPOKE TAILORING",
    subtitle: "How to Level up your bespoke suit",
    image: defaultBanner,
  };

  return (
    <section className="relative bg-gray-800 text-white h-[60vh] md:h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 h-[60vh] md:h-[70vh] ">
        <img
          src={image}
          alt={title}
          className="w-full md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-xl md:text-3xl max-w-2xl mx-auto font-light tracking-wider">
            {subtitle}
          </h1>
          <Link
            to="/appointment"
            className="border border-white px-6 py-2 mt-8 hover:bg-white hover:text-black transition duration-300 font-light tracking-wider"
          >
            BOOK AN APPOINTMENT{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BespokeHeader;
