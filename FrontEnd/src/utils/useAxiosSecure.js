import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "https://back-end-roan-nu.vercel.app" || "http://localhost:5000",
  // baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
