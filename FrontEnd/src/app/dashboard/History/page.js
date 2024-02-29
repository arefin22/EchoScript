"use client";

import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import useAxiosSecure from "@/utils/useAxiosSecure";
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
  const axiosSecure = useAxiosSecure();
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
// useEffect(() => {
//   const fetchHistory = async () => {
//     try {
//       const historyResponse = await axiosPublic.get("/textArticle");
//       const loggedInUserEmail = user.email;

//       const likedPosts = historyResponse.data.filter((history) =>
//         history.likes.some((like) => like.email === loggedInUserEmail)
//       );
//       const commentedPosts = historyResponse.data.filter((history) =>
//         history.comments.some((comment) => comment.email === loggedInUserEmail)
//       );
//       const userPosts = [...likedPosts, ...commentedPosts];
//       const historyCount = userPosts.length;
//       // const totalPagesCount = Math.ceil(historyCount / itemsPerPage);
//       // setTotalPages(totalPagesCount);

//       // const startIndex = (currentPage - 1) * itemsPerPage;
//       // const endIndex = Math.min(startIndex + itemsPerPage, historyCount);

//       // const historyData = userPosts.slice(startIndex, endIndex);

//       setHistoryData(userPosts);

//       setLoading(false);
//       // console.log(historyData);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };
//   fetchHistory();

//   return () => {};
// }, [axiosPublic, user, currentPage, forceUpdate]);
useEffect(() => {
  const fetchHistory = async () => {
    try {
      const historyResponse = await axiosPublic.get("/textArticle");
      const loggedInUserEmail = user.email;

      // Filter history data to include only likes and comments made by the logged-in user
      const userPosts = historyResponse.data.filter(
        (history) =>
          history.likes.some((like) => like.email === loggedInUserEmail) ||
          history.comments.some(
            (comment) => comment.email === loggedInUserEmail
          )
      );

      setHistoryData(userPosts);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchHistory();

  return () => {};
}, [axiosPublic, user, forceUpdate]);

  
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
  //     setLoading(true);
  //     axiosSecure
  //       .delete(`/textArticle/comment/${articleId}/${commentId}`, {
  //         params: {
  //           userEmail: userEmail,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.data.message === "Comment deleted successfully") {
  //           setForceUpdate(Date.now());
  //         }
  //       });
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       // error
  //     } else {
  //       console.error("An error occurred:", error);
  //     }
  //   }
  //   };

  const handleDeleteComment = (articleId, commentId, userEmail) => {
    try {
      setLoading(true);
      Swal.fire({
        title: "Are you sure?",
        text: "If you delete this the main comment will be automatically removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/textArticle/comment/${articleId}/${commentId}`, {
              params: {
                userEmail: userEmail,
              },
            })
            .then((res) => {
              if (res.data.message === "Comment deleted successfully") {
                setForceUpdate(Date.now());
              }
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

  //  axios error 404 but like deleted

  // const handleLike = (item) => {
  //   try {
  //     setLoading(true);
  //     const likeDetails = {
  //       email: user?.email,
  //       like: 1,
  //       articleId: item._id,
  //       articleTitle: item.texteditor.articleTitle,
  //     };
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "If you delete this the main comment will be automatically removed",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         axiosSecure
  //           .put(`/textArticle/${item?._id}/like`, likeDetails)
  //           .then((res) => {
  //             if (res.data.modifiedCount > 0) {
  //               setForceUpdate(Date.now());
  //             }
  //           });

  //         // add like to the history
  //         axiosSecure.post("/history", likeDetails);
  //       } else {
  //         setLoading(false);
  //       }
  //     });
  //   } catch (error) {
  //     toast.error(`${error.message}`);
  //     setLoading(false);
  //   }
  // };

  // like part working without confirmation 
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
            {/*  likes part */}
            <div>
              <h2>Likes:</h2>
              <ul className="list-none">
                {historyData.map((history) =>
                  history.likes
                    .filter((like) => like.email === user.email)
                    .map((like) => (
                      <li key={like._id} className="mb-5">
                        <div className="flex flex-row justify-between">
                          <h4>{history.texteditor.articleTitle}</h4>
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() => handleLike(history)}
                          >
                            Unlike Post
                          </button>
                        </div>
                      </li>
                    ))
                )}
              </ul>
            </div>

            {/* comments part */}
            <div>
              <h2>Comments:</h2>
              <ul className="list-none">
                {historyData.map((history) =>
                  history.comments
                    .filter((comment) => comment.email === user.email)
                    .map((comment) => (
                      <li key={comment._id} className="mb-5">
                        <div className="flex flex-row justify-between">
                          <div>
                            <h4>{history.texteditor.articleTitle}</h4>
                            <p>{comment.commentText}</p>
                          </div>
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() =>
                              handleDeleteComment(
                                history._id,
                                comment._id,
                                user.email
                              )
                            }
                          >
                            Delete Comment
                          </button>
                        </div>
                      </li>
                    ))
                )}
              </ul>
            </div>
          </div>
        )}
        {/* <div className="mt-2 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HistoryPage;
