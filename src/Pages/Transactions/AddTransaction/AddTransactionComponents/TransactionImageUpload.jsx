import React from "react";
import Button from "../../../../Components/UI/Button/Button";
import { FiImage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../Library/supabase";

const UploadBox = ({ label, onFileChange }) => (
  <label
    className="
    flex flex-col items-center justify-center
    border-2 border-dashed
    border-blue-300
    rounded-[8px]
    h-24
    cursor-pointer 
    hover:bg-blue-50
    bg-[#EEF7FF]
    transition
    relative
  "
  >
    <FiImage className="text-blue-400 mb-1" />
    <span className="text-xs text-gray-400">{label}</span>
    <input
      type="file"
      accept="image/*"
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      onChange={(e) => onFileChange(e.target.files && e.target.files[0])}
    />
  </label>
);

const ProductImageUpload = ({ images, setImages, handleSubmit }) => {
  const navigate = useNavigate();

  const uploadImages = async (file) => {
    if (!file) return;

    const fileName = `${Date.now()}-${file.name.replace(/\s/g, "-")}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (error) {
      alert("Image upload failed");
      console.log(error);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    if (publicUrlData?.publicUrl) {
      setImages((prev) => [...prev, publicUrlData.publicUrl]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
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
        text-[#454545] dark:text-[#F6F6F6]"
          >
            Image Product
          </p>
          <p className="text-[#1A71F6] font-bold text-[12px]">
            Note:{" "}
            <span className="text-[#454545] font-normal dark:text-[#F6F6F6]">
              Format photos SVG, PNG, or JPG (Max size 4mb)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <UploadBox label="Photo 1" onFileChange={uploadImages} />
          <UploadBox label="Photo 2" onFileChange={uploadImages} />
          <UploadBox label="Photo 3" onFileChange={uploadImages} />
          <UploadBox label="Photo 4" onFileChange={uploadImages} />
        </div>
      </div>

      <div className="flex flex-col gap-2 min-[360px]:flex-row justify-between px-4">
        <Button
          onClick={() => navigate("/ProductsPage")}
          text="Discard Changes"
          className="
          border border-[#1A71F6] text-[#1A71F6] bg-[#FFFFFF] 
          font-bold text-[14px]
          items-center justify-center
          w-[164px]
          "
        />
        <Button
          onClick={handleSubmit}
          text="Save Product"
          className="
          bg-[#1A71F6] text-[#FFFFFF] 
          font-bold text-[14px]
          items-center justify-center
          w-[147px]
          "
        />
      </div>
    </div>
  );
};

export default ProductImageUpload;
