import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useDarkMode from "@/Hook/DarkMode";
import Navbar from "../StaticComponents/Navbar/Navbar";
import Sidebar from "../StaticComponents/Sidebar/Desktop/Sidebar";
import MobileSidebar from "../StaticComponents/Sidebar/Mobile/MobileSidebar";
import AnimatedNavbar from "../StaticComponents/Navbar/AnimatedNavbar";

const AppLayout = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div
      className="
    dark:bg-[#1A1A1B] 
    min-h-screen
    "
    >
      <div
        className="
      flex 
      w-full 
      max-w-[1440px] mx-auto"
      >
        {/* ================= SIDEBAR ================= */}
        <div
          className="
        min-[620px]:fixed
        "
        >
          <Sidebar isDark={isDark} setIsDark={setIsDark} />
        </div>

        {/* ============================================= */}

        <div
          className="w-full 
       min-[620px]:ml-[280px] 
       min-[620px]:overflow-y-auto
        "
        >
          {/* ================= NAVBAR ================= */}
          <div className="dark:bg-[#1A1A1B]">
            <Navbar />
            {/* <AnimatedNavbar /> */}
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <main
            className="
        bg-[#E7E7E7] dark:bg-[black] 
        "
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
