const getHistoryData = require("../../controllers/history/getHistoryData");
const postAHistory = require("../../controllers/history/postAHistory");

const router = require("express").Router();

router.post("/history", postAHistory);
router.get("/history", getHistoryData)

module.exports = router