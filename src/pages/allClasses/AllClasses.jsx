import React from 'react';
import UseHelmet from '../../hook/UseHelmet';
import UseAxiosPublic from '../../hook/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpiner from '../../components/ShareComponets/LoadingSpiner';
import ClassCard from '../../components/ShareComponets/ClassCard';

const AllClasses = () => {
    const axiosPublic=UseAxiosPublic()

    const {data:classes=[],isLoading,refetch}=useQuery({
        queryKey:['all-classes'],
        queryFn:async()=>{
            const {data}=await axiosPublic('/all-classes');
            return data;
        }
    })

    if(isLoading){
        return <LoadingSpiner></LoadingSpiner>
    }

    console.log(classes);


    return (
        <div>
            <UseHelmet value={'LearnNest | All Classes'}></UseHelmet>
            {/* all classes */}

            <div className="grid gap-4 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <ClassCard 
          key={item._id}
          item={item}
          refetch={refetch}
          ></ClassCard>
        ))}
      </div>
        </div>
    );
};

export default AllClasses;