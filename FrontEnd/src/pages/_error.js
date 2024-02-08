"use client"
import Lottie from 'lottie-react';
import errorAnimations from "@/assets/img/animation/errorpage.json";
import React from 'react';
import Link from 'next/link';

const _error = () => {
    return (
        <div>
             <div className="max-w-[1200px] h-[70vh] mx-auto">
            <div className="h-96 w-96 flex justify-center items-center mx-auto">
            <Lottie animationData={errorAnimations}></Lottie>
            </div>
          
           <div className="max-w-[600px] mx-auto flex justify-center items-center">
            <Link to='/'>
            <button  className="block mt-5 flex gap-4 justify-center items-center w-full select-none rounded-lg  bg-gradient-to-tr from-green-400 to-green-200 bg-clip-border shadow-green-500/40 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]
             disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Go to Homepage</button>
            </Link>
           </div>
        </div>
        </div>
    );
};

export default _error;