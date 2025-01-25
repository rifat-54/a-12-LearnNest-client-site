import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import AllClasses from "../pages/allClasses/AllClasses";
import TeachOn from "../pages/teachOn/TeachOn";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from './PrivateRoutes';
import DashBoard from "../layout/dashboard/DashBoard";
import AddClass from "../pages/dashboard/teacher/AddClass";
import TeacherRequest from "../pages/dashboard/admin/TeacherRequest";
import AllClassStatus from "../pages/dashboard/admin/AllClassStatus";


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
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'teacher-request',
                element:<TeacherRequest></TeacherRequest>
            },
            {
                path:'allclass-status',
                element:<AllClassStatus></AllClassStatus>
            }
        ]
    }
])

export default routes;