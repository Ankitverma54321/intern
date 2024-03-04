import React from "react";
import { values } from "@/constants/gallery";
import FeatureCard from "../card/FeatureCard";

const FeatureSection = () => {
  return (
    <div className="h-full w-full ">
      <main className=" h-full w-full pt-40  flex flex-row pb-20">
        <div className="flex flex-row ">
          {values.map((value) => (
            <FeatureCard
              key={value.id}
              id={value.id}
              heading={value.heading}
              explanation={value.explanation}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeatureSection;
