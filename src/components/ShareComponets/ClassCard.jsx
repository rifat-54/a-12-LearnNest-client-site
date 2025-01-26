import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ item,refetch }) => {
    const { name, title,enroll, photo, price, description, _id } =
    item || {};

    return (
        <div
        className="card bg-base-100 
       shadow-xl"
      >
        <figure className='p-5'>
          <img
            className="h-52 w-full  lg:w-11/12 mx-auto lg:rounded-md"
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
            
          </div>
          
          <h2 className="card-title">Title: {title}</h2>
          <p className="text-gray-500">{description?.slice(0, 90)}</p>
          <div className="flex items-center my-3 justify-between">
            <p>
              Price: <span className="text-xl font-bold">${price}</span>
            </p>
           
          </div>
          <div className="card-actions justify-between">
            <p
              
              className="bg-[#6DC5D1] btn  text-white"
            >
              Total Enroll: <span className='text-xl font-bold text-black'>{enroll}</span>
            </p>
            <Link to={`/class/${_id}`} className="btn bg-green-500 text-white">
              Enroll Now
            </Link>
          </div>
          
        </div>
      </div>
    );
};

export default ClassCard;