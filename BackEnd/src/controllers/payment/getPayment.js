const Payment = require("../../models/Payment");

const stripe = require("stripe")(process.env.STRIPE_TOKEN);

const getPayment = async (req, res) => {
  try {
    // Fetch all payment records from MongoDB
    const payments = await Payment.find();

    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

module.exports = getPayment;
