const { default: mongoose } = require("mongoose");
const Article = require("../../models/Article");

const putLikes = async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const options = { upsert: true };

  const existingArticle = await Article.findById(id);

  if (!existingArticle) {
    return res.status(404).json({ error: "Article not found" });
  }

  const newTotalLikes =
    existingArticle.likes.reduce((total, like) => total + like.likesCount, 0) +
    like;
  const updateDoc = {
    $push: {
      likes: {
        likesCount: like,
      },
    },
  };
  console.log(newTotalLikes);
  const result = await Article.updateOne(query, updateDoc, options);
  res.send(result);
};

module.exports = putLikes;
