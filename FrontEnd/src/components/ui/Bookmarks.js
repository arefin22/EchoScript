
"use client"
import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';


const Bookmarks = async ({user,data,api}) => {
    try {
        const booked = {
          user: user,
          data: data,
        };
        const {data: responseData} = await axiosSecure.put(`/${api}`, booked);
        toast.success("Thi item is Bookmarked successfully")
        return responseData;
      } catch (error) {
        
        
        toast.error('Failed to bookmark item');
      
      }
};

export default Bookmarks;