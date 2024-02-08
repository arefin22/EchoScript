const TextEditor = require("../../models/TextArticle");

const postTextArticle = async (req, res) => {
  const text = req.body
  console.log(text)
  const result = TextEditor.create(text)
  res.send(result)
};
module.exports = postTextArticle;
