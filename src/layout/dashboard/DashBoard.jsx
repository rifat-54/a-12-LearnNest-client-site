import React from 'react';
import { Outlet } from 'react-router-dom';
import Sideber from '../../components/dashboard/sideber/Sideber';

const DashBoard = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
      {/* Left Side: Sidebar Component */}
          <Sideber></Sideber>
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default DashBoard;