const stripe = require("stripe")(process.env.STRIPE_TOKEN);

const calculateOrderAmount = (items) => {
  const amount = items * 100;
  return amount;
};

const addAPayment = async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = addAPayment;
