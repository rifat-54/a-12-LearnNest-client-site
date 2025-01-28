import React, { useState } from "react";
import useAxiosSecure from './../../../hook/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from './../../../components/ShareComponets/LoadingSpiner';
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure=useAxiosSecure()
    const[search,setSearch]=useState('')
    console.log(search);

    const{data:users=[],isLoading,refetch}=useQuery({
        queryKey:['users',search],
        queryFn:async()=>{
            const{data}=await axiosSecure(`/all-users?search=${search}`)
            return data;
        }
    })

    // if(isLoading){
    //     return <LoadingSpiner></LoadingSpiner>
    // }

 


    // make admin

    const handleMakeAdmin=async(email)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
          }).then(async(result) => {
            if (result.isConfirmed) {

                try {
                    const {data}=await axiosSecure.patch(`/make-admin/${email}`,{})
                    if(data?.modifiedCount){
                        refetch()
                        
                        Swal.fire({
                            title: "Seccess",
                            text: "User is Admin Now.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500
                          });
        
                    }
                   
                } catch (error) {
                    
                }


              
            }
          });

        

    }


  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold text-center my-6">All Users</h2>
        <div className=" flex gap-3 p-10 rounded-md items-center bg-base-100 max-w-2xl mx-auto shadow-xl">
          <input
          onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search User By Email"
            className="input flex-1 input-bordered  w-full"
          />
          
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>InFo</th>
        
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        users.map((item,index)=> <tr key={item?._id}>
       <td>{index+1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item?.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name: {item?.name}</div>
              <div className="text-sm opacity-50">Email: {item?.email}</div>
            </div>
          </div>
        </td>
        <td className={`
        ${item?.role==='Student' && 'text-blue-500'}
        ${item?.role==='Teacher' && 'text-yellow-500'}
        ${item?.role==='Admin' && 'text-green-500'}
        
        `}>
          {item?.role}
        </td>
        <td><button disabled={item?.role==='Admin'} onClick={()=>handleMakeAdmin(item?.email)} className="btn bg-[#6DC5D1] text-white">Make Admin</button></td>
        
      </tr>)
     }
     
    
    </tbody>
    
   
  </table>
</div>

    </div>
  );
};

export default Users;
