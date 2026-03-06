import React from "react";

const tabs = [
  { key: "Sneakers", label: "Sneakers (50)" },
  { key: "Jackets", label: "Jackets (26)" },
  { key: "T-shirts", label: "T-shirts (121)" },
  { key: "Bags", label: "Bags (21)" },
];

const ProductTabs = ({ category, onChange }) => {
  return (
    <div
      className="
    flex gap-2
    p-1 
    rounded-[14px] w-full 
    justify-between
    border border-[#D1D1D1] dark:border-[#3D3D3D]
    "
    >
      <div className="flex gap-2 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`
            px- py-2 
            text-sm rounded-lg
            w-full
            font-bold
            cursor-pointer
            text-[12px]
            ${
              category === tab.key
                ? "bg-[#D9EDFF] text-[#1A71F6] dark:text- font-bold dark:bg-[#D9EDFF]"
                : "text-[#737373] dark:text-[#B0B0B0] hover:bg-gray-200 dark:hover:bg-[#3D3D3D]"
            }
          `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
