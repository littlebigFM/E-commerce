import React from "react";

const AccountTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Account", "Security", "Notifications"];

  return (
    <div
      className="
      bg-[#FFFFFF] dark:bg-[#1A1A1B]
      p-1 rounded-[14px]
      flex justify-between gap-2
      border-[1px] border-[#D1D1D1] dark:border-[#3D3D3D]
  "
    >
      <div className="flex gap-2 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
            py-2 
            text-sm rounded-lg
            w-full
            font-bold
            cursor-pointer
              ${
                activeTab === tab
                  ? "bg-[#D9EDFF] text-[#1A71F6] font-bold dark:bg-[#D9EDFF]"
                  : "text-[#737373] dark:text-[#B0B0B0] hover:bg-gray-200 dark:hover:bg-[#3D3D3D]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccountTabs;
