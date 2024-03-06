const getStats = require("../../controllers/stats/getStats");

const router = require("express").Router();

router.get("/stats", getStats)

module.exports = router