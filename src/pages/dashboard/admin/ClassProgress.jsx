import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ClassProgress = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  //    get stat

  const {
    data: stat = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["class-stat", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/stat/${id}`);
      return data;
    },
  });

  
  return (
    <div>
      <h2 className="text-3xl text-green-600 font-semibold text-center uppercase my-14">
        Progress
      </h2>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p>
              <span className="text-2xl font-semibold">Total Enrollment</span>
            </p>
            <p>
              <span className="text-3xl font-bold">{stat?.enroll || 0}</span>
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p>
              <span className="text-2xl font-semibold">Total Assignment</span>
            </p>
            <p>
              <span className="text-3xl font-bold">
                {stat?.totalAssignment || 0}
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p>
              <span className="text-2xl font-semibold">
                Total Assignment Submission
              </span>
            </p>
            <p>
              <span className="text-3xl font-bold">
                {stat?.toatlSubmission || 0}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassProgress;
