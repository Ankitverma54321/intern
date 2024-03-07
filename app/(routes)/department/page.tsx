import React from "react";
import Link from "next/link";
import depart_img from "@/constants/department";
import { Button } from "@/components/ui/button";

const department = () => {
  const itemsPerRow = 3;

  return (
    <main>
      <section
        className="sticky left-0 top-0 flex flex-col pt-5 pl-2   flex-wrap justify-evenly w-[280px] 
      shadow-md h-screen"
      >
        {depart_img.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex flex-row mt-2 mb-2 ml-3 border-cyan-600 border-2 rounded-md w-[230px]"
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
              <div>
                <Button className="text-center base-bold">
                  {item.departments}
                </Button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default department;

{
  /* <div
              key={item.id}
              className={`flex flex-col items-center justify-center px-3 py-3 mb-3 w-full ${
                isLastItemInRow ? "md:w-1/3" : "md:w-1/3"
              }`}
            >
              <Link href="/">
                <video
                  src={item.image}
                  autoPlay
                  muted
                  loop
                  className="w-20 h-20 mb-2"
                />
                <Button variant={"outline"} className="text-center base-bold">
                  {item.departments}
                </Button>
              </Link>
            </div> */
}
