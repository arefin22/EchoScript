"use client";
import Image from "next/image";
import TextToSpeech from "../../../components/TextToSpeech/texttospeech";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import Footer from "@/components/shared/Footer";
import { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Recommendation2 from "@/components/Recommendation2/recomendation2";
import SubHeader from "@/components/SubHeader/SubHeader";
import Trending2 from "@/components/Trending2/Trending2";
import Writerized from "@/components/Writerized/writerized";
import StickyNavbar from "@/components/StickyNavbar/StickyNavbar";

const SingleArticle = ({ params }) => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [forceUpdate, setForceUpdate] = useState(Date.now());
  const [isShareDropdownOpen, setShareDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useAuth();
  const maxLength = 100;
  const [audience, setAudience] = useState([]);
  const id = params.articleId;
  useEffect(() => {
    axiosSecure.get(`/textArticle/${id}`).then((res) => {
      setData(res.data);
    });
  }, [forceUpdate]);
  useEffect(() => {
    axiosSecure.get("/user").then((res) => {
      setAudience(res.data);
    });
  }, [axiosSecure]);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const formatDateAgo = (date) => {
    return formatDistanceToNow(new Date(date));
  };

  const Postdate = data?.createdAt?.split("T")[0];
  const handleSubmitComment = async (data) => {
    try {
      // article comment
      const d = new Date();
      const comment = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL || "",
        id: data?._id,
        commentText: text,
        date: d,
      };
      axiosSecure
        .put(`/textArticle/${data._id}/comment`, comment)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            setForceUpdate(Date.now());
            Swal.fire({
              title: "Good job!",
              text: "successfylly added a comment!",
              icon: "success",
            });
            setText("");
          }
        });

      // add history comment
      const commentHistory = {
        email: user?.email,
        articleId: data._id,
        articleTitle: data.texteditor.articleTitle,
        comment: text,
      };
      // console.log(commentHistory);
      await axiosSecure.post("/history", commentHistory);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // console.log("History already exists for this article");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  const handleShare = () => {
    setShareDropdownOpen(!isShareDropdownOpen);
  };

  const shareUrl = `https://echoscript-front.vercel.app`;

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

  const hasUserLiked = data?.likes?.some((item) => item.email === user?.email);
  const blocks = data?.texteditor?.editorContent?.blocks;
  const onlyText = blocks?.map((block) =>
    block.data.text?.replace(/&nbsp;/g, " ")
  );

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

  const handleSearch = (query) => {
    setSearchString(query);
  };
  const handleCloseSearchModal = () => {
    setSearchString("");
    setCategoryFilter("All");
  };

  // console.log(
  //   audience.filter(
  //     (audience) => audience.email === data?.texteditor?.authorEmail
  //   )
  // );

  console.log(data?.texteditor?.authorEmail)

  return (
    <>
      <div className="mx-auto px-4 lg:px-6 lg:pt-5">
        <StickyNavbar />

        <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
          <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />

          <div className="py-10">
            <div>
              {data && (
                <div className="w-auto lg:w-[800px] mx-auto">
                  <div className="border rounded-full mt-4 bg-gray-200 mx-auto w-40 text-[16px] font-semibold p-[5px] text-center">
                    {data?.texteditor?.category}
                  </div>
                  <div className=" text-black text-[20px] lg:text-[40px] mt-7 font-bold p-5 lg:p-0">
                    {data?.texteditor?.articleTitle}
                  </div>
                  <div className=" mt-10 mb-5 px-5">
                    <div>
                      <div className=" flex items-center pl-2 mb-6">
                        <div className="rounded-full border-2 border-white mr-2">
                          <Image
                            src={audience
                              ?.filter(
                                (user) =>
                                  user?.email === data?.texteditor?.authorEmail
                              )
                              ?.map((author) => author?.photoURL || "")}
                            alt="Author"
                            width={60}
                            height={60}
                            objectFit="cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <h2 className="text-[16px] font-bold ">
                              {audience
                                .filter(
                                  (user) =>
                                    user.email === data?.texteditor?.authorEmail
                                )
                                .map((author) => author.name)}
                            </h2>
                            <button className="text-gray-500 font-semibold text-[16px] ">
                              Follow
                            </button>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{Postdate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around lg:justify-between border-t border-gray-300 pt-2">
                    <div className="flex mb-4">
                      <div className="mr-10 lg:mr-12 flex items-center gap-2">
                        <p className="flex items-center gap-1">
                          <AiFillLike
                            className="cursor-pointer"
                            color={hasUserLiked ? "green" : "gray"}
                            onClick={() => handleLike(data)}
                            size={24}
                          />
                        </p>
                        <span>{data?.likes?.length}</span>
                      </div>
                      <div className="z-50 bg-[#F2F2F2]">
                        <div>
                          <div
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            className="cursor-pointer"
                          >
                            <span className="flex items-center justify-center gap-1">
                              <FaComment size={24} color="gray" />
                            </span>
                          </div>
                          <div
                            className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${
                              isDrawerOpen
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                            } z-40`}
                            onClick={() => setIsDrawerOpen(false)}
                          ></div>
                          <div
                            className={`fixed overflow-y-scroll overflow-x-hidden top-0 right-0 h-full bg-gray-200 w-80 transform transition-transform ease-in-out duration-300 ${
                              isDrawerOpen
                                ? "translate-x-0"
                                : "translate-x-full"
                            } z-50`}
                          >
                            <div className="text-white">
                              <ul className="menu mx-auto p-4 w-80 min-h-full bg-base-200 text-base-content px-5">
                                <h4 className="pb-5">
                                  Responses ({data?.comments?.length})
                                </h4>
                                <div className="w-full max-w-2xl mx-auto">
                                  <div className="bg-white border rounded-lg p-6 shadow-md">
                                    <div className="flex items-center">
                                      <Image
                                        className="rounded-full w-12 h-12 object-cover"
                                        width={50}
                                        height={50}
                                        src={user?.photoURL || ""}
                                        alt="comment img"
                                      />
                                      <p className="ml-3">
                                        {user?.displayName}
                                      </p>
                                    </div>
                                    <textarea
                                      placeholder="What are your thoughts?"
                                      minLength={0}
                                      maxLength={maxLength}
                                      value={text}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          e.preventDefault();
                                        }
                                      }}
                                      onChange={handleInputChange}
                                      className="flex-1 h-14 p-2 border-none rounded-md focus:outline-none focus:border-blue-500  resize-none w-full mt-2 align-top"
                                    />
                                    <div className="flex justify-between items-center mt-3">
                                      <span>
                                        {text.length}/{maxLength}
                                      </span>
                                      <button
                                        disabled={text.trim() === ""}
                                        onClick={() =>
                                          handleSubmitComment(data)
                                        }
                                        className={` rounded-xl btn-sm ${
                                          text.trim() === ""
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-[#1A8917]"
                                        }  text-white px-4  rounded-full`}
                                      >
                                        Respond
                                      </button>
                                    </div>
                                  </div>
                                  <div className="mt-10">
                                    {data?.comments?.map((comment) => (
                                      <div key={comment._id}>
                                        <div className="flex justify-start items-center gap-3">
                                          <Image
                                            width={50}
                                            height={50}
                                            className="w-12 h-12 object-cover rounded-full"
                                            alt="img"
                                            src={comment.image}
                                          />
                                          <div>
                                            <p className="font-semibold">
                                              {comment.name}
                                            </p>
                                            <span>
                                              {formatDateAgo(comment.date)}
                                            </span>
                                          </div>
                                        </div>
                                        <p className="my-3">
                                          {comment.commentText}
                                        </p>
                                        <div className="flex justify-between items-center">
                                          <button className="p-2 hover:bg-gray-300 rounded-full">
                                            <AiFillLike
                                              className=" m-1 cursor-pointer"
                                              fontSize={"1rem"}
                                            />
                                          </button>
                                          <p className="underline cursor-pointer">
                                            Reply
                                          </p>
                                        </div>
                                        <hr className="my-2" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <TextToSpeech
                        title={data?.texteditor?.articleTitle}
                        desc={onlyText}
                        id={data?._id}
                      />
                    </div>

                    <div>
                      <div className="flex gap-2">
                        <FaBookmark color="gray" size={24} />
                        <button onClick={handleShare}>
                          <FaShareAlt color="gray" size={24} />
                        </button>
                        {isShareDropdownOpen && (
                          <div className="absolute right-0 mt-6 p-2 rounded shadow-md bg-white w-52 h-28">
                            <p className="text-[16px] lg:text-2xl font font-semibold text-center mb-1">
                              Share via
                            </p>
                            <div className="flex justify-center gap-2 items-center">
                              <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={40} round={true} />
                              </FacebookShareButton>
                              <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={40} round={true} />
                              </WhatsappShareButton>
                              <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={40} round={true} />
                              </TwitterShareButton>
                            </div>
                          </div>
                        )}
                        <FaEllipsisH color="gray" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-12  border-t border-gray-300 px-5">
                    <div>
                      {data && (
                        <div>
                          <div className="max-w-3xl mx-auto">
                            <div className="mt-4 lg:mt-10 p-2 lg:p-0">
                              {data?.texteditor?.editorContent?.blocks?.map(
                                (block, index) => (
                                  <div key={index} className="block">
                                    {block.type === "paragraph" && (
                                      <p className="text-[16px] lg:text-xl  mb-2 lg:mb-5">
                                        {renderBlockContent(block)}
                                      </p>
                                    )}
                                    {block.type === "header" && (
                                      <h2 className="mb-2 lg:mb-5 text-[20px] font-bold">
                                        {block.data.text?.replace(
                                          /&nbsp;/g,
                                          " "
                                        )}
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
                                    {block.type === "list" &&
                                      block.data.style === "ordered" && (
                                        <ol className="mb-5">
                                          {block?.data?.items?.map(
                                            (item, i) => (
                                              <li key={i}>
                                                {item?.replace(/&nbsp;/g, " ")}
                                              </li>
                                            )
                                          )}
                                        </ol>
                                      )}

                                    {block.type === "list" &&
                                      block.data.style === "unordered" && (
                                        <ul className="mb-5">
                                          {block?.data?.items?.map(
                                            (item, i) => (
                                              <li key={i}>
                                                <li key={i}>
                                                  {item?.replace(
                                                    /&nbsp;/g,
                                                    " "
                                                  )}
                                                </li>
                                              </li>
                                            )
                                          )}
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
                                          {block.data.caption?.replace(
                                            /&nbsp;/g,
                                            " "
                                          )}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-4 gap-2 mb-4">
                    {data?.texteditor?.tags?.map((tag) => (
                      <div
                        className="border rounded-lg lg:rounded-full 
             bg-gray-200 mx-auto w-40 text-[12px] lg:text-[16px] font-semibold p-[5px] text-center  "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className=" mt-[-25px] lg:mt-[-80px] z-5">
                <Writerized
                  authorEmail={data?.texteditor?.authorEmail}
                  Id={data?._id}
                />
              </div>

              <div className=" mt-[-25px] lg:mt-[-80px] z-50">
                {user ? (
                  <Recommendation2
                    Id={data?._id}
                    authorCategory={data?.texteditor?.category}
                  />
                ) : (
                  <Trending2 />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:sticky lg:bottom-0 lg:z-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
