const Payment = require("../../models/Payment");

const stripe = require("stripe")(process.env.STRIPE_TOKEN);

const storeAPaymentIDB = async (req, res) => {
  try {
    const { paymentIntentId, amount } = req.body;

    // Save payment data to MongoDB
    const payment = new Payment({
      paymentIntentId,
      amount,
      // Add other relevant fields
    });
    await payment.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving payment data:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

module.exports = storeAPaymentIDB;
