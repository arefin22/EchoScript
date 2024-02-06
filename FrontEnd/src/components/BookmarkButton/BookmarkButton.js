"use client"
import { useAuth } from '@/context/authContext';
import React, { useState } from 'react';
import { FaBookBookmark } from 'react-icons/fa6';
import { MdBookmarkAdded } from 'react-icons/md';
import Bookmarks from '../ui/Bookmarks';
import toast from 'react-hot-toast';

const BookmarkButton = ({data,api}) => {
    const {user}=useAuth();
    const [loading, setLoading] = useState(false);
     const handleBookmark = async () => {
        try {
          setLoading(true);
          await Bookmarks({ user: user.displayName, data: data, api: api });
          toast.success('This item is bookmarked successfully');
       
        } catch (error) {
         
        } finally {
          setLoading(false);
        }
      };
      return (
        <button onClick={handleBookmark} disabled={loading}>
          {loading ?  <MdBookmarkAdded/>:<FaBookBookmark/> }
        </button>
      );
};



export default BookmarkButton;