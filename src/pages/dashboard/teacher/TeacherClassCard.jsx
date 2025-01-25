import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const TeacherClassCard = ({ item }) => {
  const { name, title, photo, price, description, email, status, _id } =
    item || {};

    const axiosSecure=useAxiosSecure()

    const handleDeleteClass=()=>{
        
    }

  return (
    <div
      className="card bg-base-100 
     shadow-xl"
    >
      <figure>
        <img
          className="h-44 w-full"
          referrerPolicy="no-referrer"
          src={photo}
          alt="class"
        />
      </figure>
      <div className="card-body -mt-6">
        <div>
          <p>
            Name: <span className="text-gray-700 font-semibold">{name}</span>
          </p>
          <p>
            Email: <span className="text-gray-700 font-semibold">{email}</span>
          </p>
        </div>
        <div className="divider"></div>
        <h2 className="card-title">Title: {title}</h2>
        <p className="text-gray-500">{description?.slice(0, 90)}</p>
        <div className="flex items-center my-3 justify-between">
          <p>
            Price: <span className="text-xl font-bold">${price}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={`${
                status === "Rejected" ? "text-red-500" : "text-green-500"
              } font-semibold`}
            >
              {status}
            </span>
          </p>
        </div>
        <div className="card-actions ">
          <Link
            to={`/dashboard/update-class/${_id}`}
            className="btn btn-sm bg-green-400 text-white"
          >
            Update
          </Link>
          <button className="btn btn-sm bg-red-500 text-white">Delete</button>
          <button className="btn btn-sm bg-[#6DC5D1] text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassCard;
