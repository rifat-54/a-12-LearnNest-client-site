import React from 'react';

import AddNav from './AddNav';
import { GiTeacher } from "react-icons/gi";

const TeacherDashboard = () => {
    return (
        <div>
            
            <AddNav 
            address={'/dashboard/addclass'}
            label={'Add Class'}
            icon={GiTeacher}
            ></AddNav>
        </div>
    );
};

export default TeacherDashboard;