import React from "react";
import Button from "../../Components/UI/Button/Button";

const Description = () => {
  return (
    <div
      className="
     rounded-[24px]
      pb-3 pt-4 px-4 
      flex flex-col
      gap-4
     shadow-[0_0_10px_#c2c1c1]
    dark:shadow-[0_0_10px_#3D3D3D]
    
    
    bg-gradient-to-tr from-[#2818D1DE] via-[#5A4AFF] to-[#5D326CCF]
    "

      // bg-[linear-gradient(45deg,#5A4AFF_90%,#2818D1DE_87%)]
    >
      <p
        className="
      font-semibold text-[24px]
      text-[white]
      "
      >
        Increase your sales
      </p>
      <p
        className="
      text-[white]
      "
      >
        Discover the Proven Methods to Skyrocket Your Sales! Unleash the
        Potential of Your Business and Achieve Remarkable Growth. Whether you're
        a seasoned entrepreneur or just starting out
      </p>
      <div>
        <Button
          text="Learn More"
          className="text-[#1A71F6] py-2 px-4 bg-[white] font-bold w-[127px]"
        />
      </div>
    </div>
  );
};

export default Description;
