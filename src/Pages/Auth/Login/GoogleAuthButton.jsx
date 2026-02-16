import React from "react";
import GoogleIcon from "../../../assets/Icons/google.svg";

const GoogleAuthButton = ({ text }) => {
  return (
    <div
      className="
    flex 
    items-center 
    justify-center 
    gap-2 border 
    border-[#1A71F6]
    border-[2px]
    rounded-[12px]
    px-4 py-2
    cursor-pointer 
    hover:shadow-md 
    transition-shadow
    dark:bg-white
    "
    >
      <div>
        <GoogleIcon />
      </div>
      <div
        className="
      text-[#1A71F6]
      font-bold
      "
      >
        {text}
      </div>
    </div>
  );
};

export default GoogleAuthButton;
