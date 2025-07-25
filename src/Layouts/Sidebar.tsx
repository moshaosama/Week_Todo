import { CgMoreAlt } from "react-icons/cg";
import { DefaultIcons } from "../Constants/Icons";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { Outlet } from "react-router-dom";

const Sidebar_Navbar = () => {
  return (
    <>
      <div className="flex gap-3 ">
        <div className="p-4 flex flex-col justify-between h-[100vh] items-center w-20">
          <div className="flex flex-col justify-center items-center">
            <img src="/logo-color.svg" alt="logoBrand.png" className="w-14" />
            <div className="flex flex-col gap-7 mt-4">
              {DefaultIcons?.map(({ icon }, index: number) => {
                return (
                  <i
                    key={index}
                    className="hover:bg-gray-300 cursor-pointer transition-all duration-300 p-2 rounded-full"
                  >
                    {icon}
                  </i>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-7 justify-center items-center">
            <CgMoreAlt
              size={50}
              className="hover:bg-gray-300 cursor-pointer transition-all duration-300 p-2 rounded-full"
            />
            <IoInformationCircleOutline
              size={50}
              className="hover:bg-gray-300 cursor-pointer transition-all duration-300 p-2 rounded-full"
            />
            <CiSettings
              size={50}
              className="hover:bg-gray-300 cursor-pointer transition-all duration-300 p-2 rounded-full"
            />
          </div>
        </div>

        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar_Navbar;
