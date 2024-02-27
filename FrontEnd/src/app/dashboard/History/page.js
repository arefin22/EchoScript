"use client";

import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const [update, setUpdate] = useState(Date.now());
  const axiosPublic = useAxiosPublic();
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    // const fetchHistory = async () => {
    //   try {
    //     const historyResponse = await axiosPublic.get("/textArticle");

    //     const loggedInUserEmail = user.email; 

    //     const likedPosts = historyResponse.data.filter((history) =>
    //       history.likes.some((like) => like.email === loggedInUserEmail)
    //     );
    //     const commentedPosts = historyResponse.data.filter((history) =>
    //       history.comments.some(
    //         (comment) => comment.email === loggedInUserEmail
    //       )
    //     );

    //     const userPosts = [...likedPosts, ...commentedPosts];

    //     console.log(userPosts);

    //     const historyCount = historyResponse.data.length;
    //     const totalPagesCount = Math.ceil(historyCount / itemsPerPage);
    //     setTotalPages(totalPagesCount);

    //     const startIndex = (currentPage - 1) * itemsPerPage;
    //     const endIndex = Math.min(startIndex + itemsPerPage, historyCount);

    //     const historyData = userHistory.slice(startIndex, endIndex);
    //     setHistoryData(historyData);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // };

    const fetchHistory = async () => {
      try {
        const historyResponse = await axiosPublic.get("/textArticle");
        const loggedInUserEmail = user.email;

        const likedPosts = historyResponse.data.filter((history) =>
          history.likes.some((like) => like.email === loggedInUserEmail)
        );
        const commentedPosts = historyResponse.data.filter((history) =>
          history.comments.some(
            (comment) => comment.email === loggedInUserEmail
          )
        );

        const userPosts = [...likedPosts, ...commentedPosts];
        const historyCount = userPosts.length;
        const totalPagesCount = Math.ceil(historyCount / itemsPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, historyCount);

        const historyData = userPosts.slice(startIndex, endIndex);
        setHistoryData(historyData);
        setLoading(false);
        console.log(historyData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHistory();

    return () => {};
  }, [axiosPublic, user, currentPage, update]);

 
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <Title title={`${error.message}`} />
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mx-auto">
        <h1 className="text-[20px]">
          History of{" "}
          <span className="text-[20px] text-green-500">{user.displayName}</span>{" "}
        </h1>
      </div>
      <div></div>

      <div className="w-full mx-auto mt-9">
        {historyData.length === 0 && (
          <div>
            <Title title={"No history has been added"} />
          </div>
        )}
        {historyData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Like</th>
                  <th>Comment</th>
                  <th>History Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="min-h-[70vh]">
                {historyData?.reverse().map((history) => (
                  <tr key={history._id}>
                    <td>{history.texteditor.articleTitle}</td>
                    <td>
                      {history.likes.some(
                        (like) => like.email === user.email
                      ) && <span> You liked this</span>}
                    </td>
                    <td>
                      {/* Check if the logged-in user has a comment */}
                      {history.comments.some(
                        (comment) => comment.email === user.email
                      ) &&
                        // If the user has a comment, display it
                        history.comments.find(
                          (comment) => comment.email === user.email
                        ).commentText}
                    </td>
                    <td>{new Date(history.createdAt).toLocaleString()}</td>
                    <td>
                      <button className="btn btn-sm btn-error">
                        <DeleteButton
                          api={"history"}
                          id={history._id}
                          setUpdate={setUpdate}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-2 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
