import React from "react";

export const HistorySection = () => {
  return (
    <section className="py-16 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="font-heading ">Celebrating 175 Years</h2>
        <p className="font-light leading-relaxed">
          At TSS, we combine the finest fabrics with the expertise of our master
          tailors to craft bespoke suits that truly reflect your unique style
          and personality. From your initial consultation to the final fitting,
          we uphold the highest standards of craftsmanship, ensuring every
          detail is tailored to perfection. Our goal is to create a suit that
          not only showcases your personal taste but also enhances your
          confidence, delivering a truly personalized experience.
        </p>
        <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 font-light tracking-wider">
          LEARN MORE
        </button>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1507667522877-ad03f0c7b0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Heritage Interior"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};
