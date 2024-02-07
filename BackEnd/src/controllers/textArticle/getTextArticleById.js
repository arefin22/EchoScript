const { default: mongoose } = require("mongoose");
const TextEditor = require("../../models/TextArticle");

const getTextArticleById = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await TextEditor.findOne(filter);
  res.send(result);
};
module.exports = getTextArticleById;
