const { default: mongoose } = require("mongoose");
const Article = require("../../models/Article");

const getSingleItemById = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await Article.findOne(filter);
  res.send(result);
};

module.exports = getSingleItemById;
