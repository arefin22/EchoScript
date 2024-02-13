const postTextArticle = require("../../controllers/textArticle/postTextArticle");
const getTextArticleByEmail = require("../../controllers/textArticle/getTextArticleByEmail")
const getTextArticle = require("../../controllers/textArticle/getTextArticle");
const getTextArticleById = require("../../controllers/textArticle/getTextArticleById");
const deleteATextArticle = require("../../controllers/textArticle/deleteATextArticle");
const updateATextArticle = require("../../controllers/textArticle/updateATextArticle");

const router = require("express").Router();

router.post("/textArticle", postTextArticle);
router.get("/textArticle", getTextArticle);
router.get("/textArticle/:id", getTextArticleById);
router.get("/textArticleByEmail", getTextArticleByEmail);
router.delete("/textArticle/:id", deleteATextArticle);
router.put("/textArticle/update/:id", updateATextArticle);

module.exports = router