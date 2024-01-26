
"use client"

import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Article = ({
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
  articleId
}) => {


  return (
    <div className="w-3/4 mx-auto">
      <div className="flex items-center justify-between text-[#025]">
        <div className="w-[70%]">
          <div className="flex w-[80%] justify-between items-center">
            <div className="flex gap-2 pb-4 items-center">
              <Image
                src={authorImage}
                height={40}
                width={40}
                className="rounded-[50%] h-12 w-12 object-cover"
                alt="author image"
              />
              <p>
                {authorName} .
                <span className="bg-[#D9D9D9] px-4 py-2 text-sm rounded-2xl ml-2">
                  {category}
                </span>
                <span className="text-[#06F] ml-4 hover:underline cursor-pointer">
                  Follow +
                </span>
              </p>
            </div>
            <button className="hover:bg-[#ddd4d4] p-3 rounded-full">
              <MdOutlineBookmarkAdd fontSize={"1.5rem"} />
            </button>
          </div>
          <h1 className="text-2xl font-semibold pb-2">{title}</h1>
          <p>{article}</p>
          <div className="flex justify-between w-[80%] pt-4 items-center">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1">
                <MdAccessTime /> {postedDate}
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {view}
              </span>
              <span className="flex items-center gap-1">
                <FaRegCalendarAlt /> {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                <FaRegHeart fontSize={"1.5rem"} />
              </button>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="hover:bg-[#ddd4d4] p-2 rounded-full"
              >
                <div className="indicator">
                  <FaRegCommentDots fontSize={"1.5rem"} />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Comments</h3>
                  <p className="py-4">Add your comment</p>
                  <form onSubmit={(e) => handleCollectComment(e)}>
                    <input
                      className="outline-none border-2 py-3 w-full pl-5 rounded-lg"
                      name="comment"
                      placeholder="Write your comment..."
                    />
                    <button className="bg-[#1F883D] text-white  px-4 rounded-xl mt-5 btn-sm">
                      Submit
                    </button>
                  </form>
                </div>
              </dialog>
              <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                <FiShare2 fontSize={"1.5rem"} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={image}
            height={200}
            width={200}
            alt="article image"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <hr className="border-1 border-[#ddd4d4] my-7" />
    </div>
  );
};

export default Article;
