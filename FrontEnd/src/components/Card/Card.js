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
    <div className="card w-full h-[400px] shadow-2xl">
      <figure className="p-4">
        <div className="rounded-2xl">
          <Image
            src={image}
            height={500}
            width={500}
            className="rounded-xl"
            alt="article image"
          />
        </div>
      </figure>

      <div className="text-start px-6 py-1">
        <div className="flex space-x-2">
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <p
                key={index}
                className="text-xs bg-[#C4B4A4] text-white px-3 py-2 rounded-lg"
              >
                {tag}
              </p>
            ))}
        </div>
        <h2 className="card-title text-[20px] py-2 mb-4 font-medium">
          {title}
        </h2>
        <p className="text-[12px]">{article}</p>
        <div className="flex justify-between py-4 text-[12px]">
          <div className="flex items-center gap-1">
            <FaUser />
            {authorName}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <BiSolidLike />
              {likes}
            </div>
            <div className="flex items-center gap-1">
              <MdComment />
              {comments}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <FaEye /> {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
