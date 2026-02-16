import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const QuickAccess = ({ text1, text2, text3, text4, className }) => {
  return (
    <div
      className={`
    dark:bg-[#1A1A1B]
    rounded-[20px] p-4
    h-[158px]
    shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    flex flex-col justify-between
    ${className}
    cursor-pointer
        `}
    >
      <div
        className="
      w-full
      flex items-center justify-between"
      >
        <p
          className="
        font-semibold text-[16px]
        text-[#454545] dark:text-[#F6F6F6]
        "
        >
          {text1}
        </p>
        <HiOutlineArrowUpRight className="dark:text-[white]" />
      </div>
      <div
        className="
      flex flex-col gap-1
      "
      >
        <p
          className="
        font-semibold text-[25px]
        text-[#1A71F6] dark:text-[#3381F7]
        "
        >
          {text2}
        </p>
        <div
          className="
        flex items-center gap-1
        "
        >
          <p
            className="
          font-bold text-[12px] 
          text-[#04910C] dark:text-[#05AA0D]
          "
          >
            {text3}
          </p>
          <p
            className="
          text-[12px]
          text-[#737373] dark:text-[#B0B0B0]
          "
          >
            {text4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
