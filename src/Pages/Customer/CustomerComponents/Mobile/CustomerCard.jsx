import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import CustomerMobileModal from "./CustomerMobileModal";

export const CustomerCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="
        flex gap-2
      border border-[#D1D1D1] dark:border-[#3D3D3D]
      py-3 px-2
      justify-between
      "
      >
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1" />

          <div className="flex flex-col gap-3">
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {/* <div
                className="
          bg-[#F6F6F6] 
          w-[42px] h-[42px] 
          rounded-[6px]
          "
              >
                <img src={product.img} className="" alt="" />
              </div> */}

              <div className="text-[14px]">
                <p className="text-[#1A71F6]">{product.id}</p>
                <p className="dark:text-[#F6F6F6]">{product.name}</p>
              </div>
            </div>

            {open && <CustomerMobileModal product={product} />}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="w-[32px] h-[32px] bg-[#F6F6F6] rounded-[6px] flex items-center justify-center
          text-[20px]
          "
        >
          {open ? <IoChevronUp /> : <IoChevronDown />}
        </button>
      </div>
    </div>
  );
};
