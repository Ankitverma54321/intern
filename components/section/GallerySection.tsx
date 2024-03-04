"use client";

import * as React from "react";
import images from "@/constants/imagesource";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// const images = [
//   "https://source.unsplash.com/1600x900/?nature,water",

//   "https://source.unsplash.com/1600x900/?nature,trees",
//   "https://source.unsplash.com/1600x900/?nature,mountains",
//   // Add more image URLs here...
// ];

export function CarouselSpacing() {
  return (
    <main className="h-full w-full ">
      <Carousel className="w-full ">
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-0 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-0">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      height={700}
                      width={300}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}

export default CarouselSpacing;
