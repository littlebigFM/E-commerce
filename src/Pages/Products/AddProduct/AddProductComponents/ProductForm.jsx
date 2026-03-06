import React from "react";
import Input from "../../../../Components/UI/Input";

const ProductForm = ({ formData, handleChange, handleSubmit, loading }) => {
  // const handleSubmit = async (event) => {
  //   const { data, error } = await supabase.from("products").insert([
  //     {
  //       sku: "12345",
  //       name: "Product 1",
  //       size: "M",
  //       color: "Red",
  //       category: "Clothing",
  //       price: 29.99,
  //       quantity: 100,
  //       status: "Available",
  //       image_url: "https://example.com/product1.jpg",
  //     },
  //   ]);

  //   if (error) {
  //     console.log("error", error);
  //   } else {
  //     console.log("Product saved successfully:", data);
  //   }
  // };

  return (
    <div
      className="
     bg-[#FFFFFF]
      rounded-[24px]
      p-4
      flex flex-col
      gap-4
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

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Input
            label="SKU"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            placeholder="Input SKU"
          />
          <Input
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Input product name"
          />
        </div>

        <div className="flex gap-2 w-full">
          <Input
            label="Size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="Input Size"
            className="w-full"
          />
          <Input
            label="Color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2 w-full min-[1300px]:flex-row">
          <div className="w-full flex flex-col">
            <label className="text-[14px] font-bold text-[#323130] dark:text-[#F6F6F6] mb-2">
              Product Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
              px-4 py-3
              border-[1.6px] border-[#D1D1D1] dark:border-[#3D3D3D]
              rounded-[12px]
              focus:outline-none 
              w-full 
              bg-white dark:bg-[#1A1A1B] dark:text-white
              "
            >
              <option value="">Select product category</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Jackets">Jackets</option>
              <option value="T-shirts">T-shirts</option>
              <option value="Bags">Bags</option>
            </select>
          </div>
          <Input
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Input Price"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Input Stock"
            className="w-full"
          />
          <div className="w-full flex flex-col">
            <label className="text-[14px] font-bold text-[#323130] dark:text-[#F6F6F6] mb-2">
              Status Product
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="
              px-4 py-3
              border-[1.6px] border-[#D1D1D1] dark:border-[#3D3D3D]
              rounded-[12px]
              focus:outline-none 
              w-full 
              bg-white dark:bg-[#1A1A1B] dark:text-white
              "
            >
              <option value="">Select status product</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Discontinued">Discontinued</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
