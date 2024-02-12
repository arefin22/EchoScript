"use client"
import React from 'react';

import animation from '@/assets/img/animation/loader.json'
import Lottie from 'lottie-react';


const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },  };
    return (
        <div className='flex justify-center items-center '>
              <Lottie options={defaultOptions} height={150} width={150} />;
        </div>
    );
};

export default Loader;