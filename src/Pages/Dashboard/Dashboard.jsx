import React from "react";
import Stats from "./Statistics/Stats";
import QuickAccess from "./QuickAccess";
import SalesTarget from "./SalesTarget";
import Description from "./Description";
import Province from "./Province";
import Products from "./ProductsEnquiry";

const Home = () => {
  return (
    <div
      className="
    py-2 px-4
    flex flex-col
    gap-2
    min-[1000px]:gap-6
    "
    >
      {/* ============= section 1 =============== */}
      <div className="flex flex-col gap-1 ">
        <p
          className="
        text-[24px] font-semibold 
        text-[#2A2A2A] dark:text-[#F6F6F6]
        "
        >
          Dashboard
        </p>
        <p
          className="
        text-[#888888] dark:text-[#B0B0B0]
        "
        >
          Dashboard
        </p>
      </div>
      {/* ======================================= */}

      {/* ============= section 2 =============== */}
      <div
        className="
      flex flex-col gap-6
      min-[1000px]:flex-row
      "
      >
        {/* ============= section 2 part1 =============== */}
        <div className="w-full flex flex-col gap-4">
          <div className="h-full">
            <SalesTarget />
          </div>
          <div className="h-full">
            <Stats />
          </div>
        </div>
        {/* ======================================= */}

        {/* ============= section 2 part2 =============== */}
        <div
          className="
         w-full
         flex flex-col
          gap-4
        "
        >
          <div
            className="
          gap-4
          grid grid-cols-1
          min-[350px]:grid-cols-2
         
          "
          >
            <QuickAccess
              className="bg-[white] min-[]:bg-[#1A71F6]"
              text1="Total Revenue"
              text2="$81.000"
              text3="10.6%"
              text4="From last week"
            />
            <QuickAccess
              className="bg-[white] "
              text1="Total Customer"
              text2="5.000"
              text3="1.5%"
              text4="From last week"
            />
            <QuickAccess
              className="bg-[white] "
              text1="Total Transactions"
              text2="12.000"
              text3="1.5%"
              text4="From last week"
            />
            <QuickAccess
              className="bg-[white] min-[]:bg-[#1A71F6]"
              text1="Total Revenue"
              text2="5.000"
              text3="1.5%"
              text4="From last week"
            />
          </div>
          <div>
            <Description />
          </div>
        </div>
        {/* ======================================= */}
      </div>
      {/* ======================================= */}

      {/* ============= section 3 =============== */}
      <div
        className="
      flex flex-col 
      min-[1000px]:flex-row 
      gap-4
      "
      >
        <div className="min-[1000px]:w-[50%]">
          <Province />
        </div>
        <div className="min-[1000px]:w-[50%]">
          <Products />
        </div>
      </div>
      {/* ======================================= */}
    </div>
  );
};

export default Home;
