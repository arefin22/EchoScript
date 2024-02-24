
"use client"
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Popular from "@/components/Popular/Popular";
import Trending from "@/components/Trending/Trending";
import Footer from "@/components/shared/Footer";

import Navbar from "@/components/shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  // window.addEventListener("scroll", function () {
  //   var topElement = document.querySelector(".top");

  //   // Add or remove the 'visible' class based on the scroll position
  //   if (window.scrollY > 0) {
  //     topElement.classList.add("visible");
  //   } else {
  //     topElement.classList.remove("visible");
  //   }
  // });


    return (
      <div className="container mx-auto px-2">
        <div className="w-[80%] mx-auto sticky top-[50px] md:top-[60px] z-50">
          {/* <Navbar2 /> */}
          <Navbar />
        </div>
        <Banner />
        <div className="mt-[-25px] lg:mt-[-80px]">
          <Trending />
        </div>

        <div>
          <Popular />
        </div>

        <div>
          <Contact />
        </div>

      
          <Footer />


        {/* <a href="#" className="top w-[120px] float-end ">
            Back to Top &#8593;
          </a> */}
      </div>
    );
};

export default page;
