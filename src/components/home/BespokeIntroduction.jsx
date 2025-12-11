import React from "react";
import bespoke from "../../assets/bespoke.jpg";
import { Link } from "react-router-dom";

export const BespokeIntroduction = () => {
  return (
    <section className="py-16 px-8 md:px-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center  max-w-7xl mx-auto">
      <div className="space-y-6 -mt-44">
        <h2 className="font-['Baskerville',_serif] font-medium ">TSS Experience</h2>
        <p className="font-light leading-relaxed">
          In a world dominated by mass production and fast-changing fashion cycles, bespoke tailoring stands as a rare art—an enduring celebration of individuality, precision, and craftsmanship. At TSS, we believe a suit is far more than a garment; it is an extension of your personality, a silent introduction before you speak, and a powerful symbol of the standards you hold for yourself.
        </p>
        <p>
          Our mission is to craft bespoke suits that not only complement your body, but also capture your essence. Every stitch, every cut, and every fabric choice is guided by your story, your lifestyle, and your aspirations. We take a deeply personal approach—working closely with each client to understand their vision, refining every detail to create pieces that feel uniquely their own.
        </p>
        <p>
          But beyond elegance and precision, we offer something deeper: an experience, a ritual. It’s where craftsmanship meets character, where tradition meets modernity, and where your individuality becomes the blueprint. From exploring world-class fabrics to selecting the smallest handcrafted details, each moment is thoughtfully curated to honor your identity.
        </p>
        <p>
          At TSS, we don’t just create suits—we cultivate confidence. We shape garments that move with you, speak for you, and evolve with you. Each bespoke piece becomes a lifelong companion, a reminder of who you are and what you stand for.
        </p>
        <p>
          From the first conversation to the final fitting, we deliver more than clothing;
          we deliver artistry, presence, and a style narrative that belongs only to you.
        </p>
        <Link
          to="/catalogue"
          className="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 font-light tracking-wider"
        >
          DISCOVER MORE
        </Link>
      </div>
      <div>
        <img src={bespoke} alt="New Season" className="w-full h-auto" />
      </div>
    </section>
  );
};
