const stripe = require("stripe")(process.env.STRIPE_TOKEN);

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

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = addAPayment;
