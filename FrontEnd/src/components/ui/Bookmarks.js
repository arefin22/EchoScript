
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
        const {data: responseData} = await axiosSecure.post('/bookmark', booked);
       
        if(responseData.success=== true){
          toast.success("Thi item is Bookmarked successfully")

        }else{
          toast.success("this item is remove")
        }
=======

        const { data: responseData } = await axiosSecure.post(
          "/bookmark",
          booked
        );
        toast.success("Thi item is Bookmarked successfully")
>>>>>>> b17f6c4cade08805bb6c5b9a06e8555561fe0592
        return responseData;
      } catch (error) {
        
        
        toast.error('Failed to bookmark item');
      
      }
};

export default Bookmarks;