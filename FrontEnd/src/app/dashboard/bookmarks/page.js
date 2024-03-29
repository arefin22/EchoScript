"use client";

import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const bookmarks = () => {
  const { user } = useAuth("");
  const [update, setUpdate] = useState(Date.now());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const axiosPublic = useAxiosPublic();
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const articlesResponse = await axiosPublic.get(
          `/bookmarkByEmail?email=${user?.email}`
        );
        // console.log(articlesResponse);
        const articleCount = articlesResponse.data.length;
        const totalPagesCount = Math.ceil(articleCount / itemsPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, articleCount);

        const articlesData = articlesResponse?.data?.slice(
          startIndex,
          endIndex
        );
        setBookmarkedData(articlesData);
        console.log(bookmarkedData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBookmarks();

    return () => {};
  }, [update]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Title title={`${error.message}`} />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col  w-full">
        <div className="grid h-20 card min-h-[580px] rounded-box ">
          <div className="w-2/3 h-24 mx-auto">
            <div className="text-center mx-auto">
              <h1 className="text-[40px]">
                Bookmark of {' '}
                <span className=" text-green-500">{user.displayName}</span>{" "}
              </h1>
            </div>
            {bookmarkedData?.length === 0 && (
              <div>No bookmarked articles found.</div>
            )}
            {bookmarkedData.length > 0 && (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Like</th>
                      <th>Comment</th>
                      <th>Tags</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody className="min-h-[70vh]">
                    {bookmarkedData?.map((bookmark, index) => (
                      <tr key={bookmark._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                          <Link href={`/dashboard/articles/${bookmark._id}`}>
                            {bookmark?.texteditor?.articleTitle}
                          </Link>
                        </td>
                        <td>{bookmark?.likes.length}</td>
                        <td>{bookmark?.comments.length}</td>
                        <td>{bookmark?.texteditor?.tags.join(", ")}</td>
                        <td className="flex justify-center items-center">
                          <button className="btn btn-sm btn-error">
                            <DeleteButton
                              setUpdate={setUpdate}
                              api={"bookmark"}
                              id={bookmark._id}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-2 flex justify-center">
                  {bookmarkedData?.length > 9 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookmarks;
