const addAbookmark = require("../../controllers/bookmark/addAbookmark")
const router = require("express").Router();

router.post("/bookmark", addAbookmark);

module.exports = router