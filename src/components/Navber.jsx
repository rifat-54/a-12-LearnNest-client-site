import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navber.css'
const Navber = () => {

    const links=<>
    <ul className="flex flex-col md:flex-row gap-3 md:text-xl lg:font-semibold">
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'all-classes'}>All Classes</NavLink>
        </li>
        <li>
            <NavLink to={'teach-on'}>Teach On</NavLink>
        </li>
    </ul>
    </>
  return (
    <div>
      <div className="navbar bg-[#6DC5D1] justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl">LearnNest</a>
        </div>
        {/* middle */}
        <div className="hidden md:block">
            {links}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <div className="md:hidden">

                {links}
                </div>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>DashBoard</a>
              </li>
              <li>
                <Link to={'/login'}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
