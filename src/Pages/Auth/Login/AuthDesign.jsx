import React from "react";
import img1 from "../../../assets/Images/img1.png";
import AuthDecor from "./AuthDecor";
import BlurCircle from "../../../Components/Common/BlurCircle";

const AuthDesign = () => {
  return (
    <div>
      <div
        className="
        hidden
        min-[1000px]:flex
        "
      >
        <AuthDecor />
      </div>

      {/* Blur component */}
      <div
        className="
          absolute
          top-1/3 left-1/6
          hidden
          min-[1000px]:flex
          "
      >
        <BlurCircle />
      </div>
      {/* ================== */}

      <div
        className="
        min-[945px]:w-[430px] 
        min-[1200px]:w-[530px]
        "
      >
        <img src={img1} alt="" />
      </div>

      <p
        className="
          font-semibold text-[36px] text-[#1A71F6] text-center
          min-[945px]:w-[430px]
          text-[#1A71F6] dark:text-[white] 
          min-[1000px]:text-[white]
          min-[1200px]:w-[530px]
        "
      >
        Easy-to-Use Dashboard for Managing Your Business.
      </p>
      <p
        className="
        text-center 
        text-[#D1D1D1] dark:text-[#D1D1D1] 
        min-[945px]:w-[430px]
        min-[1200px]:w-[530px]
        "
      >
        Streamline Your Business Management with Our User-Friendly Dashboard.
        Simplify complex tasks, track key metrics, and make informed decisions
        effortlessly
      </p>
    </div>
  );
};

export default AuthDesign;
