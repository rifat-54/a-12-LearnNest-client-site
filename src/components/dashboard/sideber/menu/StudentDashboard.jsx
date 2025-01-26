import React from 'react';
import AddNav from './AddNav';
import { PiStudentLight } from "react-icons/pi";
const StudentDashboard = () => {
    return (
        <div>
            <AddNav 
            address={'/dashboard/myEnroll-class'}
            label={'My Enroll Class'}
            icon={PiStudentLight}
            ></AddNav>
            
        </div>
    );
};

export default StudentDashboard;