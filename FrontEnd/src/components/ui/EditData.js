"use client"
import { axiosSecure } from '@/utils/useAxiosSecure';
import React from 'react';
import toast from 'react-hot-toast';

const EditData =  ({id,data,setUpdate}) => {
    try {
       axiosSecure.put(`/userEdit/${id}`, data).then((res) => {
         if (res.data.modifiedCount > 0) {
           toast.success("user info Updated successfully");
           setUpdate(Date.now());
         }
       });
        
     
    } catch (error) {
      toast.error('Failed to update');
      throw error;
    }
  };

export default EditData;