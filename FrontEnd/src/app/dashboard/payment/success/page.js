import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div>
      <h2>Success</h2>
      <Link href={"/"}>Go back to homepage</Link>
    </div>
  );
};

export default SuccessPage;
