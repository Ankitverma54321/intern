import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { values } from "@/constants/gallery";

interface FeatureProps {
  id: number;
  heading: string;
  explanation: string;
}

const FeatureCard = ({ id, heading, explanation }: FeatureProps) => (
  <div className="flex flex-col  items-center mx-4">
    <h1 className="text-4xl">{heading}</h1>
    <p className="text-xl mt-3">{explanation}</p>
    <Link href="/financials">
      <Button
        variant={"outline"}
        className="primary-text-gradient max-lg:hidden pl-2 mt-3"
      >
        Learn More
      </Button>
    </Link>
  </div>
);

export default FeatureCard;
