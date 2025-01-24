import axios from 'axios';
import React from 'react';

const axiosPublic=axios.create({
    baseURL:import.meta.env.VITE_SERVER_API_KEY
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;