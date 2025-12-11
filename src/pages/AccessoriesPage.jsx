import React from "react";
import image from "../assets/headers/appointment.png";
import AccessoriesPageList from "../components/accessories/AccessoriesPageList";

const AccessoriesPage = () => {
  return (
    <>
      {/* Hero Section Overlapping Navbar */}
      <section className=" h-[60vh] z-0">
        <div className="absolute max-h-[60vh] inset-0">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Accessories"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-center mt-24 text-white text-center p-12">
            <h1 className="text-3xl md:text-5xl font-light mb-4 tracking-wider">
              Accessories
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our curated collection of TSS accessories.
            </p>
          </div>
        </div>
      </section>

      <div className=" z-10 mt-12">
        <AccessoriesPageList />
      </div>
    </>
  );
};

export default AccessoriesPage;
