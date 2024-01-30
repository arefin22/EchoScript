const { default: mongoose } = require("mongoose");
const Article = require("../../models/Article");

const likeOfComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, image, likeCount } = req.body;

    console.log("Received request to like comment. Comment ID:", id);
    console.log("Request payload:", req.body);

    const query1 = { "comments.id": new mongoose.Types.ObjectId(id) };
    console.log(query1)

    const query = { _id: new mongoose.Types.ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
      $push: {
        likesofcomment: {
          email: email,
          name: name,
          image: image,
          likeCount: likeCount,
        },
      },
    };

    const result = await Article.updateOne(query, updateDoc, options);

    console.log("MongoDB update result:", result);

    res.send(result);
  } catch (error) {
    console.error("Error in likeOfComment controller:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = likeOfComment;
