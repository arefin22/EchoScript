"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Article from "@/components/Article/Article";
import BookmarkButton from "@/components/BookmarkButton/BookmarkButton";
import Navbar2 from "@/components/shared/Navbar2/Navbar2";
import SubHeader from "@/components/SubHeader/SubHeader";

const ArticlePage = () => {
  const [startIdx, setStartIdx] = useState(0);
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [audience, setAudience] = useState([]);

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

  // const handleCategory = (e) => {
  //   console.log(e);
  // };

  const handleNext = () => {
    setStartIdx((prevStartIdx) =>
      Math.min(prevStartIdx + 1, category.length - 5)
    );
  };

  const handlePrev = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - 1, 0));
  };

  useEffect(() => {
    axiosSecure.get("/textArticle").then((res) => {
      
      setData(res.data);
    });
  }, [axiosSecure]);
  useEffect(() => {
    axiosSecure.get("/user").then((res) => {

   console.log(res.data);
   
      setAudience(res.data);
    });
  }, [axiosSecure]);

  

  return (
    <div className="bg-white">
      {/* <Navbar2/> */}
      <SubHeader />
      
      <div className="w-[80%] mx-auto sticky top-[50px] md:top-[60px] lg:top-[30px] lg:mt-[-85px] z-50">
        {/* <Navbar2 /> */}
        <Navbar />
      </div>

      <div className="text-center relative flex items-center pt-5">
        {/* <input
          className="w-2/3 py-5 pl-5 mx-auto border-[#025] outline-none rounded-full border-2"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search your article here" */}
        {/* /> */}
      </div>
      <div className="flex gap-5 justify-center pt-3 items-center">
        <button
          className="bg-[#F2F2F2] p-2 rounded-full hover:bg-[#D9D9D9]"
          onClick={handlePrev}
        >
          <MdOutlineKeyboardArrowLeft fontSize={"1.5rem"} />
        </button>
        {category?.slice(startIdx, startIdx + 5).map((item) => (
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
        {data?.map((item, idx) => (
          <div key={idx}>
            <Article
              data={item}
              commentCount={item.comments.length}
              key={item._id}
              authorName={audience
                .filter((user) => user.email === item.texteditor.authorEmail)
                .map((author) => author.name)}
              category={item.texteditor.category}
              title={item.texteditor?.articleTitle}
              // postedDate={item.postedDate}

              view={item.likes.length}
              likeCount={item.likes.length}
              // article={item.article}
              image={item?.texteditor?.thumbnail}
              // authorImage={item.authorImage}
              // category={item.category}
              // title={item.title}
              // postedDate={item.postedDate}
              // view={item.view}
              // article={item.article}
              // image={item.image}
              authorImage={audience
                .filter((user) => user?.email === item?.texteditor?.authorEmail)
                .map((author) => author?.photoURL)}
              date={item.date}
              articleId={item._id}
            />
          </div>
        ))}
      </div>
      <hr className="border-1 border-[#F2F2F2] my-3" />

      <Footer></Footer>
    </div>
  );
};
export default ArticlePage;
