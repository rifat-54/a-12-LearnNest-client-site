import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL:import.meta.env.VITE_SERVER_API_KEY,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logoutUser}=UseAuth()
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // console.log("requested stop here", token);
        config.headers.authorization = `Bearer ${token}`;

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async(error) => {
        const status = error.response?.status;
        // console.log("inside response ", status);
        if (status === 401 || status === 403) {
         await logoutUser()
            navigate("/login");
          
        }

        return Promise.reject(error);
      }
    );

    
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;