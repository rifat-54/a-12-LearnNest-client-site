import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';


const Login = () => {
 
  const [icon, setIcon] = useState(false);
  const [error, setError] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    
  };

  
  const handleIcon = (e) => {
    e.preventDefault();
    setIcon(!icon);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={icon ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button onClick={handleIcon}>
                {icon ? (
                  <p className="absolute top-[52%] right-[5%]">
                    <FaRegEye />
                  </p>
                ) : (
                  <p className="absolute top-[52%] right-[5%]">
                    <FaRegEyeSlash />
                  </p>
                )}
              </button>

              <label className="label">
                {error && <p className="text-red-600">{error}</p>}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              New to this website? please{" "}
              <Link className="text-red-500" to={"/register"}>
                Register
              </Link>{" "}
            </p>
          </form>
          <div>
            <button
              
              className="btn block w-11/12 mb-14 mx-auto"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;