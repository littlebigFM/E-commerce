import React from "react";
import ShowallButton from "../../Components/UI/Button/ShowallButton";
import img from "../../assets/Images/img3.png";

const Province = () => {
  return (
    <div
      className="
    p-4
    bg-[#FFFFFF] dark:bg-[#1A1A1B]
    rounded-[24px]
    shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    flex flex-col gap-8
        "
    >
      <div
        className="
      flex justify-between items-center
     
       
      "
      >
        <p
          className="
          font-semibold text-[16px]
        text-[#454545] dark:text-[#F6F6F6]
        "
        >
          Customer Growth 3 Province
        </p>
        <ShowallButton text="Show All" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <p
            className="
            w-[14px] h-[14px] 
            rounded-full
            bg-[#BCF328]
            "
          ></p>
          <p
            className="
          text-[12px] 
          text-[#737373] dark:text-[#B0B0B0]
          "
          >
            East Java{" "}
            <span className="font-bold text-[#454545] dark:text-[#F6F6F6]">
              (50%)
            </span>
          </p>
        </div>

        <div className="flex gap-1 items-center">
          <p
            className="
            w-[14px] h-[14px] 
            rounded-full 
            bg-[#1A71F6] dark:bg-[#FF1F1F]
            "
          ></p>
          <p
            className="
          text-[12px] 
          text-[#737373] dark:text-[#B0B0B0]
          "
          >
            Kalimantan{" "}
            <span className="font-bold text-[#454545] dark:text-[#F6F6F6]">
              (50%)
            </span>
          </p>
        </div>

        <div className="flex gap-1 items-center">
          <p
            className="
            w-[14px] h-[14px] 
            rounded-full
            bg-[#184190] dark:bg-[#FAA300]
            "
          ></p>
          <p
            className="
          text-[12px] 
          text-[#737373] dark:text-[#B0B0B0]
          "
          >
            Bali{" "}
            <span className="font-bold text-[#454545] dark:text-[#F6F6F6]">
              (65%)
            </span>
          </p>
        </div>
      </div>

      <div>
        <img src={img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Province;
