import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../shareComponent/SocialLogin";
import UseAuth from "../../hook/UseAuth";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../hook/UseAxiosPublic";

const Register = () => {

  const{createUser,updateUser}=UseAuth()
  const axiosPublic=UseAxiosPublic()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async(data) => {
    

    // register user
    createUser(data?.email,data?.password)
    .then(()=>{
      
      // update profile
      updateUser(data?.name,data?.photo)
      .then(async()=>{
        toast.success('Succesfully Register!');
        // TO DO save to data base

        const info={
          email:data?.email,
          name:data?.name,
          photo:data?.photo
        }

        try {
           const{data}=await axiosPublic.post('/users',info)
          
        } catch (error) {
          //  console.log(error);
        }


      })
      .catch(error=>{
        toast.error(error?.message);
      })
    })
    .catch(err=>{
      toast.error(err.message);
    })

    }
    

  


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">
            Register now!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}
            </div>
            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo url"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Photo URL is required</p>
              )}
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 19,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                })}
                type={"password"}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be atleast 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Passwod must be less than 19 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Passwod must be minimum 6 characters, at least one letter, one
                  number and one special character:
                </p>
              )}
            </div>
            <div className="form-control mt-2">
              <input
                className="btn mt-4 bg-[#6DC5D1] text-white"
                value={"Register"}
                type="submit"
              />
            </div>
            <p>
              Allready have an account? please{" "}
              <Link className="text-red-500 underline" to={"/login"}>
                Login
              </Link>{" "}
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
