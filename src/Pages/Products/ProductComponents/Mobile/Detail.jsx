import React from "react";

const Detail = ({ label, value, className, action }) => {
  return (
    <div className="flex items-center gap-6">
      <p className="text-[14px] text-[#737373] dark:text-[#B0B0B0]">{label}</p>
      <p
        className={`text-[14px] text-[#323130] dark:text-[#F6F6F6] flex text-center ${className}`}
      >
        {value}
      </p>
      <div>{action}</div>
    </div>
  );
};

export default Detail;
