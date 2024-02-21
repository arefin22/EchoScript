"use client"
import { useAuth } from '@/context/authContext';
import React, { useState } from 'react';
import {  MdOutlineBookmarkAdd } from 'react-icons/md';
import Bookmarks from '../ui/Bookmarks';
import toast from 'react-hot-toast';

const BookmarkButton = ({data}) => {
    const {user}=useAuth();
    const [loading, setLoading] = useState(false);
     const handleBookmark = async () => {
        try {
          setLoading(true);
          await Bookmarks({ user: user.email, data: data });
          toast.success('This item is bookmarked successfully');
       
        } catch (error) {
         toast.error(`${error.message}`)
        } finally {
          setLoading(false);
        }
      };
      return (
        <button onClick={handleBookmark} disabled={loading}>
          {loading ?  <MdOutlineBookmarkAdd/>:<MdOutlineBookmarkAdd fontSize={"1.5rem"}/>  }
        </button>
      );
};



export default BookmarkButton;