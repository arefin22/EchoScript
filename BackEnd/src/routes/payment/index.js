const addAPayment = require("../../controllers/payment/addAPayment");

const router = require("express").Router();

router.post("/create-payment-intent", addAPayment);

module.exports = router