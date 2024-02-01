import axios from 'axios'
export const axiosPublic = axios.create({
    baseURL : 'https://back-end-roan-nu.vercel.app'
}
)

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;