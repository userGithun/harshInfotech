import React from "react";
import image1 from "../../assets/bespoke/image1.png";
import image2 from "../../assets/bespoke/image2.png";
import image3 from "../../assets/bespoke/image3.png";
import image4 from "../../assets/bespoke/image4.png";
import image5 from "../../assets/bespoke/image5.png";
import image6 from "../../assets/bespoke/image6.png";
const sections = [
  {
    heading: "Caring for Your Bespoke Suit:",
    subheading: "A Guide from The Suit Studio",
    content:
      "A bespoke suit is an investment in craftsmanship that requires proper care to ensure it stays flawless and lasts for years. Whether you wear it often or save it for special events, following these care guidelines will ensure your suit remains sharp for years.",
    image: image4,
    reverse: false,
  },
  {
    subheading: "Instruction 1: Proper Hanging for Longevity",
    content:
      "Choose a wide wooden hanger for your jacket to support its shape and absorb moisture. Always remove items from pockets before hanging to avoid creases. For pants, align the creases, fold them at the knee, and hang them to prevent wrinkles.",
    image: image2,
    reverse: true,
  },
  {
    subheading: "Instruction 2: Steam Instead of Ironing",
    content:
      "To remove wrinkles, use a handheld fabric steamer instead of an iron. Steaming is gentler on the fabric and effectively smooths out wrinkles without risking damage to its structure",
    image: image3,
    reverse: false,
  },
  {
    subheading: "Instruction 3: Regularly Brush for a Fresh Look",
    content:
      "Brush your suit regularly (at least once every two weeks) to remove dust and lint that can damage the fabric. Use a soft-bristle brush in long, downward strokes, starting from the shoulders and moving down to the lapels, back, and sleeves. This keeps the suit clean and helps prevent stains.",
    image: image4,
    reverse: true,
    quote:
      "Hang it right, brush it light — your suit deserves the attention it was crafted with.",
  },
  {
    subheading: "Instruction 4: Limit Dry Cleaning Visits",
    content:
      "Avoid taking your suit to the dry cleaners too often, as the chemicals can damage the fabric. Instead, air it out in a well-ventilated area after wearing to eliminate moisture and odors. Often, simply airing it is enough to refresh it.",
    image: image5,
    reverse: false,
  },
  {
    subheading: "Instruction 5: Safe Storage",
    content:
      "Store your suit in a breathable garment bag—preferably made of cotton or linen—to prevent moisture buildup. Keep it in a cool, dry area away from direct sunlight to avoid fading and deterioration.",
    image: image6,
    reverse: true,
    quote:
      "Luxury lives in the details — extend the life of your suit with mindful garment care.",
  },
  {
    subheading: "Instruction 6: Rotate Your Suits",
    content:
      "If you own several bespoke suits, rotate their use. This gives each suit time to recover, reducing wear in high-stress areas like the elbows and knees.",
    image: image1,
    reverse: false,
  },
];

const steps = [
  {
    title: "CONSULTATION",
    content:
      "Meet with our expert cutters to discuss your preferences, select fabrics, and determine the perfect style.",
  },
  {
    title: "FITTINGS",
    content:
      "Through multiple fittings, we refine your garment to ensure the perfect fit and appearance.",
  },
  {
    title: "COMPLETION",
    content:
      "After final adjustments, your handcrafted suit is ready to become part of your wardrobe.",
  },
];
const SectionBlock = ({ heading, subheading, content, image, reverse }) => (
  <div
    className={`flex flex-col gap-12 my-6 px-12 md:px-0 md:flex-row container max-w-5xl mx-auto ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="flex-2 flex flex-col justify-center">
      <h3 className="mt-12">{heading}</h3>
      <h4 className="mt-2 leading-relaxed font-light text-2xl">{subheading}</h4>
      <p className="mt-4 leading-relaxed">{content}</p>
    </div>
    <div className="flex-3">
      <img
        src={image}
        alt={heading || subheading}
        className="w-full h-[82vh] object-cover block"
      />
    </div>
  </div>
);

const DividerBlock = ({ text, background }) => (
  <div
    className="w-full h-72 md:h-96 flex items-center justify-center text-white text-3xl md:text-5xl font-bold bg-center bg-cover relative my-12"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="absolute inset-0 bg-black/60" />
    <h2 className="z-10">{text}</h2>
  </div>
);

const QuoteBlock = ({ quote }) => {
  if (!quote) return null;

  return (
    <div className="my-6 text-center px-12 md:px-48 italic bg-[#f3f3f3] flex justify-center items-center h-64">
      <h2 className="text-base md:text-2xl font-heading italic">“{quote}”</h2>
    </div>
  );
};

const GarmentCare = () => {
  return (
    <>
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          <SectionBlock {...section} />
          {i === 0 && (
            <DividerBlock text="At The End Of The Day" background={image6} />
          )}
          {i === 2 && (
            <DividerBlock text="Maintain Cleanliness" background={image4} />
          )}
          {i === 4 && <DividerBlock text="Storage Tips" background={image6} />}
          <QuoteBlock quote={section.quote} />
        </React.Fragment>
      ))}
    </>
  );
};

export default GarmentCare;
