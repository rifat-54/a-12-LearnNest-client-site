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
import MyClasses from "../pages/dashboard/teacher/MyClasses";
import UpdateClass from "../pages/dashboard/teacher/UpdateClass";
import Class from "../pages/allClasses/Class";
import Payment from "../pages/allClasses/Payment";
import MyEnrollClass from "../pages/dashboard/student/MyEnrollClass";
import MyEnrollClassDetails from "../pages/dashboard/student/MyEnrollClassDetails";
import MyClassDetails from "../pages/dashboard/teacher/MyClassDetails";
import ClassProgress from "../pages/dashboard/admin/ClassProgress";
import Users from "../pages/dashboard/admin/Users";
import Profile from "../components/dashboard/sideber/menu/Profile";
import AdminRoutes from "./AdminRoutes";
import TeacherRoutes from "./TeacherRoutes";
import ShareDashboard from "../layout/dashboard/ShareDashboard";


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
            },
            {
                path:'class/:id',
                element:<PrivateRoutes><Class></Class></PrivateRoutes>
            },
            {
                path:'payment/:id',
                element:<PrivateRoutes><Payment></Payment></PrivateRoutes>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                index:true,
                element:<ShareDashboard></ShareDashboard>
            },
            {
                path:'addclass',
                element:<TeacherRoutes><AddClass></AddClass></TeacherRoutes>
                
            },
            {
                path:'teacher-request',
                element:<AdminRoutes><TeacherRequest></TeacherRequest></AdminRoutes>
            },
            {
                path:'allclass-status',
                element:<AdminRoutes><AllClassStatus></AllClassStatus></AdminRoutes>
                
            },
            {
                path:'my-classes',
                element:<TeacherRoutes><MyClasses></MyClasses></TeacherRoutes>
            },
            {
                path:'update-class/:id',
                element:<UpdateClass></UpdateClass>
            },
            {
                path:'myEnroll-class',
                element:<MyEnrollClass></MyEnrollClass>
            },
            {
                path:'my-enroll-class-details/:id',
                element:<MyEnrollClassDetails></MyEnrollClassDetails>
            },
            {
                path:'my-class-details/:id',
                element:<MyClassDetails></MyClassDetails>
            },
            {
                path:'class-progress/:id',
                element:<ClassProgress></ClassProgress>
            },
            {
                path:'users',
                element:<AdminRoutes><Users></Users></AdminRoutes>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default routes;