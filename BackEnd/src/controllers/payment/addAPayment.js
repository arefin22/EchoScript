const stripe = require("stripe")(process.env.STRIPE_TOKEN);
const Payment = require("../../models/Payment");
// const calculateOrderAmount = (items) => {

//   return amount;
// };

const addAPayment = async (req, res) => {
  const { amount } = req.body;
  const price = amount * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
    payment_method_types: ["card"],
  });
  console.log(paymentIntent);
  console.log(amount);

  console.log(Payment)

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = addAPayment;
