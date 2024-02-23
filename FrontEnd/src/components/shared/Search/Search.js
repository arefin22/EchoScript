"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import VoiceButton from "../VoiceButton/VoiceButton";

const Search = () => {
  const nameInputRef = useRef(null);

  const inputRefs = [nameInputRef];
  const [voiceButtonActive, setVoiceButtonActive] = useState(false);
  const toggleVoiceButtonActive = () => {
    setVoiceButtonActive((prevState) => !prevState);
  };
  useEffect(() => {
    if (voiceButtonActive) {
      nameInputRef.current.focus();
    }
  }, [voiceButtonActive]);
  return (
    <div>
      <div className="">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn border-hidden hover:border-hidden hover:bg-transparent bg-transparent h-10"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaSearch className="text-xl lg:text-3xl text-white" />
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="relative bg-transparent w-full mx-auto flex gap-2 justify-center items-center">
              <div className="w-3/4">
                <input
                  type="text"
                  ref={nameInputRef}
                  placeholder="Search"
                  className="input mx-auto input-bordered w-full mt-4   md:w-5/6 "
                />
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                <VoiceButton
                  inputRefs={inputRefs}
                  toggleVoiceButtonActive={toggleVoiceButtonActive}
                  voiceButtonActive={voiceButtonActive}
                />
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Search;
