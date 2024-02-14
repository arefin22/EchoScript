"use client";
import { axiosSecure } from "@/utils/useAxiosSecure";
import { useEffect, useState } from "react";


const page = ({ params }) => {
  const [articles, setArticles] = useState();

  const id = params.articleEdit;

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosSecure.get(`/textArticle/${id}`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    if (id) {
      fetchArticleDetails();
    }
  }, [id]);

  return (
      <div>
        
      </div>
  );
};

export default page;