import axios from 'axios'
export const axiosSecure = axios.create({
    baseURL : 'https://tour-to-heart-server.vercel.app'
}
)
const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;