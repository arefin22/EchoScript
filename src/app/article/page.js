"use client";

import Article from "@/components/Article/Article";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { Component, useState } from "react";

const ArticlePage = () => {
  const [startIdx, setStartIdx] = useState(0);

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
      <hr className="border-1 border-[#F2F2F2] my-3" />
      <div>
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
