import React from "react";
import { Edit } from "lucide-react";
import useEditableForm from "../../../Hook/useEditableForm";

const NotificationSettings = () => {
  const initialData = {
    emailAlerts: true,
    pushNotifications: true,
    marketingEmails: false,
    orderUpdates: true,
    productRecommendations: false,
    securityAlerts: true,
  };

  const {
    formData,
    isEditing,
    handleEdit,
    handleCancel,
    handleUpdate,
    handleChange,
  } = useEditableForm(initialData);

  const updateNotifications = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Notification settings saved:", data);
        resolve();
      }, 1500);
    });
  };

  const notifications = [
    {
      key: "emailAlerts",
      label: "Email Alerts",
      description: "Receive email alerts for important updates",
    },
    {
      key: "pushNotifications",
      label: "Push Notifications",
      description: "Receive push notifications on your device",
    },
    {
      key: "marketingEmails",
      label: "Marketing Emails",
      description: "Receive promotional emails and offers",
    },
    {
      key: "orderUpdates",
      label: "Order Updates",
      description: "Get notified about your order status",
    },
    {
      key: "productRecommendations",
      label: "Product Recommendations",
      description: "Receive personalized product suggestions",
    },
    {
      key: "securityAlerts",
      label: "Security Alerts",
      description: "Critical security notifications",
    },
  ];

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
          Notification Preferences
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

      <div className="flex flex-col gap-4">
        {notifications.map((notification) => (
          <label
            key={notification.key}
            className="
            flex items-center gap-3 p-3 rounded-[12px]
            border-[1px] border-[#D1D1D1] dark:border-[#3D3D3D]
            cursor-pointer
            hover:bg-gray-50 dark:hover:bg-[#252525]
            transition-colors
            "
          >
            <input
              type="checkbox"
              checked={formData[notification.key]}
              onChange={(e) => {
                if (isEditing) {
                  handleChange(e);
                }
              }}
              disabled={!isEditing}
              className="w-5 h-5 rounded cursor-pointer accent-[#1A71F6]"
            />
            <div className="flex-1">
              <p className="font-semibold text-[14px] text-[#454545] dark:text-[#F6F6F6]">
                {notification.label}
              </p>
              <p className="text-[12px] text-[#888888] dark:text-[#B0B0B0]">
                {notification.description}
              </p>
            </div>
          </label>
        ))}
      </div>

      {isEditing && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleUpdate(updateNotifications)}
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

export default NotificationSettings;
