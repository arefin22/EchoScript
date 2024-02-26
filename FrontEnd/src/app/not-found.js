"use client";
import Lottie from "lottie-react";
import errorAnimations from "@/assets/img/animation/errorpage.json";
import React from "react";
import Link from "next/link";

const error = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center mx-auto bg-white text-black gap-20 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-br-[100px] rounded-bl-[30px] rounded-br-[30px]">
        <div className="h-96 w-96 flex justify-center items-center mx-auto">
          <Lottie animationData={errorAnimations}></Lottie>
          {/* <span className="loading loading-spinner w-32"></span> */}
        </div>

        <div className="max-w-[600px] mx-auto flex justify-center items-center">
          <Link href="/">
            {/* <button
              className="mt-5 flex gap-4 justify-center items-center w-full select-none rounded-lg  bg-gradient-to-tr from-green-400 to-green-200 bg-clip-border py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]
             disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Go to Homepage
            </button> */}
            
            <button
              className="bg-black text-white px-5 py-3 rounded-3xl"
            >
              Go to Homepage
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default error;
