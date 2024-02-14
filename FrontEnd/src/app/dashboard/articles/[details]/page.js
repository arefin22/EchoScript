"use client";
import { axiosSecure } from "@/utils/useAxiosSecure";
import { useEffect, useState } from "react";


const page = ({ params }) => {
  const [articles, setArticles] = useState();

  const id = params.details;
  console.log(id);
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosSecure.get(`/textArticle/${id}`);
        console.log(response.data);
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
      {articles && (
        <div>
          <div>
            <p className="font-bold">
              Category: {articles.texteditor?.category}
            </p>
            <p className="mt-3">
              Tags:{" "}
              {articles.texteditor?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 px-3 py-2 rounded-lg mr-2 font-bold"
                >
                  {tag}
                </span>
              ))}
            </p>
            {articles.texteditor.editorContent.blocks.map((block, index) => (
              <div key={index} className="block">
                {block.type === "paragraph" && <p>{block.data.text}</p>}
                {block.type === "header" && <h2>{block.data.text}</h2>}
                {block.type === "code" && <div>{block.data.code}</div>}
                {block.type === "quote" && (
                  <blockquote>
                    {block.data.text}
                    <cite>{block.data.caption}</cite>
                  </blockquote>
                )}
                {block.type === "list" && (
                  <ul>
                    {block.data.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {block.type === "image" && (
                  <img
                    src={block.data.file.url}
                    alt={block.data.caption}
                    className="image"
                  />
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