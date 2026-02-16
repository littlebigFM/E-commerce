import React from "react";
import SearchBar from "../../../Seachbar/SearchBar";
import UserMenu from "../NavbarComponents/UserMenu";

const DesktopNavbar = () => {
  return (
    <div className="flex justify-between w-full">
      <div
        className="
              hidden 
              min-[500px]:flex
              "
      >
        <SearchBar placeholder="Search product" />
      </div>

      <div>
        <UserMenu />
      </div>
    </div>
  );
};

export default DesktopNavbar;
