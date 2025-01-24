import { useForm } from "react-hook-form";
import SocialLogin from "../../shareComponent/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hook/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
  const{loginUser}=UseAuth()
  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate=useNavigate()

  const { register, handleSubmit,formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    

    // sign in user
    loginUser(data?.email,data?.password)
    .then(()=>{
        toast.success('Successfully Login!')
        navigate(from)
    })
    .catch(err=>{
      toast.error(err.message)
    })

  
  
  };

  return (
    <div className=" mx-auto  card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
        type="password"
          placeholder="password"
          className="input input-bordered"
          {...register("password", { required: true })}
        />
         {errors.password?.type === "required" && (
        <p className="text-red-500">Password is required</p>
      )}
      </div>
      <input className="btn mt-4 bg-[#6DC5D1] text-white" value={'Login'} type="submit" />

      <p>New to this Website?Please <Link className="text-red-400 underline" to={'/register'}>Register</Link></p>

      <SocialLogin></SocialLogin>
    </form>
    </div>
  );
};

export default Login;
