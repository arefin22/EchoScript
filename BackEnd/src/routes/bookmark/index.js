const addAbookmark = require("../../controllers/bookmark/addAbookmark");
const deleteBookmark = require("../../controllers/bookmark/deleteAbookmark");
const getAllBookmark = require("../../controllers/bookmark/getAllBookmark");
const getSingleBookmark = require("../../controllers/bookmark/getSingleBookmark");
const getbookmarkByEmail = require("../../controllers/bookmark/getbookmarkByEmail");

const router = require("express").Router();

router.post("/bookmark", addAbookmark);
router.get("/bookmark", getAllBookmark);
router.get("/bookmark/:id", getSingleBookmark);
router.get("/bookmarkByEmail", getbookmarkByEmail);
router.delete("/bookmark/:id", deleteBookmark);

module.exports = router