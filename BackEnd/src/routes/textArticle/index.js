const postTextArticle = require("../../controllers/textArticle/postTextArticle");
const getTextArticleByEmail = require("../../controllers/textArticle/getTextArticleByEmail")
const getTextArticle = require("../../controllers/textArticle/getTextArticle");
const getTextArticleById = require("../../controllers/textArticle/getTextArticleById");
const deleteATextArticle = require("../../controllers/textArticle/deleteATextArticle");
const updateATextArticle = require("../../controllers/textArticle/updateATextArticle");
const addAComment = require("../../controllers/textArticle/putComment");
const putLikes = require("../../controllers/textArticle/putLikes");


const router = require("express").Router();

router.put("/article/:id", addAComment);
router.put("/article/:id/like", putLikes);
router.post("/textArticle", postTextArticle);
router.get("/textArticle", getTextArticle);
router.get("/textArticle/:id", getTextArticleById);
router.get("/textArticleByEmail", getTextArticleByEmail);
router.delete("/textArticle/:id", deleteATextArticle);
router.put("/textArticle/update/:id", updateATextArticle);

module.exports = router