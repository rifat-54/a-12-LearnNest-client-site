import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';
import useRole from '../hook/useRole';
import LoadingSpiner from '../components/ShareComponets/LoadingSpiner';

const TeacherRoutes = ({children}) => {
    const location = useLocation();
    const { user, loading } = UseAuth();
    const [role, isLoading] = useRole();
  
    if (loading || isLoading) {
      return <LoadingSpiner></LoadingSpiner>;
    }
  
    if (user && role === "Teacher") return children;
  
    return (
      <Navigate to={"/login"} state={{ from: location?.pathname }}></Navigate>
    );
};

export default TeacherRoutes;