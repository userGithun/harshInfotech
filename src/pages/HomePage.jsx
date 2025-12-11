import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { BespokeIntroduction } from "../components/home/BespokeIntroduction";
import { FeaturedCollection } from "../components/home/FeaturedCollection";
import { JournalSection } from "../components/home/JournalSection";
import { Bespoke } from "../components/home/Bespoke";
import { HeritageSection } from "../components/home/HeritageSection";
import TopAccessoriesSection from "../components/home/AccessoriesSection";
import GallerySection from "../components/home/GallerySection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className=" mt-12"> </div>

      <FeaturedCollection />
      <Bespoke />

      <BespokeIntroduction />

      <HeritageSection />
      <TopAccessoriesSection />
      <JournalSection />
      <GallerySection />
    </>
  );
};

export default HomePage;
