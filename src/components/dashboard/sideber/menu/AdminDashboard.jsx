import React from 'react';
import AddNav from './AddNav';
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
const AdminDashboard = () => {
    return (
        <div>
            <AddNav 
            address={'/dashboard/teacher-request'}
            label={'Teacher Request'}
            icon={FaChalkboardTeacher}
            ></AddNav>

            <AddNav 
            address={'/dashboard/allclass-status'}
            label={'All Classes'}
            icon={SiGoogleclassroom}
            ></AddNav>
        </div>
    );
};

export default AdminDashboard;