const addAUser = require("../../controllers/user/addAUser");
const getAllUser = require("../../controllers/user/getAllUser");

const router = require("express").Router();

router.post("/user", addAUser)
router.get("/user", getAllUser)

module.exports = router