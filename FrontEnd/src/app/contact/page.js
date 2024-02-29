"use client";

import SubHeader from "@/components/SubHeader/SubHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const contactPage = () => {
  return (
    <div className="mx-auto px-4 lg:px-6 lg:pt-5">
      <div className="mx-auto sticky z-50 -mt-7 top-[40px] md:-mt-8 md:top-[40px] lg:-mt-14 lg:w-[45%] lg:top-[65px] xl:w-[35%] xl:top-[60px] xl:-mt-18 2xl:w-[25%]">
        <Navbar />
      </div>

      <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
        <SubHeader />

        <div className="py-10 px-10 min-h-screen">contact</div>
      </div>

      <div className="lg:sticky lg:bottom-0 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};

export default contactPage;
