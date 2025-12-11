import React from "react";
import be2 from "../../assets/bespoke/be2.png";
import be3 from "../../assets/bespoke/be3.png";

const sections = [
  {
    heading: "Why We Choose Horn Buttons",
    subheading: "Over Plastic at The Suit Studio",
    content:
      "At The Suit Studio, we believe that every detail of your suit matters. From the fabric to the lining, each element contributes to the overall look and feel. One detail that often gets overlooked but makes a huge difference? The buttons  buttons. We always recommend horn buttons. Sure, plastic buttons get the job done, but if you're looking for something that speaks to true sophistication and durability, horn is the way to go.",
    image: be3,
    reverse: false,
    quote:
      "The beauty of a suit lies in its details, and nothing elevates those details like the craftsmanship of horn buttons.",
  },
  {
    subheading: "Timeless Elegance: The Unique Charm of Horn Buttons",
    content:
      "Horn buttons are made from keratin—a fibrous structural protein found in animal horns and human hair. They're strong, built to last, and can handle the wear and tear of daily use. But beyond their durability, horn buttons are unique. Each one carries its own natural patterns and textures, so no two buttons are ever the same. This adds a level of exclusivity to your suit that plastic just can't match. At The Suit Studio, we focus on these finer details because we know they matter. And when it comes to buttons, horn is our superior choice every time.",
    image: be2,
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

const HandcraftedButtons = () => {
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

export default HandcraftedButtons;
