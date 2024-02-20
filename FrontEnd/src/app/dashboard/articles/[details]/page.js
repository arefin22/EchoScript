"use client";
import { useAuth } from "@/context/authContext";
import { axiosSecure } from "@/utils/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const page = ({ params }) => {
<<<<<<< HEAD
  const [articles, setArticles] = useState([]);
  const {user} = useAuth("");
=======
  const [articles, setArticles] = useState(null);
  const { user } = useAuth("");
>>>>>>> b17f6c4cade08805bb6c5b9a06e8555561fe0592

  const id = params.details;
  console.log(id);
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosSecure.get(`/textArticle/${id}`);
        const articleData = response.data;
        setArticles(response.data);
        const historyData = { user: user.email, article: articleData };
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

 const renderBlockContent = (block) => {
   const segments = block.data.text.split(/(<a[^>]*>.*?<\/a>)/g);

   // Render each segment
   const renderedSegments = segments.map((segment, index) => {
     // Check if the segment is an anchor tag
     if (segment.startsWith("<a")) {
       // Parse the HTML to create a DOM element
       const parser = new DOMParser();
       const doc = parser.parseFromString(segment, "text/html");
       const link = doc.querySelector("a");

       // Return the anchor tag with proper attributes
       return (
         <a
           key={index}
           href={link.getAttribute("href")}
           target="_blank"
           style={{ textDecoration: "underline" }}
         >
           {link.textContent}
         </a>
       );
     } else {
       // Replace &nbsp; with an empty string and return the segment
       return <span key={index}>{segment.replace(/&nbsp;/g, " ")}</span>;
     }
   });

   return renderedSegments;
  };
  
  const handleEdit = (article) => {
    localStorage.setItem("editArticle", JSON.stringify(article));
  };

  return (
    <div>
      {articles && (
        <div>
          <div className="max-w-3xl mx-auto">
            <h1>
              {articles?.texteditor?.articleTitle?.replace(/&nbsp;/g, " ")}
            </h1>
            <div className="flex flex-row w-full items-center mb-10 mt-5">
              <h6 className="w-1/2">
                Category:{" "}
                <span className="font-bold">
                  {articles.texteditor?.category}
                </span>
              </h6>
              <p className="w-1/2">
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
            <div className="divider"> </div>
            <div className="mt-10">
              {articles.texteditor.editorContent.blocks.map((block, index) => (
                <div key={index} className="block">
                  {block.type === "paragraph" && (
                    <p className="text-xl mb-5">{renderBlockContent(block)}</p>
                  )}
                  {block.type === "header" && (
                    <h2 className="mb-5 font-bold">
                      {block.data.text?.replace(/&nbsp;/g, " ")}
                    </h2>
                  )}
                  {block.type === "code" && (
                    <pre className="bg-gray-300 p-10 w-[90%] overflow-scroll mx-auto mb-5">
                      {block.data.code}
                    </pre>
                  )}
                  {block.type === "quote" && (
                    <blockquote className="mb-5">
                      {block.data.text}
                      <span>{block.data.caption}</span>
                    </blockquote>
                  )}
                  {block.type === "list" && block.data.style === "ordered" && (
                    <ol className="mb-5">
                      {block.data.items.map((item, i) => (
                        <li key={i}>{item?.replace(/&nbsp;/g, " ")}</li>
                      ))}
                    </ol>
                  )}

                  {block.type === "list" &&
                    block.data.style === "unordered" && (
                      <ul className="mb-5">
                        {block.data.items.map((item, i) => (
                          <li key={i}>
                            <li key={i}>{item?.replace(/&nbsp;/g, " ")}</li>
                          </li>
                        ))}
                      </ul>
                    )}

                  {block.type === "image" && (
                    <div className="mb-5">
                      <Image
                        src={block?.data?.file?.url}
                        alt={block.data.caption}
                        className="image mx-auto text-center"
                        width={600}
                        height={600}
                      />
                      <p className="text-center mt-0">
                        {block.data.caption?.replace(/&nbsp;/g, " ")}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full text-center">
              <Link
                href={`/dashboard/articleEdit/${id}`}
                className="m-auto"
                onClick={() => handleEdit(articles?.texteditor)}
              >
                <button className="btn btn-ghost mx-auto my-10 text-center font-bold">
                  Edit Your Article
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
