import React from "react";
import SidebarItem from "../SidebarItem";
import Logo from "../../../LogoDesigns/LogoBrand";
import CompanyBrand from "../../../LogoDesigns/CompanyBrand";
import { FiHome } from "react-icons/fi";
import { MdOutlineShowChart, MdOutlineStorefront } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleHelp } from "react-icons/lu";
import ThemeToggle from "../../../Common/ThemeToggle";
import SidebarSubItem from "../SidebarSubItem";
import SidebarContent from "../SidebarContent";

const Sidebar = ({ isDark, setIsDark }) => {
  return (
    <div
      className="
    px-6 pt-8
    w-[280px]
    flex flex-col 
    hidden
    min-[620px]:flex
    "
    >
      <SidebarContent isDark={isDark} setIsDark={setIsDark} />
      {/* ==================== */}
    </div>
  );
};

export default Sidebar;
