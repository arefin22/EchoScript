"use client"
import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import axios from "axios";
import { useAuth } from "@/context/authContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { axiosSecure } from "@/utils/useAxiosSecure";
import Link from "next/link";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const user = useAuth();
  const authEmail = user.user.email;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosSecure.get(`/textArticleByEmail?email=${authEmail}`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []); 
  // console.log(articles);

  return (
    <PrivateRoute>
      <div className="ml-10">
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
              {articles.map((article, index) => (
                <tr key={article._id} className="text-center">
                  <td>{index + 1}</td>
                  <td>
                    <Link href={`/dashboard/articles/${article._id}`}>
                      {article?.texteditor?.editorContent?.blocks[0].data?.text}
                    </Link>
                  </td>
                  <td>{article?.likes.length}</td>
                  <td>{article?.comments.length}</td>
                  <td>{article?.texteditor?.tags.join(", ")}</td>
                  <td>
                    <button className="btn btn-sm btn-primary mr-2">
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-error">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Article;
