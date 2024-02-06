// "use client"

import { axiosSecure } from '@/utils/useAxiosSecure';
import toast from 'react-hot-toast';

const Delete = async ({api,id}) => {
  try {
    const response = await axiosSecure.delete(`/${api}/${id}`);
    toast.success('Article deleted successfully');
    return response.data;
  } catch (error) {
    toast.error('Failed to delete article');
    throw error;
  }
};

export default Delete;
