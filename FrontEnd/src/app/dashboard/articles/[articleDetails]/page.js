"use client";
import { axiosSecure } from "@/utils/useAxiosSecure";
import { useEffect, useState } from "react";


const page = ({ params }) => {
  const [articles, setArticles] = useState();

  const id = params.articleDetails;

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

  console.log(articles);
  return (
    <div>
      {articles && (
        <div>
          <div>
            {articles.texteditor.editorContent.blocks.map((block, index) => (
              <div key={index}>
                {block.type === "paragraph" && <p>{block.data.text}</p>}
                {block.type === "header" && <h2>{block.data.text}</h2>}
                {block.type === "image" && (
                  <img src={block.data.file.url} alt={block.data.caption} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

