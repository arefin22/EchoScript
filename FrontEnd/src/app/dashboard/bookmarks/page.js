"use client"
import Title from '@/components/shared/ReusableComponents/Title';
import { useAuth } from '@/context/authContext';
import React from 'react';

const bookmarks = () => {
    const {user}=useAuth();
    return (
        <div className='w-11/12 mx-auto'>
   <div className="flex flex-col  w-full">
  <div className="grid h-20 card min-h-[580px] bg-base-300 rounded-box ">
   <div className='w-2/3 h-24 mx-auto'>
     <h1>{user.displayName}'s bookmarked articles:</h1>
   <div className="divider"></div> 
   </div>
  
  </div> 
  <div className="divider"></div> 
  <div className="grid h-20 card bg-base-300 min-h-[580px] rounded-box ">
    
  <div className='w-2/3 h-24 mx-auto'>
     <h1>{user.displayName}'s bookmarked Packages:</h1>
   <div className="divider"></div> 
   </div>
   </div>
</div>
        </div>
    );
};

export default bookmarks;