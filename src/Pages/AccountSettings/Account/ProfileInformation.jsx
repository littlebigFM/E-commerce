import React from "react";
import Input from "../../../Components/UI/Input";
import Button from "../../../Components/UI/Button/Button";

const ProfileInformation = () => {
  return (
    <div
      className="
      bg-[#FFFFFF]
      p-4 rounded-3xl
      dark:bg-[#1A1A1B]
      flex flex-col gap-4
      border-[1px] border-[#D1D1D1]
      dark:border-[#3D3D3D]
  "
    >
      <p className="font-semibold text-[18px] text-[#454545] dark:text-[#F6F6F6]">
        Profile Information
      </p>

      <div></div>

      <div
        className="
      grid grid-cols-1 gap-4
      min-[800px]:grid-cols-2
      min-[1200px]:grid-cols-3
      "
      >
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />
        <Input label="Gender" />
        <Input label="Date of Birth" />
      </div>

      <div>
        {/* <Button text="Update" className="bg-[#1A71F6] w-[100px]" /> */}
      </div>
    </div>
  );
};

export default ProfileInformation;
