import React from "react";

import { FcGoogle } from "react-icons/fc";
import UseAuth from "../hook/UseAuth";
import toast from "react-hot-toast";
import UseAxiosPublic from "../hook/UseAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

  const {googleLogin}=UseAuth()
  const axiosPublic=UseAxiosPublic()
  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate=useNavigate()
  const handleGoogleLogin=async()=>{
    googleLogin()
    .then(async(res)=>{
        console.log(res?.user);
        // save to database
        const info={
          email:res?.user?.email,
          name:res?.user?.displayName,
          photo:res?.user?.photoURL
        }

        try {
           const{data}=await axiosPublic.post('/users',info)
           console.log(data);
           toast.success('Successfully Login')
           navigate(from);
        } catch (error) {
           console.log(error);
        }
    })
    .catch(err=>{
      console.log(err.message);
    })
    // .then()
  }

  return (
    <div>
      <div className="divider">OR</div>
      <button type="button" onClick={handleGoogleLogin} className="btn flex items-center w-full">
        <FcGoogle className="text-2xl md:text-3xl mr-3"></FcGoogle> <span>Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
