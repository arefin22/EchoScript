
import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';


const Bookmarks = async ({user,data}) => {
    try {
        const booked = {
          linkId:data._id,
          user: user,
          data: data,
        };

        const { data: responseData } = await axiosSecure.post(
          "/bookmark",
          booked
        );


        // const {data: responseData} = await axiosSecure.post('/bookmark', booked);

        toast.success("Thi item is Bookmarked successfully")
        return responseData;
      } catch (error) {
        
        
        toast.error('Failed to bookmark item');
      
      }
};

export default Bookmarks;