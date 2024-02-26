"use client";

import { usePayment } from "@/context/paymentContext";
import { useRouter } from "next/navigation";

import React, { useState } from "react";



const Payment = () => {
  // const [paymentAmount, setPaymentAmount] = useState("");
  const {setPayment} = usePayment()
  const router = useRouter()
  const data = [
    {
      id: 1,
      packageName: "Monthly",
      price: "5.89",
      duration: 1,
      features: [
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Try 1 Month",
      color: "black",
    },
    {
      id: 2,
      packageName: "Half Yearly",
      price: "24.89",
      duration: 6,
      features: [
        "Cost Saving",
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Choose Now",
      color: "green",
    },
    {
      id: 3,
      packageName: "Annual",
      price: "55.89",
      duration: 12,
      features: [
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Become Family",
      color: "black",
    },
  ];

  const handlePayment = (item) => {
    // console.log(parseFloat(data.price));
    setPayment(item?.price);
    router.push("/dashboard/payment");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6 xl:gap-10">
      {/* card 1 */}
      {data.map((item, idx) => (
        <div key={idx}>
          <div
            className="border-2 p-10 w-80 rounded-3xl h-[600px] text-center flex flex-col items-center justify-between"
            style={{ borderColor: item.color }}
          >
            <div className="flex flex-col gap-4">
              <h2>{item.packageName}</h2>
              <hr />
              <p className="text-xl">
                $ <span>{item.price}</span>{" "}
                <span className="text-xs">/{item.duration} month</span>
              </p>
              <hr />
              {/* <Link href="/dashboard/payment"> */}
                <button
                  className="p-5 mt-10 rounded-xl drop-shadow-lg hover:drop-shadow-2xl text-white px-16"
                  style={{ backgroundColor: `${item.color}` }}
                  onClick={() => handlePayment(item)}
                >
                  {item.button}
                </button>
              {/* </Link> */}
            </div>
            <div className="flex flex-col gap-4">
              {item.features.map((feature, idx) => (
                <p key={idx}>{feature}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
