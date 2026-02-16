import React from "react";

const Input = ({
  type = "text",
  label,
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-[14px] font-bold text-[#323130] dark:text-[#F6F6F6]"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="px-4 py-3
        border-[1.6px] border-[#D1D1D1] 
        rounded-[12px]
        w-full
        text-[14px] text-[#454545] font-bold dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:placeholder:text-[#B3B3B3] 
        "
      />
    </div>
  );
};

export default Input;
