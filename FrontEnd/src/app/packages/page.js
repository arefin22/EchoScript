import Payment from "@/components/Payment/Payment";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Title from "@/components/shared/ReusableComponents/Title";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-32">
        <Title title="Membership Packages" />
        <Payment />
      </div>
      <Footer />
    </div>
  );
};

export default page;
