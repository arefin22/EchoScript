const addAUser = require("../../controllers/user/addAUser");
const deleteAUser = require("../../controllers/user/deleteAUser");
const getAllUser = require("../../controllers/user/getAllUser");
const getSingleUser = require("../../controllers/user/getSingleUser");
const updateAUser = require("../../controllers/user/updateAUser");

const router = require("express").Router();

router.post("/user", addAUser)
router.get("/user", getAllUser)
router.delete("/user/:id", deleteAUser)
router.put("/userEdit/:id", updateAUser);
router.get("/user/:email", getSingleUser)

module.exports = router