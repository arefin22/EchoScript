const TextEditor = require("../../models/TextArticle");

const getTextArticleByEmail = async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const result = await TextEditor.find(query);
  res.send(result);
};
module.exports = getTextArticleByEmail;
