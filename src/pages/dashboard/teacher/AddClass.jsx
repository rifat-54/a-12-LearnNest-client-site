import React from "react";
import UseAuth from "../../../hook/UseAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import UseHelmet from "../../../hook/UseHelmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddClass = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  

    try {
      const res = await axiosSecure.post("/add-class", data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Added Class",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/my-classes')
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <UseHelmet value={"LearnNest | Add Class"}></UseHelmet>

      <div className="card bg-base-100 w-full md:w-10/12 mx-auto shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl my-12">Add Class</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered"
              {...register("title", { required: true })}
            />

            {errors.title?.type === "required" && (
              <p className="text-red-400" role="alert">
                Title is required
              </p>
            )}
          </div>
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
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo", { required: true })}
            />

            {errors.photo?.type === "required" && (
              <p className="text-red-400" role="alert">
                Photo URL is required
              </p>
            )}
          </div>

          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", { required: true })}
            />

            {errors.price?.type === "required" && (
              <p className="text-red-400" role="alert">
                Price is required
              </p>
            )}
          </div>

          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="description"
              className="textarea textarea-bordered"
              {...register("description", { required: true })}
            />

            {errors.title?.type === "required" && (
              <p className="text-red-400" role="alert">
                Description is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-[#6DC5D1] text-white"
              value={"Add Class"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
