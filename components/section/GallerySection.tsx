"use client";

// components/GallerySection.tsx
import React, { useState, useEffect } from "react";
import images from "@/constants/imagesource";

const GallerySection: React.FC = () => {
  const [position, setPosition] = useState(0);
  const speed = 2; // Adjust the speed as needed

  useEffect(() => {
    const moveImages = () => {
      setPosition((prevPosition) => prevPosition - speed);

      // Reset position when the images are fully scrolled
      if (position < -100 * images.length) {
        setPosition(0);
      }
    };

    const animationId = requestAnimationFrame(moveImages);

    return () => cancelAnimationFrame(animationId);
  }, [position]);

  return (
    <div className="flex flex-row justify-center  h-[350px] w-full ">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "5px",
            height: "200px",
            width: "300px",
            transform: `translateX(${position}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default GallerySection;
