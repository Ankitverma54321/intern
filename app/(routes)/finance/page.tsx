"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link from React Router
import { Button } from "@/components/ui/button";
import Grant from "@/app/(finance_pages)/grant/page";
import Budget from "@/app/(finance_pages)/budget/page";
import Balance from "@/app/(finance_pages)/balance_sheet/page";
import Statement from "@/app/(finance_pages)/statement/page";

const componentArray = [Grant, Budget, Balance, Statement];

const finance_data = [
  {
    id: 1,
    name: "Grant Position",
  },
  {
    id: 2,
    name: "Budget Allocation",
  },
  {
    id: 3,
    name: "Balance Sheet",
  },
  {
    id: 4,
    name: "Statement of Account",
  },
];

const Finance = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [activeComponentIndex, setActiveComponentIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveButtonIndex(index === activeButtonIndex ? null : index);
    setActiveComponentIndex(index === activeComponentIndex ? null : index);
  };

  return (
    <main>
      <section className="flex flex-wrap justify-evenly py-4 sticky left-0 top-0 w-full bg-slate-300">
        {finance_data.map((val, index) => (
          <Button
            variant={"outline"}
            className={
              activeButtonIndex === index
                ? "bg-black text-white border-cyan-600 border-2"
                : "bg-cyan-100 text-black border-cyan-600 border-2"
            }
            onClick={() => handleClick(index)}
          >
            {val.name}
          </Button>
        ))}
      </section>
      <div className="">
        {activeComponentIndex !== null &&
          React.createElement(componentArray[activeComponentIndex])}
      </div>
    </main>
  );
};

export default Finance;
