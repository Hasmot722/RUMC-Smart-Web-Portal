import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const ManageSchedule = () => {
  const [isActive, setIsActive] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [breakTime, setBreakTime] = useState({
    start: "",
    end: "",
  });

  const [savedBreak, setSavedBreak] = useState(null);

  const requests = [
    { id: 1, name: "Emergency Slot Request", time: "10:30 AM" },
    { id: 2, name: "Extra Consultation", time: "1:00 PM" },
  ];

  const handleSaveBreak = () => {
    if (!breakTime.start || !breakTime.end) return;
    setSavedBreak(breakTime);
    setBreakTime({ start: "", end: "" });
  };

  const removeBreak = () => {
    setSavedBreak(null);
  };

  return (
    <div className="flex-1 min-w-0 bg-white text-gray-900 [color-scheme:light]">

      {/* TOP BAR */}
      <div className="h-16 bg-[#f3f2fb] flex justify-end items-center px-6 border-b">
        <img src="https://i.pravatar.cc/40" className="rounded-full border" />
      </div>

      <div className="py-6 px-6 lg:px-10 space-y-6 max-w-7xl mx-auto">

        {/* HEADER */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Manage Schedule
          </h2>
          <p className="text-sm text-gray-600">
            Control your availability and appointment flow
          </p>
        </div>

        {/* ================= AVAILABILITY ================= */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex justify-between items-center">

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Availability
            </h3>
            <p className="text-sm text-gray-600">
              Turn your availability on/off
            </p>
          </div>

          {/* TOGGLE */}
          <div
            onClick={() => setShowModal(true)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${
              isActive ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${
                isActive ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* ================= BREAK TIME ================= */}
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Break Time
            </h3>

            {savedBreak && (
              <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">
                Active
              </span>
            )}
          </div>

          {/* CURRENT BREAK */}
          {savedBreak && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-center">

              <div>
                <p className="text-sm text-gray-600">Current Break</p>
                <p className="text-gray-900 font-medium">
                  {savedBreak.start} → {savedBreak.end}
                </p>
              </div>

              <button
                onClick={removeBreak}
                className="text-red-500 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          )}

          {/* INPUTS */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-wrap gap-4 items-end">

            <div>
              <label className="text-xs text-gray-600">Start Time</label>
              <input
                type="time"
                value={breakTime.start}
                onChange={(e) =>
                  setBreakTime({ ...breakTime, start: e.target.value })
                }
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-secondary outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">End Time</label>
              <input
                type="time"
                value={breakTime.end}
                onChange={(e) =>
                  setBreakTime({ ...breakTime, end: e.target.value })
                }
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-secondary outline-none text-gray-900"
              />
            </div>

            <button
              onClick={handleSaveBreak}
              className="bg-secondary text-white px-6 py-2 rounded-md shadow-sm hover:bg-pink-700"
            >
              Save Break
            </button>
          </div>
        </div>

        {/* ================= REQUESTS ================= */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Availability Requests
          </h3>

          <div className="grid gap-4">

            {requests.map((req) => (
              <div
                key={req.id}
                className="border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-sm transition"
              >
                <div>
                  <p className="font-medium text-gray-900">{req.name}</p>
                  <p className="text-sm text-gray-600">{req.time}</p>
                </div>

                <div className="flex gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1">
                    <FaCheck /> Accept
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md flex items-center gap-1">
                    <FaTimes /> Reject
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-6 w-[350px] text-center shadow-lg border">

            <h3 className="text-lg font-semibold text-gray-900">
              Confirm Availability Change
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Do you want to turn{" "}
              <span className="font-medium">
                {isActive ? "Inactive" : "Active"}
              </span>
              ?
            </p>

            <div className="flex justify-center gap-4 mt-5">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-5 py-2 rounded-md text-gray-800"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setIsActive(!isActive);
                  setShowModal(false);
                }}
                className="bg-secondary text-white px-5 py-2 rounded-md"
              >
                Confirm
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSchedule;