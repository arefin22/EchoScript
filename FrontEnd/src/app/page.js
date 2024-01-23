import Article from "@/components/Article/Article";
import Banner from "@/components/Banner/Banner";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import Card from "@/components/Card/Card";
import TextEditor from "@/components/TextEditor/TextEditor";
import cardData from "../utils/cardData";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      {/* popular cards */}
      <div className="my-24">
      <h1 className="text-start text-[#4C2F17] text-3xl font-light mb-5">
        Start Reading Now...
      </h1>
      <div className="my-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cardData.map((card, index) => (
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
        ))}
      </div>
    </div>
      <div className="my-24">
        <h1 className="text-center text-3xl font-extrabold mb-5">
          Latest Article
        </h1>
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <Article
          authorName={"Abdullah Al Fahim"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          category={"Sports"}
          title={"Title of article"}
          article={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
          }
          postedDate={"30m ago"}
          view={"200k"}
          date={"16 feb, 2024"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
        <div className=" text-center mx-auto">
          <ButtonWithBgColor name={"Explore More"} />
        </div>
      </div>
      <div>
        <TextEditor />
      </div>
    </div>
  );
};

export default page;