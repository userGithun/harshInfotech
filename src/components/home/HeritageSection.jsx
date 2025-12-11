import React from "react";
import heritage from "../../assets/heritage.jpg";

export const HeritageSection = () => {
  return (
    <section className="relative h-screen md:h-[500px] flex items-center justify-center overflow-hidden mt-8">
      <img
        src={heritage}
        alt="Bespoke Ladieswear"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute inset-0 flex items-center justify-end md:justify-start pb-12 flex-col text-white px-8 text-center">
        <h2 className="font-['Baskerville',_serif] tracking-wider mb-4 mt-36 uppercase">
          Our heritage{" "}
        </h2>
        <p className="max-w-2xl text-xl text-white font-light">
          At TSS, we believe a suit should speak through its character, intent,
          and individuality. Every piece we create is more than just fabric and
          thread; it’s a thoughtful expression of the person who wears it. From
          the quiet strength of a structured shoulder to the understated
          confidence of a hand-stitched lapel, each suit tells your story. We
          take pride in crafting garments that are not only worn, but
          remembered.
        </p>
      </div>
    </section>
  );
};
