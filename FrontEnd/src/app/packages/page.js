"use client";
import Payment from "@/components/Payment/Payment";
import SubHeader from "@/components/SubHeader/SubHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Title from "@/components/shared/ReusableComponents/Title";
import React from "react";

const page = () => {
  // search function
  const handleSearch = (query) => {
    setSearchString(query);
  };
  const handleCloseSearchModal = () => {
    setSearchString("");
    setCategoryFilter("All");
  };
  return (
    <div className="z-1 px-6 pt-5 mt-[-20px] lg:mt-[-40px]">
      <div className="mx-auto sticky z-50 -mt-3 top-[40px] md:-mt-4 md:top-[40px] lg:-mt-2 lg:w-[45%] lg:top-[65px] xl:w-[35%] xl:top-[60px] xl:-mt-2">
        <Navbar />
      </div>

      <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
        <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />

        <div className="container mx-auto py-32">
          <div className="mb-10">
            <Title title="Membership Packages" />
          </div>
          <Payment />
        </div>
      </div>

      <div className="lg:sticky lg:bottom-0 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};

export default page;
