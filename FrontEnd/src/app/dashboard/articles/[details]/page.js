"use client";
import { useAuth } from "@/context/authContext";
import { axiosSecure } from "@/utils/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const page = ({ params }) => {
  const [articles, setArticles] = useState(null);
  const { user } = useAuth("");

  const id = params.details;
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosSecure.get(`/textArticle/${id}`);
        const articleData = response.data;
        setArticles(response.data);
        const historyData = { user: user.email, article: articleData };
        if (user) {
          axiosSecure.post("/history", historyData);
          // console.log("Article data saved to history API");
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
   const segments = block.data.text.split(
     /(<(a|b|i)[^>]*>.*?<\/\2>|<\/?(a|b|i)[^>]*>)/g
   );

   const renderedSegments = segments?.map((segment, index) => {
     const parser = new DOMParser();
     const doc = parser.parseFromString(segment, "text/html");
     const link =
       doc.querySelector("a") ||
       doc.querySelector("b") ||
       doc.querySelector("i");

     if (link) {
       const Tag = link.tagName.toLowerCase();
       const content = link.textContent;

       // Check if it's a valid opening tag
       if (segment.startsWith("<")) {
         return (
           <Tag
             key={index}
             href={Tag === "a" ? link.getAttribute("href") : undefined}
             target={Tag === "a" ? "_blank" : undefined}
             style={{
               textDecoration: Tag === "a" ? "underline" : "none",
               fontWeight: Tag === "b" ? "bold" : "normal",
               fontStyle: Tag === "i" ? "italic" : "normal",
             }}
           >
             {content}
           </Tag>
         );
       } else {
         return `</${Tag}>`; // Return the closing tag
       }
     } else {
       return <span key={index}>{segment?.replace(/&nbsp;/g, " ")}</span>;
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
            <div className="w-full">
              <Image
                src={articles.texteditor?.thumbnail}
                width={1280}
                height={600}
                alt="Thumbnail for article"
                className="w-full"
              />
            </div>
            <h1>
              {articles?.texteditor?.articleTitle?.replace(/&nbsp;/g, " ")}
            </h1>
            <div className="border rounded-full mt-4 bg-gray-200 mx-auto w-40 text-[16px] font-semibold p-[5px] text-center">
              {articles.texteditor?.category}
            </div>
            <div className="divider"> </div>
            <div className="mt-10">
              {articles?.texteditor?.editorContent?.blocks?.map((block, index) => (
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
                      {block?.data?.items?.map((item, i) => (
                        <li key={i}>{item?.replace(/&nbsp;/g, " ")}</li>
                      ))}
                    </ol>
                  )}

                  {block.type === "list" &&
                    block.data.style === "unordered" && (
                      <ul className="mb-5">
                        {block?.data?.items?.map((item, i) => (
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
                        alt={block?.data?.caption}
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
            <div className="flex gap-2">
              {articles?.texteditor?.tags?.map((tag, idx) => (
                <div
                  className="border rounded-full mt-4
             bg-gray-200 mx-auto w-40 text-[16px] font-semibold p-[5px] text-center"
                  key={idx}
                >
                  {tag}
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
