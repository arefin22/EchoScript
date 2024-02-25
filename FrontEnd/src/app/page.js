
"use client"
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Popular from "@/components/Popular/Popular";
import Recomendation from "@/components/Recomendation/page";
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
      <div className="container">
        <div className="w-[80%] mx-auto sticky top-[50px] md:top-[60px] lg:top-[70px] lg:-mt-6 z-50">
          <Navbar />
        </div>
        <div className="mainContainer">
          <Banner />

          <div className="mt-[-25px] lg:mt-[-80px] z-50">
            <Trending />
          </div>
          <div className="mt-[-25px] lg:mt-[-80px] z-50">
          <Recomendation />
          </div>
          
          <Popular />

          <Contact />
        </div>

        <div className="lg:sticky lg:bottom-0 lg:z-0">
          <Footer />
        </div>

        {/* <a href="#" className="top w-[120px] float-end ">
            Back to Top &#8593;
          </a> */}
      </div>
    );
};

export default page;
