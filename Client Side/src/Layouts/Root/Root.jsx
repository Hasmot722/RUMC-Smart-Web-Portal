import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className=" mx-auto bg-secondary min-h-[100vh]">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
