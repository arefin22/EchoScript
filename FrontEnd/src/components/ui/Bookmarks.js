
"use client"
import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';


const Bookmarks = async ({user,data}) => {
    try {
        const booked = {
          linkId:data._id,
          user: user,
          data: data,
        };
<<<<<<< HEAD
        const { data: responseData } = await axiosSecure.post(
          "/bookmark",
          booked
        );
=======
        const {data: responseData} = await axiosSecure.post('/bookmark', booked);
>>>>>>> 1f8b47da7d67d8bd0a1877a07a7a1dab37c12b0d
        toast.success("Thi item is Bookmarked successfully")
        return responseData;
      } catch (error) {
        
        
        toast.error('Failed to bookmark item');
      
      }
};

export default Bookmarks;