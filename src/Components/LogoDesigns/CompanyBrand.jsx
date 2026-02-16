import React from "react";
import Logo from "../../assets/Logos/Logo2.png";

const CompanyBrand = () => {
  return (
    <div
      className="
    flex gap-4
    border border-[#E7E7E7] dark:border-[#737373] rounded-[12px]
    p-2
    "
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex flex-col ">
        <p className="text-[12px] text-[#B0B0B0] dark:text-[#D1D1D1]">
          Company
        </p>
        <p className="font-bold text-[#454545] dark:text-[#F6F6F6]">
          Kanky Store
        </p>
      </div>
    </div>
  );
};

export default CompanyBrand;
