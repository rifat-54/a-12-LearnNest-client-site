
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
    // console.log(location.pathname);
    const{user,loading}=UseAuth()

    if(loading){
        return <p className='mt-24 text-center'><span className="loading loading-bars loading-lg"></span></p>
    }


    if(user) return children;

   return <Navigate to={'/login'} state={{from:location?.pathname}} ></Navigate>
};

export default PrivateRoutes;