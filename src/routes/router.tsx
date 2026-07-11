import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddCourse from "../pages/AddCourse/AddCourse";
import ManageCourses from "../pages/ManageCourses/ManageCourses";
import Dashboard from "../pages/Dashboard/Dashboard";
import Details from "../pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "add-course", element: <AddCourse /> },
      { path: "manage-courses", element: <ManageCourses /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "course/:id", element: <Details /> },
    ],
  },
]);