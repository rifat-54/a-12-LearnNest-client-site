import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import { useForm } from "react-hook-form";
import UseAuth from "../../../hook/UseAuth";
import Swal from "sweetalert2";
import UseHelmet from "../../../hook/UseHelmet";

const UpdateClass = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
 formState: { errors },
  } = useForm();

  const { data: clas = {}, isLoading,refetch } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/class/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

 

  const { title, price, description, photo,_id } = clas || {};
  // update class

  const onSubmit = async (data) => {
    

    try {
      const res = await axiosSecure.put(`/update-class/${_id}`, data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Updated Class",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        navigate('/dashboard/my-classes')

      }
    
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <UseHelmet value={"LearnNest | Update Class"}></UseHelmet>

      <div className="card bg-base-100 w-full md:w-10/12 mx-auto shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl my-12">Update Class</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue={title}
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
              defaultValue={photo}
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
              defaultValue={price}
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
              defaultValue={description}
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
              value={"Update Class"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
