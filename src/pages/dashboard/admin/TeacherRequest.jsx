import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import TeacherRequestTable from "../table/TeacherRequestTable";

const TeacherRequest = () => {
  const axiosSeucre = useAxiosSecure();
  

  const {
    data: teachers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["class-request"],
    queryFn: async () => {
      const { data } = await axiosSeucre("/class-req");
      return data;
    },
  });

  
  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  return (
    <div className="overflow-x-auto">
        <h2 className="text-3xl font-semibold text-center mt-6 mb-8">Teacher Request</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Info</th>
            <th>Experience</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((item) => (
            <TeacherRequestTable
              item={item}
              refetch={refetch}
              key={item._id}
            ></TeacherRequestTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherRequest;
