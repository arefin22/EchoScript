const { default: mongoose } = require("mongoose");
const Article = require("../../models/Article");

const addAComment = async (req, res) => {
  const id = req.params.id;
  const { email, name, image, _id, commentText, date } = req.body;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $push: {
      comments: {
        commentId: _id,
        commentText: commentText,
        email: email,
        name: name,
        image: image,
        date: date
      },
    },
  };
  const result = await Article.updateOne(query, updateDoc, options);
  res.send(result);
};

module.exports = addAComment
