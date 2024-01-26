"use client";

const Banner = () => {
  return (
    <div
      className="hero w-full"
      style={{
        backgroundImage: "url(https://i.ibb.co/wz43pyS/banner.png)",
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="w-full p-48">
        <div className="">
          <h1 className="mb-5 text-8xl text-[#C8B7A5] font-bold">Let Your Story Shine</h1>
          <p className="mb-5 text-2xl text-[#C8B7A5] -mt-6">
          The Cozy Corner for Sharing Life Tales!
          </p>
          <button className="w-64 h-16 bg-[#C4B4A4] text-[#40220A] hover:bg-[#40220A] text-2xl hover:text-[#C4B4A4]  rounded-full mt-24 ">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
