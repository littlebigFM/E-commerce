import React from "react";
import logo1 from "../../assets/Logos/logo.png";

const Logo = () => {
  return (
    <div>
      <div
        className="
        flex 
        items-center 
        gap-2
        "
      >
        <div>
          <img src={logo1} alt="" />
        </div>
        <p
          className="
          font-semibold
          text-[44px]
          text-[#333333]
          dark:text-white
          "
        >
          Culters
        </p>
      </div>
    </div>
  );
};

export default Logo;
