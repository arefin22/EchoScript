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
      <div className=" mx-auto sticky top-[40px] z-50 -mt-8 md:-mt-8 lg:w-[50%] lg:top-[50px] xl:w-[50%] xl:top-[60px] xl:-mt-6">
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
