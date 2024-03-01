"use client";

import SubHeader from "@/components/SubHeader/SubHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import StickyNavbar from "@/components/StickyNavbar/StickyNavbar";

const contactPage = () => {
  return (
    <div className="mx-auto px-4 lg:px-6 lg:pt-5">
      <StickyNavbar/>

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
