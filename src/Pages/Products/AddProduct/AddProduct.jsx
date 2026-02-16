import React from "react";
import ProductForm from "./AddProductComponents/ProductForm";
import ProductImageUpload from "./AddProductComponents/ProductImageUpload";
import { IoMdArrowBack, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  return (
    <form action="">
      <div
        className="
      p-4 
      flex flex-col gap-4
    "
      >
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
            Product
          </p>

          <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
            Dashboard{" "}
            <span>
              <IoMdArrowDropright />
            </span>
            Product{" "}
            <span>
              <IoMdArrowDropright />
            </span>{" "}
            {/* <span className="font-bold text-[#1A71F6]">{category}</span> */}
          </p>
        </div>

        <div
          onClick={() => navigate("/ProductsPage")}
          className="
        flex 
        items-center justify-center
        gap-1
        bg-[#1A71F6] 
        text-[#FFFFFF] dark:text-[#F6F6F6]
        rounded-[12px]
        font-bold 
        p-2
        cursor-pointer
        w-[70px]
      "
        >
          <IoMdArrowBack className="text-[16px]" />

          <button
            className="
        cursor-pointer
        text-[12px]
        "
          >
            Back
          </button>
        </div>

        <div className="flex flex-col gap-2 min-[950px]:flex-row">
          <div className="w-full">
            <ProductForm />
          </div>

          <div className="w-full">
            <ProductImageUpload />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
