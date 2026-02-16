import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ placeholder }) => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div
      className="
    min-[900px]:w-[250px]
    p-2
    flex justify-between
    border border-[#B0B0B0] dark:border-[#D1D1D1] rounded-[12px]
    text-[#949494]
    "
    >
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={placeholder}
        className="outline-none w-full"
      />

      <IoIosSearch
        className="
      text-[26px] text-[#454545]
      dark:text-[#D1D1D1]
      "
      />
    </div>
  );
};

export default SearchBar;
