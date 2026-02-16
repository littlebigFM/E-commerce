import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ label, to, icon, children }) => {
  return (
    <div className="ml-2">
      <NavLink to={to}>
        {({ isActive }) => (
          <>
            <div
              className={`
                flex items-center gap-2
                text-[#888888] dark:text-[#B0B0B0]
                transition
                ${
                  isActive
                    ? "text-black bg-[#D9EDFF] dark:bg-[#D9EDFF] dark:text-black rounded-[12px] p-2"
                    : ""
                }
              `}
            >
              <div className="text-[20px]">{icon}</div>
              <span>{label}</span>
            </div>

            {isActive && children && (
              <div className="relative ml-8 mt-2 pl-4">
                <span className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-600" />
                <div className="ml-8 mt-2 flex flex-col gap-2">{children}</div>
              </div>
            )}
          </>
        )}
      </NavLink>
    </div>
  );
};

export default SidebarItem;
