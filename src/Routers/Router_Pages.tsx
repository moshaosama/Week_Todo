import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar_Navbar from "../Layouts/Sidebar";
import Home from "../Pages/Home";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import WithLoader from "../Utils/WithLoader";
import useGetUser from "../Hooks/useGetUser";
import { useEffect } from "react";

const Sidebar_Navbar_Loader = WithLoader(Sidebar_Navbar);
const { user } = useGetUser();

const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <Sidebar_Navbar_Loader /> : <Login />,
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
  useEffect(() => {
    console.log("Mosha");
  }, [user]);
  return <RouterProvider router={router} />;
};

export default Router_Pages;
