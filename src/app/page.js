import Article from "@/components/Article/Article";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import ButtonWithoutBgColor from "@/components/Button/ButtonWithoutBgColor";
import Card from "@/components/Card/Card";

const page = () => {
  return (
    <div className="mt-20">
      {/* <ButtonWithBgColor name={"hello world"} />
      <ButtonWithoutBgColor name={"hello world"} />
      <Card
        image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        title={"this is title"}
        article={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
        }
        authorName={"samsul arefin"}
        view={"200k"}
      /> */}
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
    </div>
  );
};

export default page;