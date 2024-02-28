import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://back-end-roan-nu.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
