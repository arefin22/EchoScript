import Article from "@/components/Article/Article";
import Banner from "@/components/Banner/Banner";
import Recomendation from "@/components/Recomendation/page";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";
import TextEditor from "@/components/TextEditor/TextEditor";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <Recomendation />
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
        {/* <TextEditor/> */}
      </div>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;

