import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import BookAppointment from "../Pages/Book Appointment/BookAppointment";
import History from "../Pages/Medical History/History";
import Schedules from "../Pages/Schedules/Schedules";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import DoctorDashboard from "../Pages/Dashboard/Doctor/DoctorDashboard";
import DashHome from "../Layouts/Dashboard/DashHome";
import ManageSchedule from "../Pages/Dashboard/Doctor/ManageSchedule";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "book-appointment",
        Component: BookAppointment,
      },
      {
        path: "medical-history",
        Component: History,
      },
      {
        path: "schedules",
        Component: Schedules,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
        <Dashboard />
    ),

    children: [
        {
            index: true,
            Component: DashHome,
        },
        {
            path: "manage-schedule",
            Component: ManageSchedule,

        }
    ],
  },
]);
