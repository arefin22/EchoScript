const addAbookmark = require("../../controllers/bookmark/addAbookmark");
const getAllBookmark = require("../../controllers/bookmark/getAllBookmark");
const getbookmarkByEmail = require("../../controllers/bookmark/getbookmarkByEmail");

const router = require("express").Router();

router.post("/bookmark", addAbookmark);
router.get("/bookmark", getAllBookmark);
router.get("/bookmarkByEmail", getbookmarkByEmail);

module.exports = router