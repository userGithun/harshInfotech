import React from "react";
import ladieswear from "../../assets/ladieswear.jpg";

export const LadiesWearSection = () => {
  return (
    <section className="relative h-screen md:h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={ladieswear}
        alt="Bespoke Ladieswear"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute inset-0 flex items-center justify-end md:justify-start pb-12 flex-col text-white px-8 text-center">
        <h2 className="font-heading  tracking-wider mb-4 mt-36">
          BESPOKE LADIESWEAR
        </h2>
        <p className="max-w-lg font-light">
          At TSS, we pride ourselves on our bespoke tailoring for women,
          creating elegant, timeless pieces that combine traditional
          craftsmanship with contemporary style.
        </p>
        <div className="flex flex-col items-center mt-8 group ">
          <button className="mt-26 text-lg">DISCOVER MORE</button>
          <div className="h-[1px] bg-secondary w-32 mt-3 group-hover:mt-0 transform transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};
