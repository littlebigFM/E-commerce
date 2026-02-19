import React, { useState } from "react";
import ProductForm from "./AddProductComponents/ProductForm";
import { supabase } from "../../../Library/supabase";
import ProductImageUpload from "./AddProductComponents/ProductImageUpload";
import { IoMdArrowBack, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    size: "",
    color: "",
    category: "",
    price: "",
    quantity: "",
    status: "",
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // OR

    // const { name, value } = event.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.price) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const productData = {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity || 0),
        images: images || [],
      };

      const { data, error } = await supabase
        .from("products")
        .insert([productData])
        .select();

      if (error) throw error;

      alert("Product saved successfully!");

      navigate("/ProductsPage");
    } catch (error) {
      console.error("Insert error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
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
            <ProductForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>

          <div className="w-full">
            <ProductImageUpload
              images={images}
              setImages={setImages}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
