const BookMark = require("../../models/BookMark");
const TextEditor = require("../../models/TextArticle")

const getbookmarkByEmail = async (req, res) => {
  const email = req.query.email.toLowerCase();
  const query = { email: email };
  const bookmark = await BookMark.find(query).select("articleId");
  const articleId = bookmark.map((bookmark) => bookmark.articleId);
  const articles = await TextEditor.find({ _id: { $in: articleId } });
  res.send(articles)
};

module.exports = getbookmarkByEmail;
