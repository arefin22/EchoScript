const TextEditor = require("../../models/TextArticle");

const getTextArticle = async (req, res) => {
  const result = await TextEditor.find()
  res.send(result)
};
module.exports = getTextArticle;
