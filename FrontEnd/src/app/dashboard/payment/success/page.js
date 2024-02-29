"use client"
import { usePayment } from "@/context/paymentContext";
import Link from "next/link";
import React from "react";

const successPage = () => {
  const { payment } = usePayment();

  console.log(payment);
  return (
    <div>
      <h2>Payment Successful</h2>
      <Link href={"/dashboard/profile"} className="btn btn-success text-white">Go back to Profile</Link>
    </div>
  );
};

export default successPage;
