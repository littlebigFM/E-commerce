import React, { useState } from "react";
import Input from "../../../Components/UI/Input";
import { Edit } from "lucide-react";
import useEditableForm from "../../../Hook/useEditableForm";

const SecuritySettings = () => {
  const initialData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const {
    formData,
    isEditing,
    handleChange,
    handleEdit,
    handleCancel,
    handleUpdate,
  } = useEditableForm(initialData);

  const [error, setError] = useState("");

  const validatePasswords = () => {
    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || currentPassword.trim() === "") {
      return "Current password is required.";
    }

    if (!newPassword || newPassword.length < 8) {
      return "Password must be at least 8 characters.";
    }

    if (!/[A-Z]/.test(newPassword)) {
      return "Password must include at least one uppercase letter.";
    }

    if (!/[a-z]/.test(newPassword)) {
      return "Password must include at least one lowercase letter.";
    }

    if (!/[0-9]/.test(newPassword)) {
      return "Password must include at least one number.";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      return "Password must include at least one special character.";
    }

    if (newPassword !== confirmPassword) {
      return "New password and confirmation do not match.";
    }

    return null;
  };

  const updateSecurity = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Security settings saved:", data);
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
      flex flex-col gap-4
      border-[1px] border-[#D1D1D1]
      dark:border-[#3D3D3D]
  "
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px] text-[#454545] dark:text-[#F6F6F6]">
          Password
        </h2>

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

      <div className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-4">
        <Input
          className="input-style border border-[#D1D1D1]"
          type="password"
          label="Current Password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Enter your current password"
        />
        <Input
          className="input-style border border-[#D1D1D1]"
          type="password"
          label="New Password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Enter your new password"
        />
        <Input
          className="input-style border border-[#D1D1D1]"
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Confirm your new password"
        />
      </div>

      {isEditing && (
        <div className="flex flex-col gap-4 mt-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => {
                const validationError = validatePasswords();
                if (validationError) {
                  setError(validationError);
                  return;
                }
                setError("");
                handleUpdate(updateSecurity);
              }}
              className="w-[100px] h-[45px] bg-[#1A71F6] rounded-[12px] font-bold text-[14px] text-white cursor-pointer"
            >
              Update
            </button>

            <button
              onClick={() => {
                setError("");
                handleCancel();
              }}
              className="font-bold text-[14px] text-[#1A71F6] cursor-pointer underline decoration-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecuritySettings;
