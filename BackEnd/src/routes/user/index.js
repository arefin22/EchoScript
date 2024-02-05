const addAUser = require("../../controllers/user/addAUser");
const getAllUser = require("../../controllers/user/getAllUser");
const getSingleUser = require("../../controllers/user/getSingleUser");

const router = require("express").Router();

router.post("/user", addAUser)
router.get("/user", getAllUser)
router.get("/user/:email", getSingleUser)

module.exports = router