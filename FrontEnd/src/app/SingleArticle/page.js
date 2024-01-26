// Import Image component from Next.js
import Image from "next/image";
import articleData from "../../utils/articleData";
import { AiFillLike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

const SingleArticle = () => {
  const {
    coverImage,
    articleImage,
    authorImage,
    author,
    contentFirstHalf,
    contentSecondHalf,
    title,
  } = articleData;

  return (
    <div className="container mx-auto p-4 relative">
      <div
        className="mb-4 relative"
        style={{
          position: "relative",
          width: "100%",
          height: "427px",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        <div className="absolute bottom-4 left-4 text-white text-[40px] font-bold w-1/2 z-10">
          {title}
        </div>
        <Image
          src={coverImage}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="mb-4 flex items-center border-b border-black pb-4">
        <div className="rounded-full overflow-hidden border-2 border-white mr-4">
          <Image
            src={authorImage}
            alt="Author"
            width={80}
            height={80}
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col">
          <div>
            <h2 className="text-lg font-bold">{author}</h2>
            <p className="text-sm text-gray-500">22-oct-24</p>
          </div>
        </div>

        <div>
          <button className="text-green-500 font-bold text-xl px-4 py-2 rounded mt-2">
            Follow
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex mb-4">
          <div className="mr-12">
            <p className="flex items-center gap-1">
              <AiFillLike size={24} /> 100
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              <MdComment size={24} />
              30
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <FaBookmark size={24} />
            <FaShareAlt size={24} />
            <FaEllipsisH size={24} />
          </div>
        </div>
      </div>
      <div className="mb-12 border-t border-black">
        <p className="mt-12">{contentFirstHalf}</p>
      </div>

      {/* article image */}
      <div className="mb-12">
        <img
          src={articleImage}
          alt="Article Image"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="mb-4">
        <p>{contentSecondHalf}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
