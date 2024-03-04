"use client";
import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { useAuth } from "@/context/authContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { axiosSecure } from "@/utils/useAxiosSecure";
import Link from "next/link";
import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [update, setUpdate] = useState(Date.now());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(Date.now());
  const itemsPerPage = 10;
  const user = useAuth();
  const authEmail = user.user.email;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosSecure.get(
          `/textArticleByEmail?email=${authEmail}`
        );
        const articleCount = response.data.length;
        const totalPagesCount = Math.ceil(articleCount / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, articleCount); // Fix typo here
        const articleData = response.data.slice(startIndex, endIndex);
        setTotalPages(totalPagesCount);
        setArticles(articleData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();


  // console.log(articles);

  }, [update]); 

  // }, [update, currentPage]); 


  const handleEdit = (article) => {
    localStorage.setItem("editArticle", JSON.stringify(article));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PrivateRoute>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Title</th>
                  <th>Like</th>
                  <th>Comment</th>
                  <th>Tags</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {articles?.map((article, index) => (
                  <tr key={article._id} className="text-center">
                    <td>{index + 1}</td>
                    <td>
                      <Link href={`/dashboard/articles/${article._id}`}>
                        {article?.texteditor?.articleTitle}
                      </Link>
                    </td>
                    <td>{article?.likes.length}</td>
                    <td>{article?.comments.length}</td>
                    <td>{article?.texteditor?.tags.join(", ")}</td>
                    <td className="flex justify-center items-center">
                      <Link
                        href={`/dashboard/articleEdit/${article._id}`}
                        className="btn btn-sm btn-primary mr-2"
                        onClick={() => handleEdit(article.texteditor)}
                      >
                        <FaEdit />
                      </Link>
                      <button className="btn btn-sm btn-error">
                        <DeleteButton
                          setUpdate={setUpdate}
                          api={"textArticle"}
                          id={article._id}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PrivateRoute>
      )}
    </>
  );
};

export default Article;
