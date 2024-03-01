"use client";

import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import person from "@/assets/img/person-removebg-preview.png";

const Article = ({
  data,
  authorName,
  category,
  title,
  article,
  postedDate,
  view,
  date,
  image,
  authorImage,
  handleCollectComment,
  articleId,
  commentCount,
  likeCount,
}) => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex items-center justify-between text-[#025]">
        <div className="w-[70%]">
          <div className="flex w-[100%] justify-between items-center">
            <Link href={`/writer`}>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={authorImage || person}
                  height={20}
                  width={20}
                  className="rounded-full  object-cover"
                  alt="author image"
                />
                
                <p className="text-[12px] lg:text-[16px]">
                  {authorName} 
                  {/* <span className="text-[#06F] ml-4 hover:underline cursor-pointer">
                    Follow +
                  </span> */}
                </p>
              </div>
            </Link>
            <button className="hover:bg-[#ddd4d4] lg:p-3 rounded-full">
              <BookmarkButton data={data} />
            </button>
          </div>
          <Link href={`/article/${articleId}`}>
            <h1 className="text-[12px] md:text-[16px] lg:text-xl font-semibold pb-2">{title}</h1>
            <p>{article}</p>
          </Link>
          <div className="flex justify-between w-[100%] pt-4 px-1 md:px-0 gap-4">
            <div className="flex items-center gap-5">
              {/* <span className="flex items-center gap-1">
                <MdAccessTime /> {date}
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {view}
              </span> */}
              <span className="bg-[#D9D9D9] px-2 lg:px-4 lg:py-2 text-sm rounded-xl ">
                {category}
              </span>
            </div>
            <div className="flex gap-1">
              <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                <div className="indicator">
                  <FaRegHeart size={16} />
                  <span className="badge badge-sm indicator-item">
                    {likeCount}
                  </span>
                </div>
              </button>
              <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                <div className="indicator">
                  <FaRegCommentDots size={16} />
                  <span className="badge badge-sm indicator-item">
                    {commentCount}
                  </span>
                </div>
              </button>
              {/* <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                <FiShare2 fontSize={"1.5rem"} />
              </button> */}
            </div>
          </div>
        </div>
        <div>
          <Link href={`/article/${articleId}`}>
            <Image
              src={image || person}
              height={200}
              width={200}
              alt="article image"
              className="rounded-lg object-cover"
            />
          </Link>
        </div>
      </div>
      <hr className="border-1 border-[#ddd4d4] my-7" />
    </div>
  );
};

export default Article;
