import React from "react";

const SalesTarget = () => {
  return (
    <div
      className="
    hidden min-[1000px]:flex
    flex-col justify-between
    bg-[white] dark:bg-[#1A1A1B]
    h-full
    rounded-[24px] py-2 px-4
    shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    "
    >
      <p
        className="
      font-semibold text-[16px]
      text-[#454545] dark:text-[#F6F6F6]
      "
      >
        Sales Target
      </p>

      <div
        className="
      flex flex-col gap-2
      "
      >
        <div
          className="
        text-[12px]
        text-[#737373] dark:text-[#B0B0B0]
        flex justify-between
        "
        >
          <p>In Progress</p>
          <p className="flex items-start w-[110px]">Sales Target</p>
        </div>

        <div
          className="
        font-semibold text-[16px]
        text-[#454545] dark:text-[#F6F6F6]
        flex justify-between
        "
        >
          <p>$231,032,444</p>
          <p>$500,000,00</p>
        </div>
      </div>
    </div>
  );
};

export default SalesTarget;
