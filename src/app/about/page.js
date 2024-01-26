import Image from "next/image";

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

  return (
    <div className="bg-gray-100 ">
      <div className="bg-[url('https://i.ibb.co/9GVrc95/kaleb-tapp-J59w-WPn09-BE-unsplash.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[70vh] text-white flex items-center justify-center ">
        <div className="text-white ">
          <h1 className="text-4xl text-center font-semibold">About us</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <p className="text-center text-3xl font-semibold pt-5">Our History</p>
        <h1 className="text-sm text-center py-5 text-[#616161]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
        </h1>
        <div>
          <div className="flex justify-center items-center gap-10">
            <div>
              <Image
                className=" object-cover hover:scale-105 transition-all duration-200 w-80 h-96 border rounded-2xl"
                src="https://i.ibb.co/p1cdbkC/images-1.jpg"
                width={320}
                height={400}
                alt="Team image"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-center text-3xl font-semibold py-3">
                Our Team
              </h1>
              <p className="text-[#616161]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 gap-5">
          <div className="w-[50%]">
            <h1 className="text-center text-3xl font-semibold pb-6">
              Our Services
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {serviceLists.map((item) => (
                  <div
                    key={item.id}
                    className="w-[250px]  text-center mx-auto bg-white rounded-2xl shadow-lg space-y-1 py-10 px-4"
                  >
                    <Image
                      className="mx-auto w-28 h-28 hover:scale-105 transition-all duration-200"
                      width={200}
                      height={200}
                      src={item.img}
                      alt=""
                    />
                    <h2 className="text-green text-2xl">{item.title}</h2>
                    <p className="text-[#90BD95] text-lg">{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;