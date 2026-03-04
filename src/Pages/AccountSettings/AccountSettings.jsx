import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import AccountTabs from "./Tabs/AccountTabs";
import ProfileInformation from "./Account/ProfileInformation";
import ContactInformation from "./Account/ContactInformation";
import SecuritySettings from "./Security/SecuritySettings";
import NotificationSettings from "./Notification/NotificationSettings";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[24px] text-[#2A2A2A] dark:text-[#F6F6F6]">
          Account & Settings
        </p>

        <p className="text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
          Dashboard{" "}
          <span>
            <IoMdArrowDropright />
          </span>
          <span className="font-bold text-[#1A71F6]">{}</span>
        </p>
      </div>

      <div>
        <AccountTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div>
        {activeTab === "Account" && (
          <div className="flex flex-col gap-4">
            <ProfileInformation />
            <ContactInformation />
          </div>
        )}
      </div>

      <div>
        {activeTab === "Security" && (
          <div>
            <SecuritySettings />
          </div>
        )}
      </div>

      <div>
        {activeTab === "Notifications" && (
          <div>
            <NotificationSettings />
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
