const getAllArticle = require("../../controllers/article/getAllArticle");
const likeOfComment = require("../../controllers/article/likeOfComment");
const addAComment = require("../../controllers/article/putComment");
const putLikes = require("../../controllers/article/putLikes");
const getSingleItemById = require("../../controllers/article/singleArticleById");

const router = require("express").Router();

router.get("/article", getAllArticle)
router.get("/article/:id", getSingleItemById);
router.put("/article/:id", addAComment);
router.put("/article/:id/like", putLikes)
// like of comment
router.put("/article/:id", likeOfComment);

module.exports = router