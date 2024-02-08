const getItemBySearch = require("../../controllers/search/getItemBySearch");

const router = require("express").Router();

router.get("/search", getItemBySearch);

module.exports = router;
