import React from "react";
import DoctorDashboard from "../../Pages/Dashboard/Doctor/DoctorDashboard";
import DashSidebar from "./DashSidebar";
import { Outlet } from "react-router";
import ReactToaster from "../../React Toast/ReactToaster";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#ecebfa]">
      <DashSidebar />
      <ReactToaster/>
      <Outlet />
    </div>
  );
};

export default Dashboard;
