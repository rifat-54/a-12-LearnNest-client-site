import React from 'react';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user,loading}=UseAuth();
    const axiosSecure=useAxiosSecure()

    const{data:role='',isLoading}=useQuery({
        queryKey:['role',user?.email],
        enabled:!loading && !!user?.email,
        queryFn:async()=>{
            const {data}=await axiosSecure(`/user/role/${user?.email}`)
            return data;
        }
    })



    return [role,isLoading];
};

export default useRole;