const { default: mongoose } = require("mongoose");
const TextEditor = require("../../models/TextArticle");

const putLikes = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  const existingArticle = await TextEditor.findById(id);
  console.log(existingArticle)
  if (!existingArticle) {
    return res.status(404).json({ error: "Article not found" });
  }

  const userLikedIndex = existingArticle.likes.findIndex(
    (like) => like.email === email
  );


  if (userLikedIndex !== -1) {
    const updateDoc = {
      $pull: {
        likes: {
          email: email,
          name: name,
          likesCount: 1,
        },
      },
    };

    const result = await TextEditor.updateOne(
      { _id: existingArticle._id },
      updateDoc
    );

    res.send(result);
  } else {
    const updateDoc = {
      $push: {
        likes: {
          email: email,
          name: name,
          likesCount: 1,
        },
      },
    };

    const result = await TextEditor.updateOne(
      { _id: existingArticle._id },
      updateDoc
    );

    res.send(result);
  }
};

module.exports = putLikes;
