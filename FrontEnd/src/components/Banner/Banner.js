"use client";

const Banner = () => {
  return (
    <div
      className="hero w-full rounded-tl-[100px] rounded-tr-[100px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="w-full p-8 md:p-28 lg:p-32 xl:p-48 xl:pb-0 lg:mb-36">
        <div className="mx-auto text-center">
          <h1 className="mb-5 text-4xl lg:text-6xl xl:text-8xl text-white font-light w-1/3 mx-auto">
            Let Story's Shine
          </h1>
          <p className="mb-5 text-lg lg:text-3xl text-white font-light">
            The Cozy Corner for Sharing Life Tales!
          </p>
        </div>
        <div className="text-white lg:pt-40 text-xl font-semibold">
          <p>Loved Place - By Reader</p>
          <p>Read Now</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
