"use client"
import DeleteButton from '@/components/shared/DeleteButton/DeleteButton';
import Loader from '@/components/shared/Loader/Loader';
import Title from '@/components/shared/ReusableComponents/Title';
import { useAuth } from '@/context/authContext';
import useAxiosPublic from '@/utils/useAxiosPublic';
import React, { useEffect, useState } from 'react';

const bookmarks = () => {
    const {user}=useAuth();
    const axiosPublic = useAxiosPublic();
    const [bookmarkedData, setBookmarkedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchBookmarks = async () => {
          try {
              const articlesResponse = await axiosPublic.get('/bookmark');
            

              const userArticles = articlesResponse.data.filter(article => article.user === user.email);
              

              setBookmarkedData(userArticles);
             
              setLoading(false);
          } catch (error) {
              setError(error);
              setLoading(false);
          }
      };

      fetchBookmarks();

      // Cleanup function
      return () => {
          // Any cleanup code if needed
      };
  }, [axiosPublic, user]);

  if (loading) {
      return <div><Loader/></div>;
  }

  if (error) {
    return <div><Title title={`${error.message}`}/></div>;
  }

    return (
        <div className='w-11/12 mx-auto'>
   <div className="flex flex-col  w-full">
  <div className="grid h-20 card min-h-[580px] bg-base-300 rounded-box ">
   <div className='w-2/3 h-24 mx-auto'>
     <h1>{user.displayName}'s bookmarked articles:</h1>
     {bookmarkedData?.length === 0 && <div>No bookmarked articles found.</div>}
     {bookmarkedData.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>History</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookmarkedData?.reverse().map(bookmark => (
                                    <tr key={bookmark.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={bookmark.img} alt="bookmark" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{bookmark.userName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{bookmark.title}</td>
                                        <td>{bookmark.date}</td>
                                        <td>
                                        <DeleteButton className="btn btn-ghost btn-xs" api={'/bookmark'} id={bookmark.id} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      
                    </div>
                )}
                        
   
   </div>
 
  </div> 
  
</div>
        </div>
    );
};

export default bookmarks;