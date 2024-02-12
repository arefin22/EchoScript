"use client"
import Delete from '@/components/ui/Delete';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaDeleteLeft } from 'react-icons/fa6';

const DeleteButton = ({api,id}) => {
    const [loading, setLoading] = useState(false);
    const handleDelete = async () => {
        try {
          setLoading(true);
          await Delete({api:api,id:id});
          toast.success('Deleted Successfully!');
        } catch (error) {
          toast.error('Error Deleting Item!');
        } finally {
          setLoading(false);
        }
      };
    

    return (
        <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : <FaDeleteLeft/>}
      </button>
    );
};

export default DeleteButton;