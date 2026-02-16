import React from "react";
import Input from "../../../../Components/UI/Input";

const ProductForm = () => {
  return (
    <div
      className="
     bg-[#FFFFFF]
      rounded-[24px]
      p-4
      flex flex-col
      gap-6
      dark:bg-[#1A1A1B]
       border border-[#E7E7E7] dark:border-[#3D3D3D]
    "
    >
      <div className="flex flex-col gap-2">
        <p
          className="
        font-semibold text-[22px] 
        text-[#454545] dark:text-[#F6F6F6]
        "
        >
          Product Information
        </p>

        <p
          className="
        text-[#B0B0B0] dark:text-[#F6F6F6]
        text-[14px] 
        "
        >
          Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in
          velit mattis.
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <Input label="SKU" placeholder="Input SKU" />
          <Input label="Product Name" placeholder="Input product name" />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
