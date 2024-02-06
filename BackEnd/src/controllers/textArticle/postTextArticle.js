const TextEditor = require("../../models/TextArticle");

const postTextArticle = async (req, res) => {
  const text = req.body
  const result = TextEditor.create(text)
  res.send(result)
};
module.exports = postTextArticle;
