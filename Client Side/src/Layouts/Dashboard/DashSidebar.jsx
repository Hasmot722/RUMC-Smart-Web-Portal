import React from "react";
import {
  FaThLarge,
  FaCalendarAlt,
  FaUserInjured,
  FaFilePrescription,
  FaUserTimes,
} from "react-icons/fa";

import { Link, useLocation } from "react-router";
import ruLogo from "../../assets/ruLogo.png";

const SidebarItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
        active ?
          "bg-white text-[#1e1b3a] font-medium"
        : "text-gray-300 hover:bg-white/10"
      }`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

const DashSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-[250px]  min-h-[100vh] fixed bg-[#1e1b3a] text-white flex flex-col">
      {/* LOGO */}
      <div className="bg-[#7B74EA] flex justify-center w-full py-3">
        <Link to="/" className=" flex gap-3 ">
          <div>
            <img className="w-10 sm:w-12" src={ruLogo} alt="" />
          </div>
          <div className="flex flex-col my-auto">
            <p className="font-semibold font-cabin text-[20px] sm:text-[24px] -mb-1">
              RUMC
            </p>
            <p className="text-[8px] sm:text-[10px]">Smart Health Portal</p>
          </div>
        </Link>
      </div>

      {/* MENU */}
      <div className="mt-10 space-y-2 px-4 text-md">

        <Link to="/dashboard">
          <SidebarItem active={isActive("/dashboard")} icon={<FaThLarge />} text="Dashboard" />
        </Link>

        <Link to="manage-schedule">
          <SidebarItem active={isActive("/dashboard/manage-schedule")} icon={<FaCalendarAlt />} text="Manage Schedule" />
        </Link>

        <Link to="/dashboard/patients">
          <SidebarItem active={isActive("/dashboard/patients")} icon={<FaUserInjured />} text="Manage Patients" />
        </Link>

        <Link to="/dashboard/prescription">
          <SidebarItem active={isActive("/dashboard/prescription")} icon={<FaFilePrescription />} text="Virtual Prescription" />
        </Link>

        <Link to="/dashboard/absent">
          <SidebarItem active={isActive("/dashboard/absent")} icon={<FaUserTimes />} text="Absent Patients" />
        </Link>

        

      </div>
    </div>
  );
};

export default DashSidebar;
