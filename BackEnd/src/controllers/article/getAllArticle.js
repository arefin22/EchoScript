const Article = require("../../models/Article");

const getAllArticle = async (req, res, next) => {
  try {
    const result = await Article.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllArticle;
