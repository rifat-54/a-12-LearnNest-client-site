import React from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import AllClassTable from "../table/AllClassTable";

const AllClassStatus = () => {
  const axiosSucure = useAxiosSecure();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["class-status"],
    queryFn: async () => {
      try {
        const { data } = await axiosSucure("/allClass-status");
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  console.log(classes);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Approved</th>
            <th>Reject</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {
            classes.map((item)=><AllClassTable
            key={item._id}
            item={item}
            refetch={refetch}
            ></AllClassTable>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllClassStatus;
