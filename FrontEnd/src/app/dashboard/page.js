import { FaUser } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";

const page = () => {

  return (
    <div className="">
      <h1 className="mx-auto text-2xl font-bold">This is overview</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
        <div className="w-72 h-32 bg-gray-200 rounded-xl pl-3">
          <div>
            <h1>Total Users</h1>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <FaUser fontSize="3rem" color="" />
            </div>
            <span className="text-4xl mt-5 font-semibold">896,543</span>
          </div>
        </div>
        <div className="w-72 h-32 bg-gray-200 rounded-xl pl-3">
          <div>
            <h1>Total Article</h1>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <MdOutlineArticle fontSize="3rem" color="" />
            </div>
            <span className="text-4xl mt-5 font-semibold">294k</span>
          </div>
        </div>
        <div className="w-72 h-32 bg-gray-200 rounded-xl pl-3">
          <div>
            <h1>Total Writer</h1>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <FaPenFancy fontSize="3rem" color="" />
            </div>
            <span className="text-4xl mt-5 font-semibold">294k</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
