import React from "react";

const Checkbox = ({ name, checked, label, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-1 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="
          h-4 w-4
          "
        />
        {label && (
          <span className="font-bold dark:text-[#F6F6F6]">{label}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
