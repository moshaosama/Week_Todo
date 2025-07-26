import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar_Navbar from "../Layouts/Sidebar";
import Home from "../Pages/Home";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import WithLoader from "../Utils/WithLoader";

const Sidebar_Navbar_Loader = WithLoader(Sidebar_Navbar);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar_Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },

  {
    path: "login",
    element: <Login />,
  },
]);

const Router_Pages = () => {
  return <RouterProvider router={router} />;
};

export default Router_Pages;
