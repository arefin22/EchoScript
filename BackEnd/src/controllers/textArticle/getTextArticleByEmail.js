const TextEditor = require("../../models/TextArticle");

const getTextArticleByEmail = async (req, res) => {
  const queryEmail = req.query?.email;
  const result = await TextEditor.find({
    "texteditor.authorEmail": queryEmail,
  });
  res.send(result);
};
module.exports = getTextArticleByEmail;
