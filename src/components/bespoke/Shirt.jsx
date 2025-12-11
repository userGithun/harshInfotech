import React from "react";
import be1 from "../../assets/bespoke/be1.png";
import be3 from "../../assets/bespoke/be3.png";
import image2 from "../../assets/bespoke/image3.png";

import { link } from "framer-motion/client";
const sections = [
  {
    heading: "Why Choose Bespoke Shirts at The Suit Studio (TSS)",
    content:
      "At The Suit Studio, we specialize in creating bespoke shirts tailored specifically to you. Whether you're looking for something formall, casual, or unique, we offer complete customization to ensure every shirt fits your body perfectly and reflects your personal style.",
    image: be1,
    reverse: true,
  },

  {
    subheading: "Impeccable Fit",
    content:
      "At TSS, we tailor each bespoke shirt to your precise measurements—taking into account everything from shoulder width and sleeve length to subtle details like your shoulder slope. The result? A shirt that offers unparalleled fit and comfort, far beyond anything you'll find off the rack. Bespoke Shirts for Every Occasion: ",
    options: [
      {
        label:
          "Pleated Shirts for Tuxedos: For tuxedos, we recommend a pleated, crisp white shirt with a wingtip collar, black buttons, and double cuffs, with our customized cufflinks option to complete your look.",
      },
      {
        label:
          "Dress Shirts: For business or formal settings, opt for classic shades like white, powder blue, or navy, paired with a cutaway or pointed collar and single cuffs for a sharp, professional appearance.",
      },
      {
        label:
          "Casual Shirts: Need something more relaxed? Our half-sleeve linen and cotton shirts offer comfort and style for everyday wear.",
      },
    ],
    image: be3,
    reverse: false,
    quote:
      "When you choose TSS, you're not just getting a shirt—you're investing in unparalleled comfort, unwavering confidence, and a timeless look crafted just for you.",
  },
  {
    subheading: "Full Customization",
    content:
      "From fabric choices to collars, buttons, and cuffs, we give you full control to design every detail of your shirt. Choose from options like:",
    options: [
      {
        label: "Collars: Pointed, spread, button-down, club, or hidden-button.",
      },
      {
        label:
          "Cuffs: French cuffs or classic barrel cuffs in straight, rounded, or angled styles",
      },
    ],
    image: image2,
    reverse: true,
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

      {options && options.length > 0 && (
        <div className="mt-6">
          <ul className="list-disc list-inside grid gap-3">
            {options.map((opt, i) => (
              <li key={i} className="p-1 transition duration-200">
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

const Shirt = () => {
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

export default Shirt;
