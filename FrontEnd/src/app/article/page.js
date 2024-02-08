"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Article from "@/components/Article/Article";
import useAxiosPublic from "@/utils/useAxiosPublic";
import Link from "next/link";

const ArticlePage = () => {
  const [startIdx, setStartIdx] = useState(0);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [getDataBySearch, setGetDataBySearch] = useState([]);
  const dropdownRef = useRef(null)

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
  }, [axiosSecure]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    try {
      if (query.trim() === "") {
        return;
      } else if (query.trim().length < searchQuery.trim().length) {
        return;
      } else {
        const response = await axiosPublic.get(`/search?query=${query}`);
        setSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

  const filterWithSearch = data?.filter((item) =>
    item?.title.toLowerCase()?.includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    // setGetDataBySearch(filterWithSearch);
  }, 1000);
    const timer = setTimeout(() => {
    return () => clearTimeout(timer);
  }, [searchQuery]);

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setSuggestions([]);
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center relative flex items-center pt-5">
        <input
          className="w-2/3 py-5 pl-5 mx-auto border-[#025] outline-none rounded-full border-2"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search your article here"
        />
      </div>
      <div className="flex justify-center w-3/4" ref={dropdownRef}>
        {suggestions?.length > 0 && searchQuery?.length > 0 && (
          <div className="absolute mt-2 p-2 bg-white shadow rounded-lg border border-gray-300 w-96 cursor-pointer">
            {suggestions?.map((item) => (
              <p
                onClick={() => {
                  setSearchQuery(item.title);
                  setSuggestions([]);
                }}
                key={item._id}
              >
                {item.title}
              </p>
            ))}
          </div>
        )}
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
        {filterWithSearch?.map((item) => (
          <Article
            commentCount={item.comments.length}
            key={item._id}
            authorName={item.authorName}
            category={item.category}
            title={item.title}
            postedDate={item.postedDate}
            view={item.view}
            article={item.article}
            image={item.image}
            authorImage={item.authorImage}
            date={item.date}
            articleId={item._id}
            data={data}
          />
        ))}
      </div>
      <hr className="border-1 border-[#F2F2F2] my-3" />

      <Footer></Footer>
    </div>
  );
};

export default ArticlePage;
