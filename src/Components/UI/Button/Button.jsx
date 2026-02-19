import React from "react";

const Button = ({ className, text, onClick }) => {
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
        onClick={onClick}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
