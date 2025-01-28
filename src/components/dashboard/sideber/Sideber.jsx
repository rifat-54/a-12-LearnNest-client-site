import React, { useState } from "react";
import UseAuth from "../../../hook/UseAuth";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import AdminDashboard from "./menu/AdminDashboard";
import StudentDashboard from "./menu/StudentDashboard";
import TeacherDashboard from "./menu/TeacherDashboard";
import { CgProfile } from "react-icons/cg";
import useRole from "../../../hook/useRole";
import logoimg from "../../../assets/ms-icon-150x150.png";

const Sideber = () => {
  const { logoutUser } = UseAuth();
  const [isActive, setActive] = useState(false);

  const [role, isLoading] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="z-30">
      {/* Small Screen Navbar */}
      <div className="bg-[#6dc5d139] z-20  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                className=" h-10 md:hidden"
                src={logoimg}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed text-black flex flex-col justify-between overflow-x-hidden bg-sky-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#6DC5D1] mx-auto">
              <Link to="/">
                <img
                  className="hidden h-10 md:block"
                  src={logoimg}
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role === "Admin" && <AdminDashboard></AdminDashboard>}
              {role === "Teacher" && <TeacherDashboard></TeacherDashboard>}
              {role === "Student" && <StudentDashboard></StudentDashboard>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <Link
            to={"/dashboard/profile"}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <CgProfile className="w-5 h-5" />
            <span className="mx-4 font-medium">Profile</span>
          </Link>

          <button
            onClick={logoutUser}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sideber;
