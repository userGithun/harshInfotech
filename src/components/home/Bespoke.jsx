import React from "react";
import bespokehero from "../../assets/bespokehome.png";
import { Link } from "react-router-dom";

export const Bespoke = () => {
  return (
    <section className="relative  h-[620px] md:h-[640px] 2xl:h-[740px] flex items-center justify-center overflow-hidden ">
      <img
        src={bespokehero}
        alt="Bespoke "
        className="w-full h-full object-top object-cover "
      />
      {/* <div className="absolute inset-0 bg-black/20 hidden md:block"></div>{" "} */}
      <div className="absolute inset-0 flex items-center justify-end py-8 flex-col text-white px-8 text-center">
        <Link to="/appointment">
          <button className="border border-white px-6 py-2 mb-4 hover:bg-white hover:text-black transition duration-300 font-light tracking-wider uppercase">
            Book an Appointment
          </button>
        </Link>
        <h2 className="font-['Baskerville',_serif] tracking-wider  ">
          Bespoke & Made to Measure
        </h2>
      </div>
    </section>
  );
};
