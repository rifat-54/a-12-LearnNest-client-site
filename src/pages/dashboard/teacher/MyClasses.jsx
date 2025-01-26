import React from "react";
import UseAuth from "../../../hook/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import TeacherClassCard from "./TeacherClassCard";

const MyClasses = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["teacher-class", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/teacher-my-class/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  console.log(classes);


  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        My Classes ({classes?.length})
      </h2>

      {/* card */}
      <div className="grid gap-4 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <TeacherClassCard 
          key={item._id}
          item={item}
          refetch={refetch}
          ></TeacherClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
