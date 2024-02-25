const { default: mongoose } = require("mongoose");
const TextEditor = require("../../models/TextArticle");

const deleteATextArticle = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await TextEditor.deleteOne(filter);
  res.send(result);
};
module.exports = deleteATextArticle;
