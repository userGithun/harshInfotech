import React from "react";

const HowToLevel = () => {
  return (
    <div>
      {" "}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
            THE HUNTSMAN EXPERIENCE
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            From the first consultation to the final fitting, the creation of a
            bespoke Huntsman suit is a special experience. Our craftspeople
            combine heritage techniques with contemporary style to create
            garments of exceptional quality that will stand the test of time.
          </p>
          <p className="text-lg leading-relaxed">
            Each Huntsman suit is meticulously crafted on Savile Row and
            requires more than 80 hours of handwork. We use only the finest
            cloths and materials to ensure that every garment meets our exacting
            standards.
          </p>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center mb-12 font-light tracking-wide">
            EXPLORE OUR COLLECTIONS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src="/api/placeholder/600/800"
                  alt="Bespoke Suits"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg mb-2 font-light">BESPOKE SUITS</h3>
              <a
                href="#"
                className="text-sm border-b border-gray-800 pb-1 hover:border-gray-400"
              >
                DISCOVER MORE
              </a>
            </div>

            <div className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src="/api/placeholder/600/800"
                  alt="Ready to Wear"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg mb-2 font-light">READY TO WEAR</h3>
              <a
                href="#"
                className="text-sm border-b border-gray-800 pb-1 hover:border-gray-400"
              >
                DISCOVER MORE
              </a>
            </div>

            <div className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src="/api/placeholder/600/800"
                  alt="Accessories"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg mb-2 font-light">ACCESSORIES</h3>
              <a
                href="#"
                className="text-sm border-b border-gray-800 pb-1 hover:border-gray-400"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToLevel;
