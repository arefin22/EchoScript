import { FaCircle } from "react-icons/fa";

const Trending = () => {
  return (
    <div className="bg-white rounded-tl-[100px] rounded-tr-[100px] pt-20">
      <h2 className="px-20 py-5">
        Trending On <span className="underline">EchoScript</span>
      </h2>
      <div className="grid grid-cols-2 gap-10 px-20 py-20 mx-20">
        <div className="w-1/2 flex flex-col-2 gap-5">
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

        <div className="w-1/2 flex flex-col-2 gap-5">
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
      <div className="divider w-[90%] mx-auto"></div>

      <div className="grid grid-cols-2 gap-10 px-20 py-20 mx-20">
        <div className="w-1/2 flex flex-col-2 gap-5">
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

        <div className="w-1/2 flex flex-col-2 gap-5">
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

      <div className="divider w-[90%] mx-auto"></div>

      <div className="grid grid-cols-2 gap-10 px-20 pb-40 pt-20 mx-20">
        <div className="w-1/2 flex flex-col-2 gap-5">
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

        <div className="w-1/2 flex flex-col-2 gap-5">
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
