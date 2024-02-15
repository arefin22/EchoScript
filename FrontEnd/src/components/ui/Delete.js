// "use client"

import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';

const Delete =  ({api,id,setUpdate}) => {
  try {
     axiosSecure.delete(`/${api}/${id}`).then(res=>{
     
    console.log(res.data)
    if(res.data.deletedCount>0){
      toast.success('Article deleted successfully');
      setUpdate(Date.now())
    }
     })
    
    
  } catch (error) {
    toast.error('Failed to delete article');
    throw error;
  }
};

export default Delete;
