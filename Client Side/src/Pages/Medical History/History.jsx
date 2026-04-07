import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import HistoryModal from "./HistoryModal";
import { Link, useNavigate } from "react-router";

const data = [
  { date: "15 Jan 2024", dept: "Cardiology", status: "completed" },
  { date: "28 Dec 2023", dept: "ENT", status: "completed" },
  { date: "15 Sep 2024", dept: "Dermatology", status: "incomplete" },
  { date: "24 Feb 2025", dept: "Orthopedics", status: "completed" },
  { date: "5 Oct 2025", dept: "Gynecology", status: "completed" },
];

const History = () => {
    const navigate = useNavigate();
  return (<div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] p-4 ">


      {/* 🔙 Back */}
      <div className="flex items-center gap-2 text-red-500 font-medium  cursor-pointer hover:gap-3 transition-all">
        <Link
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center   text-red-600">
          <IoIosArrowBack className="text-lg" />
          <p>Back</p>
        </Link>
      </div>

      {/* 🧾 Header */}
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          My Medical History
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Track all your past appointments & reports
        </p>
      </div>

      {/* 🧊 Glass Card */}
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] rounded-3xl p-6">

        {/* Header Row */}
        <div className="grid grid-cols-4 text-gray-400 text-xs uppercase tracking-wider pb-3 px-3">
          <span>Date</span>
          <span>Department</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>

        {/* Data Rows */}
        {data.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center px-3 py-4 rounded-xl hover:bg-white/70 transition-all duration-200 group"
          >
            <span className="text-gray-700 font-medium">{item.date}</span>

            <span className="text-gray-600">{item.dept}</span>

            {/* Status */}
            <span>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  item.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {item.status}
              </span>
            </span>

            {/* Action */}
            <div className="text-right">
              <button
                onClick={() =>
                  document.getElementById("premium_modal").showModal()
                }
                className="px-4 py-1.5 text-sm rounded-lg bg-primary text-white hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <HistoryModal />
    </div>
  );
};

export default History;