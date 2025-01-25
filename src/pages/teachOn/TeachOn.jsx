import React from "react";
import UseHelmet from "../../hook/UseHelmet";
import { useForm } from "react-hook-form";
import UseAuth from "../../hook/UseAuth";
import useAxiosSecure from './../../hook/useAxiosSecure';
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TeachOn = () => {
  const { user } = UseAuth();
  const axiosSecure=useAxiosSecure()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // console.log(data);

    try {
        const res=await axiosSecure.post('/apply-teacher',data);
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Applied",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            toast.error('Already applied')
        }
        
        
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <UseHelmet value={"LearnNest | Teach on"}></UseHelmet>

      <div className="card bg-base-100 w-full md:w-10/12 mx-auto shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl my-12">Apply For Teacher</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              defaultValue={user?.displayName}
              readOnly
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={user?.email}
              readOnly
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              defaultValue={user?.photoURL}
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo")}
            />

            {errors.photo?.type === "required" && (
              <p className="text-red-400" role="alert">
                Photo URL is required
              </p>
            )}
          </div>
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              
              type="text"
              placeholder="Title"
              className="input input-bordered"
              {...register("title",{required:true})}
            />

            {errors.title?.type === "required" && (
              <p className="text-red-400" role="alert">
                Title is required
              </p>
            )}
          </div>

          {/* experience */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("experience")}
            >
              <option value="beginner">Beginner</option>
              <option value="mid-level">Mid-level</option>
              <option value="experienced">Experienced </option>
            </select>

            {errors.photo?.type === "experience" && (
              <p className="text-red-400" role="alert">
                Experience URL is required
              </p>
            )}
          </div>
          {/* category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              required
              className="select select-bordered w-full max-w-xs"
              {...register("category",{required:true})}
            >
              
             
              <option value="web-development">Web Development</option>
              <option value="digital-marketing">Digital Marketing </option>
              <option value="graphics-design">Graphics Design</option>
              <option value="wordpress">WordPress</option>
              <option value="cyber-security">Cyber Security</option>
            </select>

            {errors.photo?.type === "category" && (
              <p className="text-red-400" role="alert">
                Category URL is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-[#6DC5D1] text-white"
              value={'Submit For Revew'}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeachOn;
