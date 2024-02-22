import { FaCircle } from "react-icons/fa";

const Trending = () => {
  return (
    <div className="bg-white p-5 lg:pt-20 lg:pb-40 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] ">
      <h2 className="lg:px-20 lg:py-5" data-aos="fade-up">
        Trending On <span className="underline">EchoScript</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-40">
        <div
          className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
          data-aos="fade-up"
        >
          <h2 className="text-gray-400">01</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 mt-[-30px]">
              <FaCircle />
              <p>Author</p>
            </div>
            <h5 className="font-bold">
              Lorem Ipsum is simply dummy text of the printing
            </h5>
            <small>5 Feb</small>
          </div>
        </div>

       
        <div
          className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
          data-aos="fade-up"
        >
          <h2 className="text-gray-400">01</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 mt-[-30px]">
              <FaCircle />
              <p>Author</p>
            </div>
            <h5 className="font-bold">
              Lorem Ipsum is simply dummy text of the printing
            </h5>
            <small>5 Feb</small>
          </div>
        </div>

       
        <div
          className="w-full flex flex-col-2 gap-5 border-b-2 py-20 "
          data-aos="fade-up"
        >
          <h2 className="text-gray-400">01</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 mt-[-30px]">
              <FaCircle />
              <p>Author</p>
            </div>
            <h5 className="font-bold">
              Lorem Ipsum is simply dummy text of the printing
            </h5>
            <small>5 Feb</small>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Trending;
