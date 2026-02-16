import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen dark:bg-[#121212] transition-colors">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
