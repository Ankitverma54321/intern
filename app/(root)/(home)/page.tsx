import FeatureSection from "@/components/section/FeatureSection";
import GallerySection from "@/components/section/GallerySection";
import Hero from "@/components/section/Hero";
import Footer from "@/components/section/Footer";
import React from "react";

const page = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-0">
        <Hero />
        <FeatureSection />
        <GallerySection />
      </div>
    </main>
  );
};

export default page;
