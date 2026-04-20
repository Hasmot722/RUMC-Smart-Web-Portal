import React, { useEffect, useState } from "react";
import {
  FaThLarge,
  FaCalendarAlt,
  FaUserInjured,
  FaFilePrescription,
  FaUserTimes,
  FaHistory,
} from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import PrescriptionModal from "./PrescriptionModal";
import { MdAssignmentAdd } from "react-icons/md";
import axiosProvider from "../../../APIs/axiosProvider";
import MedicalHistoryModal from "./MedicalHistoryModal";

const user = {
  _id: 1310383432,
  name: "Ahsan Habib",
  age: "22y/o",
  email: "ahsan@gmail.com",
  dept: "Electrical & Electronics Engineering",
  designation: "Undergraduate Student",
};

const bookingInfo = {
  serialNo: 12,
  estimatedTime: "11:30AM - 12:00AM",
  roomNo: 204,
};

const DoctorDashboard = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axiosProvider
      .get(`appointments/patient/${user._id}`) // ✅ FIXED
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user._id]);

  return (
    <div className="flex-1">
      {/* TOP BAR */}
      <div className="h-18 bg-[#dcdaf5] flex justify-end items-center  px-6">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full border"
          alt="user"
        />
      </div>

      {/* CONTENT */}
      <div className="py-6 mx-20">
        {/* WELCOME */}
        <div className="mb-5">
          <p className="text-gray-700 text-sm">Welcome Back,</p>
          <h2 className="text-green-600 font-semibold text-lg">Dr. John Doe</h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2  gap-6">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between">
            {/* CURRENT PATIENT */}
            <div className="bg-white rounded-xl shadow-md border overflow-hidden">
              <div className="bg-[#7B74EA] text-xl text-white text-center py-4 font-semibold">
                Current Patient
              </div>

              <div className="flex gap-4 p-4 items-center">
                <div>
                  <img
                    src="https://i.pravatar.cc/100"
                    className="w-24 h-24 rounded-xl"
                    alt=""
                  />

                  <button
                    onClick={() =>
                      document.getElementById("history_modal").showModal()
                    }
                    className="text-gray-400 mt-3 text-xs flex gap-2 justify-center items-center">
                    {" "}
                    <FaHistory /> <p>Medical History</p>
                  </button>
                </div>

                <div className="flex-1 justify-between h-full">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user.name}
                    <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                      {user.age}
                    </span>
                  </h3>

                  <p className="text-sm text-gray-500">{user.dept}</p>
                  <p className="text-xs text-gray-500">Undergraduate Student</p>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    Serial No: #{bookingInfo.serialNo}
                  </p>

                  <div className="flex gap-3 mr-5 text-lg mt-4">
                    <button
                      onClick={() =>
                        document.getElementById("report_modal").showModal()
                      }
                      className="bg-[#7B74EA] w-full text-white px-4  py-2 flex gap-2 justify-center items-center rounded-md text-sm">
                      <MdAssignmentAdd className="text-lg" />{" "}
                      <p>Create Report</p>
                    </button>
                    <button className="bg-red-500 w-full text-white px-4 py-2 flex gap-2 items-center justify-center rounded-md text-sm">
                      <FaUserTimes className="text-lg" /> <p>Mark Absent</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 h-25 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md border">
                <p className="text-sm text-gray-600">Pending Appointments</p>
                <h2 className="text-xl font-bold text-gray-900 mt-2">22</h2>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border">
                <p className="text-sm text-gray-600">
                  Virtual Prescription Requests
                </p>
                <h2 className="text-xl font-bold text-gray-900 mt-2">06</h2>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white rounded-xl shadow-md border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Upcoming Appointments
            </h3>

            <div className="space-y-3">
              {[37, 38, 39, 40, 41].map((num, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-2">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://i.pravatar.cc/40"
                      className="rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Patient Name
                      </p>
                      <p className="text-xs text-gray-500">22 Years Old</p>
                    </div>
                  </div>

                  <span className="font-semibold text-gray-800">#{num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PrescriptionModal />
      <MedicalHistoryModal history={history} />
    </div>
  );
};

export default DoctorDashboard;

/* ================= COMPONENT ================= */
