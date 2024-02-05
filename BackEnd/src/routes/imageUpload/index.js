const getImage = require("../../controllers/imageUpload/getImage");
const postAImage = require("../../controllers/imageUpload/postAImage");

const router = require("express").Router();

router.post("/imageupload", postAImage)
router.get("/imageupload", getImage);

module.exports = router