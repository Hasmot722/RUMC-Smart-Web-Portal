import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import BookAppointment from "../Pages/Book Appointment/BookAppointment";
import History from "../Pages/Medical History/History";
import Schedules from "../Pages/Schedules/Schedules";
import EmergencyServices from "../Pages/EmergencyServices/EmergencyServices";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "login",
            Component: Login
        },
        {
            path :"book-appointment",
            Component: BookAppointment
        },
        {
            path: "medical-history",
            Component: History
        },
        {
            path: "schedules",
            Component: Schedules
        },
        {
        path: "emergency",  
        Component: EmergencyServices
      },
        {
        path: "about",  
        Component: About
      }

    ]
  },
]);
