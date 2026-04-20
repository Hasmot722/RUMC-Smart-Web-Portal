import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const PrescriptionModal = () => {
  const [medicines, setMedicines] = useState([
    { name: "", dose: "", duration: "" },
  ]);

  const [tests, setTests] = useState([""]);

  // ===== MEDICINES =====
  const addMedicine = () => {
    setMedicines([...medicines, { name: "", dose: "", duration: "" }]);
  };

  const removeMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const updateMedicine = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  // ===== TESTS =====
  const addTest = () => {
    setTests([...tests, ""]);
  };

  const removeTest = (index) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  const updateTest = (index, value) => {
    const updated = [...tests];
    updated[index] = value;
    setTests(updated);
  };

  return (
    <dialog id="report_modal" className="modal">
      <div className="modal-box max-w-5xl p-0 bg-white text-gray-900 max-h-[90vh] overflow-hidden flex flex-col">
        {/* HEADER */}
        <div className="bg-[#7B74EA] text-white px-6 py-4">
          <h3 className="text-lg font-semibold">Prescription</h3>
          <p className="text-sm opacity-90">Dr. John Doe</p>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* PATIENT CARD */}
          <div className="bg-purple-100 border-pink-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <h2 className="text-md font-bold text-[#7B74EA]">
                Patient Details
              </h2>
              <p className=" text-gray-900 flex gap-3">
                {" "}
                <p className="font-semibold">Ahsan Habib</p>{" "}
                <p className="text-xs flex justify-center items-center bg-green-600 text-white px-1.5 py-0 rounded-xl">
                  Male
                </p>
              </p>
              <p className="text-sm text-gray-600 ">
                <p>Age: 22</p>
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Date: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ===== TESTS ===== */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-[#7B74EA] mb-3">
                Recommended Tests
              </h4>

              <div className="space-y-3">
                {tests.map((test, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input
                      value={test}
                      onChange={(e) => updateTest(i, e.target.value)}
                      placeholder="e.g. Blood Test"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#7B74EA] outline-none"
                    />

                    {tests.length > 1 && (
                      <button
                        onClick={() => removeTest(i)}
                        className="text-red-500 hover:scale-110 transition">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addTest}
                className="mt-3 text-sm text-[#7B74EA] font-medium hover:underline">
                + Add Test
              </button>
            </div>

            {/* ===== MEDICINES ===== */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-[#7B74EA] mb-3">Medicines</h4>

              <div className="space-y-3">
                {medicines.map((med, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 items-center">
                    <input
                      placeholder="Medicine"
                      value={med.name}
                      onChange={(e) =>
                        updateMedicine(i, "name", e.target.value)
                      }
                      className="col-span-4 border border-gray-300 rounded-md px-2 py-2 focus:ring-2 focus:ring-[#7B74EA] outline-none"
                    />

                    <input
                      placeholder="Dose"
                      value={med.dose}
                      onChange={(e) =>
                        updateMedicine(i, "dose", e.target.value)
                      }
                      className="col-span-3 border border-gray-300 rounded-md px-2 py-2 focus:ring-2 focus:ring-[#7B74EA] outline-none"
                    />

                    <input
                      placeholder="Duration"
                      value={med.duration}
                      onChange={(e) =>
                        updateMedicine(i, "duration", e.target.value)
                      }
                      className="col-span-3 border border-gray-300 rounded-md px-2 py-2 focus:ring-2 focus:ring-[#7B74EA] outline-none"
                    />

                    {medicines.length > 1 && (
                      <button
                        onClick={() => removeMedicine(i)}
                        className="col-span-2 text-red-500 hover:scale-110 transition">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addMedicine}
                className="mt-3 text-sm text-[#7B74EA] font-medium hover:underline">
                + Add Medicine
              </button>
            </div>
          </div>

          {/* NOTES */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h4 className="font-semibold text-[#7B74EA] mb-2">Notes</h4>
            <textarea
              placeholder="Additional notes..."
              className="w-full border border-gray-300 rounded-md p-3 h-24 focus:ring-2 focus:ring-[#7B74EA] outline-none"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 p-4 border-t bg-white">
          <form method="dialog">
            <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800">
              Cancel
            </button>
          </form>

          <button className="px-4 py-2 rounded-md bg-[#7B74EA] text-white hover:bg-pink-700">
            Save Report
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PrescriptionModal;
