
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';
import LoadingSpiner from '../components/ShareComponets/LoadingSpiner';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
    // console.log(location.pathname);
    const{user,loading}=UseAuth()

    if(loading){
        return <LoadingSpiner></LoadingSpiner>
    }


    if(user) return children;

   return <Navigate to={'/login'} state={{from:location?.pathname}} ></Navigate>
   
};

export default PrivateRoutes;