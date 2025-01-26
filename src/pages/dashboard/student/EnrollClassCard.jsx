import React from "react";
import { Link } from "react-router-dom";

const EnrollClassCard = ({item}) => {
    const{title,image,teacherName,courceId}=item || {}
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
        referrerPolicy="no-referrer"
          src={image}
          alt="class"
          className="rounded-xl h-40 w-11/12"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title: {title}</h2>
        <p>Teacher: <span className="font-semibold">{teacherName}</span></p>
        <div className="card-actions mt-3">
          <Link to={`/dashboard/my-enroll-class-details/${courceId}`} className="btn bg-[#6DC5D1] text-white">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollClassCard;
