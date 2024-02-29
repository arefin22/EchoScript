import Image from "next/image";

// import logo from "./../../assets/img/logo.png";
import Search from "../shared/Search/Search";
import Link from "next/link";

// https://i.ibb.co/KWhP3g2/echo-icon.png
// https://i.ibb.co/yfjY1j4/echo-white.png
// https://i.ibb.co/Qk6B1cy/echo-black.png

const SubHeader = ({ onSearch, onClose, onRecommendationClick }) => {
  return (
    <div className="w-full flex justify-between py-5 px-5 lg:px-10 xl:px-20 lg:pt-10 items-center">
      <div className="w-[50px] lg:w-[300px] xl:w-full">
        {/* navbar left part */}
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/KWhP3g2/echo-icon.png"}
            width={20}
            height={20}
            className="w-[35px] lg:w-[50px]"
          />
        </Link>
      </div>
      <div className="bg-black rounded-full lg:py-[8px] lg:px-[6px]">
        {/* navbar right part */}
        <Search onSearch={onSearch} onClose={onClose} onRecommendationClick={onRecommendationClick} />
      </div>
    </div>
  );
};

export default SubHeader;
