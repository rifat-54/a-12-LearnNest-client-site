import React from 'react';
import Navber from '../../components/Navber';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            main layout
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;