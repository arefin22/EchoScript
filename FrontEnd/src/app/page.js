"use client"
import Banner from "@/components/Banner/Banner";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import Card from "@/components/Card/Card";
import Payment from "@/components/Payment/Payment";
import Recomendation from "@/components/Recomendation/page";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Title from "@/components/shared/ReusableComponents/Title";
import cardData from "@/utils/cardData";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="container mx-auto my-24">
        <Recomendation />
      </div>
      {/* popular cards */}
      <div className="container mx-auto my-24">
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
