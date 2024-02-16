"use client";

import CheckoutForm from "@/components/Payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51OI3SmJQJVjIWSHZ09ESHh8hmLvTH4Lelg0iX1DiUitLLw0B17oYah9jq7aUpe4kZc0BbXTXlM5MOtq1YaQi8OHw00AKAZLYAB"
);

const payment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.clientSecret));
  }, []);

  return (
    <div>
      <h3>Payment</h3>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default payment;
