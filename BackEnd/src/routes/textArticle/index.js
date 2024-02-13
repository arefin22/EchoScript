const postTextArticle = require("../../controllers/textArticle/postTextArticle");

const router = require("express").Router();

router.post("/textArticle", postTextArticle);

module.exports = router