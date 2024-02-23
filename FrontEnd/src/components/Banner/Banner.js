"use client";
import Image from "next/image";

import logo from "./../../assets/img/logo.png";
import Search from "../shared/Search/Search";


const Banner = () => {
  
  return (
    <div className="mt-[-20px] md:pt-5 lg:mt-[-50px]">
      <div
        className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
        }}
      >
        <div className="w-full flex justify-between py-5 px-3 lg:px-20 lg:pt-10 items-center">
          <div>
            {/* navbar left part */}
            <Image src={logo} width={200} height={100} />
          </div>
          <div>
            {/* navbar right part */}
           <Search/>
          </div>
        </div>

        <div className="w-full mt-5 lg:pt-10" data-aos="fade-up">
          <div className="mx-auto text-center">
            <h1 className="mb-5 text-white font-light text-6xl xl:text-8xl w-[150px] lg:w-[200px] mx-auto text-center">
              Let Story's Shine
            </h1>
            <p className="mb-5 text-3xl text-white font-light">
              The Cozy Corner for Sharing Life Tales!
            </p>
          </div>
        </div>
        <div
          className="text-white text-xl font-semibold mt-20 lg:mt-10 pl-10 lg:pb-40 lg:pl-24"
          data-aos="fade-up"
        >
          <p>Loved Place - By Reader</p>
          <p>Read Now</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
