import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router";
import AppointmentCard from "./AppointmentCard";
import axiosProvider from "../../APIs/axiosProvider";

const BookAppointment = () => {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axiosProvider
      .get("/departments")
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);


  return (
    <div className="mt-3 sm:mt-5  sm:mx-10 ">
      <div className=" text-lg flex mx-3 justify-between">
        <Link
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center   text-red-600">
          <IoIosArrowBack className="text-lg" />
          <p>Back</p>
        </Link>
        <div className=""></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
        {departments.map((department) => (
          <AppointmentCard key={department._id} department={department} />
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
