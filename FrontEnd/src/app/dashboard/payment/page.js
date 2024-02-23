"use client";

import CheckoutForm from "@/components/Payment/CheckoutForm";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51OI3SmJQJVjIWSHZ09ESHh8hmLvTH4Lelg0iX1DiUitLLw0B17oYah9jq7aUpe4kZc0BbXTXlM5MOtq1YaQi8OHw00AKAZLYAB"
);

const payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const axiosPublic = useAxiosPublic()

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads

  //   axiosPublic
  //     .post("/create-payment-intent", { amount: 20 })
  //     .then((data) => console.log(data.clientSecret));
  //   // fetch("https://back-end-roan-nu.vercel.app/create-payment-intent", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   // })
  // }, []);

  return (
    <div>
      <h3>Payment</h3>
      {/* <CheckoutForm /> */}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default payment;
