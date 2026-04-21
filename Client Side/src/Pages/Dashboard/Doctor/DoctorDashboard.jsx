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
import HandledPatients from "./HandledPatients";

const doctor = {
  _id: 123456789,

  // BASIC INFO
  name: "Dr. Jashim Uddin",
  email: "john@example.com",
  phone: "017xxxxxxxx",

  // AUTH (if needed later)
  role: "doctor",
  password: "...", // hashed (optional now)

  // PROFESSIONAL INFO
  department: {
    id: "69d0b4d97e571f4fcd9d34fa",
    name: "Medicine",
  },

  specialization: "Cardiology",

  // STATUS (VERY IMPORTANT)
  isActive: true,

  schedule: {
    isAvailable: true,
    break: {
      start: null,
      end: null,
    },
  },

  // OPTIONAL (VERY USEFUL)
  chamber: {
    roomNo: 204,
    building: "Main Building",
  },

  // SYSTEM METADATA
  createdAt: new Date(),
  updatedAt: new Date(),
};

const DoctorDashboard = () => {
  const [history, setHistory] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [handledAppointments, setHandledAppointments] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = () => {
      // 🔥 ACTIVE APPOINTMENTS (important)
      axiosProvider
        .get(`appointments/active/department/${doctor.department.id}`)
        .then((res) => {
          setPendingAppointments(res.data);
        })
        .catch((err) => console.log(err.message));
    };

    // first call immediately
    fetchData();

    // ⏱️ repeat every 1 minute
    const interval = setInterval(fetchData, 60000);

    // 🧹 cleanup (VERY IMPORTANT)
    return () => clearInterval(interval);
  }, []);

  const currentAppointment = pendingAppointments[0];
  const upcomingAppointments = pendingAppointments.slice(1);

  const totalPages = Math.ceil(upcomingAppointments.length / itemsPerPage);

  const paginatedAppointments = upcomingAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pendingAppointments]);

  useEffect(() => {
    // history (optional, can keep once)
    axiosProvider
      .get(`appointments/patient/${currentAppointment?.patient.id}`)
      .then((res) => setHistory(res.data))
      .catch((err) => console.log(err.message));
  });

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
          <h2 className="text-green-600 font-semibold text-lg">
            {doctor.name}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2  gap-6">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-5 justify-between">
            {/* CURRENT PATIENT */}
            <div className="bg-white rounded-xl shadow-md border overflow-hidden">
              <div className="bg-[#7B74EA] text-xl text-white text-center py-4 font-semibold">
                Current Patient
              </div>

              <div className="flex gap-4 p-4 items-center">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/078/657/664/small/young-man-in-round-glasses-giving-thumbs-up-gesture-photo.jpeg"
                    className="w-26 h-24 rounded-xl"
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
                    {currentAppointment?.patient?.name}
                    <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                      {currentAppointment?.patient?.age} y/o
                    </span>
                  </h3>

                  <p className="text-sm text-gray-500">
                    {currentAppointment?.patient?.designation}
                  </p>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    Serial No: #{currentAppointment?.serialNo}
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
                <h2 className="text-xl font-bold text-gray-900 mt-2">
                  {pendingAppointments.length}
                </h2>
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

            {paginatedAppointments.length === 0 ?
              <div className="flex h-full -mt-5 justify-center items-center text-primary  font-semibold">
                {" "}
                <p className="text-lg">No Upcoming Appointments</p>
              </div>
            : <div className="space-y-3">
                {paginatedAppointments.map((upcomingAppointment, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-2">
                    <div className="flex gap-3 items-center">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/078/657/664/small/young-man-in-round-glasses-giving-thumbs-up-gesture-photo.jpeg"
                        className="rounded-full w-10 h-10"
                        alt=""
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {upcomingAppointment?.patient?.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {upcomingAppointment?.patient?.age} y/o
                        </p>
                      </div>
                    </div>

                    <span className="font-semibold text-gray-800">
                      #{upcomingAppointment?.serialNo}
                    </span>
                  </div>
                ))}

                {upcomingAppointments.length > 4 && (
                  <div className="flex justify-between items-center mt-4">
                    {/* PREV */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-3 py-1 bg-gray-200 text-primary rounded">
                      Prev
                    </button>

                    {/* PAGE INFO */}
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>

                    {/* NEXT */}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) =>
                          prev < totalPages ? prev + 1 : prev,
                        )
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 bg-secondary text-white rounded disabled:opacity-50">
                      Next
                    </button>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
        <HandledPatients
          doctor={doctor}
          onEditReport={(appt) => {
            console.log("Edit report for:", appt);

            // 👉 open modal here
            document.getElementById("report_modal").showModal();
          }}
        />
      </div>
      <PrescriptionModal
        doctor={doctor}
        currentAppointment={currentAppointment}
        handledAppointments={handledAppointments}
        setHandledAppointments={setHandledAppointments}
        onReportSaved={() => {
          setPendingAppointments((prev) => prev.slice(1));
        }}
      />
      <MedicalHistoryModal history={history} />
    </div>
  );
};

export default DoctorDashboard;

/* ================= COMPONENT ================= */
