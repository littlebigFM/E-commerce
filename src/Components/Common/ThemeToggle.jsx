import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <div
      className="
      flex 
      items-center
      gap-2
      text-[#888888] dark:text-[#B0B0B0]
      ml-2
    "
    >
      <div>
        <IoMoonOutline />
      </div>
      <p>Dark Mode</p>

      <button
        onClick={() => setIsDark(!isDark)}
        className="
        relative w-10 h-6 
        rounded-full 
        bg-gray-300 dark:bg-gray-600
        transition-colors
        cursor-pointer
      "
      >
        <span
          className={`
          absolute top-1 left-1
          w-4 h-4 
          rounded-full 
          bg-white dark:bg-[#1A71F6]
          transition-transform
          ${isDark ? "translate-x-4" : "translate-x-0"}
        `}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
