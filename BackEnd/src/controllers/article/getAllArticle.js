const TextEditor = require("../../models/TextArticle");

const getAllArticle = async (req, res, next) => {
  try {
    const result = await TextEditor.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllArticle;
