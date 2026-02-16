import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "@/Hook/DarkMode";
import MobileSidebar from "../../Sidebar/Mobile/MobileSidebar";
import img from "../../../../assets/Images/img2.png";

const MobilleNavbar = ({ onSearch }) => {
  const [isDark, setIsDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);

  console.log(searchValue);

  /* =========================
     Auto focus input
  ========================== */
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  /* =========================
      Close search on outside click 
  ========================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  /* =========================
 Close search when drawer opens
  ========================== */
  useEffect(() => {
    if (menuOpen) {
      setSearchOpen(false);
    }
  }, [menuOpen]);

  /* =========================
     Handle search logic
  ========================== */
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="w-full">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Profile */}
        <div className="flex gap-2 items-center">
          <img src={img} alt="User" className="w-10 h-10 rounded-full" />

          <div className="flex flex-col">
            <p className="font-semibold text-[#454545] dark:text-[#F6F6F6]">
              Guy Hawkins
            </p>
            <p className="text-[12px] text-[#B0B0B0] dark:text-[#D1D1D1]">
              Admin
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <FiSearch
            onClick={() => setSearchOpen((prev) => !prev)}
            className="
              text-[24px]
              text-[#454545]
              dark:text-[#D1D1D1]
              cursor-pointer
            "
          />

          <FiMenu
            onClick={() => setMenuOpen(true)}
            className="
              text-[26px]
              text-[#454545]
              dark:text-[#D1D1D1]
              cursor-pointer
            "
          />
        </div>
      </div>

      {/* Animated Search Section */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            ref={searchContainerRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3"
          >
            <div className="relative">
              <FiSearch
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="
                  w-full
                  pl-10
                  pr-4
                  py-3
                  rounded-xl
                  bg-white
                  dark:bg-[#2a2a2a]
                  dark:text-[#D1D1D1]
                  border
                  border-gray-200
                  dark:border-gray-700
                  focus:outline-none
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
};

export default MobilleNavbar;
