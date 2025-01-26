import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../hook/UseAuth';
import LoadingSpiner from '../../../components/ShareComponets/LoadingSpiner';
import EnrollClassCard from './EnrollClassCard';

const MyEnrollClass = () => {
    const axiosSecure=useAxiosSecure()
    const {user,loading}=UseAuth()

    const{data:myenroll=[],isLoading,refetch}=useQuery({
        queryKey:['my-enroll-class',user?.email],
        enabled:!loading && !!user?.email,
        queryFn:async()=>{
            const{data}=await axiosSecure(`/myenroll-class/${user?.email}`)
            return data;
        }
    })

    if(isLoading){
        return <LoadingSpiner></LoadingSpiner>
    }

    console.log(myenroll);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>My Enroll Class</h2>
            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    myenroll.map((item)=><EnrollClassCard
                    key={item._id}
                    item={item}
                    ></EnrollClassCard>)
                }
            </div>
        </div>
    );
};

export default MyEnrollClass;