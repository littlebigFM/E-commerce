import React from "react";
import Hexagon1 from "../../../assets/Decor/Hexagon1.svg?react";
// import Hexagon2 from "../../assets/Decor/Hexagon2.svg?react";
// import Hexagon3 from "../../assets/Decor/Hexagon2.svg?react";

const AuthDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Hexagon1
        className="absolute -top-20 left- opacity-60 text-[#B8E1FF] dark:[white]"
        width={120}
        height={180}
      />

      <Hexagon1
        className="absolute right-26 -top-15 opacity-50 text-[#B8E1FF] dark:[white]"
        width={120}
        height={120}
      />

      <Hexagon1
        className="absolute right-26 top-1/2 opacity-50 text-[#B8E1FF] -z-1 dark:[white]"
        width={150}
        height={150}
      />

      <Hexagon1
        className="
        absolute 
        left-1/3 -bottom-10 
        opacity-50 text-[#B8E1FF] 
        -z-1 dark:[white]
        "
        width={120}
        height={120}
      />

      <Hexagon1
        className="
        absolute 
        left-65 -bottom-15 
        opacity-50 text-[#B8E1FF] 
        -z-1 dark:[white]
        "
        width={120}
        height={120}
      />

      {/* <Hexagon3
        className="absolute left-60 bg-[#B8E1FF] -bottom-15 bg-[] opacity-50 text-[#B8E1FF] -z-1 dark:[white]"
        width={120}
        height={120}
      /> */}
    </div>
  );
};

export default AuthDecor;

{
  /* <svg>
        <path d="M..." stroke="#B8E1FF" strokeWidth="4" />
      </svg> */
}
{
  /* Right side hexagon */
}

{
  /* <svg
        className="absolute right-10 top-1/3 opacity-50"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M..." stroke="#B8E1FF" strokeWidth="3" />
      </svg> */
}
