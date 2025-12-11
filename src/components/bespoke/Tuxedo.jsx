import React from "react";
import be1 from "../../assets/bespoke/be1.png";
import be2 from "../../assets/bespoke/be2.png";
import be3 from "../../assets/bespoke/be3.png";
import be4 from "../../assets/bespoke/be4.png";

import { link } from "framer-motion/client";
const sections = [
  {
    heading: "Mastering the Art of the Tuxedo",
    subheading: "Why Choose TSS for Your Tuxedo?",
    content:
      "At THE SUIT STUDIO (TSS), we ensure that the timeless elegance of the classic tuxedo remains untouched. Every tuxedo we tailor is a masterpiece of precision, with attention to detail, honoring the tradition of this ultimate formal wear. Once reserved for black-tie events, tuxedos are now worn at weddings, business meetings, and special occasions.",
    image: be1,
    reverse: true,
  },
  {
    subheading: "Tuxedo Customization: Fabrics and Colors",
    content:
      "We also offer a wide variety of fabrics for your tuxedo, including luxurious options like velvet and bold colors such as all white or green, allowing you to personalize your tuxedo to match your style and occasion.",
    image: be2,
    reverse: false,
    quote:
      "At TSS, we focus on preserving the essence of a classic tux while allowing customization to suit your personal style.",
  },
  {
    subheading: "Fabric and color options?",
    content:
      "We recommend 100% wool for your tuxedo, and for good reason. Wool is the most popular choice for its ability to drape perfectly and it is breathable, durable, and insulating—ideal for any occasion. Wool truly sets the standard for elegance.",
    options: [
      { label: "Black Wool Tuxedo (VBC fabric)", value: "black" },
      { label: "Blue Wool Tuxedo (VBC fabric)", value: "blue" },
    ],
    image: be3,
    reverse: true,
  },
  {
    subheading: "Customized Accessories and Shirt",
    content:
      "At TSS, we offer a range of accessories to complete your look, including crisp bow ties, cummerbunds, and custom cufflinks. To elevate your ensemble further, we recommend a customized pleated shirt with a wingtip collar and black studs for a timeless, sophisticated finish. Your tuxedo isn't just about fit—it's about making a statement with every detail.",
    subtitle: "For more about Bespoke Shirts",
    link: "/bespoke-tailoring/shirts",
    image: be4,
    reverse: false,
  },
];

import { Link } from "react-router-dom";

const SectionBlock = ({
  heading,
  subheading,
  content,
  subtitle,
  link,
  image,
  reverse,
  options,
}) => (
  <div
    className={`flex flex-col gap-12 my-6 px-12 md:px-0 md:flex-row container max-w-5xl mx-auto ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="flex-1 flex flex-col justify-center">
      {heading && <h3 className="mt-12">{heading}</h3>}
      <h4 className="mt-2 leading-relaxed font-light text-2xl">{subheading}</h4>
      <p className="mt-4 leading-relaxed">{content}</p>

      {subtitle && link && (
        <div className="flex gap-2 mt-4 text-sm text-primary  hover:text-primary/80 transition">
          <p> {subtitle}</p>

          <Link to={link} className="underline">
            Click here
          </Link>
        </div>
      )}

      {options && options.length > 0 && (
        <div className="mt-6">
          <p className=" mb-3">Available Options:</p>
          <ul className="grid gap-3">
            {options.map((opt, i) => (
              <li
                key={i}
                className="px-4 py-2 bg-[#f5f5f5]  border text-sm transition duration-200"
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="flex-1">
      <img
        src={image}
        alt={heading || subheading}
        className="w-full h-[82vh] object-cover block"
      />
    </div>
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

const Tuxedo = () => {
  return (
    <>
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          <SectionBlock {...section} />
          <QuoteBlock quote={section.quote} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Tuxedo;
