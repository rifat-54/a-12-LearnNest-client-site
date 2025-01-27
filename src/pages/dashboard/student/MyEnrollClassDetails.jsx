import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpiner from '../../../components/ShareComponets/LoadingSpiner';
import MyClassAssignment from '../table/MyClassAssignment';

const MyEnrollClassDetails = () => {
    const {id}=useParams()
    const axiosSecure=useAxiosSecure();

    const {data:assignment=[],isLoading,refetch}=useQuery({
        queryKey:['my-assignment',id],
        queryFn:async()=>{
            const {data}=await axiosSecure(`/get-class-assignment/${id}`)
            return data;
        }
    })

    if(isLoading){
        return <LoadingSpiner></LoadingSpiner>
    }

    console.log(assignment);


    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-12'>Available Assignment</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
        
    <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Submit</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
            assignment.map((item,index)=><MyClassAssignment
            key={item._id}
            item={item}
            index={index}
            ></MyClassAssignment>)
        }


      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyEnrollClassDetails;