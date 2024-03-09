import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col justify-center items-center  min-h-screen overflow-hidden">
      <div className="">
        <h1 className="uppercase text-white flex justify-center items-center tracking-wider font-semibold py-8 text-2xl">
          welcome to F & A
        </h1>
        <div className="gap-8 flex flex-wrap">
          <Link href="/finance">
            <Button className="py-6 px-8 border-2 border-white text-white text-xl uppercase tracking-wide transition duration-250 hover:bg-white hover:text-black cursor-pointer">
              get started
            </Button>
          </Link>
          <Link href="/department">
            <Button className="py-6 px-8 border-2 border-white text-white text-xl uppercase tracking-wide transition duration-250 hover:bg-white hover:text-black cursor-pointer">
              explore
            </Button>
          </Link>
        </div>
      </div>
      <video
        src={require("/public/video.mp4")}
        autoPlay
        muted
        loop
        className="absolute z-[-1] h-full w-full object-cover video"
      />
    </main>
  );
};

export default Hero;
