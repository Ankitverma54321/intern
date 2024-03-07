import FeatureSection from "@/components/section/FeatureSection";

import Hero from "@/components/section/Hero";
import GallerySection from "@/components/section/GallerySection";

import React from "react";

const page = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <FeatureSection />
        <GallerySection />
      </div>
    </main>
  );
};

export default page;
