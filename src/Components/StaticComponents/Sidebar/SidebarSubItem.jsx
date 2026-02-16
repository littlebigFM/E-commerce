import { NavLink } from "react-router-dom";

const SidebarSubItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm px-2 py-1 rounded
        ${
          isActive ? "text-black dark:text-white font-medium" : "text-gray-500"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarSubItem;
