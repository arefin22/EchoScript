
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
import { useAuth } from "@/context/authContext";

const page = () => {
 const {user} = useAuth()
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
      <div className="mx-auto px-4 lg:px-6 lg:pt-5">
        <div className="mx-auto sticky z-50 -mt-3 top-[40px] md:-mt-4 md:top-[40px] lg:-mt-2 lg:w-[45%] lg:top-[65px] xl:w-[35%] xl:top-[60px] xl:-mt-2 2xl:w-[35%]">
          <Navbar />
        </div>
        <div className="mainContainer">
          <Banner />

          <div className="mt-[-25px] lg:mt-[-80px] z-50">
            {user ? <Recomendation /> : <Trending />}
          </div>
          {/* <div className="mt-[-25px] lg:mt-[-80px] z-50">
        
          </div> */}

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
