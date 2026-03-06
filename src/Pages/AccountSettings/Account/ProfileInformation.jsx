import React from "react";
import Input from "../../../Components/UI/Input";
import { Edit } from "lucide-react";
import useEditableForm from "../../../Hook/useEditableForm";

const ProfileInformation = () => {
  const initialData = {
    firstName: "Cameron",
    lastName: "Williamson",
    email: "cameron.williamson@example.com",
    gender: "male",
    dateOfBirth: "23/12/2003",
  };

  const {
    formData,
    isEditing,
    handleChange,
    handleEdit,
    handleCancel,
    handleUpdate,
  } = useEditableForm(initialData);

  const updateProfile = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Saved to database:", data);
        resolve();
      }, 1500);
    });
  };

  return (
    <div
      className="
      bg-[#FFFFFF]
      p-4 rounded-3xl
      dark:bg-[#1A1A1B]
      flex flex-col gap-2 
      border-[1px] border-[#D1D1D1]
      dark:border-[#3D3D3D]
  "
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px] text-[#454545] dark:text-[#F6F6F6]">
          Profile Information
        </p>

        {!isEditing && (
          <div>
            <button
              onClick={handleEdit}
              className="
            w-[70px] h-[40px] 
            font-bold text-[12px] text-[#454545] 
            cursor-pointer 
            border-[1px] border-[#B0B0B0] rounded-[12px]
            flex items-center gap-1 justify-center
            dark:text-[#F6F6F6]
            "
            >
              Edit
              <Edit size={16} />
            </button>
          </div>
        )}
      </div>

      <div></div>

      <div
        className="
      grid grid-cols-1 gap-4
      min-[800px]:grid-cols-2
      min-[1200px]:grid-cols-3
      "
      >
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <Input
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <Input
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      {isEditing && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleUpdate(updateProfile)}
            className="w-[100px] h-[45px] bg-[#1A71F6] rounded-[12px] font-bold text-[14px] text-white cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={handleCancel}
            className="font-bold text-[14px] text-[#1A71F6] cursor-pointer underline decoration-auto"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileInformation;
