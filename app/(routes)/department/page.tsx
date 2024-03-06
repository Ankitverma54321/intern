import React from "react";
import Link from "next/link";
import depart_img from "@/constants/department";
import { Button } from "@/components/ui/button";

const department = () => {
  const itemsPerRow = 3;

  return (
    <main>
      <section className="sticky left-0 top-0 flex pt-10 w-full flex-wrap justify-center">
        {depart_img.map((item, index) => {
          const isLastItemInRow = (index + 1) % itemsPerRow === 0;

          return (
            <div
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
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default department;
