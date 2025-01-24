import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navber.css";
import UseAuth from "../hook/UseAuth";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";

const Navber = () => {
  const { user, logoutUser } = UseAuth();

  const handleLogOut = () => {
    logoutUser().then(toast.success("Successfully Logout"));
  };

  const links = (
    <>
      <ul className="flex  flex-col sm:flex-row gap-3 md:text-xl lg:font-semibold">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"all-classes"}>All Classes</NavLink>
        </li>
        <li>
          <NavLink to={"teach-on"}>Teach On</NavLink>
        </li>
        {!user && (
          <li className="sm:hidden">
            <Link to={"/login"}>Login</Link>
          </li>
        )}
      </ul>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#6DC5D1] justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl">LearnNest</a>
        </div>
        {/* middle */}
        <div className="hidden sm:block">{links}</div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            {user ? (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            ) : (
              <div tabIndex={1}>
                <FaBars className="sm:hidden " />

                <Link className="hidden sm:block" to={"/login"}>
                  Login
                </Link>
              </div>
            )}

            {user ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <div className="sm:hidden">{links}</div>
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">User</span>
                  </a>
                </li>
                <li>
                  <a>DashBoard</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex={0}
                className="menu sm:hidden menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
