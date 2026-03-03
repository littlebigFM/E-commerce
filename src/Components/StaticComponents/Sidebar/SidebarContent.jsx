import React from "react";
import Logo from "../../LogoDesigns/LogoBrand";
import CompanyBrand from "../../LogoDesigns/CompanyBrand";
import SidebarItem from "./SidebarItem";
import { MdOutlineShowChart, MdOutlineStorefront } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleHelp } from "react-icons/lu";
import ThemeToggle from "../../Common/ThemeToggle";

const SidebarContent = ({ isDark, setIsDark }) => {
  return (
    <div className="flex flex-col gap-8">
      <aside
        className="
      flex flex-col gap-10
      "
      >
        <Logo />

        <CompanyBrand />
      </aside>

      <div
        className="
      flex flex-col 
      gap-6
      "
      >
        <p className="text-[#727272] dark:text-[#737373]">General</p>

        <SidebarItem label="Dashboard" to="/Dashboard" icon={<FiHome />} />

        <SidebarItem
          label="Product"
          to="/ProductsPage"
          icon={<MdOutlineStorefront />}
        >
          {/* <SidebarSubItem label="Sneakers" to="/product/sneakers" />
          <SidebarSubItem label="Jackets" to="/product/jackets" /> */}
        </SidebarItem>

        <SidebarItem label="Transaction" to="/Transaction" icon={<TbNotes />} />

        <SidebarItem label="Customers" to="/Customers" icon={<BsPeople />} />

        <SidebarItem
          label="Sales Report"
          to="/SalesReport"
          icon={<MdOutlineShowChart />}
        />
      </div>

      <div
        className="
      flex flex-col 
      gap-6
      "
      >
        <p className="text-[#727272] dark:text-[#737373]">Tools</p>
        <SidebarItem
          label="Account & Settings"
          to="AccountSettings"
          icon={<IoSettingsOutline />}
        />
        <SidebarItem label="Help" to="/Help" icon={<LuCircleHelp />} />

        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
};

export default SidebarContent;
