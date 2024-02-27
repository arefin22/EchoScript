
import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';


const Bookmarks = async ({user,data}) => {
    try {
        const booked = {
          linkId:data._id,
          user: user,
          data: data,
        };
        const {data: responseData} = await axiosSecure.post('/bookmark', booked);
       
        if(responseData.success=== true){
          toast.success("This item is Bookmarked successfully")

        }else{
          toast.success("this item is remove")
        }
        return responseData;
      } catch (error) {
        
        
        toast.error('Failed to bookmark item');
      
      }
};

export default Bookmarks;