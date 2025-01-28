import React from "react";

import img1 from "../../../assets/shutterstock_1112381495.jpg";
import UseAxiosPublic from "../../../hook/UseAxiosPublic";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import { useQuery } from "@tanstack/react-query";

const TotalUserSection = () => {

    const axiosPublic = UseAxiosPublic();

  const { data:homeStat={}, isLoading } = useQuery({
    queryKey: ["home-stat"],
    queryFn: async () => {
      const { data } = await axiosPublic("/home-stat");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  

  return (
    <div>
      <h2 className="text-3xl text-center mt-16 mb-8 font-semibold">Our Growth Stats</h2>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 items-center lg:w-11/12 mx-auto px-3">
        <div className="flex flex-col mt-12  gap-4">
          <div className="card bg-base-100 w-full md:w-11/12 mx-auto shadow-xl">
            <div className="card-body items-center text-center">
              <p>
                <span className="text-2xl font-semibold">Total Users</span>
              </p>
              <p>
                <span className="text-3xl font-bold">{homeStat?.totalUsers || 0}</span>
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full md:w-11/12 mx-auto shadow-xl">
            <div className="card-body items-center text-center">
              <p>
                <span className="text-2xl font-semibold">Total Classes</span>
              </p>
              <p>
                <span className="text-3xl font-bold">{homeStat?.totalClasses || 0}</span>
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full md:w-11/12 mx-auto  shadow-xl">
            <div className="card-body items-center text-center">
              <p>
                <span className="text-2xl font-semibold">
                  Total Enrollment
                </span>
              </p>
              <p>
                <span className="text-3xl font-bold">{homeStat?.totalEnroll || 0}</span>
              </p>
            </div>
          </div>
        </div>
        {/* image secion */}
        <div>
          <img className="rounded-md" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TotalUserSection;
