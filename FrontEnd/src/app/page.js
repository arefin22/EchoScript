

import Banner from "@/components/Banner/Banner";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import Card from "@/components/Card/Card";
import Payment from "@/components/Payment/Payment";
import Recomendation from "@/components/Recomendation/page";
import Trending from "@/components/Trending/Trending";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2/Navbar2";
import Title from "@/components/shared/ReusableComponents/Title";
import cardData from "@/utils/cardData";
import Link from "next/link";



const page = () => {
    return (
      <div className="container mx-auto">
        <Navbar2 />
          <Banner />
          <div className="mt-[-80px]">
            <Trending />
          </div>

          {/* <Recomendation/> */}

        {/* popular cards */}
        <div className="my-24">
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

        <div className="my-24">
          <Title title="Packages"></Title>
          <Payment />
        </div>

        <Footer />
      </div>
    );
};

export default page;
