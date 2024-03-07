"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import SubHeader from "@/components/SubHeader/SubHeader";
import StickyNavbar from "@/components/StickyNavbar/StickyNavbar";
const AboutPage = () => {
  const serviceLists = [
    {
      id: 1,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      img: "https://i.ibb.co/KbjM91Y/undraw-Services-re-hu5n.png",
    },
    {
      id: 2,
      title: "Fast delivery",
      des: "We deliver your order promptly to your door",
      img: "https://i.ibb.co/wK7x5Tc/undraw-Terms-re-6ak4.png",
    },
    {
      id: 3,
      title: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering ",
      img: "https://i.ibb.co/v4yPrNB/undraw-Chat-bot-re-e2gj.png",
    },
    {
      id: 4,
      title: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      img: "https://i.ibb.co/rpHgLnb/undraw-Contract-re-ves9.png",
    },
  ];
  // search function
  const handleSearch = (query) => {
    setSearchString(query);
  };
  const handleCloseSearchModal = () => {
    setSearchString("");
    setCategoryFilter("All");
  };
  return (
    <div className="mx-auto px-4 lg:px-6 lg:pt-5">
      <StickyNavbar />

      <div className=" mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
        <SubHeader onSearch={handleSearch} onClose={handleCloseSearchModal} />

        {/* main content */}
        <div>
          <div className="bg-[url('https://i.ibb.co/9GVrc95/kaleb-tapp-J59w-WPn09-BE-unsplash.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[70vh] text-white flex items-center justify-center ">
            <div className="text-white ">
              <h1 className="text-4xl text-center font-semibold">About us</h1>
              <p className="text-center mt-4">
                Publish, Grow and Manage your Written Stories <br /> All in One
                Place
              </p>
            </div>
          </div>
          <div className="w-7/12 mx-auto">
            <div className="my-6 py-7">
              {/* <p className="text-center text-3xl font-semibold pt-5">Our History</p> */}
              <h2 className="text-3xl font-bold text-center py-5 text-[#616161]">
                Welcome to EchoScript: A Haven for Tales and Readers
              </h2>
              <p className="text-justify">
                Discover an extraordinary blog reading experience and a warm
                corner for writers to share life tales on EchoScript. This
                platform is a collaborative achievement, brought to life by our
                dedicated team members who turned our dream into reality.
              </p>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                  <Image
                    className=" object-cover hover:scale-105 transition-all duration-200 w-96 h-96 border rounded-2xl"
                    src="https://i.ibb.co/DzTBcjT/janko-ferlic-sf-L-QOnmy00-unsplash.jpg"
                    width={320}
                    height={400}
                    alt="Team image"
                  />
                </div>
                <div className="w-[50%]">
                  <h1 className="text-center text-3xl font-semibold py-3">
                    Crafting Creativity: Our Collective Journey
                  </h1>
                  <p className="text-[#616161] text-justify">
                    Embark on an incredible journey marked by collaboration and
                    creativity. EchoScript is more than a platform; it's a
                    vibrant community where writers come together to share
                    captivating life tales, creating a tapestry of narratives
                    that captivate readers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center p-10 gap-5">
              <div className="w-[50%]">
                <h1 className="text-center text-3xl font-semibold pb-6">
                  Innovative Features for Writers and Readers
                </h1>
                <p className="text-justify">
                  Explore cutting-edge features designed for writers and readers
                  alike. The Writers Panel provides a collaborative space,
                  fostering the growth of a massive literary community. Readers,
                  on the other hand, enjoy a comfortable UI experience and
                  personalized same-category recommendations for a delightful
                  reading journey.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <div>
                    <Image
                      className=" object-cover hover:scale-105 transition-all duration-200 w-96 h-96 border rounded-2xl"
                      src="https://i.ibb.co/72HmNDm/super-snapper-z-Iw-Achj-Dir-M-unsplash.jpg"
                      width={320}
                      height={400}
                      alt="Team image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center pb-36 p-10 gap-5">
              <div className="flex justify-center items-center">
                <div>
                  <Image
                    className=" object-cover hover:scale-105 transition-all duration-200 w-96 h-96 border rounded-2xl"
                    src="https://i.ibb.co/9Y0NmKm/florian-klauer-mk7-D-4-UCfmg-unsplash.jpg"
                    width={320}
                    height={400}
                    alt="Team image"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <h1 className="text-center text-3xl font-semibold pb-6">
                  Unveiling EchoScript: Where Technology Meets Creativity
                </h1>
                <p className="text-justify">
                  Visit EchoScript today and immerse yourself in a world where
                  technology meets creativity. Our commitment to utilizing
                  #reactjs, #nextjs, #mongoose, and #editorjs ensures a
                  seamless, modern experience enriched with features that
                  elevate your reading and writing encounters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:sticky lg:bottom-0 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
