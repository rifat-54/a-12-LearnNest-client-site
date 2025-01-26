import React, { useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import LoadingSpiner from "../../components/ShareComponets/LoadingSpiner";

const Class = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
 

  const {
    data: cls = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/class/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  console.log(cls);

  const { name, title, photo, price, description, email, enroll, _id } =
    cls || {};

  return (
    <div
      className="card max-w-2xl mx-auto bg-base-100 
       shadow-xl"
    >
      <figure className="p-6">
        <img
          className="w-full h-72 md:h-96 rounded-md md:w-11/12 mx-auto"
          referrerPolicy="no-referrer"
          src={photo}
          alt="class"
        />
      </figure>
      <div className="card-body -mt-6">
        <div>
            <p className="font-bold">Teacher Info:</p>
          <p>
            Name: <span className="text-gray-700 font-semibold">{name}</span>
          </p>
          <p>
            Email: <span className="text-gray-700 font-semibold">{email}</span>
          </p>
        </div>
        <div className="divider"></div>
        <h2 className="card-title">Title: {title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center my-3 justify-between">
          <p>
            Price: <span className="text-xl font-bold">${price}</span>
          </p>
          <p>
            Total Enroll : <span className="text-xl font-semibold">{enroll}</span>
          </p>
        </div>
        <div className="card-actions mt-4 justify-center ">
        
          <Link to={`/payment/${_id}`} className="btn  bg-[#6DC5D1] text-white">
            Pay Now
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Class;
