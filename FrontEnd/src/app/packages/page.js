import Payment from "@/components/Payment/Payment";
import SubHeader from "@/components/SubHeader/SubHeader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Title from "@/components/shared/ReusableComponents/Title";
import React from "react";

const page = () => {
  return (
    // <div>
    //   <Navbar />
    //   <div className="container mx-auto py-32">
    //     <div className="mb-10">
    //       <Title title="Membership Packages" />
    //     </div>
    //     <Payment />
    //   </div>
    //   <Footer />
    // </div>

    <div className="px-6 pt-5">
      <div className="w-[80%] mx-auto sticky top-[50px] md:top-[60px] lg:top-[50px] lg:mt-[-75px] z-50">
        <Navbar />
      </div>

      <div className="mx-auto mainContainer bg-white rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px]">
        <SubHeader />

        <div className="container mx-auto py-32">
          <div className="mb-10">
            <Title title="Membership Packages" />
          </div>
          <Payment />
        </div>
      </div>

      <div className="lg:sticky lg:bottom-0 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};

export default page;
