"use client"
import Delete from '@/components/ui/Delete';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const DeleteButton = ({api,id,setUpdate}) => {
    const [loading, setLoading] = useState(false);
    const handleDelete =  () => {
        try {
          setLoading(true);
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
               Delete({api:api,id:id,setUpdate:setUpdate} );
              
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          
          // await Delete({api:api,id:id});
          // toast.success('Deleted Successfully!');
        } catch (error) {
          toast.error(`${error.message}`);
        } finally {
          setLoading(false);
        }
      };
    

    return (
        <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : <MdDeleteForever/>}
      </button>
    );
};

export default DeleteButton;