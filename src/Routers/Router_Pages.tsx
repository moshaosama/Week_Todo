import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar_Navbar from "../Layouts/Sidebar";
import Home from "../Pages/Home";
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
]);

const Router_Pages = () => {
  return <RouterProvider router={router} />;
};

export default Router_Pages;
