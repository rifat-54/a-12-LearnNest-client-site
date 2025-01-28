import { format } from 'date-fns';
import React, { useState } from 'react';
import { VscFeedback } from "react-icons/vsc";
import AssignmentSubmitModal from '../../../components/dashboard/modal/AssignmentSubmitModal';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import FeedBackModal from '../../../components/dashboard/modal/FeedBackModal';

const MyClassAssignment = ({item,index}) => {
    const{user}=UseAuth()
    let [isOpen, setIsOpen] = useState(false);
    let [open, setOpen] = useState(false);
    const [link,setLink]=useState('')
    const [rating,setRating]=useState('')
    const [feedbackLink,setFeedbackLink]=useState('')
    const axiosSecure=useAxiosSecure()
    
    

    const{description,classId,date,title,_id,teacherEmail}=item || {}


    // submit assignment

    const handleSubmitAssignment=async()=>{

        const submitData={
            classId,
            assignmentId:_id,
            teacherEmail,
            studentEmail:user?.email,
            assignmentLink:link
        }

        try {
            const{data}=await axiosSecure.post(`/submit-assigmnet/${_id}`,submitData)
            
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Submitted",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        } catch (error) {
            
        }finally{
            setIsOpen(false)
        }

        // console.log(submitData);

    }


    // feedback 
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };


    const handleFeedback=async()=>{

        const feedbacktData={
            title,
            userName:user?.displayName,
            userPhoto:user?.photoURL,
            classId,
            assignmentId:_id,
            teacherEmail,
            studentEmail:user?.email,
            feedback:feedbackLink,
            rating
        }

       

        try {
            const{data}=await axiosSecure.post('/feedback-assignment',feedbacktData)
            
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Feedback!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        } catch (error) {
            
        }finally{
            setOpen(false)
        }

        

    }



    return (
        <tr>
        <th>{index+1}</th>
        <td>{title}</td>
        <td>{description?.slice(0,50)}</td>
        <td>{format(new Date(date), "MM/dd/yyyy")}</td>
        <td><button onClick={()=>setIsOpen(true)} className='btn bg-green-500 text-white'>Submit</button></td>
        <td><button onClick={()=>setOpen(true)} className='btn bg-[#6DC5D1] text-white'><VscFeedback />Feedback</button>
        <AssignmentSubmitModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLink={setLink}
        handleSubmitAssignment={handleSubmitAssignment}
        ></AssignmentSubmitModal>

        <FeedBackModal
        open={open}
        setOpen={setOpen}
        setFeedbackLink={setFeedbackLink}
        handleFeedback={handleFeedback}
        ratingChanged={ratingChanged}
        ></FeedBackModal>
        </td>
      </tr>
    );
};

export default MyClassAssignment;