import React from "react";

const CardValue = ({ text1, text2 }) => {
  return (
    <div
      className="
    flex flex-col gap-1
    p-2
    "
    >
      <p
        className="
      text-[10px] text-[#888888] dark:text-[#B0B0B0]
      "
      >
        {text1}
      </p>
      <p
        className="
      font-semibold text-[#454545]
      "
      >
        {text2}
      </p>
    </div>
  );
};

export default CardValue;
