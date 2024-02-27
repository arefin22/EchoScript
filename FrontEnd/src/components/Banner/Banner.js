"use client";

import SubHeader from "@/components/SubHeader/SubHeader";

const Banner = () => {
    const handleSearch = (query) => {
      setSearchString(query);
    };
    const handleCloseSearchModal = () => {
      setSearchString("");
      setCategoryFilter("All");
    };
  return (
    <div className="mt-[-20px] lg:mt-[-50px] z-1">
      <div
        className="xl:h-[200vh] rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
        style={{
          // backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
          background:
            "linear-gradient(rgba(25,25,25,0),rgba(0,0,0,.9)), url(https://i.ibb.co/wQ4LPrQ/shunya-koide-1em-Wndl-DHs0-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
        }}
      >
        <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />
        {/* data-aos="fade-up" */}
        <div className="w-full mt-5 lg:pt-10">
          <div className="mx-auto text-center">
            <h1 className="mb-5 text-white mx-auto text-center font-[600px] w-[200px] text-[50px] md:w-[300px] md:text-[100px] lg:text-[120px] lg:w-[500px] xl:text-[150px] xl:w-[500px]">
              Let Story's Shine
            </h1>
            <p className="mb-5 text-xl md:text-3xl lg:text-5xl lg:pt-5 text-white font-bold">
              The Cozy Corner for Sharing Life Tales!
            </p>
          </div>
        </div>
        <div className="text-white text-xl font-semibold text-center py-[70px] md:py-[120px] lg:pt-[200px] lg:text-left lg:pl-24">
          <p>Loved Place - By Reader</p>
          <p>Read Now</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
