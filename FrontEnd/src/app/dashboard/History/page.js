"use client";

import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { axiosSecure } from "@/utils/useAxiosSecure";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const HistoryPage = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const [forceUpdate, setForceUpdate] = useState(Date.now());
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
  }, [axiosPublic, user, currentPage, forceUpdate]);

 
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

  // delete comment
  // const handleDeleteComment = (commentId) => {
  //   console.log(commentId);
  //   try {
  //     axiosSecure.delete(`/textArticle/comment/${commentId}`).then((res) => {
  //       console.log(res);
  //     });
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       // console.log("History already exists for this article");
  //     } else {
  //       console.error("An error occurred:", error);
  //     }
  //   }
  // };

// perfect working
// const handleDeleteComment = (articleId, commentId, userEmail) => {
//   console.log("article ", articleId);
//   console.log("comment ", commentId);
//   console.log("email ", userEmail);
//   try {
//     axiosSecure
//       .delete(`/textArticle/comment/${articleId}/${commentId}`, {
//         params: {
//           userEmail: userEmail,
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   } catch (error) {
//     if (error.response && error.response.status === 400) {
//       // error
//     } else {
//       console.error("An error occurred:", error);
//     }
//   }
  // };
  
  const handleDeleteComment = (articleId, commentId, userEmail) => {
    try {
      setLoading(true);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/textArticle/comment/${articleId}/${commentId}`, {
              data: {
                userEmail: userEmail,
              },
            })
            .then((res) => {
              console.log(res);
              // If deletion is successful, update the historyData state
              setHistoryData((prevHistoryData) => {
                // Filter out the deleted comment from historyData
                return prevHistoryData.filter(
                  (history) =>
                    history._id !== articleId ||
                    history.comments.every(
                      (comment) => comment._id !== commentId
                    )
                );
              });
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((error) => {
              toast.error("Failed to delete comment");
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      });
    } catch (error) {
      toast.error(`${error.message}`);
      setLoading(false);
    }
  };

  // like part
  const handleLike = async (item) => {
    try {
      const likeDetails = {
        email: user?.email,
        like: 1,
        articleId: item._id,
        articleTitle: item.texteditor.articleTitle,
      };

      axiosSecure
        .put(`/textArticle/${item?._id}/like`, likeDetails)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            setForceUpdate(Date.now());
          }
        });

      // add like to the history
      await axiosSecure.post("/history", likeDetails);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // console.log("History already exists for this article");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };


  return (
    <div className="w-full">
      <div className="text-center mx-auto">
        <h1 className="text-[40px]">
          History of <span className=" text-green-500">{user.displayName}</span>{" "}
        </h1>
      </div>
      <div></div>

      <div className="w-[80%] mx-auto mt-9">
        {historyData.length === 0 && (
          <div>
            <Title title={"No history has been added"} />
          </div>
        )}
        {historyData.length > 0 && (
          <div className="overflow-x-auto">
            <ul className="list-none">
              {historyData?.reverse().map((history, idx) => (
                <li key={idx} className="border-b-2 pb-5">
                  <div>
                    <div className="flex flex-row justify-between my-5">
                      <h4 className="">
                        {history.texteditor.articleTitle}
                        {history.likes.some(
                          (like) => like.email === user.email
                        ) && (
                          <span
                            style={{ marginLeft: "0.5rem", color: "green" }}
                          >
                            Liked
                          </span>
                        )}
                      </h4>
                      <div className="">
                        {history.likes.some(
                          (like) => like.email === user.email
                        ) && (
                          // <div>
                          //   <button
                          //     className="btn btn-sm btn-error"
                          //     onClick={() => handleLike(history)}
                          //   >
                          //     Unlike Article
                          //   </button>
                          // </div>
                          <div className="flex flex-row justify-between">
                            
                            <button
                              className="btn btn-sm btn-error"
                              onClick={() => handleLike(history)}
                            >
                              Unlike Post
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {history.comments.some(
                      (comment) => comment.email === user.email
                    ) && (
                      <p>
                        {
                          history.comments.find(
                            (comment) => comment.email === user.email
                          ).commentText
                        }
                      </p>
                    )}
                    {history.comments.some(
                      (comment) => comment.email === user.email
                    ) && (
                      <div className="flex flex-row justify-between">
                        <p>
                          {new Date(
                            history.comments.find(
                              (comment) => comment.email === user.email
                            ).date
                          ).toLocaleString()}
                        </p>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() =>
                            handleDeleteComment(
                              history._id,
                              history.comments.find(
                                (comment) => comment.email === user.email
                              )._id,
                              user.email
                            )
                          }
                        >
                          Delete Comment
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
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
