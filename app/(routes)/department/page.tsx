import React from "react";
import Link from "next/link";
import depart_img from "@/constants/department";
import { Button } from "@/components/ui/button";

const department = () => {
  const itemsPerRow = 3;

  return (
    <main className="w-min-screen ">
      <section
        className="sticky left-0 top-0 flex flex-col pt-5 pl-2 flex-wrap justify-evenly w-[280px] 
      shadow-md h-screen"
      >
        {depart_img.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row mt-2 mb-2 ml-3 border-cyan-600 border-2 rounded-md w-[230px]
              hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <div className="">
                <video
                  src={item.image}
                  autoPlay
                  muted
                  loop
                  className="w-10 h-10 m-1"
                />
              </div>
              {item.link && (
                <Link href={item.link}>
                  <div>
                    <Button className="text-center base-bold">
                      {item.departments}
                    </Button>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default department;
