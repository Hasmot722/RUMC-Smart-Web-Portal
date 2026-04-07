import React from "react";
import bookAppointment from "../../assets/BookAppointment.png";
import pendingTestst from "../../assets/PendingTests.png";
import reportPrescription from "../../assets/reports.png";
import requestPrescription from "../../assets/requestPrescription.png";
import schedules from "../../assets/schedules.png";
import medicalHistory from "../../assets/history.png";
import { Link } from "react-router";
import CurrentActions from "./currentActions";

const Home = () => {
  return (
    <div className=" mt-3 mx-3 sm:mx-6 lg:w-3/5 ">
      <div className="grid place-items-center grid-cols-2 sm:grid-cols-3">
        <Link to="book-appointment">
          <img
            src={bookAppointment}
            alt=""
            className=" md:max-w-[200px] lg:max-w-[250px] lg:max-w-[260px] "
          />
        </Link>

        <Link to="">
          <img
            src={pendingTestst}
            alt=""
            className="md:max-w-[200px] lg:max-w-[250px] lg:max-w-[260px]  "
          />
        </Link>

        <Link>
          <img
            src={reportPrescription}
            alt=""
            className="md:max-w-[200px] lg:max-w-[250px] xl:max-w-[260px]  "
          />
        </Link>

        <Link to="">
          <img
            src={requestPrescription}
            alt=""
            className="md:max-w-[200px] lg:max-w-[250px] xl:max-w-[260px]  "
          />
        </Link>

        <Link to="Schedule-Test">
          <img
            src={schedules}
            alt=""
            className="md:max-w-[200px] lg:max-w-[250px] xl:max-w-[260px]  "
          />
        </Link>

        <Link to="medical-history">
          <img
            src={medicalHistory}
            alt=""
            className="md:max-w-[200px] lg:max-w-[250px] xl:max-w-[260px] "
          />
        </Link>
      </div>
      <CurrentActions />
    </div>
  );
};

export default Home;
