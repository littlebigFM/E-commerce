import React, { useState } from "react";
import { IoMdArrowBack, IoMdArrowDropright } from "react-icons/io";
import Input from "../../../Components/UI/Input";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    purchases: "",
    quantity: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Saving customer:", formData);
    // Add save logic here
  };

  console.log(formData);

  return (
    <div className="p-4 flex flex-col gap-4 h-[92vh]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
          Orders
        </p>

        <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
          Dashboard{" "}
          <span>
            <IoMdArrowDropright />
          </span>
          <span className="font-bold text-[#1A71F6]">Add Customer</span>
        </p>
      </div>

      <div
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
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack className="text-[16px]" />
      </div>

      <div
        className="
     bg-[#FFFFFF]
      rounded-[24px]
      p-4
      flex flex-col
      gap-4
      dark:bg-[#1A1A1B]
       border border-[#E7E7E7] dark:border-[#3D3D3D]
       min-[950px]:w-[750px]
      
    "
      >
        <div>
          <p className="text-[22px] font-semibold text-[#3D3D3D] dark:text-[#F6F6F6]">
            Customer
          </p>
          <p className="text-[14px] text-[#888888] dark:text-[#B0B0B0] mt-2">
            Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean
            in velit mattis.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            label="Customer Name"
            placeholder="Enter Customer Name"
          />

          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-4">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              placeholder="Enter Email"
            />
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Phone"
              placeholder="Enter Phone"
            />
            <Input
              name="purchases"
              value={formData.purchases}
              onChange={handleChange}
              label="Purchases"
              placeholder="Total Purchases"
            />
            <Input
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              label="Quantity"
              placeholder="Order Quantity"
            />
          </div>
        </div>

        <div>
          <p className="text-[14px] font-bold text-[#323130] dark:text-[#F6F6F6] mb-2">
            Address
          </p>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="
          h-[126px] 
          resize-none outline-none 
          border-[1.6px] border-[#D1D1D1] dark:border-[#3D3D3D]
          rounded-[12px]
          w-full
          px-4 py-3
         text-[14px] text-[#454545] font-bold dark:text-white
          "
            placeholder="Enter Address"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-[#1A71F6] text-[14px] font-bold text-white rounded-[12px] w-[120px] h-[50px]"
        >
          Save Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
