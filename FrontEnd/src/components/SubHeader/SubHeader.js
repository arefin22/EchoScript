import Image from "next/image";

// import logo from "./../../assets/img/logo.png";
import Search from "../shared/Search/Search";
import Link from "next/link";

// https://i.ibb.co/KWhP3g2/echo-icon.png
// https://i.ibb.co/yfjY1j4/echo-white.png
// https://i.ibb.co/Qk6B1cy/echo-black.png

const SubHeader = () => {
  return (
    <div className="w-full flex justify-between py-5 px-3 lg:px-20 lg:pt-10 items-center">
      <div>
        {/* navbar left part */}
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/yfjY1j4/echo-white.png"}
            width={250}
            height={100}
          />
        </Link>
      </div>
      <div className="bg-black rounded-full md:p-2">
        {/* navbar right part */}
        <Search />
      </div>
    </div>
  );
};

export default SubHeader;
