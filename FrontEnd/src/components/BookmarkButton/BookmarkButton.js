"use client"
import { useAuth } from '@/context/authContext';
import React, { useState,useEffect } from 'react';
import { MdBookmarkAdded,MdBookmarkAdd } from "react-icons/md";

import Bookmarks from '../ui/Bookmarks';
import toast from 'react-hot-toast';
import { axiosPublic } from '@/utils/useAxiosPublic';

const BookmarkButton = ({data}) => {
    const {user}=useAuth();
    const [bookMarked,setBookMarked] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchBookmarks = async () => {
        try {
          const articlesResponse = await axiosPublic.get(
            `/bookmarkByEmail?email=${user?.email}`
          );
          setBookMarked(articlesResponse.data);
        } catch (error) {
          toast.error(`${error.message}`);
        }
      };
      fetchBookmarks();
    }, [user?.email]);
  
    const isBookmarked = bookMarked.some((bookmark) => bookmark.id === data.id);
  
    const handleBookmark = async () => {
      try {
        setLoading(true);
        // Make your API call to add the article to bookmarks
        await Bookmarks({ user: user.email, data: data });
        // Assuming this API call successfully adds the bookmark, update the local state
        setBookMarked([...bookMarked, data]);
      } catch (error) {
        toast.error(`${error.message}`);
      } finally {
        setLoading(false);
      }
    };
     
      return (
        <button onClick={handleBookmark}  disabled={loading || isBookmarked}>
          {isBookmarked ? (
        <MdBookmarkAdded fontSize="1.5rem" />
      ) : (
        <MdBookmarkAdd fontSize="1.5rem" />
      )}
        </button>
      );
};



export default BookmarkButton;