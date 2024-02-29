"use client"
import axios from 'axios'
export const axiosPublic = axios.create({
  baseURL: "https://back-end-roan-nu.vercel.app" || "http://localhost:5000" ,
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;