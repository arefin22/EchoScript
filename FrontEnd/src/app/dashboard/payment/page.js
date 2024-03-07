"use client";

import CheckoutForm from "@/components/Payment/CheckoutForm";
import { useAuth } from "@/context/authContext";
import { usePayment } from "@/context/paymentContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51OI3SmJQJVjIWSHZ09ESHh8hmLvTH4Lelg0iX1DiUitLLw0B17oYah9jq7aUpe4kZc0BbXTXlM5MOtq1YaQi8OHw00AKAZLYAB"
);

const payment = ({ price }) => {
  const [clientSecret, setClientSecret] = useState("");
  // const [paymentAmount, setPaymentAmount] = useState(1);

  const axiosPublic = useAxiosPublic();
  const { payment } = usePayment();
  const { user } = useAuth();

  // console.log(user?.email)
  // console.log(payment)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    axiosPublic
      .post("/create-payment-intent", {
        amount: parseFloat(payment?.price),
        customer: user?.email,
      })
      .then((data) => {
        setClientSecret(data?.data?.clientSecret);
      });
    // .then((data) => console.log(data, paymentAmount));
    // fetch("https://back-end-roan-nu.vercel.app/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // })
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  // console.log(clientSecret)
  return (
    <div className="bg-white w-full min-h-screen">
      {/* <h3>Payment</h3> */}
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
