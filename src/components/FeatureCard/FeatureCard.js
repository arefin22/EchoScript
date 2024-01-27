import Image from "next/image";

const FeatureCard = () => {
    const features = [
      {
        id: 1,
        icon: "https://i.ibb.co/F4CS2NY/undraw-Drag-re-shc0-removebg-preview.png",
        name: "Drag n Drop",
      },
      {
        id: 2,
        icon: "https://i.ibb.co/rd055Mr/undraw-Share-link-re-54rx-removebg-preview.png",
        name: "Share any social media",
      },
      {
        id: 3,
        icon: "https://i.ibb.co/84RbXkL/undraw-Following-re-d5aa-removebg-preview.png",
        name: "Follow your favourite writer",
      },
      {
        id: 4,
        icon: "https://i.ibb.co/wWH9YR4/undraw-Download-re-li50-removebg-preview.png",
        name: "Infinite Scroll",
      },
    ];
  return (
    <div className="flex justify-center gap-5 h-[100vh] items-center">
      {features.map((item) => (
        <div
          key={item.id}
          className="bg-white w-52 h-52 border rounded-3xl flex justify-center items-center hover:scale-105 transition-all duration-200 hover:bg-[#025] hover:text-white"
        >
          <div>
            <Image
              className="w-36  mx-auto"
              src={item.icon}
              width={200}
              height={200}
              alt="feature icon"
            />
            <h1 className="text-center px-10">{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
