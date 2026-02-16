import React from "react";

const Divider = ({ text = "Or" }) => {
  return (
    <div
      className="
    flex 
    items-center 
    gap-2
    "
    >
      <div
        className="
      flex-grow 
      border-t
      border-[#1A71F6]
      dark:border-[#D1D1D1]
      "
      ></div>
      <div
        className="
      font-bold 
      text-[12px]
      dark:text-[#F6F6F6]
      "
      >
        {text}
      </div>
      <div
        className="
       flex-grow 
      border-t
      border-[#1A71F6]
      dark:border-[#D1D1D1]
      "
      ></div>
    </div>
  );
};

export default Divider;
