import React, { useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
import ClassRejectModal from '../../../components/dashboard/modal/ClassRejectModal';
import { Link } from 'react-router-dom';

const AllClassTable = ({item,refetch}) => {
    const{email,title,status,photo,description,_id}=item || {}
    let [isOpen, setIsOpen] = useState(false)
    const axiosSecure=useAxiosSecure()

    const handleApprovedClass=async()=>{
       
        try {
            const {data}=await axiosSecure.patch(`/approved-class/${_id}`)
           
            toast.success('Class is Accepted!')
            refetch()
        } catch (error) {
            // console.log(error);
        }
    }

    const handleRejectedClass=async()=>{
        try {
            const {data}=await axiosSecure.patch(`/rejected-class/${_id}`)
           
            toast.success('Class is Rejected!')
            refetch()
        } catch (error) {
            // console.log(error);
        }finally{
            setIsOpen(false)
        }
    }

    return (
        <tr>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                  referrerPolicy='no-referrer'
                    src={photo}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <ClassRejectModal 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleRejectedClass={handleRejectedClass}
              
              ></ClassRejectModal>
            </td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{description?.slice(0,20)}</td>
            <td>{status}</td>
            <td><button disabled={status==='Accepted'} onClick={handleApprovedClass} className='btn btn-sm bg-green-400 text-white'>Approved</button></td>
            <td><button disabled={status==='Rejected'} onClick={()=>setIsOpen(true)} className='btn btn-sm bg-red-400 text-white'>Rejected</button></td>
            <td><Link to={`/dashboard/class-progress/${_id}`} className='btn btn-sm bg-[#6DC5D1] text-white'>Progress</Link></td>
           
          </tr>
    );
};

export default AllClassTable;