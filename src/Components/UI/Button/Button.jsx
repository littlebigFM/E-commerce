import React from "react";

const Button = ({ className, text }) => {
  return (
    <div>
      <div
        className={`
          flex 
          rounded-[12px]
          py-2
          cursor-pointer
          ${className}
          `}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
