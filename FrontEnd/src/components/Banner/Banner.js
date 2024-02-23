"use client";

import SubHeader from "../SubHeader/SubHeader";


const Banner = () => {
  
  return (
    <div className="mt-[-20px] lg:mt-[-50px]">
      <div
        className="w-full rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
        style={{
          // backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
          background:
            "linear-gradient(90deg, rgba(150,150,150,1) 0%, rgba(87,87,87,1) 0%, rgba(0,0,0,0.4654236694677871) 0%), url(https://i.ibb.co/rsGgD7b/banner.jpg)",
          height: "200vh"
        }}
      >
        <SubHeader />

        <div className="w-full mt-5 lg:pt-10" data-aos="fade-up">
          <div className="mx-auto text-center">
            <h1 className="mb-5 text-white mx-auto text-center text-6xl font-[600px] w-[150px] lg:text-[200px] lg:w-[800px] ">
              Let Story's Shine
            </h1>
            <p className="mb-5 text-3xl pt-20 text-white font-bold">
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
