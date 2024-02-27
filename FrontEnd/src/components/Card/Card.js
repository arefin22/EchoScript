import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import Image from "next/image";

const Card = ({
  article,
  tags,
  title,
  image,
  authorName,
  date,
  likes,
  comments,
}) => {
  return (
    <div className="card w-[350px] mb-5 h-[350px] shadow-2xl">
      <figure className="py-4">
        <div className="rounded-2xl">
          <Image
            src={image}
            height={350}
            width={350}
            className="rounded-xl"
            alt="article image"
          />
        </div>
      </figure>

      <div className="text-start px-6 py-1">
       
        <h2 className="card-title text-[20px] py-1 mb-2 font-medium">
          {title}
        </h2>
        <div className="flex justify-between py-4 text-[12px]">
          <div className="flex font-bold items-center gap-1">
            <FaUser />
            {authorName}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              {/* <BiSolidLike /> */}
              {likes}
            </div>
            <div className="flex items-center gap-1">
              {/* <MdComment /> */}
              {comments}
            </div>
          </div>
          <div className="flex font-bold items-center gap-1">
             {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
