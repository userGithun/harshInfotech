import React from "react";
import image1 from "../../assets/bespoke/image1.png";
import image2 from "../../assets/bespoke/image2.png";
import image3 from "../../assets/bespoke/image3.png";
import image4 from "../../assets/bespoke/image4.png";
import image5 from "../../assets/bespoke/image5.png";
import image6 from "../../assets/bespoke/image6.png";
import { BsQuote } from "react-icons/bs";

const sections = [
  {
    heading: "Elevate Your Bespoke Suit",
    subheading: "Personalization & Premium Touches",
    content:
      "At THE SUIT STUDIO (TSS), we believe a bespoke suit is more than just a perfect fit—it's a true expression of individuality. Here are some simple yet impactful ways to elevate your suit with our personalized, premium touches.",
    image: image1,
    reverse: false,
    quote: "Style is a way to say who you are without having to speak.",
  },
  {
    subheading: "Choose Premium Lining Options",
    content:
      "We offer premium linings in bold patterns and rich solid colors, adding a stylish surprise when you open your jacket. These linings enhance not only the look but also the comfort and breathability of your suit.",
    image: image2,
    reverse: true,
    quote: "Elegance is not about being noticed, it's about being remembered.",
    type: "overlay",
  },
  {
    subheading: "Hand-Stitching on the Lapel",
    content:
      "A hand-stitched lapel reflects true craftsmanship. It adds a refined, distinctive finish that sets your suit apart from off-the-rack alternatives.",
    image: image3,
    reverse: false,
    quote:
      "At The Suit Studio, we focus on the details that make your suit stand out.",
  },
  {
    subheading: "Engrave Special Notes or Dates",
    content:
      "Make your suit truly yours by engraving meaningful details such as your initials, a significant date, or a short message inside the jacket. These personal touches add sentimental value, transforming your suit into a cherished keepsake.",
    image: image4,
    reverse: true,
  },
  {
    subheading: "Rolled Lapel",
    content:
      "For a modern twist, consider a rolled lapel. It offers a softer, more relaxed silhouette while maintaining the elegance of traditional tailoring—a subtle yet stylish way to update your look.",
    image: image5,
    reverse: false,
    quote:
      "These personal touches not only enhance your suit’s aesthetic but also create a deeper connection to the piece.",
    type: "overlay",
  },
  {
    subheading: "Contrast Lapel and Cuff Button Detail",
    content:
      "For a bold yet sophisticated look, consider contrasting colors for the lapel and cuff button details. This easy upgrade adds a unique character to your bespoke suit without overpowering its timeless design.",
    image: image6,
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
      {heading && <h3 className="mt-12">{heading}</h3>}
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

const OverlaySectionBlock = ({
  subheading,
  content,
  image,
  reverse,
  quote,
}) => {
  return (
    <div className="relative max-w-5xl mx-auto h-[54vh]">
      <img
        src={image}
        alt={subheading}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text container, left or right based on `reverse` */}
      <div
        className={`absolute top-0 bottom-0 ${
          reverse ? "right-0" : "left-0"
        } w-full  flex flex-col justify-center px-8 md:px-12 text-white z-10`}
      >
        <h4 className="text-2xl font-title mb-3">{subheading}</h4>
        <p className="text-base font-light">{content}</p>
        {quote && (
          <blockquote className="mt-4 italic text-sm text-white/80 border-l-4 border-primary pl-4">
            “{quote}”
          </blockquote>
        )}
      </div>
    </div>
  );
};

const QuoteBlock = ({ quote }) => {
  if (!quote) return null;

  return (
    <div className="my-6 text-center px-12 md:px-48 italic bg-[#f3f3f3] flex flex-col justify-center items-center py-8 mb-12">
      <BsQuote className="text-4xl text-gray-500 mb-4" />
      <h2 className="text-base md:text-2xl font-heading italic">“{quote}”</h2>
    </div>
  );
};

const StepBlock = ({ step, index }) => (
  <div className="text-center container max-w-xs mx-auto my-12">
    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
      <span className="text-xl">{index + 1}</span>
    </div>
    <h4 className="text-lg mb-3 font-light">{step.title}</h4>
    <p className="text-sm">{step.content}</p>
  </div>
);

const Process = () => {
  return (
    <>
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          {section.type === "overlay" ? (
            <OverlaySectionBlock {...section} />
          ) : (
            <>
              {" "}
              <SectionBlock {...section} />
              <QuoteBlock quote={section.quote} />
            </>
          )}
        </React.Fragment>
      ))}

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepBlock key={index} step={step} index={index} />
        ))}
      </div>
    </>
  );
};

export default Process;
