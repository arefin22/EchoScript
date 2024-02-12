const getTextArticle = require("../../controllers/textArticle/getTextArticle");
const getTextArticleByEmail = require("../../controllers/textArticle/getTextArticleByEmail");
const getTextArticleById = require("../../controllers/textArticle/getTextArticleById");
const postTextArticle = require("../../controllers/textArticle/postTextArticle");

const router = require("express").Router();

router.post("/textArticle", postTextArticle);
router.get("/textArticle", getTextArticle);
router.get("/textArticle/:id", getTextArticleById);
router.get("/textArticle", getTextArticleByEmail);

module.exports = router