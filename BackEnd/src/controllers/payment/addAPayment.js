const stripe = require("stripe")(process.env.STRIPE_TOKEN);

const addAPayment = async (req, res) => {
  const { amount , customer } = req.body;
  const price = amount * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
    payment_method_types: ["card"],
    receipt_email: customer,
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = addAPayment;
