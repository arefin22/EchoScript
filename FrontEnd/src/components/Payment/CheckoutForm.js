import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const appearance = {
    theme: "stripe",
  };

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent)
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://echoscript-front.vercel.app/dashboard/payment/success",
        // return_url: "http://localhost:3000/dashboard/payment/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.", error);
    }
    

    setIsLoading(false);
    sendPaymentDataToServer(paymentIntent);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  const sendPaymentDataToServer = async (paymentIntent) => {
    try {
      // const response = await fetch("/api/save-payment", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     paymentIntentId: paymentIntent.id,
      //     amount: paymentIntent.amount,
      //     // Add other relevant payment information
      //   }),
      // });

      axiosPublic
        .post("/save-payment", {
          paymentIntentId: paymentIntent?.id,
          amount: paymentIntent?.amount,
        })
        .then((data) => {
          setClientSecret(data?.data?.clientSecret);
        });

      if (response.ok) {
        setMessage("Payment data saved successfully!");
      } else {
        setMessage("Failed to save payment data.");
      }
      console.log(paymentIntent);
    } catch (error) {
      console.error("Error saving payment data:", error);
      setMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container lg:w-2/5 p-10 mx-auto">
      <h2>Payment of {}</h2>
      <form className="w-full" id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          className="btn mt-5 btn-accent text-center items-center"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
