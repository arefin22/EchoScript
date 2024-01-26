import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Card = ({article, title, image, authorName, view}) => {
  return (
    <div>
      <div className="w-72 h-96 bg-[#D9D9D9] border-2 rounded-2xl">
        <Image
          src={image}
          height={200}
          width={500}
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          }}
          className="rounded-t-2xl"
          alt="article iamge"
        />
        <div className="px-2 text-[#025]">
          <h1 className="text-3xl py-2 font-bold">{title}</h1>
          <p className="text-sm">
            {article}
          </p>
          <div className="flex justify-between pt-4">
            <div className="flex items-center gap-1">
              <FaUser />
              {authorName}
            </div>
            <div className="flex items-center gap-1">
              <FaEye /> {view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
