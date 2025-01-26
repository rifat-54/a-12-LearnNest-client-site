import React from 'react';
import UseHelmet from '../../hook/UseHelmet';
import UseAxiosPublic from '../../hook/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpiner from '../../components/ShareComponets/LoadingSpiner';

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
            
        </div>
    );
};

export default AllClasses;