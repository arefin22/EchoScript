const TextEditor = require("../../models/TextArticle");

const postTextArticle = async (req, res) => {
  const text = req.body;
  const result = await TextEditor.create(text);
  res.send(result)
};
module.exports = postTextArticle;
