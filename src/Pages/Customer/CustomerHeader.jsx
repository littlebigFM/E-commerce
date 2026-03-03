import React from "react";
import SearchBar from "../../Components/Seachbar/SearchBar";
import { RiFilter3Fill } from "react-icons/ri";
import { FiDownload, FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const CustomerHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between w-full">
      <div className="hidden min-[950px]:flex">
        <SearchBar placeholder="Search Customer" />
      </div>

      <div className="flex gap-2 max-[950px]:justify-between max-[950px]:w-full">
        <div className="flex gap-2">
          <div
            className="
        flex 
        items-center 
        gap-1
        border border-[#B0B0B0] dark:border-[#B0B0B0]
        text-[#454545] dark:text-[#F6F6F6]
        rounded-[12px]
        font-bold text-[12px]
        p-2
        cursor-pointer
        "
          >
            <p>Filter</p>
            <RiFilter3Fill className="text-[20px]" />
          </div>

          <div
            className=" flex 
        items-center 
        gap-1
        border border-[#B0B0B0] dark:border-[#B0B0B0]
        text-[#454545] dark:text-[#F6F6F6]
        rounded-[12px]
        font-bold text-[12px]
        p-2
        cursor-pointer
        "
          >
            <p>Export</p>
            <FiDownload className="text-[20px]" />
          </div>
        </div>

        <Link
          to="/Customers/AddProduct"
          // onClick={navigate("/Customers/AddProduct")}
          className="
        flex 
        items-center
        gap-1
        bg-[#1A71F6] 
        text-[#FFFFFF] dark:text-[#F6F6F6]
        rounded-[12px]
        font-bold text-[12px]
        p-2
        cursor-pointer
        "
        >
          <p>Add Customer</p>
          <FiPlus className="text-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default CustomerHeader;
