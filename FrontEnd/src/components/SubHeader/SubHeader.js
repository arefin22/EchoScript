import Image from "next/image";

import logo from "./../../assets/img/logo.png";
import Search from "../shared/Search/Search";

const SubHeader = () => {
  return (
    <div className="w-full flex justify-between py-5 px-3 lg:px-20 lg:pt-10 items-center">
      <div>
        {/* navbar left part */}
        <Image src={logo} width={200} height={100} />
      </div>
      <div className="bg-black rounded-full md:p-2">
        {/* navbar right part */}
        <Search />
      </div>
    </div>
  );
};

export default SubHeader;
