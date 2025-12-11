import React from "react";
import image1 from "../../assets/bespoke/image1.png";
import image2 from "../../assets/bespoke/image2.png";
import image3 from "../../assets/bespoke/image3.png";
import image4 from "../../assets/bespoke/image4.png";
import image5 from "../../assets/bespoke/image5.png";
const steps = [
  {
    title: "Step 1: Book an Appointment",
    description:
      "First things first, you need to book an appointment on our website. This step is key because it helps us start the process and get in touch with you. Don't forget to let us know when you'd like your suit delivered so we can manage everything smoothly.",
    image: image1,
  },
  {
    title: "Step 2: Choose Your Design",
    description:
      "Once your appointment is set, it's time to pick out your design. Maybe you already have something in mind, or maybe you're still deciding. No worries! You can browse through our catalog or send us a reference image of what you like. If you're feeling a bit lost, don't stress—our team is here to help you find the perfect style.",
    image: image2,
  },
  {
    title: "Step 3: Send Us Your Measurements",
    description:
      "Next, we'll need your measurements. We'll send you a link to a measurement tutorial—please follow it closely for the best fit. It's a good idea to have a friend help you out, and be sure to wear formal pants and a fitted shirt while measuring. Avoid jeans or thick clothing, as they can affect the accuracy of the measurements.",
    image: image3,
  },
  {
    title: "Step 4: Join an Online Call",
    description:
      "Once we have your measurements, we'll schedule a video call to review everything. It's a good idea to have a friend and a measuring tape handy during the call, just in case we need to tweak anything. If you have a well-fitted shirt, trousers, or jacket, wearing them will help us get a better sense of your fit. During the call, we'll also discuss design details, fabric options, and finalize your order.",
    image: image4,
  },
  {
    title: "Step 5: Manufacturing and Delivery",
    description:
      "With all the details sorted, our skilled tailors will get to work. Crafting your suit usually takes about 7 to 10 days. Once it's ready, we'll ship it directly to you, wherever you are in the world.",
    image: image5,
  },
];

const VirtualTailoring = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 font-sans text-[#333]">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">
          How to Order a Bespoke Suit Virtually with The Suit Studio (TSS)
        </h1>
        <p className="text-base text-[#666] italic">
          In today's world, shopping from anywhere is a breeze. While buying
          off-the-rack is easy, at The Suit Studio (TSS), we're all about giving
          you a tailored suit experience without you having to leave your home.
          Experience the art of tailoring from the comfort of your home.
        </p>
      </div>

      <div className="space-y-32">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              <div className="md:w-1/2 w-full text-left px-4 md:px-0 relative">
                {/* <div className="absolute -left-6 top-0 md:static mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e] text-white font-bold text-sm z-10">
                  {index + 1}
                </div> */}
                <h3 className="text-2xl mb-3">{step.title}</h3>
                <p className="text-base leading-relaxed text-[#555]">
                  {step.description}
                </p>
              </div>
              <div className="md:w-1/2 w-full px-4 md:px-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[70vh] object-cover shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualTailoring;
