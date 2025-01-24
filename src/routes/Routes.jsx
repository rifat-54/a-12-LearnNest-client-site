import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import AllClasses from "../pages/allClasses/AllClasses";
import TeachOn from "../pages/teachOn/TeachOn";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from './PrivateRoutes';


const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'all-classes',
                element:<AllClasses></AllClasses>
            },
            {
                path:'teach-on',
                element:<PrivateRoutes><TeachOn></TeachOn></PrivateRoutes>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default routes;