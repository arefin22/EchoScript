
"use client"
import React from 'react';

import animation from '@/assets/img/animation/loader.json'
import Lottie from 'lottie-react';


const LoadingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },  };
    return (
        <div className='flex justify-center items-center '>
             <span className="loading loading-spinner w-32"></span>
        </div>
    );
};

export default LoadingPage;