import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import BookAppointment from "../Pages/Book Appointment/BookAppointment";

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
        }
    ]
  },
]);
