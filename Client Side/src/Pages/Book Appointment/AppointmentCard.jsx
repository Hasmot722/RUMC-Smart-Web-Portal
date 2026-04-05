import React from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

const AppointmentCard = ({ department }) => {
  return (
    <div className=" mt-3 sm:mt-8 not-sm:w-[180px] w-[250px]  lg:w-[280px] bg-white border-2 border-primary rounded-xl shadow-xl">
      <div className="not-sm:my-1 my-3">
        <div className="not-sm:my-2 my-3 ">
          <div className="w-full flex justify-center items-center gap-2">
            {/* <FaHeart className="text-2xl not-sm:text-xl text-red-500" /> */}
            <h2 className="text-2xl not-sm:text-xl  font-semibold">
              {department.name}
            </h2>
          </div>
          <hr className="mx-4 not-md:mt-2 mt-3 text-gray-300" />
        </div>

        <div className="mx-4 not-sm:mx-2">
          <p className="text-[22px] not-sm:text-[16px] flex justify-center font-semibold text-green-600">
            10:00AM - 4:00PM
          </p>
          <p className="flex justify-center text-[17px] not-sm:text-[13px]  text-gray-500">
            4 Available Doctors
          </p>
          <button className="btn my-3 not-sm:py-3 py-5.5 bg-primary text-white font-semibold text-[17px] not-sm:text-[13px]  w-full rounded-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
