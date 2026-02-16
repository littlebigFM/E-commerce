import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ShowallButton = ({ text }) => {
  return (
    <div>
      <div
        className="
          flex items-center gap-2
          "
      >
        <p
          className="
          text-[12px]
          font-semibold
          text-[#3D3D3D] dark:text-[#F6F6F6]
          "
        >
          {text}
        </p>
        <div className="dark:text-[white]">
          <HiOutlineArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default ShowallButton;
