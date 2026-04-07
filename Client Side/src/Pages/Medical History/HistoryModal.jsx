const HistoryModal = () => {
  return (
    <dialog id="premium_modal" className="modal">
      <div className="modal-box max-w-lg p-0 rounded-3xl overflow-hidden shadow-2xl">
        {/* 🌈 Gradient Header */}
        <div className="bg-gradient-to-r from-primary to-purple-500 text-white p-5 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Appointment Details</h3>
          <form method="dialog">
            <button className="text-white text-xl hover:rotate-90 transition">
              ✕
            </button>
          </form>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Info Card */}
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <p className="flex justify-between text-sm text-gray-600">
              <span>Department</span>
              <span className="font-semibold text-gray-800">Cardiology</span>
            </p>

            <div className="border-t my-3"></div>

            <p className="flex justify-between text-sm text-gray-600">
              <span>Doctor</span>
              <span className="font-semibold text-gray-800">
                Dr. Ahmed Hossen
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="btn bg-primary text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition">
              Download Test Reports
            </button>

            <button className="btn bg-primary text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition">
              Download Prescription
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-end">
          <form method="dialog">
            <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default HistoryModal;
