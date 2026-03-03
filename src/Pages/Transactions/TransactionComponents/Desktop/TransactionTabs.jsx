import React from "react";

const tabsTwo = [
  { key: "All Orders", label: "All Orders (41)" },
  { key: "Shipping", label: "Shipping (10)" },
  { key: "Completed", label: "Completed (30)" },
  { key: "Cancel", label: "Cancel (41)" },
];

const TransactionTabs = ({
  // category,
  categoryTwo,
  // onChange,
  onChangeTwo,
  // type,
}) => {
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
        {tabsTwo.map((tabTwo) => (
          <button
            key={tabTwo.key}
            onClick={() => onChangeTwo(tabTwo.key)}
            className={`
            py-2 
            text-sm rounded-lg
            w-full
            font-bold
            text-[12px]
            cursor-pointer
            ${
              categoryTwo === tabTwo.key
                ? "bg-[#D9EDFF] text-[#1A71F6] dark:text- font-bold dark:bg-[#D9EDFF]"
                : "text-[#737373] dark:text-[#B0B0B0] hover:bg-gray-200 dark:hover:bg-[#3D3D3D]"
            }
          `}
          >
            {tabTwo.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionTabs;
