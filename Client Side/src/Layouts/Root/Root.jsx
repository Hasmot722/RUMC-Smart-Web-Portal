import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import ReactToaster from "../../React Toast/ReactToaster";

const Root = () => {
  return (
    <div className=" mx-auto  min-h-[100vh]">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <ReactToaster/>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
