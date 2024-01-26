"use client";

import { IoSearch } from "react-icons/io5";
import {
  MdAccessTime,
  MdOutlineBookmarkAdd,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import React, { Component, useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  FaEye,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaRegHeart,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import Swal from "sweetalert2";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const ArticlePage = () => {
  const [startIdx, setStartIdx] = useState(0);
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [_id, set_id] = useState("");
  const [commentText, setCommentText] = useState("");
  const [likes, setLikes] = useState(0)


  const category = [
    {
      id: 1,
      category: "All",
    },
    {
      id: 2,
      category: "Sports",
    },
    {
      id: 3,
      category: "Politics",
    },
    {
      id: 4,
      category: "Coding",
    },
    {
      id: 5,
      category: "Poems",
    },
    {
      id: 6,
      category: "Essays",
    },
    {
      id: 7,
      category: "Cars",
    },
    {
      id: 8,
      category: "Anime",
    },
    {
      id: 9,
      category: "Music",
    },
    {
      id: 10,
      category: "Movie",
    },
    {
      id: 11,
      category: "Series",
    },
    {
      id: 12,
      category: "Football",
    },
    {
      id: 13,
      category: "Cricket",
    },
    {
      id: 14,
      category: "BBC news",
    },
    {
      id: 15,
      category: "International",
    },
  ];

  const handleCategory = (e) => {
    console.log(e);
  };

  const handleNext = () => {
    setStartIdx((prevStartIdx) =>
      Math.min(prevStartIdx + 1, category.length - 5)
    );
  };

  const handlePrev = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - 1, 0));
  };


  useEffect(() => {
    axiosSecure.get("/article").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleGetId = (commentId) => {
    const comment = {
      commentId,
      commentText,
    };
    axiosSecure.put(`/article/${commentId}`, comment).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "successfylly added a comment!",
          icon: "success",
        });
        document.getElementById("my_modal_3").close();
        setCommentText("");
      }
    });
  };

  const like = (item) =>{
    const likeDetails = {
      like: 1
    };
    axiosSecure.put(`/article/${item?._id}/like`, likeDetails)
    .then(res =>{
      console.log(res.data)
    })
  }

   return (
     <div>
       <div className="text-center relative flex items-center">
         <input
           className="w-2/3 py-5 pl-5 mx-auto border-[#025] outline-none rounded-full border-2"
           type="text"
           placeholder="Search your article here"
         />
         <IoSearch
           fontSize={"2.3rem"}
           className="absolute right-60 bg-[#F2F2F2] hover:bg-[#ddd4d4] p-2 rounded-full"
         />
       </div>
       <div className="flex gap-5 justify-center pt-3 items-center">
         <button
           className="bg-[#F2F2F2] p-2 rounded-full hover:bg-[#D9D9D9]"
           onClick={handlePrev}
         >
           <MdOutlineKeyboardArrowLeft fontSize={"1.5rem"} />
         </button>
         {category?.slice(startIdx, startIdx + 5).map((item, index) => (
           <button
             onClick={() => handleCategory(`${item?.category}`)}
             className="bg-[#D9D9D9] px-5 py-2 rounded-2xl text-sm hover:bg-[#bdb8b8]"
             key={item.id}
           >
             {item.category}
           </button>
         ))}
         <button
           className="bg-[#F2F2F2] p-2 rounded-full hover:bg-[#D9D9D9]"
           onClick={handleNext}
         >
           <MdOutlineKeyboardArrowRight fontSize={"1.5rem"} />
         </button>
       </div>
       <div className="py-10">
         {data?.map((item) => (
           <div key={item._id} className="w-3/4 mx-auto">
             <div className="flex items-center justify-between text-[#025]">
               <div className="w-[70%]">
                 <div className="flex w-[80%] justify-between items-center">
                   <div className="flex gap-2 pb-4 items-center">
                     <Image
                       src={"https://i.ibb.co/vcS8X7k/download-3.jpg"}
                       height={40}
                       width={40}
                       className="rounded-[50%] h-12 w-12 object-cover"
                       alt="author image"
                     />
                     <p>
                       {item.authorName} .
                       <span className="bg-[#D9D9D9] px-4 py-2 text-sm rounded-2xl ml-2">
                         {item.category}
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
                 <h1 className="text-2xl font-semibold pb-2">{item.title}</h1>
                 <p>{item.article}</p>
                 <div className="flex justify-between w-[80%] pt-4 items-center">
                   <div className="flex items-center gap-5">
                     <span className="flex items-center gap-1">
                       <MdAccessTime /> {item.postedDate.slice(0, 10)}
                     </span>
                     <span className="flex items-center gap-1">
                       <FaEye /> {item.view}
                     </span>
                     <span className="flex items-center gap-1">
                       <FaRegCalendarAlt /> {item.date}
                     </span>
                   </div>
                   <div>
                   </div>
                   <div className="flex gap-3">
                     <button
                       onClick={() => like(item)}
                       className="hover:bg-[#ddd4d4] p-2 rounded-full"
                     >
                       <div className="indicator">
                         {/* {like ? ( */}
                         {/* <FaRegHeart */}
                         {/* className="text-red-500" */}
                         {/* fontSize={"1.5rem"} */}
                         {/* /> */}
                         {/* ) : ( */}
                         <FaRegHeart fontSize={"1.5rem"} />
                         {/* )} */}
                         <span className="badge badge-sm indicator-item">
                           {item.likes.length}
                         </span>
                       </div>
                     </button>
                     <button
                       onClick={() => {
                         document.getElementById("my_modal_3").showModal(),
                           set_id(item._id);
                       }}
                       className="hover:bg-[#ddd4d4] p-2 rounded-full"
                     >
                       <div className="indicator">
                         <FaRegCommentDots fontSize={"1.5rem"} />
                         <span className="badge badge-sm indicator-item">
                           {item.comments.length}
                         </span>
                       </div>
                     </button>
                     <button className="hover:bg-[#ddd4d4] p-2 rounded-full">
                       <FiShare2 fontSize={"1.5rem"} />
                     </button>
                   </div>
                 </div>
               </div>
               <div>
                 <Image
                   src={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
                   height={200}
                   width={200}
                   alt="article image"
                   className="rounded-lg object-cover"
                 />
               </div>
               <hr className="border-1 border-[#ddd4d4] my-7" />
             </div>
             <hr className="my-5" />
           </div>
         ))}
       </div>
       <dialog id="my_modal_3" className="modal">
         <div className="modal-box">
           <form method="dialog">
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
               ✕
             </button>
           </form>
           <h3 className="font-bold text-lg">Comments </h3>
           <p className="py-4">Add your comment</p>
           <input
             className="outline-none border-2 py-3 w-full pl-5 rounded-lg"
             name="comment"
             onChange={(e) => setCommentText(e.target.value)}
             placeholder="Write your comment..."
           />
           <button
             onClick={() => handleGetId(_id)}
             disabled={commentText.trim() === ""}
             className={`bg-[#1F883D] text-white  px-4 rounded-xl mt-5 btn-sm ${
               commentText.trim() === ""
                 ? "bg-gray-400 cursor-not-allowed"
                 : "#1F883D"
             }`}
           >
             Submit
           </button>
           <h1 className="font-semibold text-lg my-3">All Comments</h1>
           <hr />
           <div>
             {data.map((item) =>
               item.comments.map((comment) => (
                 <p key={comment._id}>{comment.commentText}</p>
               ))
             )}
           </div>
         </div>
       </dialog>
       <hr className="border-1 border-[#F2F2F2] my-3" />

<Footer></Footer>
     </div>
   );

 


};

export default ArticlePage;
