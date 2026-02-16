import React from "react";
import CardValue from "./CardValue";
import Vector3 from "../../../assets/Icons/Vector3.svg?react";
import Vector4 from "../../../assets/Icons/Vector4.svg?react";
import Vector5 from "../../../assets/Icons/Vector5.svg?react";
import ShowallButton from "../../../Components/UI/Button/ShowallButton";
import SalesLineChart from "../../../Components/UI/Chart/SalesLineChart";

const Stats = () => {
  return (
    <div
      className=" 
      bg-[#FFFFFF]
      rounded-[24px]
      py-2 px-4
      flex flex-col
      gap-6
      dark:bg-[#1A1A1B]
      relative
     shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    
      "
    >
      <div className="flex flex-col gap-4">
        <div
          className="
      flex items-center justify-between
      "
        >
          <p
            className="
        font-semibold text-[14px]
        text-[#454545] dark:text-[#F6F6F6]
        "
          >
            Your Sales this year
          </p>

          <ShowallButton text="Show All" />
        </div>

        <div
          className="
        flex flex-col gap-2 
        text-[#737373] dark:text-[#B0B0B0] 
        
        "
        >
          <div className="flex items-center gap-1">
            <p className="w-[14px] h-[14px] bg-[#BCF328]"></p>
            <p className="text-[12px] ">Average Sale Value</p>
          </div>

          <div className="flex items-center gap-1">
            <p className="w-[14px] h-[14px] bg-[#1A71F6]"></p>
            <p className="text-[12px]">Average item persale</p>
          </div>
        </div>
      </div>

      {/* =================== Chart =============== */}

      <div className="flex gap-2 w-full justify-center">
        <div
          className="
          border border-dashed rounded-[12px]
          border-[#1A71F6]
          bg-[white]
"
        >
          <CardValue text1="Average item persale" text2="$ 211,411,223" />
        </div>

        <div className="bg-[#BCF328] rounded-[12px]">
          <CardValue text1="Average year value" text2="$ 339,091,888" />
        </div>
      </div>

      {/* <div>
        <Vector3
          className="absolute -translate-x-1/2 left-[49%] bottom-1/4"
          width={30}
        />

        <div>
          <Vector4 className="absolute right-[1%] w-full -translate-y-1/2" />
          <Vector5 className="absolute right-[1%] w-full -translate-y-1/2" />
        </div>
      </div> */}

      <div className="w-full">
        <SalesLineChart
          labels={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
        />
      </div>
    </div>
  );
};

export default Stats;
