const { default: mongoose } = require("mongoose");
const TextEditor = require("../../models/TextArticle");

const updateATextArticle = async (req, res) => {
  const id = req.params.id;
  const newTextContent = req.body;
  const query = { _id: new mongoose.Types.ObjectId(id) };

  const options = { upsert: true };

  const updatedDoc = {
    $set: {
      "texteditor.editorContent.blocks": newTextContent,
    },
  };
  const result = await TextEditor.updateOne(query, updatedDoc, options);

  res.status(200).json({
    message: "Text article updated successfully",
    updatedArticle: result,
  });
};
module.exports = updateATextArticle;
