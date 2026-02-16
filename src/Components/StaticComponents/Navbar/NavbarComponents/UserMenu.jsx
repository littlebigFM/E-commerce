import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../../../assets/Images/img2.png";

const UserMenu = () => {
  return (
    <div
      className="
    flex items-center 
    gap-4
    "
    >
      <div
        className="
      flex gap-4
       hidden 
      min-[500px]:flex
      "
      >
        <div
          className="
        p-1
        bg-[#F6F6F6] dark:bg-[#3D3D3D]
        rounded-[9px]
        text-[22px] dark:text-[#F6F6F6]
        h-[32px]
        "
        >
          <CiMail />
        </div>
        <div
          className="
        p-1
         bg-[#F6F6F6] dark:bg-[#3D3D3D]
        rounded-[9px]
        text-[22px] dark:text-[#F6F6F6]
        h-[32px]
        "
        >
          <IoIosNotificationsOutline />
        </div>
      </div>
      <div
        className="
          flex gap-1
          justify-center items-center
          "
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col ">
          <p
            className="
          font-bold 
          min-[500px]:font-semibold  min-[500px]:text-[14px]
          text-[#454545] dark:text-[#F6F6F6]
          "
          >
            Guy Hawkins
          </p>
          <p className="text-[12px] text-[#B0B0B0] dark:text-[#D1D1D1]">
            Admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
