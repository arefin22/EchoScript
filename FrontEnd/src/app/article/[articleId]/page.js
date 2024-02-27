"use client";
import Image from "next/image";
import TextToSpeech from "../../../components/TextToSpeech/texttospeech";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
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
import SubHeader from "@/components/SubHeader/SubHeader";

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
    axiosSecure
      .put(`/textArticle/${item?._id}/like`, likeDetails)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setForceUpdate(Date.now());
        }
      });
  };

  const hasUserLiked = data?.likes?.some((item) => item.email === user?.email);
  const blocks = data?.texteditor?.editorContent?.blocks;
  const onlyText = blocks?.map((block) =>
    block.data.text?.replace(/&nbsp;/g, " ")
  );

  const renderBlockContent = (block) => {
    const segments = block.data.text.split(/(<a[^>]*>.*?<\/a>)/g);

    const renderedSegments = segments.map((segment, index) => {
      if (segment.startsWith("<a")) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(segment, "text/html");
        const link = doc.querySelector("a");

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
        return <span key={index}>{segment.replace(/&nbsp;/g, " ")}</span>;
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

  return (
    <>
      <div className="z-1 px-6 pt-5 mt-[-20px] lg:mt-[-40px]">
        <div className=" mx-auto sticky top-[40px] z-50 -mt-8 md:-mt-8 lg:w-[50%] lg:top-[50px] xl:w-[50%] xl:top-[60px] xl:-mt-6">
          <Navbar />
        </div>

        <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
          <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />

          <div className="py-10">
            <div>
              {data && (
                <div className="w-[800px] mx-auto">
                  <div className="border rounded-full mt-4 bg-gray-200 mx-auto w-40 text-[16px] font-semibold p-[5px] text-center">
                    {data?.texteditor?.category}
                  </div>
                  <div className=" text-black text-[40px] mt-7 font-bold ">
                    {data?.texteditor?.articleTitle}
                  </div>
                  <div className=" mt-10 mb-5">
                    <div>
                      <div className=" flex items-center pl-2 mb-6">
                        <div className="rounded-full border-2 border-white mr-2">
                          <Image
                            src={audience
                              .filter(
                                (user) =>
                                  user.email === data?.texteditor?.authorEmail
                              )
                              .map((author) => author?.photoURL || "")}
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
                            <p className="text-sm text-gray-500">22-oct-24</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between border-t border-gray-300 pt-2">
                    <div className="flex mb-4">
                      <div className="mr-12 flex items-center gap-2">
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
                          <div className="overflow-y-scroll">
                            <div
                              className={`absolute inset-0 z-50 transition-transform duration-300  ${
                                isDrawerOpen
                                  ? "translate-x-0"
                                  : "translate-x-full"
                              }`}
                            >
                              <div className="absolute inset-y-0  right-0 w-[320px]">
                                <div className="h-full bg-base-200  text-base-content">
                                  <ul className="p-4 mx-auto min-h-full bg-base-200 text-base-content">
                                    <div className="flex items-center justify-between">
                                      <h4 className="pb-5">
                                        Responses ({data?.comments?.length})
                                      </h4>
                                      <div></div>
                                    </div>
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
                                          <div key={comment._id} className="">
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
                      </div>
                    </div>

                    <div>
                      <TextToSpeech
                        title={data?.texteditor?.articleTitle}
                        desc={onlyText}
                      />
                    </div>

                    <div>
                      <div className="flex gap-1">
                        <FaBookmark color="gray" size={24} />
                        <button onClick={handleShare}>
                          <FaShareAlt color="gray" size={24} />
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
                        <FaEllipsisH color="gray" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-12  border-t border-gray-300">
                    <div>
                      {data && (
                        <div>
                          <div className="max-w-3xl mx-auto">
                            <div className="mt-10">
                              {data?.texteditor?.editorContent?.blocks.map(
                                (block, index) => (
                                  <div key={index} className="block">
                                    {block.type === "paragraph" && (
                                      <p className="text-xl mb-5">
                                        {renderBlockContent(block)}
                                      </p>
                                    )}
                                    {block.type === "header" && (
                                      <h2 className="mb-5 font-bold">
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
                                          {block.data.items.map((item, i) => (
                                            <li key={i}>
                                              {item?.replace(/&nbsp;/g, " ")}
                                            </li>
                                          ))}
                                        </ol>
                                      )}

                                    {block.type === "list" &&
                                      block.data.style === "unordered" && (
                                        <ul className="mb-5">
                                          {block.data.items.map((item, i) => (
                                            <li key={i}>
                                              <li key={i}>
                                                {item?.replace(/&nbsp;/g, " ")}
                                              </li>
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
                  <div className="flex gap-2">
                    {data?.texteditor?.tags?.map((tag) => (
                      <div
                        className="border rounded-full mt-4
             bg-gray-200 mx-auto w-40 text-[16px] font-semibold p-[5px] text-center  "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
