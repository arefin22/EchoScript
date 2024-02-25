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
  const [searchString, setSearchString] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All"); // Add this line

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

  const handleSearch = (query) => {
    setSearchString(query);
  };
   const handleCloseSearchModal = () => {
     setSearchString("");
     setCategoryFilter("All");
   };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

 

  const filteredArticles = data.filter((article) => {
    const isInCategory =
      categoryFilter === "All" ||
      article.texteditor.category === categoryFilter;
    const matchesSearch =
      article.texteditor.articleTitle
        .toLowerCase()
        .includes(searchString.toLowerCase()) ||
      article.texteditor.category
        .toLowerCase()
        .includes(searchString.toLowerCase());
    return isInCategory && matchesSearch;
  });

  return (
    <div className="px-6 pt-5">
      <div className="w-[80%] mx-auto sticky top-[50px] md:top-[60px] lg:top-[50px] lg:mt-[-75px] z-50">
        <Navbar />
      </div>

      <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
        <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />

        <div className="py-10">
          {filteredArticles
            .slice(startIdx * 5, startIdx * 5 + 5)
            .map((item, idx) => (
              <div key={idx}>
                <Article
                  data={item}
                  commentCount={item.comments.length}
                  key={item._id}
                  authorName={audience
                    .filter(
                      (user) => user.email === item.texteditor.authorEmail
                    )
                    .map((author) => author.name)}
                  category={item.texteditor.category}
                  title={item.texteditor?.articleTitle}
                  view={item.likes.length}
                  likeCount={item.likes.length}
                  image={item?.texteditor?.thumbnail}
                  authorImage={audience
                    .filter(
                      (user) => user?.email === item?.texteditor?.authorEmail
                    )
                    .map((author) => author?.photoURL)}
                  date={item.date}
                  articleId={item._id}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="lg:sticky lg:bottom-0 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};
export default ArticlePage;
