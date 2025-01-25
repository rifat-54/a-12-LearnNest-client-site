import React, { useState } from "react";
import TeacherRejectModal from "../../../components/dashboard/modal/TeacherRejectModal";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import toast from "react-hot-toast";

const TeacherRequestTable = ({ item, refetch }) => {
  const { photo, name, email, title, category, experience, status } =
    item || {};
  let [isOpen, setIsOpen] = useState(false);

  const axiosSecure = useAxiosSecure();

  const handleRejecte = async () => {
    if (status === "Rejected") {
      setIsOpen(false);
      return toast.error("User Already Rejected!");
    }

    try {
      const { data } = await axiosSecure.patch(`/reject-teacher/${email}`);
      console.log(data);
      refetch();
      toast.success("User is Rejected Now!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
    }
  };

  const handleApproved = async () => {
    if (status === "Verified") {
      return toast.error("User Already Verified!");
    }

    try {
      const { data } = await axiosSecure.patch(`/approved-teacher/${email}`);
      console.log(data);
      refetch();
      toast.success("User is Teacher Now!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{experience}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={handleApproved}
          className="btn bg-[#6DC5D1] text-white btn-ghost btn-xs"
        >
          Approve
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-red-400 mt-2 text-white btn-ghost btn-xs"
        >
          Reject
        </button>
        <TeacherRejectModal
        handleRejecte={handleRejecte}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      ></TeacherRejectModal>
      </td>
      

      
      
     
    </tr>
    
  );
};

export default TeacherRequestTable;
