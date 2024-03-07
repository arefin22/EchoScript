"use client"
import { axiosSecure } from '@/utils/useAxiosSecure';
import React, {  useState } from 'react';
import toast from 'react-hot-toast';

const ArticleStatus = ({ article,setUpdate }) => {
    const [status, setStatus] = useState(article.texteditor.status || 'active');
    const handleStatusChange = () => {
        const newStatus = status === 'active' ? 'suspended' : 'active';
        setStatus(newStatus);
        try {
            axiosSecure.put(`/textArticle/${ article._id}`, { id:article._id, status: newStatus }).then((res) => {
              if (res.data.modifiedCount > 0) {
                toast.success("Status change successfully");
                setUpdate(Date.now());
              }
            });
             
          
         } catch (error) {
           toast.error(`Error: ${error.massage}`);
           
         }}
      
    return (
        <div>
        <p>{status}</p>
        <button className="btn btn-sm mt-2 btn-info btn-outline rounded-full" onClick={handleStatusChange}>
          Change Status
        </button>
      </div>
    );
};

export default ArticleStatus;
