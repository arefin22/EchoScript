const getAllArticle = require("../../controllers/article/getAllArticle");
const likeOfComment = require("../../controllers/article/likeOfComment");
const addAComment = require("../../controllers/article/putComment");
const putLikes = require("../../controllers/article/putLikes");
const getTextArticle = require("../../controllers/textArticle/getTextArticle");
const getTextArticleByEmail = require("../../controllers/textArticle/getTextArticleByEmail");
const getTextArticleById = require("../../controllers/textArticle/getTextArticleById");


const router = require("express").Router();

router.get("/article", getAllArticle)
router.get("/textArticle", getTextArticle);
router.get("/textArticle/:id", getTextArticleById);
router.get("/textArticle", getTextArticleByEmail);
router.put("/article/:id", addAComment);
router.put("/article/:id/like", putLikes)
// like of comment
router.put("/article/:id", likeOfComment);

module.exports = router