"use client";
import { useAuth } from "@/context/authContext";
import { axiosSecure } from "@/utils/useAxiosSecure";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";


const page = ({ params }) => {
  const [articles, setArticles] = useState(null);
  const {user} = useAuth("");

  const id = params.details;
  console.log(id);
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosSecure.get(`/textArticle/${id}`);
       const articleData =response.data
        setArticles(response.data);
        const historyData={user:user.email,article:articleData}
        if (user) {
          axiosSecure.post("/history", historyData);
         console.log("Article data saved to history API");
       }
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    if (id) {
      fetchArticleDetails();
    }
  }, [id, user]);

  return (
    <div>
      {articles && (
        <div>
          <div className="max-w-3xl mx-auto">
            <h1>{articles?.texteditor?.articleTitle}</h1>
            {/* <Image
              src={articles?.texteditor?.thumbnail}
              alt="Thumbnail"
              className="image mx-auto text-center"
              width={600}
              height={600}
            /> */}
            <div className="mt-10">
              {articles.texteditor.editorContent.blocks.map((block, index) => (
                <div key={index} className="block">
                  {block.type === "paragraph" && (
                    <p className="text-xl mb-5">{block.data.text}</p>
                  )}
                  {block.type === "header" && (
                    <h2 className="mb-5 font-bold">{block.data.text}</h2>
                  )}
                  {block.type === "code" && (
                    <pre className="bg-gray-300 p-10 w-[90%] overflow-scroll mx-auto mb-5">
                      {block.data.code}
                    </pre>
                  )}
                  {block.type === "quote" && (
                    <blockquote className="mb-5">
                      {block.data.text}
                      <cite>{block.data.caption}</cite>
                    </blockquote>
                  )}
                  {block.type === "list" && (
                    <ul className="mb-5">
                      {block.data.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {block.type === "image" && (
                    <Image
                      src={block?.data?.file?.url}
                      alt={block.data.caption}
                      className="image mx-auto text-center mb-5"
                      width={600}
                      height={600}
                    />
                  )}
                </div>
              ))}
            </div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;