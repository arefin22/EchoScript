"use client";
import Image from "next/image";
import TextToSpeech from "./../../../components/TextToSpeech/page";
import { AiFillLike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import articleData from "@/utils/articleData";
import { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SingleArticle = ({ params }) => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [forceUpdate, setForceUpdate] = useState(Date.now());
  const [isShareDropdownOpen, setShareDropdownOpen] = useState(false);
  const { user } = useAuth();
  const maxLength = 100;
  const id = params.articleId;
  useEffect(() => {
    axiosSecure.get(`/textArticle/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [forceUpdate]);

  console.log(data);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const formatDateAgo = (date) => {
    return formatDistanceToNow(new Date(date));
  };

  const handleSubmitComment = (data) => {
    const d = new Date();
    const comment = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL || "",
      id: data?._id,
      commentText: text,
      date: d,
    };
    axiosSecure.put(`/textArticle/${data._id}/comment`, comment).then((res) => {
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
  };

  const {
    coverImage,
    articleImage,
    authorImage,
    author,
    contentFirstHalf,
    contentSecondHalf,
    title,
  } = articleData;

  const handleLikeOfComment = (comment) => {
    const likeOfComment = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL || "",
      likeCount: 1,
    };
    axiosSecure.put(`/textArticle/${comment._id}`, likeOfComment).then((res) => {
      if (res.data.modifiedCount > 0) {
        setForceUpdate(Date.now());
      }
    });
  };

  const handleShare = () => {
    setShareDropdownOpen(!isShareDropdownOpen);
  };

  const shareUrl = `https://echoscript-front.vercel.app`;

  const handleLike = (item) => {
    const likeDetails = {
      email: user?.email,
      name: user?.displayName,
      like: 1,
    };
    axiosSecure.put(`/textArticle/${item?._id}/like`, likeDetails).then((res) => {
      if (res.data.modifiedCount > 0) {
        setForceUpdate(Date.now());
      }
    });
  };

  const hasUserLiked = data?.likes?.some((item) => item.email === user?.email);

  return (
    <div>
      <Navbar />
      <div>
        {data && (
          <div className="container mx-auto p-4 relative">
            <div
              className="mb-4 relative"
              style={{
                position: "relative",
                width: "100%",
                height: "427px",
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-50"
                style={{ zIndex: 1 }}
              ></div>

              <div className="absolute bottom-4 left-4 text-white text-[40px] font-bold w-1/2 z-10">
                {data?.texteditor?.editorContent?.blocks[0].data?.text}
              </div>
              {data?.texteditor?.editorContent?.blocks.map((block) => {
                block.type === "image" && (
                  <Image
                    src={block.data.file.url}
                    alt="Cover Image"
                    layout="fill"
                    objectFit="cover"
                  />
                );
              })}
            </div>

            <div className="mb-4 flex items-center border-b border-black pb-4">
              <div className="rounded-full overflow-hidden border-2 border-white mr-4">
                <Image
                  src={authorImage}
                  alt="Author"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col">
                <div>
                  <h2 className="text-lg font-bold">
                    {data?.texteditor?.authorEmail}
                  </h2>
                  <p className="text-sm text-gray-500">22-oct-24</p>
                </div>
              </div>

              <div>
                <button className="text-green-500 font-bold text-xl px-4 py-2 rounded mt-2">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex mb-4">
                <div className="mr-12 flex items-center gap-2">
                  <p className="flex items-center gap-1">
                    <AiFillLike
                      className="cursor-pointer"
                      color={hasUserLiked ? "green" : "black"}
                      onClick={() => handleLike(data)}
                      size={24}
                    />
                  </p>
                  <span>{data?.likes?.length}</span>
                </div>
                <div className="drawer drawer-end overflow-x-hidden z-50 bg-[#F2F2F2]">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    <label htmlFor="my-drawer" className="">
                      <div className="btn-sm">
                        <span className="flex items-center justify-center gap-1">
                          <MdComment size={24} />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content px-5">
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
                            <p className="ml-3">{user?.displayName}</p>
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
                              onClick={() => handleSubmitComment(data)}
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
                                  <span>{formatDateAgo(comment.date)}</span>
                                </div>
                              </div>
                              <p className="my-3">{comment.commentText}</p>
                              <div className="flex justify-between items-center">
                                <button
                                  onClick={() => handleLikeOfComment(comment)}
                                  className="p-2 hover:bg-gray-300 rounded-full"
                                >
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
              <div>
                <TextToSpeech
                  title={data?.texteditor?.editorContent?.blocks[0].data?.text}
                  desc={data?.texteditor?.editorContent?.blocks.map((block) => {
                    {
                      block.type === "paragraph" && block.data.text;
                    }
                    {
                      block.type === "header" && block.data.text;
                    }
                    {
                      block.type === "quote" && (
                        <>
                          {block.data.text}
                          {block.data.caption}
                        </>
                      );
                    }
                  })}
                />
              </div>
              <div>
                <div className="flex gap-1">
                  <FaBookmark size={24} />
                  <button onClick={handleShare}>
                    <FaShareAlt size={24} />
                  </button>
                  {isShareDropdownOpen && (
                    <div className="absolute right-0 mt-6 p-2 rounded shadow-md bg-white w-52 h-28">
                      <p className="text-2xl font font-semibold text-center">
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
                  <FaEllipsisH size={24} />
                </div>
              </div>
            </div>
            <div className="mb-12 border-t border-black">
              {data?.texteditor?.editorContent?.blocks.map((block, idx) => (
                <div key={idx} className="block">
                  {block.type === "paragraph" && <p>{block.data.text}</p>}
                  {block.type === "header" && <h2>{block.data.text}</h2>}
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

            {/* article image */}
            {/* <div className="mb-12">
          <img
            src={articleImage}
            alt="Article Image"
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
        </div> */}
            {/* <div className="mb-4">
          <p>{contentSecondHalf}</p>
        </div> */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleArticle;
