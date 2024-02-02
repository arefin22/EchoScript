import Article from "@/components/Article/Article";
import Banner from "@/components/Banner/Banner";
import Recomendation from "@/components/Recomendation/page";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import Card from "@/components/Card/Card";
import TextEditor from "@/components/TextEditor/TextEditor";
import cardData from "../utils/cardData";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Title from "@/components/shared/ReusableComponents/Title";
import Link from "next/link";
import Payment from "@/components/Payment/Payment";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>

      <div className="container mx-auto my-24">
        <Recomendation />
      </div>
      {/* popular cards */}
      <div className="container mx-auto my-24">
        <Title title="Latest Article"></Title>
        <div className="my-32 grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
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

      <div className="container mx-auto my-24">
        <Title title="Packages"></Title>
        <Payment />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default page;
