
"use client"
import Banner from "@/components/Banner/Banner";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import Payment from "@/components/Payment/Payment";
import Popular from "@/components/Popular/Popular";
import Recomendation from "@/components/Recomendation/page";
import Trending from "@/components/Trending/Trending";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2/Navbar2";
import Title from "@/components/shared/ReusableComponents/Title";
import cardData from "@/utils/cardData";
import Link from "next/link";
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

        {/* <Recomendation/> */}
        {/* popular cards */}
        {/* <div className="my-24">
          <Title title="Latest Article"></Title>
          <div className="my-32 grid grid-cols-1 md:grid-cols-3 gap-10">
            {cardData?.map((card, index) => (
              <Link key={index} href="/singlearticle">
                <Card
                  key={index}
                  tags={card.tags}
                  title={card.title}
                  date={card.date}
                  likes={card.likes}
                  comments={card.comments}
                  article={card.article}
                  image={card.image}
                  authorName={card.authorName}
                  view={card.view}
                />
              </Link>
            ))}
          </div>
          <div className="my-24">
            <div className=" text-center mx-auto">
              <ButtonWithBgColor name={"Explore More"} />
            </div>
          </div>
        </div> */}

        {/* <div className="my-24">
          <Title title="Packages"></Title>
          <Payment />
        </div> */}

        <Footer />

        {/* <a href="#" className="top w-[120px] float-end ">
            Back to Top &#8593;
          </a> */}
      </div>
    );
};

export default page;
