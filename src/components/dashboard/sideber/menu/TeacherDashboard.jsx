import React from 'react';

import AddNav from './AddNav';
import { GiTeacher } from "react-icons/gi";
import { FcReading } from "react-icons/fc";

const TeacherDashboard = () => {
    return (
        <div>
            
            <AddNav 
            address={'/dashboard/addclass'}
            label={'Add Class'}
            icon={GiTeacher}
            ></AddNav>
            
            <AddNav 
            address={'/dashboard/my-classes'}
            label={'My Classes'}
            icon={FcReading }
            ></AddNav>
        </div>
    );
};

export default TeacherDashboard;