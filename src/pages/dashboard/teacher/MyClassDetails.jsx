import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import CreateAssignmentModal from "../../../components/dashboard/modal/CreateAssignmentModal";
import { format } from "date-fns";
import UseAuth from "../../../hook/UseAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import toast from "react-hot-toast";

const MyClassDetails = () => {
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const{user}=UseAuth();
  const axiosSecure=useAxiosSecure()
  

//   const date= format(new Date(startDate), "MM/dd/yyyy")
//    console.log(date);

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const form=e.target;
    const title=form.title.value;
    const description=form.description.value;


    const assignmentData={
        title,
        description,
        date:startDate,
        classId:id,
        teacherEmail:user?.email,
        submission:0
    }

    // console.log(data);


    try {
        const{data}=await axiosSecure.post('/assignment',assignmentData);
       
        toast.success('Successfully Created Assignment!')
        
    } catch (error) {
        
    }finally{
        setIsOpen(false)
    }

   


    

  }


  return (
    <div>
      {/* progress secion */}
      
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p><span className="text-2xl font-semibold">Total Enrollment</span></p>
            <p><span className="text-3xl font-bold">0</span></p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p><span className="text-2xl font-semibold">Total Assignment</span></p>
            <p><span className="text-3xl font-bold">0</span></p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <p><span className="text-2xl font-semibold">Total Assignment Submission</span></p>
            <p><span className="text-3xl font-bold">0</span></p>
          </div>
        </div>
      </div>

      {/* create section */}
      <div>
        <h2 className="text-3xl font-semibold text-center mt-16">Class Assignment</h2>
        <button onClick={()=>setIsOpen(true)} className="btn mt-8 ml-5 bg-[#6DC5D1] text-white font-semibold text-xl"><IoMdAdd />Create Assignment</button>

        {/* modal */}
        <div>
            <CreateAssignmentModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handlesubmit={handlesubmit}
            startDate={startDate}
            setStartDate={setStartDate}
            ></CreateAssignmentModal>
        </div>
      </div>
    </div>
  );
};

export default MyClassDetails;
