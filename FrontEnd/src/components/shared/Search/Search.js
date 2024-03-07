"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import VoiceButton from "../VoiceButton/VoiceButton";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Search = ({ onSearch, onClose, onRecommendationClick }) => {
  const nameInputRef = useRef(null);
  const [startIdx, setStartIdx] = useState(0);
  const inputRefs = [nameInputRef];
  const [searchString, setSearchString] = useState("");
  const [voiceButtonActive, setVoiceButtonActive] = useState(false);
// this is for voice command
  const toggleVoiceButtonActive = () => {
    setVoiceButtonActive((prevState) => !prevState);
    
  };
 

 

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSearch(searchString);
    
    setSearchString("");
    
    
  };
  const handleRecommendationClick = (category) => {
    onRecommendationClick(category);
    
  };

  const handleSearch = () => {
    onSearch(searchString);
    
  };
  
  const category = [
   
    {
      id: 1,
      category: "Sports",
    },
    {
      id: 2,
      category: "Politics",
    },
    {
      id: 3,
      category: "Coding",
    },
    {
      id: 4,
      category: "Poems",
    },
    {
      id: 5,
      category: "Essays",
    },
    {
      id: 6,
      category: "Cars",
    },
    {
      id: 7,
      category: "Anime",
    },
    {
      id: 8,
      category: "Music",
    },
    {
      id: 9,
      category: "Movie",
    },
    {
      id: 10,
      category: "Series",
    },
    {
      id: 11,
      category: "Football",
    },
    {
      id: 12,
      category: "Cricket",
    },
    {
      id: 13,
      category: "BBC news",
    },
    {
      id: 14,
      category: "International",
    },
  ];
  const handleNext = () => {
    setStartIdx((prevStartIdx) =>
      Math.min(prevStartIdx + 1, category.length - 5)
    );
  };
  const handlePrev = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - 1, 0));
  };
  useEffect(() => {
    if (voiceButtonActive) {
      nameInputRef.current.focus();
    }
  }, [voiceButtonActive]);
  return (
    <div className="w-full item-center">
    <div className="">
      <button
        className="btn border-hidden hover:border-hidden hover:bg-transparent bg-transparent h-10"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <FaSearch className="text-xl xl:text-2xl text-white" />
      </button>
      <dialog id="my_modal_3" className="modal absolute top-5 left-24" style={{ width: "83.333%" }}>
        <div className="modal-box absolute top-5 left-10   mx-auto w-full" style={{ maxWidth: "calc(100% - 2rem)" }}>
          <form 
          method="dialog" className="relative">
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-left">Articles</h1>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
            </div>
          </form>
          <div className="relative bg-transparent w-full mx-auto flex justify-between items-center">
            <div className="flex items-center w-5/6">
           
            <form className="flex items-center justify-between w-full gap-5" 
            onSubmit={handleSubmit }>
    <div className="relative flex items-center w-5/6">
      <input 
       value={searchString}
       onChange={handleInputChange}
        type="text"
        ref={nameInputRef}
        placeholder="Search here..."
        className="input border-none w-full"
      />
    </div>
    <div className="flex justify-between gap-5 items-center"> {/* Adjust the position of search icon and voice button */}
      <button type="submit" className="btn mt-5 btn-sm btn-circle btn-ghost">
        <FaSearch className="text-xl xl:text-3xl" />
      </button>
      <VoiceButton
        inputRefs={inputRefs}
        toggleVoiceButtonActive={toggleVoiceButtonActive}
        voiceButtonActive={voiceButtonActive}
        setSearchString={setSearchString}
      />
    </div>
  </form>
             
            </div>
          
          </div>
          <div className="divider"></div>
          <div className="w-full" >
            <div className="text-center relative flex items-center pt-5">
             
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
                onClick={() => onRecommendationClick(item.category) && document.getElementById("my_modal_3").close()}
                  className="bg-[#D9D9D9] px-4 py-3 rounded-xl text-sm hover:bg-[#bdb8b8]"
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
          </div>
        </div>
      </dialog>
    </div>
  </div>
  );
};

export default Search;
